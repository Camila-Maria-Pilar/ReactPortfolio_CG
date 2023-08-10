import React from 'react';
import styles from '../styles/Project.module.css';

function Project({ title, imageUrl, deployedUrl, githubUrl }) {
    return (
        <div className={styles.Project}>
            <img src={imageUrl} alt={title} />
            <div className={styles.ProjectInfo}>
                <h2>{title}</h2>
                <a href={deployedUrl} target="_blank" rel="noreferrer">Deployed App</a>
                {githubUrl && 
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                        <i className="fa fa-github" aria-hidden="true"></i> 
                    </a>
                }
            </div>
        </div>
    );
}

export default Project;
