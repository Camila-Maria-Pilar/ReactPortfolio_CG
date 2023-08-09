import styles from '../styles/Projects.module.css';

import React from 'react';
import Project from './Project';

function Projects() {
    const projectList = [
        {
            title: "Project 1",
            imageUrl: "path/to/image1.jpg",
            deployedUrl: "http://example.com/project1",
            githubUrl: "http://github.com/yourname/project1"
        },
        // ... Add other projects here
    ];

    return (
        <section className={styles.Projects}>
            {projectList.map(project => (
                <Project key={project.title} {...project} />
            ))}
        </section>
    );
}

export default Projects;
