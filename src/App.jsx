import { Routes, Route, Outlet } from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import Administrador from './components/pages/Administrador'
import Footer from './components/pages/shared/Footer'
import Menu from './components/pages/shared/Menu'

// Layout del sitio público: el panel de administración tiene su propio layout
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
        {/* Agregá acá el resto de las páginas públicas y, al final, la de error 404 */}
      </Route>

      {/* Panel de administración (sin Menu ni Footer públicos) */}
      <Route path="/panel-barbero" element={<Administrador />} />
    </Routes>
  )
}

export default App