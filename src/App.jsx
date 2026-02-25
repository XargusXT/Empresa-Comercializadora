import './App.css'
import { Route,Routes } from 'react-router-dom'
import PrincipalPage from './pages/PrincipalPage/PrincipalPage'

function App() {
  /** 
   * Estructura de Router
   * <Routes>
      <Route path='/' element={<HomePage/>}/>

      path indica lo que se debe poner en el buscador para que acceda a dicho componente,si pones una barra sola significa que sera esa misma
      element es la etiqueta del elemento que accederas cuando el patheste funcionando
    </Routes>
   */
  return (
    < >
      <Routes>
        <Route path='/' element={<PrincipalPage></PrincipalPage>}></Route>
      </Routes>
    </>
  )
}

export default App
