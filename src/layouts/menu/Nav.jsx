import { Link } from 'react-router-dom'
import './nav.scss'

export default function Nav() {
  return (
    <div className="menu">
      <Link className="button" to="/">
        Accueil
      </Link>
      <Link className="button" to="/Presentation">
        Mon Parcours Professionnel
      </Link>
      <Link className="button" to="/Personality">
        Mon expérience personnel
      </Link>
      <Link className="button" to="/Curriculum">
        Curriculum Vitae
      </Link>
      <Link className="button" to="/Project">
        Projets
      </Link>
      <Link className="button" to="/Test">
        Test
      </Link>
      <Link className="button" to="/Annex">
        Annexes
      </Link>
    </div>
  )
}
