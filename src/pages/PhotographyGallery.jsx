import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import FlechaSimple from '../components/FlechaSimple'
import Masonry from 'react-masonry-css'
import Header from '../components/Header'

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
    480: 2,
    0: 2,
  }

  return (
      <div className="min-h-screen bg-black text-white hide-scrollbar">
    {/* Header sticky */}
    <div className="sticky top-0 z-50 bg-black shadow-md">
      <Header />
    </div>

    {/* Bloque sticky: Título + flechas + botón X */}
    <div className="sticky top-16 z-40 bg-black shadow-md px-4">
      <div className="flex items-center justify-center py-4 relative">
        <div className="flex items-center gap-px md:gap-1">
          <span className="text-base md:text-3xl">
            <FlechaSimple direction="left" onClick={goToPrevious} />
          </span>
          <h1 className="text-xl md:text-3xl font-bold uppercase max-w-[50vw] truncate text-center">{category}</h1>
          <span className="text-base md:text-3xl">
            <FlechaSimple direction="right" onClick={goToNext} />
          </span>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={() => navigate('/home')}
          className="text-white text-4xl hover:text-[#FF5733] focus:outline-none absolute right-0"
          style={{ background: 'none', border: 'none' }}
          aria-label="Cerrar galería"
        >
          ✕
        </button>
      </div>
    </div>

    {/* Galería que sí se scrolléa */}
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <Link key={index} to={`/galeria/${category}/foto/${index}`}>
            <img
              src={src}
              alt={`Foto ${index + 1}`}
              className="w-full mb-4 object-cover rounded cursor-pointer"
              style={{ display: 'block' }}
            />
          </Link>
        ))}
      </Masonry>
    </div>
  </div>
)
}

export default PhotographyGallery
