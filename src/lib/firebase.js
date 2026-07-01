import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7CLDzd3p0jPlknYByCfuV5WJoKFWhGVE",
  authDomain: "udata-tuyen-dung.firebaseapp.com",
  projectId: "udata-tuyen-dung",
  storageBucket: "udata-tuyen-dung.firebasestorage.app",
  messagingSenderId: "854493699104",
  appId: "1:854493699104:web:ed743f674912d874683045",
  measurementId: "G-SYPLWSGPEL",
};
// Only initialize Firebase on the client side to avoid SSR/build errors
let app;
let db;
let auth;

if (typeof window !== "undefined") {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
  auth = getAuth(app);
}

export { db, auth };
export default app;
