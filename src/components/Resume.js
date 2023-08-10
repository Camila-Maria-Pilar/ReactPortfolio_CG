import styles from '../styles/Resume.module.css';

import React from 'react';


function Resume() {
    return (
        <section className={styles.Resume}>
            <button>
                <a href="./documents/CGResume.pdf" download target="_blank" rel="noopener noreferrer">Download My Resume</a>
            </button>

            <div className={styles.section}>
                <h2>Knowledge in:</h2>
                <ul>
                    <li><span className={styles.iconHTML}></span>HTML-CSS</li>
                    <li><span className={styles.iconJS}></span>JavaScript</li>
                    <li><span className={styles.iconReact}></span>React</li>
                    <li><span className={styles.iconNode}></span>Node.js</li>
                    <li><span className={styles.iconNode}></span>Express.js</li>
                    <li><span className={styles.iconNode}></span>MySQL</li>
                    <li><span className={styles.iconNode}></span>MongoDB</li>
                    <li><span className={styles.iconNode}></span>Proficient in Project Scope Management</li>                                  
               
                </ul>
            </div>

            <div className={styles.section}>
                <h2>My Professional Background:</h2>
                <ul>
                    <li><span className={styles.iconEngineer}></span>Industrial Engineer</li>
                    <li><span className={styles.iconMBA}></span>MBA</li>
                    <li><span className={styles.iconEntrepreneur}></span>Entrepreneur</li>
                    <li><span className={styles.iconBusinessDevelopment}></span>Business Development</li>
                </ul>
            </div>
        
        </section>
    );
}

                               

export default Resume;
