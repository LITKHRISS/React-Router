import { Link } from '../Link.jsx'

export default function HomePage () {
    return (
      <>
      <h1>Home</h1>
      <p>Creating a web page with React Router from zero </p>
      <Link to='/about'> About us </Link>
      </>
    )
  }