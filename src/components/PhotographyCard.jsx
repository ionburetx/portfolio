// PhotographyCard.jsx
import React from 'react'

const PhotographyCard = ({ image, title }) => {
  return (
    <div className="photography-card relative w-full aspect-square cursor-pointer overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold text-center px-2">{title}</h3>
      </div>
    </div>
  )
}

export default PhotographyCard






