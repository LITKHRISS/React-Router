import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts.js'

function navigate (href) {
  window.history.pushState({}, '', href)
  // crear evento perzonalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
    <h1>Home</h1>
    <p>Pagina de ejemplo para crear un React Router desde cero</p>
    <button onClick={() => navigate('/about')} > Ir a sobre nosotros </button>
    </>
  )
}

function AboutPage () {
  return (
    <>
    <h1>About</h1>
    <div>
      <img src='src/resourses/IMG_6611.jpeg' alt='Foto de Christopher' />
    <p>Hola soy Christopher y estoy creando un clon de React Router</p>
    </div>

    <button onClick={() => navigate('/')}> Ir a home </button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])


  return (
    <main>
      {currentPath == '/' && <HomePage />}
      {currentPath == '/about' && <AboutPage />}

    </main>
  )
}

export default App
