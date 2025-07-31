import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SocialLinks from './components/SocialLinks'


function App() {
  return (
    <Router>
      <div className="bg-galaxy text-star font-uday min-h-screen">
        <Navbar />
        <SocialLinks />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
