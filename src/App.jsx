import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'
import './index.css'
import './components/css/Hero.css'
import './components/css/Navbar.css'
import './components/css/Portfolio.css'
import './components/css/Services.css'
import './components/css/Footer.css'
import './components/css/About.css'
import './components/css/Contact.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="jd-container p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
