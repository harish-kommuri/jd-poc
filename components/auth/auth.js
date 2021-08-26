import React from 'react';
import styles from '../../styles/Auth.module.css';

export function Auth({ children }) {
    return (
        <div className={`page-container ${styles.auth}`}>
            <div className="overlay"></div>
            <div className={styles.authPage}>
                <div className={styles.authContent}>
                    <div className={styles.authBox}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}