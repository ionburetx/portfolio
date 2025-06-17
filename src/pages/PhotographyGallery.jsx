import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FlechaSimple from '../components/FlechaSimple'
import Masonry from 'react-masonry-css'
import Header from '../components/Header'  // IMPORTAMOS Header

const PhotographyGallery = () => {
  const { category } = useParams()
  const navigate = useNavigate()

  const allImages = import.meta.glob('/src/assets/fotografia/*/*.jpg', { eager: true })

  const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`/fotografia/${category}/`))
    .map(([, mod]) => mod.default)

  const categories = [
    'animal',
    'arquitectura',
    'calle',
    'estilo-de-vida',
    'naturaleza',
    'paisaje',
    'producto',
    'retratos',
  ]

  const currentIndex = categories.indexOf(category)

  function goToPrevious() {
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length
    navigate(`/galeria/${categories[prevIndex]}`)
  }

  function goToNext() {
    const nextIndex = (currentIndex + 1) % categories.length
    navigate(`/galeria/${categories[nextIndex]}`)
  }

  // Scroll to top al montar la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Breakpoints para Masonry (responsive)
  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    480: 1,
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header sticky */}
      <Header className="sticky top-0 z-50" />

      {/* Contenedor del título, flechas y botón cerrar */}
      <div className="flex items-center justify-center mt-4 mb-6 relative">
        {/* Contenedor solo del título y flechas, para que no ocupen todo el ancho */}
        <div className="flex items-center space-x-2">
          <FlechaSimple direction="left" onClick={goToPrevious} />
          <h1 className="text-3xl font-bold uppercase">{category}</h1>
          <FlechaSimple direction="right" onClick={goToNext} />
        </div>

        {/* Botón cerrar posicionado en la misma línea, a la derecha */}
        <button
          onClick={() => navigate('/home')}
          className="text-white text-4xl hover:text-[#FF5733] focus:outline-none absolute right-0"
          style={{ background: 'none', border: 'none' }}
          aria-label="Cerrar galería"
        >
          ✕
        </button>
      </div>

      {/* Galería Masonry */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Foto ${index + 1}`}
            className="w-full mb-4 object-cover rounded"
            style={{ display: 'block' }}
          />
        ))}
      </Masonry>
    </div>
  )
}

export default PhotographyGallery
