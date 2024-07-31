import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  // crear evento perzonalizado
  const navigationEvent = new Event(NAVIGATION_EVENT)
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

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
