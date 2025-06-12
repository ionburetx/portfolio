'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader';
import { ChevronDown } from 'lucide-react'

export const AboutSection = ({ onScrollToNext }) => {
  return (
    <section
    id="about"
    className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden px-4 md:px-8 lg:px-20 py-6"
  >
      <SectionHeader titleKey="about" />

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full mt-6 lg:mt-12">

        
        {/* Text content */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start">
          {/* h1 ION */}
          <motion.h1
            initial={{ y: -100, rotate: 180, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl lg:text-8xl font-bold text-[#FF5733]" // naranja tomate
          >
            <motion.span
              animate={{
                rotate: [0, 180, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear',
              }}
              className="inline-block"
            >
              ION
            </motion.span>
          </motion.h1>

          {/* h2 HOLA */}
          <motion.h2
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl lg:text-5xl font-semibold text-white"
          >
            HOLA
          </motion.h2>

          {/* h3 Soy */}
          <motion.h3
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-2xl lg:text-3xl text-white"
          >
            Soy
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-white text-base lg:text-lg max-w-md"
          >
            Un apasionado del sector artístico en cada una de sus ramas. Me dedico al diseño gráfico, desarrollo frontend y la fotografía. ¿Quieres ver alguno de mis trabajos?
          </motion.p>

          {/* Flecha para scroll */}
          <motion.button
            onClick={onScrollToNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 text-white hover:text-[#FF5733] transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-10 h-10 animate-bounce" />
          </motion.button>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full lg:w-1/2 h-auto max-h-[80vh] flex justify-center lg:justify-end mb-10 lg:mb-0"
        >
          <img
            src="/generalAssets/fotobio.png"
            alt="My Illustration"
            className="object-contain h-full w-[500px] max-h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
