
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import CatastrophicForgetting from './pages/catastrophic-forgetting'
import { Link } from 'react-router-dom'

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
    </Routes>
    </>
  )
}