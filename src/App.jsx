
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import { Link } from 'react-router-dom'


import CatastrophicForgetting from './pages/catastrophic-forgetting'
import AgenticAi from './pages/agentic-ai'
import BiologicalCircuits from './pages/biological-circuits'
import EmoSense from './pages/emosense'
import GapAnalysis from './pages/gap-analysis'
import MedDash from './pages/med-dash'
import SigInt from './pages/sigInt'


export default function App() {

  const navItems = [
  { label: 'Industry', href: '#industry' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Connect', href: '#connect' },]

  return (
    <>
    <header className="topbar">
        <div className="topbar-inner">
         <Link to="/" className="brand-name"> Melissa Osheroff </Link>
           <nav className="topnav" aria-label="Primary navigation">

          <Link to="/" className="nav-link home-link">
            Home
          </Link>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={`/${item.href}`}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}

        </nav>
        </div>
      </header>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/catastrophic-forgetting"
        element={<CatastrophicForgetting />}
      />
      <Route
        path="/agentic-ai"
        element={<AgenticAi />}
      />
      <Route
        path="/biological-circuits"
        element={<BiologicalCircuits />}
      />
      <Route
        path="/emosense"
        element={<EmoSense />}
      />
      <Route
        path="/gap-analysis"
        element={<GapAnalysis />}
      />

      <Route
        path="/med-dash"
        element={<MedDash />}
      />

      <Route
        path="/sigint"
        element={<SigInt />}
      />
      
    </Routes>
    </>
  )
}