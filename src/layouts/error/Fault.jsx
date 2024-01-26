import './fault.scss'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="error">
      <h1>Error 404</h1>
      <p>Oops,This Page Not Found</p>
      <Link className="return" to="/">
        Retour
      </Link>
    </div>
  )
}
