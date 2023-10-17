import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <Link className="button" to="/">
        Accueil
      </Link>
      <Link className="button" to="/Formulaire">
        Formulaire
      </Link>
      <Link className="button" to="/Curriculum">
        Curriculum
      </Link>
    </div>
  )
}

export default Nav
