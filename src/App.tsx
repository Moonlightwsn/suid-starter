import { useRoutes } from "@solidjs/router"
import { Toaster } from "solid-toast"

import routes from "./router/routes"

const App = () => {
  const Route = useRoutes(routes)
  return (
    <>
      <Route />
      <Toaster position="top-center" />
    </>
  )
}

export default App
