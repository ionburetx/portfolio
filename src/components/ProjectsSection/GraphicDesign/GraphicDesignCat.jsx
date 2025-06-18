import React from 'react'
import Illustration from './IlustracionCat/illustration'

const GraphicDesignCat = () => {
  return (
    <div className="pl-6 md:pl-20 space-y-6">
      {/* Ilustración */}
      <div>
        <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-4">
          Ilustración
        </h3>
        <Illustration />
      </div>

      {/* Identidad Corporativa */}
      <h3 className="text-white text-xl md:text-2xl font-semibold uppercase">
        Identidad Corporativa
      </h3>

      {/* Otros */}
      <h3 className="text-white text-xl md:text-2xl font-semibold uppercase">
        Otros
      </h3>
    </div>
  )
}

export default GraphicDesignCat

