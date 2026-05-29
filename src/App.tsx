import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Alertas from './pages/Alertas'
import Sobre from './pages/Sobre'
import Integrantes from './pages/Integrantes'
import IntegrantesDetalhes from './pages/IntegrantesDetalhes'
import FAQ from './pages/Faq'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/"                  element={<Home />} />
            <Route path="/dashboard"         element={<Dashboard />} />
            <Route path="/alertas"           element={<Alertas />} />
            <Route path="/sobre"             element={<Sobre />} />
            <Route path="/integrantes"       element={<Integrantes />} />
            <Route path="/integrantes/:id"   element={<IntegrantesDetalhes />} />
            <Route path="/faq"               element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App