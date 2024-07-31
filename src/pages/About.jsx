import { Link } from '../Link.jsx'

export default function AboutPage () {
    return (
      <>
      <h1>About</h1>
      <div>
        <img src='src/resourses/IMG_6611.jpeg' alt='Foto de Christopher' />
      <p>Hola soy Christopher y estoy creando un clon de React Router</p>
      </div>
  
      < Link to='/'> Ir a home </Link>
      </>
    )
  }