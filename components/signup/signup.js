import React from 'react';
import Link from 'next/link';

import styles from './../../styles/AuthForm.module.css';

export function Signup() {
    return (
        <div className="section signup">
            <h4 className={styles.formHeading}>Signup</h4>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="cont-right">
                <button className={`btn btn-success btn-sm btn-block ${styles.formButton}`}>Signup</button>
            </div>
            <div className={`cont-center ${styles.signupBtn}`}>
                <Link className={styles.formLink} href="/auth/login">Login</Link>
            </div>
        </div>
    );
}