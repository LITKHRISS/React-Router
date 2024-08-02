import { EVENTS } from "./consts"
import { useState, useEffect } from "react"
import { match } from 'path-to-regexp'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () =>
 <h1>404</h1> }) {
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
  
    const Page = routes.find(({ path }) => {
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