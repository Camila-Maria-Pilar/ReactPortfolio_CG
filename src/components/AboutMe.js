import styles from '../styles/AboutMe.module.css';

import React from 'react';

function AboutMe() {
    return (
        <section>
            <img className={styles.AboutMe}
            src=".\images\my_picture.jpg" alt="Camila" />
            <p>
            Hi, I am Camila and I am passionated about web and app development solutions where innovation and automation can be applied.
            </p>
            <p>If you would like to know more about my work, take your time and have a look at my portfolio of recent projects.</p>
            

            
        </section>
    );
}

export default AboutMe;
