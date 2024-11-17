import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
                </div>
                <div className={styles.socialMedia}>
                    <a href="https://facebook.com" className={styles.socialLink}>Facebook</a>
                    <a href="https://twitter.com" className={styles.socialLink}>Twitter</a>
                    <a href="https://linkedin.com" className={styles.socialLink}>LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
