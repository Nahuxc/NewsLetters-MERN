import { Fragment } from "react"

/* import router */
import Router from "./Router/Router"

/* importacion del context */
import { ContextArticles } from "./Components/context/ContextArticles"
import { NotificationProvider } from "./notification/notification"

function App() {

  return (
    <Fragment>
      {/* activamos el context en toda la app */}
      <ContextArticles>
        <NotificationProvider>
          <Router/>
        </NotificationProvider>
      </ContextArticles>
    </Fragment>
  )
}

export default App
