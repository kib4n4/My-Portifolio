import React, { useEffect, useState } from 'react';
import "../styles/about.css";

function About() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const allSkills = ["HTML", "CSS", "JavaScript", "Python", "React", "Flask", "SQL", "NoSQL"];
        let index = 0;
        const interval = setInterval(() => {
            if (index < allSkills.length) {
                setSkills((prev) => [...prev, allSkills[index]]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 500); // Adjust speed here (500ms)
        
        return () => clearInterval(interval);
    }, []); // No dependencies needed

    return (
        <>
            <h2 className='about-title'>About Me</h2>
            <div className='about-me'>
                <p>
                    I am a junior software engineer with a passion for web development and a strong foundation in various programming languages. Proficient in JavaScript and Python, I enjoy creating dynamic applications that enhance user experiences.
                </p>
                <h2 className='skills-title'>Skills</h2>
                <ul className='skills-list'>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default About;
