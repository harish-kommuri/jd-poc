import React from 'react';
import Link from 'next/link';

import styles from './../../styles/AuthForm.module.css';

export function Login() {
    // this.state = {
    //     userName: "",
    //     userNameValid: false
    // };

    return (
        <div className="section login">
            <h4 className={styles.formHeading}>Login</h4>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="cont-right">
                <Link className={styles.formLink} href="/auth/forgot-password">Forgot Password?</Link>
                <br />
                <button className={`btn btn-success btn-sm btn-block ${styles.formButton}`}>Login</button>
            </div>
            <div className={`cont-center ${styles.signupBtn}`}>
                <Link className={styles.formLink} href="/auth/signup">Signup</Link>
            </div>
        </div>
    );
}