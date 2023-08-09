import styles from '../styles/Navbar.module.css';

import React from 'react';

function Navbar({ setSelectedSection }) {
    return (
        <nav className={styles.Navbar}>
            {/* You can add onClick events to update the selectedSection here */}
            <a href="#" onClick={() => setSelectedSection("AboutMe")}>About Me</a>
            <a href="#" onClick={() => setSelectedSection("Portfolio")}>Portfolio</a>
            <a href="#" onClick={() => setSelectedSection("Contact")}>Contact</a>
            <a href="#" onClick={() => setSelectedSection("Resume")}>Resume</a>
        </nav>
    );
}

export default Navbar;
