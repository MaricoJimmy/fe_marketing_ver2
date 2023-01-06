import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import styles from './Header.module.css';

function Header({ isPMSPage }) {
    const [stickyHeader, setStickyHeader] = useState(null);

    useEffect(() => {
        const isSticky = () => {
            const scrollTop = window.scrollY;
            const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
            setStickyHeader(stickyClass);
        };

        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        }
    }, [stickyHeader]);

    return (
        <>
            <div className='hidden w-full md:block'>
                <HeaderDesktop stickyHeader={stickyHeader} isPMSPage={isPMSPage} />
            </div>
            <div className='md:hidden w-full block'>
                <HeaderMobile stickyHeader={stickyHeader} isPMSPage={isPMSPage} />
            </div>
        </>
    )
}

function HeaderDesktop({ stickyHeader, isPMSPage }) {
    return (
        <div className={`${stickyHeader === "is-sticky" && "fixed top-0 z-40 drop-shadow-md" || "relative"} flex justify-center items-center w-full bg-white`}>
            <div className='max-w-screen-xl w-full'>
                <div className='py-6 px-8 w-full flex items-center justify-between'>
                    <Link href='/'>
                        <a>
                            <svg width="53" height="83" viewBox="0 0 53 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_418_1432" style={{ 'maskType': "alpha" }} maskUnits="userSpaceOnUse" x="24" y="0" width="22" height="21">
                                    <path d="M24.8424 0H45.8773V20.1533H24.8424V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_418_1432)">
                                    <path d="M26.3696 19.6145C27.8654 16.895 31.8271 10.8938 39.8849 5.62892C32.8184 8.89617 27.6392 15.7954 25.7259 18.6349C23.5712 14.0651 23.7118 5.09146 45.8785 0C44.5753 18.1193 31.6674 21.6478 26.3696 19.6145Z" fill="#5D9830" />
                                </g>
                                <path d="M23.5987 19.8203C22.7013 18.1887 20.3246 14.5876 15.4902 11.4294C19.7295 13.3893 22.837 17.5286 23.9853 19.2328C25.2775 16.4907 25.1939 11.1065 11.8932 8.05176C12.6754 18.9229 20.4205 21.0406 23.5987 19.8203Z" fill="#5D9830" />
                                <path d="M34.6914 31.851C35.1199 32.2849 35.5278 32.7353 35.9103 33.2097C36.1667 33.5264 35.7218 32.9464 35.9583 33.2748C36.0282 33.3708 36.0988 33.4674 36.168 33.5648C36.3723 33.8561 36.5663 34.1537 36.7521 34.4574C37.0572 34.9571 37.3362 35.4733 37.5864 36.0032C37.6522 36.1438 37.7167 36.285 37.779 36.4269C37.7365 36.3295 37.6241 36.0163 37.7934 36.4728C37.9011 36.7621 38.0094 37.0494 38.1047 37.3434C38.2829 37.8891 38.4324 38.4451 38.553 39.0072C38.6099 39.2684 38.6565 39.5317 38.7031 39.7949C38.7916 40.2837 38.7251 39.9135 38.7121 39.81C38.7354 39.9992 38.7552 40.1884 38.7724 40.3783C38.8766 41.5526 38.8594 42.7407 38.7121 43.9115C38.7786 43.3809 38.6428 44.2701 38.6229 44.377C38.5715 44.6403 38.5139 44.9015 38.4509 45.1613C38.3049 45.7584 38.1266 46.3466 37.9155 46.9231C37.8627 47.0677 37.8065 47.2117 37.7503 47.3557C37.6063 47.7279 37.8976 47.0362 37.7317 47.4002C37.6193 47.6477 37.5041 47.8945 37.3808 48.1365C37.0969 48.6959 36.7816 49.2402 36.4354 49.7633C36.2599 50.0279 36.0769 50.2877 35.8877 50.5427C36.1173 50.2342 35.6731 50.8005 35.6025 50.8834C35.1795 51.3797 34.7277 51.8514 34.2499 52.2956C34.0127 52.5164 33.7694 52.7296 33.5198 52.9366C33.4273 53.0134 33.3341 53.0901 33.2394 53.1642C33.5459 52.9236 33.2251 53.171 33.1716 53.2081C32.6506 53.5666 32.1303 53.9176 31.5777 54.2281C31.3056 54.381 31.0293 54.5263 30.7489 54.6634C30.6447 54.7149 30.5391 54.7649 30.4336 54.8136C30.376 54.8403 29.9317 55.035 30.1998 54.9219C30.4678 54.8088 30.0209 54.9898 29.9612 55.0131C29.8529 55.0542 29.7446 55.0946 29.6356 55.133C29.3107 55.2496 28.9809 55.3558 28.6484 55.4518C28.0973 55.6109 27.5379 55.7411 26.973 55.8426C26.8229 55.8693 26.672 55.8926 26.5212 55.9173C26.6227 55.9008 27.0018 55.8672 26.5048 55.9166C26.2018 55.9475 25.8988 55.9749 25.5944 55.9913C25.024 56.0222 24.453 56.0242 23.8826 55.9968C23.6159 55.9845 23.3499 55.9653 23.0846 55.9399C22.9331 55.9255 22.7816 55.9097 22.6301 55.8906C23.1313 55.9529 22.602 55.8796 22.5026 55.8618C21.331 55.6602 20.1794 55.3346 19.0777 54.8862C19.5062 55.0604 18.7048 54.708 18.6136 54.6634C18.3689 54.5435 18.1269 54.4173 17.8876 54.285C17.3358 53.98 16.8017 53.6434 16.2883 53.2766C16.2416 53.2437 15.8447 52.9503 16.0607 53.1155C16.2554 53.2636 15.9441 53.0202 15.9359 53.0134C15.6877 52.8063 15.4409 52.5979 15.2024 52.3792C14.7211 51.9378 14.2653 51.4695 13.8389 50.976C13.773 50.8999 13.2397 50.226 13.4748 50.5427C13.3089 50.3199 13.1485 50.093 12.9936 49.862C12.644 49.3403 12.3238 48.7987 12.0352 48.2407C11.9098 47.9987 11.7953 47.7526 11.6781 47.5065C11.4683 47.065 11.615 47.3646 11.6547 47.4633C11.5972 47.32 11.5403 47.1761 11.4868 47.0321C11.2715 46.4562 11.0885 45.8687 10.939 45.273C10.8554 44.9392 10.7821 44.6026 10.719 44.2646C10.6977 44.1522 10.6792 44.0391 10.6594 43.9266C10.527 43.191 10.6984 44.4264 10.6237 43.6839C10.5593 43.0395 10.5209 42.3945 10.525 41.7459C10.5298 41.0995 10.5695 40.4517 10.6504 39.81C10.586 40.3228 10.7368 39.3589 10.7629 39.2314C10.8307 38.8941 10.9082 38.5582 10.9966 38.2257C11.1653 37.593 11.375 36.9746 11.6122 36.3652C11.7562 35.9936 11.4649 36.6846 11.6308 36.3206C11.711 36.1438 11.7919 35.9676 11.8775 35.7935C12.0146 35.5131 12.16 35.2368 12.3129 34.9646C12.6618 34.3449 13.0512 33.7492 13.4748 33.1781C13.4447 33.2193 13.2733 33.4318 13.4522 33.2097C13.5784 33.0527 13.7072 32.8978 13.8389 32.7456C14.1055 32.4371 14.3845 32.1409 14.6711 31.851C15.6185 30.8898 15.6302 29.2768 14.6711 28.3184C13.7189 27.3662 12.088 27.3539 11.1379 28.3184C7.04933 32.4659 4.94337 38.3368 5.68375 44.1378C6.44812 50.1362 9.95462 55.5615 15.2634 58.5422C20.2719 61.3543 26.5027 61.8094 31.8272 59.6151C37.4123 57.3137 41.762 52.4999 43.2414 46.6009C44.8805 40.0678 42.9452 33.1068 38.2246 28.3184C37.2779 27.3573 35.6409 27.3689 34.6914 28.3184C33.7289 29.2809 33.7419 30.8871 34.6914 31.851Z" fill="#80CC2B" />
                                <path d="M27.1746 43.0515C27.1746 37.1511 27.1746 31.2514 27.1746 25.3517C27.1746 24.5064 27.1746 23.6618 27.1746 22.8166C27.1746 21.51 26.0256 20.2582 24.6765 20.3185C23.3226 20.3788 22.1777 21.4167 22.1777 22.8166C22.1777 28.7163 22.1777 34.6167 22.1777 40.5164C22.1777 41.3616 22.1777 42.2069 22.1777 43.0515C22.1777 44.3581 23.3267 45.6099 24.6765 45.5496C26.0297 45.4885 27.1746 44.452 27.1746 43.0515Z" fill="#80CC2B" />
                                <path d="M0.924 79V68.57H4.928C5.64667 68.57 6.28133 68.696 6.832 68.948C7.392 69.2 7.83067 69.5733 8.148 70.068C8.46533 70.5627 8.624 71.174 8.624 71.902C8.624 72.6113 8.46067 73.2133 8.134 73.708C7.81667 74.2027 7.378 74.5807 6.818 74.842C6.26733 75.094 5.63733 75.22 4.928 75.22H3.094V79H0.924ZM3.094 73.33H4.942C5.25 73.33 5.516 73.2693 5.74 73.148C5.964 73.0267 6.13667 72.8587 6.258 72.644C6.38867 72.4293 6.454 72.182 6.454 71.902C6.454 71.6127 6.38867 71.3607 6.258 71.146C6.13667 70.9313 5.964 70.7633 5.74 70.642C5.516 70.5207 5.25 70.46 4.942 70.46H3.094V73.33ZM8.41181 79L11.9398 68.57H14.8238L18.3518 79H15.9858L15.2858 76.872H11.4638L10.7638 79H8.41181ZM12.0658 74.982H14.6838L13.0878 70.054H13.6758L12.0658 74.982ZM19.4357 79V68.57H21.5357L25.4417 73.75H24.4617L28.2557 68.57H30.3557V79H28.1857V70.964L29.0537 71.16L25.0357 76.34H24.7557L20.8777 71.16L21.6057 70.964V79H19.4357Z" fill="#5D9830" />
                                <path d="M32.2052 79V68.57H36.6153C37.3339 68.57 37.9499 68.6913 38.4633 68.934C38.9766 69.1767 39.3686 69.5267 39.6393 69.984C39.9099 70.432 40.0453 70.978 40.0453 71.622C40.0453 72.0793 39.9193 72.518 39.6673 72.938C39.4153 73.3487 38.9999 73.694 38.4213 73.974V72.91C38.9719 73.1247 39.3966 73.3813 39.6953 73.68C39.9939 73.9787 40.1993 74.3053 40.3113 74.66C40.4233 75.0053 40.4793 75.3693 40.4793 75.752C40.4793 76.7787 40.1386 77.5767 39.4573 78.146C38.7759 78.7153 37.8286 79 36.6153 79H32.2052ZM34.3753 77.11H36.8673C37.3059 77.11 37.6559 76.984 37.9173 76.732C38.1786 76.48 38.3093 76.1533 38.3093 75.752C38.3093 75.3413 38.1786 75.01 37.9173 74.758C37.6559 74.506 37.3059 74.38 36.8673 74.38H34.3753V77.11ZM34.3753 72.49H36.7693C37.1053 72.49 37.3713 72.3967 37.5673 72.21C37.7726 72.014 37.8753 71.7573 37.8753 71.44C37.8753 71.1227 37.7726 70.8707 37.5673 70.684C37.3713 70.488 37.1053 70.39 36.7693 70.39H34.3753V72.49ZM46.0153 79.168C45.1939 79.168 44.4613 78.9953 43.8173 78.65C43.1733 78.3047 42.6646 77.8333 42.2913 77.236C41.9273 76.6293 41.7453 75.9433 41.7453 75.178V68.57H43.9153V75.038C43.9153 75.4487 44.0039 75.822 44.1813 76.158C44.3679 76.4847 44.6199 76.7413 44.9373 76.928C45.2546 77.1147 45.6139 77.208 46.0153 77.208C46.4259 77.208 46.7853 77.1147 47.0933 76.928C47.4106 76.7413 47.6579 76.4847 47.8353 76.158C48.0219 75.822 48.1153 75.4487 48.1153 75.038V68.57H50.2853V75.178C50.2853 75.9433 50.0986 76.6293 49.7253 77.236C49.3613 77.8333 48.8573 78.3047 48.2133 78.65C47.5693 78.9953 46.8366 79.168 46.0153 79.168Z" fill="#80CC2B" />
                            </svg>
                        </a>
                    </Link>
                    <div className='flex items-center gap-10'>
                        <ul className='flex items-center gap-10 cursor-pointer'>
                            <li>
                                <Link href='/tin-tuc'>
                                    <a className='font-semibold text-gray hover:text-green-secondary duration-200'>Tin tức</a>
                                </Link>
                            </li>
                            <li className={styles.container}>
                                <div className='flex items-center font-semibold'>
                                    <span className='mr-2'>Sản phẩm</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224" stroke="#2e2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className={styles.subMenu}>
                                    <div className='bg-white rounded drop-shadow-lg'>
                                        <div className='w-[160px] bg-white text-gray font-semibold rounded-t hover:bg-green-primary/20 hover:text-green-secondary duration-200'>
                                            <Link href="/san-pham/pambu-oee">
                                                <a className='px-6 py-3 block w-full'>Pambu OEE</a>
                                            </Link>
                                        </div>
                                        <div className='w-[160px] bg-white text-gray font-semibold rounded-b hover:bg-green-primary/20 hover:text-green-secondary duration-200'>
                                            <Link href="/san-pham/pambu-pms">
                                                <a className='px-6 py-3 block w-full'>Pambu PMS</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.container}>
                                <div className='flex items-center font-semibold'>
                                    <span className='mr-2'>Sổ tay hướng dẫn</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224" stroke="#2e2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className={styles.subMenu}>
                                    <div className='bg-white rounded drop-shadow-lg'>
                                        <div className='w-[200px] bg-white text-gray font-semibold rounded-t hover:bg-green-primary/20 hover:text-green-secondary duration-200'>
                                            <Link href="/pambu-oee">
                                                <a className='px-6 py-3 block w-full'>Tài liệu Pambu OEE</a>
                                            </Link>
                                        </div>
                                        <div className='w-[200px] bg-white text-gray font-semibold rounded-b hover:bg-green-primary/20 hover:text-green-secondary duration-200'>
                                            <Link href="/pambu-pms">
                                                <a className='px-6 py-3 block w-full'>Tài liệu Pambu PMS</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <Button className={`${isPMSPage && "bg-orange-primary hover:bg-orange-secondary" || "bg-green-primary hover:bg-green-secondary"} px-6 py-3 text-white font-bold duration-200`}>
                                <Link href='/dat-lich-demo'>
                                    <a>
                                        Đặt lịch demo
                                    </a>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function HeaderMobile({ stickyHeader, isPMSPage }) {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState({
        product: true,
        document: true
    })

    return (
        <div className={`${stickyHeader === "is-sticky" && "fixed top-0 z-40 drop-shadow-md" || "relative"} py-3 px-5 w-full bg-white`}>
            <div className='flex items-center justify-between'>
                <Link href='/'>
                    <a>
                        <svg width="36" height="55" viewBox="0 0 36 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_492_1368" style={{ 'mask-type': "alpha" }} maskUnits="userSpaceOnUse" x="17" y="0" width="19" height="18">
                                <path d="M17.2281 0H36V17.9851H17.2281V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_492_1368)">
                                <path d="M18.5907 17.5043C19.9256 15.0773 23.4611 9.7218 30.652 5.02333C24.3457 7.93907 19.7237 14.096 18.0163 16.63C16.0934 12.5519 16.2189 4.54369 36.0008 0C34.8378 16.17 23.3186 19.3188 18.5907 17.5043Z" fill="#5D9830" />
                            </g>
                            <path d="M16.1181 17.688C15.3173 16.2319 13.1963 13.0183 8.88201 10.1998C12.6653 11.9489 15.4385 15.6428 16.4632 17.1637C17.6164 14.7166 17.5418 9.91164 5.672 7.18555C6.37004 16.8872 13.2819 18.7769 16.1181 17.688Z" fill="#5D9830" />
                            <path d="M26.0175 28.4238C26.3999 28.8111 26.7639 29.213 27.1053 29.6364C27.3341 29.919 26.937 29.4015 27.1481 29.6945C27.2105 29.7802 27.2735 29.8664 27.3353 29.9533C27.5176 30.2133 27.6907 30.4788 27.8565 30.7498C28.1288 31.1958 28.3778 31.6565 28.6011 32.1294C28.6598 32.2548 28.7173 32.3808 28.773 32.5075C28.735 32.4206 28.6347 32.141 28.7858 32.5485C28.8819 32.8066 28.9785 33.063 29.0636 33.3254C29.2226 33.8124 29.356 34.3086 29.4637 34.8102C29.5144 35.0433 29.556 35.2782 29.5976 35.5132C29.6766 35.9494 29.6172 35.619 29.6056 35.5266C29.6264 35.6955 29.6441 35.8643 29.6594 36.0338C29.7524 37.0818 29.7371 38.142 29.6056 39.1869C29.6649 38.7134 29.5438 39.5069 29.5261 39.6023C29.4802 39.8372 29.4288 40.0703 29.3725 40.3022C29.2422 40.835 29.0831 41.3599 28.8947 41.8744C28.8476 42.0035 28.7974 42.132 28.7473 42.2605C28.6188 42.5927 28.8788 41.9754 28.7308 42.3002C28.6304 42.5211 28.5276 42.7413 28.4175 42.9573C28.1642 43.4565 27.8828 43.9423 27.5739 44.4091C27.4173 44.6452 27.2539 44.8771 27.0851 45.1046C27.29 44.8293 26.8936 45.3347 26.8306 45.4087C26.4531 45.8516 26.0499 46.2725 25.6235 46.669C25.4119 46.866 25.1947 47.0562 24.972 47.241C24.8894 47.3095 24.8062 47.378 24.7218 47.4441C24.9952 47.2294 24.7089 47.4502 24.6612 47.4832C24.1962 47.8032 23.7319 48.1164 23.2388 48.3936C22.9959 48.53 22.7494 48.6597 22.4992 48.7821C22.4062 48.8279 22.312 48.8726 22.2177 48.916C22.1664 48.9399 21.7699 49.1136 22.0091 49.0127C22.2483 48.9118 21.8495 49.0733 21.7962 49.0941C21.6996 49.1308 21.6029 49.1669 21.5056 49.2011C21.2157 49.3051 20.9214 49.4 20.6247 49.4856C20.1328 49.6275 19.6336 49.7438 19.1295 49.8343C18.9955 49.8582 18.8609 49.879 18.7263 49.901C18.8169 49.8863 19.1552 49.8563 18.7116 49.9004C18.4412 49.9279 18.1708 49.9524 17.8992 49.9671C17.3902 49.9946 16.8806 49.9964 16.3716 49.972C16.1336 49.961 15.8962 49.9438 15.6595 49.9212C15.5243 49.9083 15.3891 49.8943 15.2539 49.8771C15.7011 49.9328 15.2288 49.8674 15.1401 49.8514C14.0945 49.6716 13.0667 49.381 12.0836 48.9809C12.466 49.1363 11.7508 48.8218 11.6694 48.7821C11.451 48.675 11.2351 48.5624 11.0216 48.4444C10.5291 48.1721 10.0525 47.8717 9.59427 47.5444C9.55267 47.5151 9.19845 47.2532 9.39116 47.4007C9.56491 47.5328 9.28716 47.3156 9.27982 47.3095C9.05835 47.1247 8.83811 46.9388 8.62521 46.7436C8.19574 46.3496 7.78891 45.9318 7.40838 45.4913C7.34965 45.4234 6.87369 44.822 7.08353 45.1046C6.93548 44.9058 6.79232 44.7033 6.65406 44.4971C6.34205 44.0316 6.05635 43.5483 5.79879 43.0503C5.68683 42.8343 5.58467 42.6147 5.48005 42.3951C5.29285 42.0011 5.42377 42.2684 5.45925 42.3565C5.40786 42.2287 5.35708 42.1002 5.30937 41.9717C5.11727 41.4578 4.95392 40.9335 4.82055 40.4019C4.74592 40.104 4.68046 39.8036 4.62417 39.502C4.60521 39.4016 4.58869 39.3007 4.57095 39.2004C4.45287 38.5439 4.60582 39.6463 4.53913 38.9838C4.48163 38.4087 4.44737 37.833 4.45104 37.2543C4.45532 36.6774 4.4908 36.0992 4.56299 35.5266C4.50549 35.9842 4.64008 35.1241 4.66333 35.0103C4.72389 34.7093 4.79302 34.4095 4.87194 34.1128C5.02244 33.5481 5.20965 32.9963 5.42132 32.4524C5.54979 32.1208 5.28979 32.7375 5.43784 32.4127C5.50942 32.2548 5.58161 32.0976 5.65808 31.9422C5.78044 31.692 5.91013 31.4454 6.04656 31.2026C6.35796 30.6495 6.70545 30.1179 7.08353 29.6083C7.05661 29.645 6.90366 29.8346 7.06334 29.6364C7.17591 29.4963 7.29092 29.358 7.40838 29.2222C7.64637 28.9469 7.89536 28.6826 8.15108 28.4238C8.99656 27.5661 9.00696 26.1266 8.15108 25.2713C7.30132 24.4216 5.8459 24.4106 4.99797 25.2713C1.34931 28.9726 -0.530076 34.2119 0.130646 39.3888C0.812781 44.7419 3.94204 49.5835 8.67966 52.2435C13.1493 54.753 18.7098 55.1593 23.4615 53.2009C28.4457 51.1472 32.3274 46.8513 33.6476 41.5869C35.1104 35.7566 33.3833 29.5446 29.1706 25.2713C28.3258 24.4136 26.8648 24.424 26.0175 25.2713C25.1586 26.1303 25.1702 27.5637 26.0175 28.4238Z" fill="#80CC2B" />
                            <path d="M19.3094 38.419C19.3094 33.1534 19.3094 27.8884 19.3094 22.6234C19.3094 21.8691 19.3094 21.1154 19.3094 20.3611C19.3094 19.195 18.284 18.0779 17.08 18.1318C15.8718 18.1856 14.8501 19.1118 14.8501 20.3611C14.8501 25.6261 14.8501 30.8917 14.8501 36.1566C14.8501 36.911 14.8501 37.6653 14.8501 38.419C14.8501 39.5851 15.8754 40.7022 17.08 40.6483C18.2877 40.5939 19.3094 39.6689 19.3094 38.419Z" fill="#80CC2B" />
                        </svg>
                    </a>
                </Link>
                <div>
                    <Button onClick={() => setOpenMenu(!openMenu)} className='p-2'>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.8334 12.8333H9.16671" stroke="#2E2E2E" strokeWidth="3" strokeLinecap="round" />
                            <path d="M34.8334 22H16.5" stroke="#2E2E2E" strokeWidth="3" strokeLinecap="round" />
                            <path d="M34.8334 31.1667H23.8334" stroke="#2E2E2E" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </Button>
                </div>
            </div>
            <>
                <div
                    className={`${styles.overlay} ${!openMenu && styles.overlayHidden} ${openMenu && styles.overlayOpen
                        }`}
                    onClick={() => setOpenMenu(false)}
                    aria-hidden="true"
                />
                <div className={`${styles.drawer} ${openMenu && styles.animate} ${!openMenu && styles.hidden}`}>
                    <div className='w-full h-full'>
                        <Button onClick={() => setOpenMenu(!openMenu)} className='w-full flex items-center justify-end'>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33 11L11 33" stroke="#2E2E2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 11L33 33" stroke="#2E2E2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                        <div className='mt-8'>
                            <ul className='flex flex-col items-start gap-8 cursor-pointer'>
                                <li onClick={() => setOpenMenu(!openMenu)} className='w-full'>
                                    <Link href='/tin-tuc'>
                                        <a className='block w-full font-semibold text-gray hover:text-green-secondary duration-200'>Tin tức</a>
                                    </Link>
                                </li>
                                <li className='w-full'>
                                    <div onClick={() => setOpenSubMenu({ ...openSubMenu, product: !openSubMenu.product })} className='flex items-center font-semibold'>
                                        <span className='mr-2'>Sản phẩm</span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224" stroke="#2e2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={`${openSubMenu.product && "translate-y-0 block" || "-translate-y-1/4 hidden"} duration-200 ml-6 mt-6`}>
                                        <div onClick={() => setOpenMenu(!openMenu)} className='text-gray font-semibold hover:text-green-secondary duration-200'>
                                            <Link href="/san-pham/pambu-oee">
                                                <a className='block w-full'>Pambu OEE</a>
                                            </Link>
                                        </div>
                                        <div onClick={() => setOpenMenu(!openMenu)} className='mt-6 text-gray font-semibold hover:text-green-secondary duration-200'>
                                            <Link href="/san-pham/pambu-pms">
                                                <a className='block w-full'>Pambu PMS</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className='w-full'>
                                    <div onClick={() => setOpenSubMenu({ ...openSubMenu, document: !openSubMenu.document })} className='w-full flex items-center font-semibold'>
                                        <span className='mr-2'>Sổ tay hướng dẫn</span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.01247 7.51367L10.0132 12.513L15.0125 7.51224" stroke="#2e2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={`${openSubMenu.document && "translate-y-0 block" || "-translate-y-1/4 hidden"} duration-200 ml-6 mt-6`}>
                                        <div onClick={() => setOpenMenu(!openMenu)} className='text-gray font-semibold hover:text-green-secondary duration-200'>
                                            <Link href="/pambu-oee">
                                                <a className='block w-full'>Tài liệu Pambu OEE</a>
                                            </Link>
                                        </div>
                                        <div onClick={() => setOpenMenu(!openMenu)} className='mt-6 text-gray font-semibold hover:text-green-secondary duration-200'>
                                            <Link href="/pambu-pms">
                                                <a className='block w-full'>Tài liệu Pambu PMS</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className='mt-8'>
                                <Button onClick={() => setOpenMenu(!openMenu)} className={`${isPMSPage && "bg-orange-primary hover:bg-orange-secondary" || "bg-green-primary hover:bg-green-secondary"} px-6 py-3 w-full text-white font-bold duration-200`}>
                                    <Link href='/dat-lich-demo'>
                                        <a>
                                            Đặt lịch demo
                                        </a>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Header