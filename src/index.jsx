import './styles/css/normalize/normalize.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SharedStateProvider } from './components/props/Props.jsx'
import Home from './pages/home/Home.jsx'
import Presentation from './pages/presentation/Presentation.jsx'
import Personality from './pages/personnality/Personality.jsx'
import Cv from './pages/curriculumvitae/Curriculum.jsx'
import Project from './pages/project/Project.jsx'
import Annex from './pages/annex/Annex.jsx'
import Error from './layouts/error/Fault.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <SharedStateProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Presentation" element={<Presentation />} />
          <Route path="/Personality" element={<Personality />} />
          <Route path="/Curriculum" element={<Cv />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Annex" element={<Annex />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </SharedStateProvider>
    </Router>
  </React.StrictMode>
)
