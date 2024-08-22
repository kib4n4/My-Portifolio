import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa'; // Importing icons from react-icons
import "../styles/contact.css";

function Contact() {
  return (
    <>
      <h2 style={{ color: '#00ccff', textAlign: 'center', textShadow: '0 0 10px rgba(0, 204, 255, 0.7)' }}>Contact Page</h2>
      <div className='contact-page'>
        <ul className="example-2">
          <li className="icon-content">
            <a
              href="https://www.linkedin.com/in/luther-isaboke-275667201/"
              aria-label="LinkedIn"
              data-social="linkedin"
            >
              <div className="filled"></div>
              <FaLinkedin size={30} color="currentColor" />
            </a>
            <div className="tooltip">LinkedIn</div>
          </li>
          <li className="icon-content">
            <a href="https://github.com/kib4n4" aria-label="GitHub" data-social="github">
              <div className="filled"></div>
              <FaGithub size={30} color="currentColor" />
            </a>
            <div className="tooltip">GitHub</div>
          </li>
          <li className="icon-content">
            <a href="mailto:lusaboke@gmail.com" aria-label="Gmail" data-social="gmail">
              <div className="filled"></div>
              <FaGoogle size={30} color="currentColor" />
            </a>
            <div className="tooltip">Gmail</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;
