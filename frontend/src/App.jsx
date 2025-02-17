import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'
import Team from './pages/Team'
import Error from './pages/Error'


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/team" element={<Team/>} />
        <Route path="*" element={<Error/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App