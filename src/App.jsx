import { Routes, Route } from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import Footer from './components/pages/shared/Footer'
import Menu from './components/pages/shared/Menu'

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        
        
      </Routes>
      <Footer />
    </>
  )
}

export default App