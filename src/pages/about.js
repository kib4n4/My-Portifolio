import React, { useEffect, useState } from 'react';
import '../styles/about.css';

function About() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const allSkills = ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Flask', 'SQL','Django'];
    let index = 0;
    const interval = setInterval(() => {
      if (index < allSkills.length) {
        setSkills((prevSkills) => [...prevSkills, allSkills[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500); // Adjust the speed here (500ms)

    return () => clearInterval(interval);
  }, []); // No dependencies needed

  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-me">
        <p>
          I am a junior software engineer specializing in web development, equipped with a solid foundation in multiple programming languages. With proficiency in JavaScript and Python, I am dedicated to developing dynamic applications that significantly enhance user experiences.
        </p>
        <h2 className="skills-title">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;