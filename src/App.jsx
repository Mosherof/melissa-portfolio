import { useState } from 'react'
import Me from './assets/me.jpg'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaCheck } from 'react-icons/fa'
import { BiSpreadsheet } from 'react-icons/bi'
import './App.css'
import ProjectCard from './ProjectCard'

const navItems = [
  { label: 'Home', href: '#center' },
  { label: 'Industry', href: '#industry' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Connect', href: '#connect' },
]

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
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#center" className="brand-name">Melissa Osheroff</a>
          <nav className="topnav" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={index === 0 ? 'nav-link home-link' : 'nav-link'}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="center">
        <h1>Home</h1>
        <div className="intro-row">
          <div className="profile-image-wrap">
            <img src={Me} alt="Melissa" className="profile-photo" />
          </div>
          <div className="intro-copy">
            <p>
              I build safe, scalable, & interdisciplinary AI tools that advance human wellness. My experience includes designing end-to-end digital pipelines, from data intake to user-friendly dashboards. Upon completing my master's degree in 2027, I will drive biotechnology innovation as an ML, process, or systems engineer. This website serves as a vast collection of my experiences, projects, skills, & interests.

            </p>
             <div className="meta-tags">
              <span className="meta-tag"><FaMapMarkerAlt className="meta-icon" /> Goleta, CA</span>
              <span className="meta-tag"><FaEnvelope className="meta-icon" /> MeOsheroff@ucsb.edu</span>
              <span className="meta-tag"><FaCheck className="meta-icon" /> Open to collaboration</span>
            </div>

          </div>
        </div>
       
            
      </section>

      <section id="industry">
        <h1>Industry Experience</h1>
      </section>

      <section id="research">
        <h1>Research Experience</h1>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="education" className="education-section">
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

      <section id="connect" className="next-steps" aria-label="Connect with Melissa">
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
