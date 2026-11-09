import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Salon</Link>

        <div>
          <Link to="/">Strona główna</Link>
          <Link to="/uslugi">Usługi</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header