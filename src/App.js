import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/App.css";
import About from "./pages/about"; // Ensure you create About.js
import Contact from "./pages/contact"; // Ensure you create Contact.js

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
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="App">
          <h1 className="title-head">kib4n4's Portfolio</h1>
          <Routes>
            <Route path="/" element={<h2>Welcome to the Home Page</h2>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
