import styles from '../styles/Project.module.css';

import React from 'react';

function Project({ title, imageUrl, deployedUrl, githubUrl }) {
    return (
        <div className={styles.Project}>
            <img src={imageUrl} alt={title} />
            <div className={styles.ProjectInfo}>
                <h2>{title}</h2>
                <a href={deployedUrl} target="_blank" rel="noreferrer">Deployed App</a>
                {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer">GitHub Repo</a>}
            </div>
        </div>
    );
}

export default Project;
