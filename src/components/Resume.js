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
                    <li><i className="fab fa-html5 icon"></i> HTML-CSS</li>
                    <li><i className="fab fa-js icon"></i> JavaScript</li>
                    <li><i className="fab fa-react icon"></i> React</li>
                    <li><i className="fab fa-node-js icon"></i> Node.js</li>
                    <li><i className="fas fa-server icon"></i> Express.js</li>
                    <li><i className="fas fa-database icon"></i> MySQL</li>
                    <li><i className="fas fa-database icon"></i> MongoDB</li>
                    <li><i className="fas fa-briefcase icon"></i> Proficient in Project Scope Management</li>
                                  
               
                </ul>
            </div>

            <div className={styles.section}>
                <h2>My Professional Background:</h2>
                <ul>
                <li><i className="fas fa-industry icon"></i> Industrial Engineer</li>
                <li><i className="fas fa-graduation-cap icon"></i> MBA</li>
                <li><i className="fas fa-lightbulb icon"></i> Entrepreneur</li>
                <li><i className="fas fa-chart-line icon"></i> Business Development</li>

                </ul>
            </div>
        
        </section>
    );
}

                               

export default Resume;
