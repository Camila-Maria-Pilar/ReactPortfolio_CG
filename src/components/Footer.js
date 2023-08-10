import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <a href="https://github.com/Camila-Maria-Pilar" target="_blank" rel="noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/camila-galleguillos/" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            
        </footer>
    );
}

export default Footer;

