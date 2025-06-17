import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'

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

const PhotoViewer = () => {
  const { category, photoIndex } = useParams()
  const navigate = useNavigate()
  const [showScrollHint, setShowScrollHint] = useState(true)

  const allImages = import.meta.glob('/src/assets/fotografia/*/*.jpg', { eager: true })
  const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`/fotografia/${category}/`))
    .map(([, mod]) => mod.default)

  const currentIndex = (() => {
    const parsed = parseInt(photoIndex, 10)
    return isNaN(parsed) || parsed < 0 ? 0 : parsed
  })()

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < images.length) {
      // Scroll a la imagen seleccionada después de que se monte el componente
      setTimeout(() => {
        const targetImage = document.getElementById(`image-${currentIndex}`)
        if (targetImage) {
          targetImage.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    } else {
      // Si el índice no es válido, ir a galería
      navigate(`/galeria/${category}`)
    }
  }, [currentIndex, images.length, category, navigate])

  // Prevenir scroll del body cuando el lightbox está activo
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        navigate(-1)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [navigate])

  // Detectar scroll para ocultar el hint
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.scrollTop > 50) {
        setShowScrollHint(false)
      }
    }

    const scrollContainer = document.getElementById('scroll-container')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Ocultar el hint después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <Header className="sticky top-0 z-50" />
      
      {/* Botón cerrar - ahora debajo del header */}
      <button
        onClick={() => navigate(-1)}
        aria-label="Cerrar visor"
        className="absolute top-24 right-4 text-white text-4xl hover:text-[#FF5733] focus:outline-none z-50 transition-colors duration-200"
        style={{ background: 'none', border: 'none' }}
      >
        ✕
      </button>

      {/* Contenedor de scroll con todas las imágenes */}
      <div
        id="scroll-container"
        className="flex-1 overflow-y-auto"
        style={{
          height: 'calc(100vh - 80px)', // Descontar altura del header
          scrollBehavior: 'smooth'
        }}
      >
        <div className="flex flex-col items-center py-8 gap-8">
          {images.map((imageSrc, index) => (
            <div
              key={index}
              id={`image-${index}`}
              className="w-full flex justify-center px-4"
            >
              <img
                src={imageSrc}
                alt={`Foto ${index + 1} de ${category}`}
                className="object-contain shadow-2xl"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  borderRadius: '8px'
                }}
                loading={Math.abs(index - currentIndex) <= 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Flecha animada de scroll para desktop */}
      {showScrollHint && (
        <div className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
          <div className="bg-black bg-opacity-50 rounded-full p-3 backdrop-blur-sm">
            <svg 
              className="w-6 h-6 text-white animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
          <div className="text-white text-sm text-center mt-2 opacity-75">
            Scroll para ver más
          </div>
        </div>
      )}

      {/* Indicador de posición actual (opcional) */}
      <div className="fixed bottom-4 right-4 text-white text-sm opacity-50 z-40">
        <div className="bg-black bg-opacity-50 rounded-full px-3 py-1">
          {currentIndex + 1} de {images.length}
        </div>
      </div>
    </div>
  )
}

export default PhotoViewer

