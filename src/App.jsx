import { Routes, Route } from 'react-router-dom'
import Language from './pages/Language'
import Welcome from './pages/Welcome'
import TransitionPage from './pages/TransitionPage'
import Home from './pages/Home'
import PhotographyGallery from './pages/PhotographyGallery'
import PhotoViewer from './pages/PhotoViewer'
import ProjectDetailView from './pages/ProjectDetailView'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Language />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/transition-to-home" element={<TransitionPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/galeria/:category" element={<PhotographyGallery />} />
        <Route path="/galeria/:category/foto/:photoIndex" element={<PhotoViewer />} />
        <Route path="/project/:projectId" element={<ProjectDetailView />} />
        {/* Más rutas luego */}
      </Routes>
  )
}

export default App

