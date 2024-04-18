import { Fragment } from "react"

/* import router */
import Router from "./Router/Router"

/* importacion del context */
import { ContextArticles } from "./Components/context/ContextArticles"

function App() {

  return (
    <Fragment>
      {/* activamos el context en toda la app */}
      <ContextArticles>
        <Router/>
      </ContextArticles>
    </Fragment>
  )
}

export default App
