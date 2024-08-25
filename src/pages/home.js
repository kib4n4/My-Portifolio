import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/home.css';


function Home() {
    return (
        <>
        <div className="home-container">
            <h1 className="t-head">kib4n4's Portfolio</h1>
            <h2 className="home-page">Welcome to My Home Page</h2>
            <p className="intro-text">
                Discover my projects, skills, and experiences. I am passionate about web development and always eager to learn new technologies.
            </p>
            <div className="cta-container">
                <Link to="/services" className="cta-button">Services</Link> {/* Updated to Link */}
                <Link to="/contact" className="cta-button">Contact Me</Link> {/* Updated to Link */}
            </div>
            

        </div>
      
        </>
        
        
    );
}

export default Home;
