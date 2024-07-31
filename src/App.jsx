import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
    <h1>Home</h1>
    <p>Pagina de ejemplo para crear un React Router desde cero</p>
    <a href='/about'> Ir a sobre nosotros </a>
    </>
  )
}

function AboutPage () {
  return (
    <>
    <h1>About</h1>
    <div>
      <img src='src/resourses/Screenshot 2024-07-30 204029.png' alt='Foto de Christopher' />
    <p>Hola soy Christopher y estoy creando un clon de React Router</p>
    </div>

    <a href='/'> Ir a home </a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)


  return (
    <main>
      {currentPath == '/' && <HomePage />}
      {currentPath == '/about' && <AboutPage />}

    </main>
  )
}

export default App
