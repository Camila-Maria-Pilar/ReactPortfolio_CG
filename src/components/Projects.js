import styles from '../styles/Projects.module.css';
import projectStyles from '../styles/Project.module.css';

import React from 'react';
import Project from './Project';

function Projects() {
    const projectList = [
        {
            title: "POD - Proof of Delivery",
            imageUrl: "./images/POD Logo.png",
            deployedUrl: "https://glacial-refuge-34295-405df1b82dc0.herokuapp.com/login",
            githubUrl: "https://github.com/Camila-Maria-Pilar/Project2_POD_CG.git"
        },
        {
            title: "Stock App",
            imageUrl: "./images/StockApp demo.png",
            deployedUrl: "https://camila-maria-pilar.github.io/StockAppProject1/",
            githubUrl: "https://camila-maria-pilar.github.io/StockAppProject1/"
        },
        {
            title: "Redeem-Me",
            imageUrl: "./images/redeem-me.png",
            deployedUrl: "https://www.redeem-me.app/",
            
        },
        {
            title: "CEO-ME",
            imageUrl: "./images/ceo-me.png",
            deployedUrl: "http://example.com/project1https://www.ceo-me.com/",
            
        },
    ];

    return (
        <section className={styles.Projects}>
            {projectList.map(project => (
                <Project key={project.title} className={projectStyles.Project} {...project} />
            ))}
        </section>
    );
}

export default Projects;
