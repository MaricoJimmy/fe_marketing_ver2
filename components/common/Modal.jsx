import React from 'react';
import Button from './Button';
import styles from './Modal.module.css';

function Modal({ onClose, title, children }) {
    return (
        <div className={styles.container}>
            <div
                className={styles.overlay}
                role="none presentation"
                tabIndex="-1"
                onClick={onClose}
            />
            <div className={styles.dialog__container}>
                <div
                    className={styles.modal}
                    role="dialog"
                >
                    <div className='w-full min-h-full flex items-center justify-center'>
                        <div className='relative w-full h-fit bg-white rounded-lg drop-shadow-lg'>
                            <h4 className="px-6 pt-6 text-2xl font-bold">{title}</h4>
                            <div className="absolute top-3 md:top-5 right-5">
                                <Button
                                    className="p-2 justify-self-end bg-transparent hover:bg-gray/10 rounded-lg duration-200"
                                    tabIndex="0"
                                    type="button"
                                    aria-label="close"
                                    onClick={onClose}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6L18 18" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                            </div>
                            <div className="">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal