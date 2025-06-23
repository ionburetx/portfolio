// PhotographyCard.jsx
import React from 'react'

const PhotographyCard = ({ image, title }) => {
  
  return (
    <div className="photography-card relative w-full aspect-square cursor-pointer overflow-hidden group">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-105 group-hover:grayscale"
  />

  {/* Overlay negro que desaparece al hover */}
  <div
    className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
    style={{ pointerEvents: 'none' }}
  />

  {/* Título siempre visible encima de todo */}
  <h3
    className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold text-center px-2"
    style={{ pointerEvents: 'none', zIndex: 999 }}
  >
    {title}
  </h3>
</div>

  )
}

export default PhotographyCard







