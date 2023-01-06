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
                    <div className="">
                        {title && <h6 className="">{title}</h6>}
                        <Button
                            className=""
                            tabIndex="0"
                            type="button"
                            aria-label="close"
                            onClick={onClose}
                        >
                            <span className={close} />
                        </Button>
                    </div>
                    <div className="">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal