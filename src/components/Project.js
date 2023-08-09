import styles from '../styles/Project.module.css';

import React from 'react';

function Project({ title, imageUrl, deployedUrl, githubUrl }) {
    return (
        <div className={styles.Project} >
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <a href={deployedUrl}>Deployed App</a>
            <a href={githubUrl}>GitHub Repo</a>
        </div>
    );
}

export default Project;
