// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [selectedSection, setSelectedSection] = React.useState("AboutMe"); // default section

    return (
        <div className="App">
            <Header />
            <Navbar setSelectedSection={setSelectedSection} />
            {/* Conditional Rendering based on selectedSection */}
            {selectedSection === "AboutMe" && <div>About Me</div>} 
            {selectedSection === "Portfolio" && <Projects />}
            {selectedSection === "Contact" && <Contact />}
            {/* Add resume section here */}
            <Footer />
        </div>
    );
}

export default App;
