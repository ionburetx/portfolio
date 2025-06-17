import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FlechaSimple from '../components/FlechaSimple'  // <- IMPORTA el componente

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

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="flex items-center mb-6 justify-center">
  <FlechaSimple direction="left" onClick={goToPrevious} className="mr-2" />
  
  <h1 className="text-3xl font-bold uppercase text-center mx-4">
    {category}
  </h1>
  
  <FlechaSimple direction="right" onClick={goToNext} className="ml-2" />
  
  <button
    onClick={() => navigate('/home')}
    className="fixed top-4 right-4 text-white text-4xl p-0 m-0 hover:text-[#FF5733] focus:outline-none"
  style={{ background: 'none', border: 'none' }}
  aria-label="Cerrar galería"
>
  ✕
</button>
</div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Foto ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
    </div>
  )
}

export default PhotographyGallery
