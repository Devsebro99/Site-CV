import './styles/css/normalize/normalize.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SharedStateProvider } from './components/Props'
import Home from './pages/home/Home'
import Formulaire from './pages/formulaire/Formulaire'
import Cv from './pages/curriculumvitae/Curriculum'
import Error from './layouts/error/Fault'
import './styles/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <SharedStateProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Formulaire" element={<Formulaire />} />
          <Route path="/Curriculum" element={<Cv />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </SharedStateProvider>
    </Router>
  </React.StrictMode>
)
