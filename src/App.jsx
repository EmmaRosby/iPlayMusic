import { useRoutes } from "react-router"
import routes from "~react-pages";
import './scss/main.scss';


function App() {


  return (
    <>
     {useRoutes(routes)}
    </>
  )
}


export default App