import { Routes, Route } from 'react-router-dom'
import Language from './pages/Language'
import Welcome from './pages/Welcome'
import TransitionPage from './pages/TransitionPage'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Language />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/Welcome" element={<Welcome />} />
        {/* Más rutas luego */}
      </Routes>
  )
}

export default App

