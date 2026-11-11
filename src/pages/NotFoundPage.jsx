import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section>
      <h1>404</h1>
      <p>Nie znaleziono takiej strony.</p>
      <Link to="/">Wróć na stronę główną</Link>
    </section>
  )
}

export default NotFoundPage