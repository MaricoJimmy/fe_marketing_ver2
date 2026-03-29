import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { db } from '@/lib/firebase';
import {
    collection, doc, getDocs, addDoc, updateDoc, query, where, onSnapshot, serverTimestamp, writeBatch,
} from 'firebase/firestore';
import { DEFAULT_COMMISSION, ADMIN_EMAIL, ADMIN_PASSWORD, generateId } from './affiliateData';

const AffiliateContext = createContext(null);

// Firestore collection names
const COLLECTIONS = {
    affiliates: 'affiliate_users',
    customers: 'affiliate_customers',
    orders: 'affiliate_orders',
    commissions: 'affiliate_commissions',
    payouts: 'affiliate_payouts',
};

export function AffiliateProvider({ children }) {
    const [user, setUser] = useState(null);
    const [mounted, setMounted] = useState(false);

    const [state, setState] = useState({
        affiliates: [],
        customers: [],
        orders: [],
        commissions: [],
        payouts: [],
        loading: true,
    });

    // Load user session on client mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem('affiliate-user');
            if (saved) setUser(JSON.parse(saved));
        } catch { /* ignore */ }
        setMounted(true);
    }, []);

    // Persist user session in localStorage
    useEffect(() => {
        if (!mounted) return;
        if (user) localStorage.setItem('affiliate-user', JSON.stringify(user));
        else localStorage.removeItem('affiliate-user');
    }, [user, mounted]);

    // Real-time listeners for all collections
    useEffect(() => {
        if (!db) return;

        const unsubscribers = [];

        // Listen to affiliates
        unsubscribers.push(
            onSnapshot(collection(db, COLLECTIONS.affiliates), (snap) => {
                const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                setState(s => ({ ...s, affiliates: data, loading: false }));
            })
        );

        // Listen to customers
        unsubscribers.push(
            onSnapshot(collection(db, COLLECTIONS.customers), (snap) => {
                const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                setState(s => ({ ...s, customers: data }));
            })
        );

        // Listen to orders
        unsubscribers.push(
            onSnapshot(collection(db, COLLECTIONS.orders), (snap) => {
                const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                setState(s => ({ ...s, orders: data }));
            })
        );

        // Listen to commissions
        unsubscribers.push(
            onSnapshot(collection(db, COLLECTIONS.commissions), (snap) => {
                const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                setState(s => ({ ...s, commissions: data }));
            })
        );

        // Listen to payouts
        unsubscribers.push(
            onSnapshot(collection(db, COLLECTIONS.payouts), (snap) => {
                const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                setState(s => ({ ...s, payouts: data }));
            })
        );

        return () => unsubscribers.forEach(unsub => unsub());
    }, []);

    // ─── Auth ───
    const login = useCallback((email, password) => {
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            setUser({ type: 'admin' });
            return true;
        }
        const aff = state.affiliates.find(
            a => a.email === email && a.password === password && a.status === 'Đã duyệt'
        );
        if (aff) {
            setUser({ type: 'affiliate', affiliate: aff });
            return true;
        }
        return false;
    }, [state.affiliates]);

    const logout = useCallback(() => setUser(null), []);

    // ─── Affiliate Registration ───
    const registerAffiliate = useCallback(async (data) => {
        if (!db) return;
        await addDoc(collection(db, COLLECTIONS.affiliates), {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            channel: data.channel,
            experience: data.experience,
            socialLink: data.socialLink || '',
            status: 'Chờ duyệt',
            createdAt: new Date().toISOString().slice(0, 10),
            registeredAt: serverTimestamp(),
        });
    }, []);

    // ─── Customer Actions ───
    const addCustomer = useCallback(async (customer) => {
        if (!db || !user?.affiliate) return;
        await addDoc(collection(db, COLLECTIONS.customers), {
            ...customer,
            affiliateId: user.affiliate.id,
            createdAt: new Date().toISOString().slice(0, 10),
            addedAt: serverTimestamp(),
        });
    }, [user]);

    const updateCustomerStatus = useCallback(async (customerId, status) => {
        if (!db) return;
        const ref = doc(db, COLLECTIONS.customers, customerId);
        await updateDoc(ref, { pipelineStatus: status, updatedAt: serverTimestamp() });
    }, []);

    // ─── Order Actions ───
    const submitOrder = useCallback(async (order) => {
        if (!db) return;
        // Check duplicate invoice
        const q = query(collection(db, COLLECTIONS.orders), where('invoiceCode', '==', order.invoiceCode));
        const existing = await getDocs(q);
        if (!existing.empty) return;

        await addDoc(collection(db, COLLECTIONS.orders), {
            ...order,
            verifiedByAdmin: false,
            verificationStatus: 'Chờ duyệt',
            submittedAt: serverTimestamp(),
        });
    }, []);

    // ─── Admin: Affiliate Management ───
    const approveAffiliate = useCallback(async (id) => {
        if (!db) return;
        const aff = state.affiliates.find(a => a.id === id);
        const code = aff
            ? `AFF-${aff.name.split(' ').pop()?.toUpperCase().slice(0, 2)}${id.slice(-3)}`
            : `AFF-${id.slice(-5)}`;
        const ref = doc(db, COLLECTIONS.affiliates, id);
        await updateDoc(ref, {
            status: 'Đã duyệt',
            affiliateCode: code,
            password: aff?.password || 'affiliate123',
            approvedAt: serverTimestamp(),
        });
    }, [state.affiliates]);

    const rejectAffiliate = useCallback(async (id) => {
        if (!db) return;
        await updateDoc(doc(db, COLLECTIONS.affiliates, id), { status: 'Từ chối', rejectedAt: serverTimestamp() });
    }, []);

    const deactivateAffiliate = useCallback(async (id) => {
        if (!db) return;
        await updateDoc(doc(db, COLLECTIONS.affiliates, id), { status: 'Vô hiệu hóa', deactivatedAt: serverTimestamp() });
    }, []);

    // ─── Admin: Order Verification ───
    const verifyOrder = useCallback(async (orderId) => {
        if (!db) return;
        const order = state.orders.find(o => o.id === orderId);
        if (!order) return;
        const customer = state.customers.find(c => c.id === order.customerId);
        if (!customer) return;

        // Update order
        await updateDoc(doc(db, COLLECTIONS.orders, orderId), {
            verifiedByAdmin: true,
            verificationStatus: 'Đã xác thực',
            verifiedAt: new Date().toISOString().slice(0, 10),
            verifiedTimestamp: serverTimestamp(),
        });

        // Create commission
        const month = new Date().toISOString().slice(0, 7);
        await addDoc(collection(db, COLLECTIONS.commissions), {
            affiliateId: customer.affiliateId,
            orderId,
            amount: DEFAULT_COMMISSION,
            status: 'Pending',
            month,
            createdAt: serverTimestamp(),
        });
    }, [state.orders, state.customers]);

    // ─── Admin: Commission Management ───
    const approveCommission = useCallback(async (commissionId) => {
        if (!db) return;
        await updateDoc(doc(db, COLLECTIONS.commissions, commissionId), {
            status: 'Approved',
            approvedAt: serverTimestamp(),
        });
    }, []);

    // ─── Admin: Payout Management ───
    const markPayoutPaid = useCallback(async (payoutId) => {
        if (!db) return;
        await updateDoc(doc(db, COLLECTIONS.payouts, payoutId), {
            status: 'Paid',
            paidAt: new Date().toISOString().slice(0, 10),
            paidTimestamp: serverTimestamp(),
        });
    }, []);

    const generatePayout = useCallback(async (affiliateId, month) => {
        if (!db) return;
        const approvedCommissions = state.commissions.filter(
            c => c.affiliateId === affiliateId && c.month === month && c.status === 'Approved'
        );
        if (approvedCommissions.length === 0) return;
        const total = approvedCommissions.reduce((sum, c) => sum + c.amount, 0);

        await addDoc(collection(db, COLLECTIONS.payouts), {
            affiliateId,
            month,
            totalAmount: total,
            status: 'Unpaid',
            createdAt: serverTimestamp(),
        });
    }, [state.commissions]);

    return (
        <AffiliateContext.Provider value={{
            user, state, isMounted: mounted, login, logout, registerAffiliate,
            addCustomer, updateCustomerStatus, submitOrder,
            approveAffiliate, rejectAffiliate, deactivateAffiliate,
            verifyOrder, approveCommission, markPayoutPaid, generatePayout,
        }}>
            {children}
        </AffiliateContext.Provider>
    );
}

export function useAffiliate() {
    const ctx = useContext(AffiliateContext);
    if (!ctx) throw new Error('useAffiliate must be used within AffiliateProvider');
    return ctx;
}
