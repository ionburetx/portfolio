import React from 'react'
import { Link } from 'react-router-dom'

const PhotographyCard = ({ image, title, categorySlug }) => {
  return (
    <Link to={`/galeria/${categorySlug}`} className="block relative group cursor-pointer overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  )
}

export default PhotographyCard


