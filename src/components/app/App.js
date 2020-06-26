import React from 'react';
import './App.css';
import ProjectCard from '../projectCard/ProjectCard.js';
import ProjectData from '../../data/Projects.js';
import Linkedin from '../../assets/icons/linkedin.svg';
import Email from '../../assets/icons/email.svg';
import Foto from '../../assets/icons/foto2.gif';
import Logo from '../../assets/icons/react.png';

class App extends React.Component {
  render() {
    return (
        <div className="main">
          <div className="menu">
            <a href="https://www.linkedin.com/in/daniela-avila-jaramillo">
              <img className="linkedin" src={Linkedin} alt="Linkedin"/>
            </a>
            <a href="mailto:daniavilaj@gmail.com">
              <img className="email" src={Email} alt="Email"/>
            </a>
          </div>
          <div className="header">
            <div className="title">
              HOLA!<br></br> I'm Daniela.
            </div>
            <div className="fotoContainer">
              <img className="foto" src={Foto} alt="Me"/>
            </div>
          </div>
          <div className="bioContainer">
            <p className="bio">I'm a Front End Developer from 
              <a href="http://www.colombia.travel/en" className="link"> Colombia</a>. I studied 
              <a href="https://cm.lmc.gatech.edu/major-overview-3/" className="link"> Computational Media </a> 
              (CS + Design + Digital Media) at the
              <span className="link2"> Georgia Institute of Technology</span>. I've always been drawn to 
              the overlap between design, art, creativity, and computation. I love to design and build 
              user experiences!
            </p>
            <p className="bio2">  
              I find happiness in adventure. Life is about experiences and I want to collect as many as I can. 
              I encourage myself to develop, learn and grow in different environments. I love to travel, 
              dance and I really enjoy outdoor activities like mountain biking, rock climbing, rafting, kayaking, 
              sky diving and anything that will make me admire the beautiful world that we have!
              <span className="emoji" role="img" aria-label="world">&#127758;</span>
              <span className="emoji" role="img" aria-label="hearts">&#128149;</span>
            </p>
          </div>
          <div className="projectContainer">   
            {ProjectData.map((projectData, index) => {
              return <ProjectCard key={index} projectData={projectData}/>
            })} 
          </div>
          <div>
            <img className="logo" src={Logo} alt="React logo"/>
          </div>
        </div>
    );
  }
}

export default App;
