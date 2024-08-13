import { EVENTS } from "./consts"
import { useState, useEffect, Children } from "react"
import { match } from 'path-to-regexp'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () =>
 <h1>404</h1> }) {
  console.log(children)
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

    let routeParams = {}

    // add routes from children <Route /> components
    const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type
      const isRoute = name === 'Route' 

      return isRoute ? props: null
    })

    const routesToUse = routes.concat(routesFromChildren)
  
    const Page = routesToUse.find(({ path }) => {
       if (path === currentPath) return true


      // used path-to-regexp
      // to detect dynamic routes like
      // /search/:query <- :query is a dynamic route
      const matchedUrl = match(path, { decode: decodeURIComponent })
      const matched = matchedUrl(currentPath)
      if (!matched) return false 

      // saved the url parameters that were dynamic
      // and extracted with path-to-regexp
      // (example: if the route is /search/:query
      // and the URL is /search/javascript)
      // matched.params.query === 'javascript'
      routeParams = matched.params // { query: 'javascript' } // /search/javascript
        return true

     })?.Component

    return Page 
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
  }