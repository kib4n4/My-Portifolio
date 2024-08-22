import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/App.css";
import About from "./pages/about"; // Ensure you create About.js
import Contact from "./pages/contact"; // Ensure you create Contact.js
import Home from "./pages/home"; // Import the Home component
import Services from "./pages/services"; // Import the Services component

function App() {
  return (
    <Router>
      <>
        <header className="App-header">
          <nav className="app-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link> {/* Added Services link */}
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} /> {/* Added Services route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
