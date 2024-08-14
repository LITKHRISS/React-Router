import { lazy, Suspense } from 'react'

import './App.css'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx')) // <---- Lazy loading...
const LazyAboutPage = lazy(() => import ('./pages/About.jsx')) // import dinamico con <----Lazy loading


const appRoutes = [ 
  {
    path: '/search/:query', // /search/javascript /search/python /search/react
    Component: SearchPage
  }
]

function App() {
  return (   
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Router routes={appRoutes} defaultComponent={Page404}>
      <Route path='/' Component={LazyHomePage} />
      <Route path='/about' Component={LazyAboutPage} />
      </Router> 
      </Suspense>    
    </main>
  )
}

export default App
