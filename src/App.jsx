import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

import { Router } from './Router.jsx'
import Page404 from './404.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
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
