import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProjectCard from './ProjectCard'

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
 <section className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>


      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Home</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Let's Connect</h2>
          <p>Keep in touch for potential opportunities!</p>
          <ul>
            <li>
              <a href="https://github.com/Mosherof" target="_blank">
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
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
