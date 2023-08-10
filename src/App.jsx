
import styles from './styles/App.module.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import 'font-awesome/css/font-awesome.min.css';
import './styles/GlobalStyles.module.css';



function App() {
    const [selectedSection, setSelectedSection] = React.useState("AboutMe"); // default section

    return (
        <div className={styles.App}>
            <Header />
            <Navbar setSelectedSection={setSelectedSection} currentSection={selectedSection} />
            
            <div className={styles["main-content"]}>
                {/* Conditional Rendering based on selectedSection */}
                {selectedSection === "AboutMe" && <AboutMe />}
                {selectedSection === "Portfolio" && <Projects />}
                {selectedSection === "Contact" && <Contact />}
                {selectedSection === "Resume" && <Resume />}
            </div>
            
            <Footer />
        </div>
    );
}

export default App;

