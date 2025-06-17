import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const PhotographyGallery = () => {
  const { category } = useParams()
  const navigate = useNavigate()

  const allImages = import.meta.glob('/src/assets/fotografia/*/*.jpg', { eager: true })

  const images = Object.entries(allImages)
  .filter(([path]) => path.includes(`/fotografia/${category}/`))
  .map(([, mod]) => mod.default)

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate(-1)} className="text-xl">←</button>
        <h1 className="text-3xl font-bold uppercase text-center flex-1">{category}</h1>
        <button onClick={() => navigate('/')} className="text-2xl">✕</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Foto ${index + 1}`} className="w-full h-auto object-cover" />
        ))}
      </div>
    </div>
  )
}

export default PhotographyGallery


