import styles from '../styles/Resume.module.css';

import React from 'react';

function Resume() {
    return (
        <section className={styles.Resume}>
            {/* <a href="pending to update" target="_blank" rel="noopener noreferrer">Download My Resume</a>*/}
            <h2>Knowledge in:</h2>
            <ul>
                <li>HTML-CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Proficient in Project Scope Management</li>
                
            </ul>

            <h2>My Professional Background:</h2>
            <ul>
                <li>Industrial Engineer</li>
                <li>MBA</li>
                <li>Entrepreneur</li> 
                <li>Business Development</li>                                              
            </ul>

        
        </section>
    );
}

export default Resume;
