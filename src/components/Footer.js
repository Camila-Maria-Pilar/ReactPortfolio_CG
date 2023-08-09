import styles from '../styles/Footer.module.css';

import React from 'react';

function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="http://github.com/yourname">GitHub</a>
            <a href="http://linkedin.com/in/yourname">LinkedIn</a>
            <a href="http://stackoverflow.com/users/youruserid">Stack Overflow</a>
            {/* Any other links or information you'd like */}
        </footer>
    );
}

export default Footer;
