import './home.css'
import React from 'react'
import { Link } from 'react-router-dom'
import IllustrationCv from '../../assets/CV of best candidate in mans hands flat vector illustration.png'
import './home.css'

function Presentation() {
  return (
    <main className="siteMain">
      <h1>Site de Création CV en ligne</h1>
      <img
        className="illustration"
        src={IllustrationCv}
        alt="Illustration CV"
      />
      <div className="listButton">
        <Link className="button" to="/Formulaire">
          Formulaire
        </Link>
        <Link className="button" to="/Curriculum">
          Curriculum
        </Link>
      </div>
    </main>
  )
}

export default Presentation
