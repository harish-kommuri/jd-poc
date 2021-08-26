import React from 'react';
import Link from 'next/link';

import styles from './../../styles/AuthForm.module.css';

export function ForgotPassword() {
    return (
        <div className="section forgot-password">
            <h4 className={styles.formHeading}>Signup</h4>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="cont-right">
                <button className={`btn btn-success btn-sm btn-block ${styles.formButton}`}>Send Link</button>
            </div>
            <div className={`cont-center ${styles.signupBtn}`}>
                <Link className={styles.formLink} href="/auth/login">Login</Link>
            </div>
        </div>
    );
}