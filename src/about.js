import React from 'react'
import './card.css';
import './about.css';
const About = () => {
  return (
    <>
      <section id="about"></section>
      <div className="about-container">
        <div className="about-content">
          <h1>About</h1>
          <p>
            I'm Karthikeyan, a passionate web developer with experience in building responsive and user-friendly websites.
            My journey in web development started during my college days, where I discovered my love for coding and creating digital experiences.
            Since then, I have been honing my skills in frontend and backend technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB.
          </p>
        </div>
        <div className="card">
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
      </div>
    </>
  )
}

export default About;
