import { Routes, Route, Outlet } from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import Administrador from './components/pages/Administrador'
import Login from './components/pages/Login'
import Galeria from './components/pages/Galeria'
import ReservarTurno from './components/pages/ReservarTurno'
import Error404 from './components/pages/error404'
import Footer from './components/pages/shared/Footer'
import Menu from './components/pages/shared/Menu'

const LayoutPublico = () => (
  <>
    <Menu />
    <Outlet />
    <Footer />
  </>
)

function App() {
  return (
    <Routes>
      <Route element={<LayoutPublico />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria" element={<Galeria />} />
        
        {/* Nueva ruta exclusiva para el sistema de reservas */}
        <Route path="/reservar-turno" element={<ReservarTurno />} />
        
        <Route path="/mi-cuenta" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="/panel-barbero" element={<Administrador />} />
    </Routes>
  )
}

export default App