'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { ChevronDown } from 'lucide-react'

export const AboutSection = ({ onScrollToNext }) => {
  return (
    <section
      id="about"
      className="relative w-full h-screen flex flex-col justify-start items-center overflow-hidden px-4 md:px-8 lg:px-20 pt-20">

      {/* ✅ Encabezado colocado correctamente debajo del Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-2"
      >
        <SectionHeader titleKey="about" />
      </motion.div>

      {/* ✅ Contenido principal */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-[1400px]">
        
        {/* Textos */}
        <div className="flex flex-col gap-3 w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start">
          
          <motion.h1
            initial={{ y: "-100vh", rotate: 180, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl lg:text-8xl font-bold text-[#FF5733]"
          >
            <motion.span
              animate={{ rotate: [0, 180, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
              className="inline-block"
            >
              ION
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl lg:text-5xl font-semibold text-white"
          >
            HOLA
          </motion.h2>

          <motion.h3
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl lg:text-3xl text-white"
          >
            Soy
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-white text-base lg:text-lg max-w-md"
          >
            Un apasionado del sector artístico en cada una de sus ramas. Me dedico al diseño gráfico, desarrollo frontend y la fotografía. ¿Quieres ver alguno de mis trabajos?
          </motion.p>

          <motion.button
            onClick={onScrollToNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-6 text-white hover:text-[#FF5733] transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-10 h-10 animate-bounce" />
          </motion.button>
        </div>

        {/* Imagen */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2, duration: 1 }}
  className="w-full lg:w-auto h-auto flex justify-center lg:justify-end mb-10 lg:mb-0"
>
  <img
    src="/generalAssets/fotobio.png"
    alt="My Illustration"
    className="
      pointer-events-none 
      select-none

      w-full
      h-auto
      object-contain

      scale-110       // Se aplica por defecto (solo móviles)
    sm:scale-100    // A partir de sm: (≥640px), vuelve al tamaño normal
    sm:mx-0
    -mx-4           // Móvil: saca un poco por los lados

      lg:absolute
      lg:top-0
      lg:right-[-5%]
      lg:h-screen
      lg:w-auto
      lg:object-right
    "
  />
</motion.div>
      </div>
    </section>
  )
}
