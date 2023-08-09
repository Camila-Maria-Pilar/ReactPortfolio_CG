import styles from '../styles/Navbar.module.css';
import React from 'react';

function Navbar({ setSelectedSection, currentSection }) {
    return (
        <nav className={styles.Navbar}>
            <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setSelectedSection("AboutMe"); }}
                className={currentSection === "AboutMe" ? styles.active : ""}
            >
                About Me
            </a>
            <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setSelectedSection("Portfolio"); }}
                className={currentSection === "Portfolio" ? styles.active : ""}
            >
                Portfolio
            </a>
            <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setSelectedSection("Contact"); }}
                className={currentSection === "Contact" ? styles.active : ""}
            >
                Contact
            </a>
            <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setSelectedSection("Resume"); }}
                className={currentSection === "Resume" ? styles.active : ""}
            >
                Resume
            </a>
        </nav>
    );
}

export default Navbar;
