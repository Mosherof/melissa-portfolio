import { useState } from 'react'
import heroImg from './assets/hero.png'
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { BiSpreadsheet } from "react-icons/bi";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { SiGmail } from 'react-icons/si';
import './App.css'
import ProjectCard from './ProjectCard'

const education = [
  {
    degree: "Bachelor's Degree",
    field: 'Bioengineering & Bioinformatics',
    school: 'University of California, San Diego',
    year: '2020-2024',
    details: 'Developed computer science algorithms to life science problems.',
  },
  {
    degree: "Master's Degree",
    field: 'Electrical & Computer Engineering',
    school: 'University of California, Santa Barbara',
    year: '2025-2027',
    details: 'Studying in machine learning, signal processing, & stochastic processes.',
  },
]

const projects = [
  {
    title: 'Catastrophic Foregetting in RNN',
    description: 'Observing bifuracations and dynamics of RNNs when learning unique tasks.',
    tech: ['Pytorch', 'Neural Networks'],
    demoLink: '#',
    githubLink: 'https://github.com/Mosherof/When-to-Reuse',
  },
  {
    title: 'Modeling Biological Circuits',
    description: 'Recreating biological feedback loops.',
    tech: ['MATLAB', 'ODESolver45'],
    demoLink: 'https://github.com/Mosherof/CHEM154-BIOE254-Final-Modeling-Ligand-Affect-on-cAMP-Dynamics',
    githubLink: '#',
  },
    {
    title: 'Signal Modulation Classification Using CNNs',
    description: '',
    tech: ['Python', 'Neural Networks', 'Machine Learning', 'Evaluations'],
    demoLink: '#',
    githubLink: '#',
  },
    {
    title: 'Game Theory Perspective for King-Rook-King Endgames',
    description: '',
    tech: ['MATLAB', 'Controls', 'Game Theory'],
    demoLink: '#',
    githubLink: 'https://github.com/raaghav-t/windy',
  },
      {
    title: 'Controlling Yoga Pose Warrior III',
    description: '',
    tech: ['MATLAB', 'Controls', 'Robotics'],
    demoLink: '#',
    githubLink: '#',
  },
      {
    title: 'Agentic AI for Accelerated Deliveries',
    description: '',
    tech: ['Machine Learning', 'Microsoft Copilot Studio', 'Agents', 'Manufacturing', 'Evaluations'],
    demoLink: '#',
    githubLink: '#',
  },
      {
    title: 'Gap Analysis for Logitudinal BioMetrics',
    description: '',
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Evaluations'],
    demoLink: '#',
    githubLink: '#',
  },
      {
    title: 'Building FAST APIs for Healthspan RAG Pipelines',
    description: '',
    tech: ['Typescript', 'Python', 'Fast API', 'Machine Learning'],
    demoLink: '#',
    githubLink: '#',
  },
      {
    title: 'Using LLMs as Judge for Search Quality Evaluations',
    description: '',
    tech: ['Python', 'Agents', 'Evaluations'],
    demoLink: '#',
    githubLink: '#',
  },
      {
    title: 'Med-Dash',
    description: '',
    tech: ['React', 'TypeScript', 'Data Cleaning', 'Python'],
    demoLink: '#',
    githubLink: 'https://github.com/Mosherof/med-dash-bioe',
  },
  {
    title: 'Emosense',
    description: '',
    tech: ['MATLAB', 'Python', 'Time Series Allignment', 'Sensor Data'],
    demoLink: '#',
    githubLink: 'https://github.com/Mosherof/emosense',
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
         
        </div>
        <div>
          <h1>Home</h1>
          <p>
          I aim to build scalable, safe, and interdisciplinary machine learning tools that improve human wellness. This website serves as a vast collection of my projects & experiences. 
          </p>
        </div>
      </section>
     
      <section>
         <h1>Industry Experience</h1>
      </section>
  
      <section>
        <h1>Research Experience</h1>
      </section>

       <h1>Projects</h1>
        <section className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>

             <section className="education-section">
        <h1>Education</h1>
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.degree} className="education-card">
              <div className="education-badge">{item.degree}</div>
              <h3>{item.field}</h3>
              <p className="education-school">{item.school}</p>
              <p className="education-year">{item.year}</p>
              <p className="education-details">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
       
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Let's Connect</h2>
          <p>Keep in touch for potential opportunities!</p>
          <ul>
            <li>
              
              <a href="https://github.com/Mosherof" target="_blank">
              <BsGithub size={30} color="#24292e" />
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/melissaosheroff/" target="_blank">
              <FaLinkedin size={30} color="#0a66c2" />
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
                        <li>
              <a href="https://www.linkedin.com/in/melissaosheroff/" target="_blank">
               <BiSpreadsheet size={30}/>
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#gmail-icon"></use>
                </svg>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
