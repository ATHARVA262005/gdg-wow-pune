import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sponsors from './pages/Sponsors'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="bg-neutral-950 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App