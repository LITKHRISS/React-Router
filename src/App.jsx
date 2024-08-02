import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

import { Router } from './Router.jsx'
import Page404 from './pages/404.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query', // /search/javascript /search/python /search/react
    Component: ({routeParams}) => <h1>Has buscado {routeParams.query}</h1>
  }
]

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
