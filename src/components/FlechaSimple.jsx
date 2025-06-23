import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi' // íconos

const FlechaSimple = ({ direction = 'left', onClick }) => {
  const Icon = direction === 'left' ? HiChevronLeft : HiChevronRight

  return (
    <button
      onClick={onClick}
      className="bg-transparent text-white hover:text-[#FF5733] transition-colors focus:outline-none text-7xl p-0 m-0 border-none"
      aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
      style={{ background: 'none', border: 'none' }}
    >
      <Icon />
    </button>
  )
}

export default FlechaSimple


