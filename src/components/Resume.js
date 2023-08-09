// src/components/Resume.js

import React from 'react';

function Resume() {
    return (
        <section>
            <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
            <h2>My Proficiencies</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                {/* Add other proficiencies here */}
            </ul>
        </section>
    );
}

export default Resume;
