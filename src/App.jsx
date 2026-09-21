import { useState } from 'react'
import Me from './assets/me.jpg'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaCheck } from 'react-icons/fa'
import { BiSpreadsheet } from 'react-icons/bi'
import './App.css'
import ProjectCard from './ProjectCard'
import ExperienceTimeline from './ExperienceTimeline'

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

const industryExperience = [
  {
    period: 'Jun 2026 – Sep 2026',
    role: 'AI Agent Developer Intern',
    company: 'BioMarin',
    location: 'Novato, CA',
    summary: 'Developed AI-powered workflows for technical operations on the Systems, Process, & Delivery Team.',
    highlights: [
      'Built and refined Microsoft Copilot agents for document intake, knowledge retrieval, and technical writing support across operational workflows.',
      'Worked with cross-functional stakeholders to define use cases, validate performance, and shape deployment-ready AI solutions.',
    ],
  },
  {
    period: 'Jun 2024 – Sep 2024',
    role: 'Software Engineering Intern',
    company: 'Codex Health',
    location: 'Palo Alto, CA',
    summary: 'Implemented health-tech backend APIs and architecture decisions to support clinician-facing digital tools.',
    highlights: [
      'Designed YAML API specifications and implemented Go endpoints for patient data transfer between GCP services and the UI.',
      'Documented infrastructure decisions through ADRs and contributed to code reviews, pull requests, and demo-ready product work.',
    ],
  },
  {
    period: 'Jun 2023 – Sep 2023',
    role: 'Software Engineering Intern',
    company: 'Codex Health',
    location: 'Palo Alto, CA',
    summary: 'Built and supported patient-facing digital workflows for clinical data collection and software iteration in a startup environment.',
    highlights: [
      'Created four Go APIs used by 110+ diabetic patients to record and deliver data to clinicians in real time.',
      'Improved code reliability through unit tests, refactors, and data migration support during agile product development.',
    ],
  },
  {
    period: 'Jan 2023 – Aug 2023',
    role: 'Data Engineering Intern',
    company: 'Surgalign Spine',
    location: 'San Diego, CA',
    summary: 'Developed data analysis and visualization tools to support AI and image-quality workflows in healthcare technology.',
    highlights: [
      'Built Python and Streamlit dashboards to visualize MRI and CT quality metrics and identify low-quality datasets in the AI pipeline.',
      'Used a Random Forest classifier to achieve 89% accuracy on image classification tasks and improve data quality evaluation.',
    ],
  },
]

const researchExperience = [
  {
    period: 'Feb 2025 – Mar 2026',
    role: 'Research Intern',
    company: 'Price Lab, Buck Institute',
    location: 'Novato, CA',
    summary: 'Expanded a biology-focused AI interface and built analytical tools to study health predictors and intervention effects.',
    highlights: [
      'Developed TypeScript frontend features and FastAPI endpoints for a multimodal biology AI platform and RAG-based workflows.',
      'Used OLS regression and Python pipelines to identify key genetic predictors of health outcomes and support predictive intervention work.',
    ],
  },
  {
    period: 'Jan 2025 – Jul 2025',
    role: 'Research Intern',
    company: 'Neuroscape, UCSF',
    location: 'San Francisco, CA',
    summary: 'Preprocessed multimodal sensor data and built synchronization pipelines to support emotion-research modeling.',
    highlights: [
      'Designed MATLAB and Python pipelines to clean and align data from 150+ sensors, improving the usable dataset for downstream analysis.',
      'Developed anomaly detection and timing-correction scripts that increased the reliability of EEG and photodiode synchronization.',
    ],
  },
  {
    period: 'Jun 2022 – Dec 2022',
    role: 'Research Assistant',
    company: 'Majithia Lab, UCSD',
    location: 'San Diego, CA',
    summary: 'Applied machine learning and computational methods to study biomedical patterns and health-related data structures.',
    highlights: [
      'Used KNN and K-means to identify distinct archetypes of blood sugar rhythms and evaluate biological data distinctiveness.',
      'Built a Python data retrieval pipeline to fetch gene-region data from HuGe BioIndex APIs for analysis workflows.',
    ],
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
  const orderedIndustryExperience = [...industryExperience].reverse()
  const orderedResearchExperience = [...researchExperience].reverse()

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#center" className="brand-name"> Melissa Osheroff</a>
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
            {/* id="center" */}
      <section>  
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
        <ExperienceTimeline entries={orderedIndustryExperience} />
      </section>

      <section id="research">
        <h1>Research Experience</h1>
        <ExperienceTimeline entries={orderedResearchExperience} />
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



      <section id="connect" className="next-steps" aria-label="Connect with Melissa">
      
          <h2>Let's Connect!</h2>
          {/* <p>Keep in touch for potential opportunities!</p> */}
          <ul>
            <li>
              <a href="https://github.com/Mosherof" target="_blank">
                <BsGithub size={30} color="#24292e" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/melissaosheroff/" target="_blank">
                <FaLinkedin size={30} color="#0a66c2" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1N8Lpl-OH1TEq7q3bnsLU5X35h6PVAFIJ/view?usp=sharing" target="_blank">
                <BiSpreadsheet size={30}  color="#587B7F"/>
                Resume
              </a>
            </li>
          </ul>
   
      </section>


      <section id="spacer"></section>
    </>
  )
}

export default App
