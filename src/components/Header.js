import styles from '../styles/Header.module.css';

import React from 'react';

function Header() {
    return (
        <header className={styles.header}>
            <h1>Your Name</h1>
            {/* Any other branding or design elements you'd like */}
        </header>
    );
}

export default Header;
