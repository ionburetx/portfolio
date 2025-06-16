'use client'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import SectionHeader from './SectionHeader'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from "react-i18next";

export const AboutSection = ({ onScrollToNext }) => {
  const { t } = useTranslation();
  const controls = useAnimation()
  const [slideFinished, setSlideFinished] = useState(false)

  // Animación de slide + rotación inicial
  useEffect(() => {
    controls.start({
      y: 0,
      rotateX: 180,
      opacity: 1,
      transition: { duration: 2.5, ease: "easeOut" }
    }).then(() => setSlideFinished(true))
  }, [controls])

  // Cuando termina el slide, empieza rotar cada 5 segundos
  useEffect(() => {
    if (!slideFinished) return

    // Rota 180° para quedar derecho
    controls.start({
      rotateX: 0,
      transition: { duration: 1, ease: "easeInOut" }
    }).then(() => {
      let rotated = false
      const interval = setInterval(() => {
        controls.start({
          rotateX: rotated ? 0 : 180,
          transition: { duration: 1, ease: "easeInOut" }
        })
        rotated = !rotated
      }, 5000)

      return () => clearInterval(interval)
    })
  }, [slideFinished, controls])

  return (
    <section
      id="about"
      className="relative w-full h-screen flex flex-col justify-start items-center overflow-hidden px-4 md:px-8 lg:px-20 pt-20">

      {/* ✅ Encabezado */}
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
        <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-3">

          {/* Desktop layout exclusivo */}
          <div className="hidden lg:flex w-full items-start justify-start gap-8 relative z-30 -ml-12">
            
            {/* Columna izquierda: h2 + h3 */}
            <div className="flex flex-col gap-0 p-0 m-0 items-end text-right lg:translate-y-[50px]">
              <motion.h2
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-[6rem] font-semibold text-white leading-none m-0 p-0"
              >
                {t("HomePage.AboutMe.hey")}
              </motion.h2>

              <motion.h3
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[4rem] text-white leading-none m-0 p-0"
              >
                {t("HomePage.AboutMe.im")}
              </motion.h3>
            </div>

            {/* Columna derecha: h1, p, flecha */}
            <div className="w-full flex flex-col items-start pl-1 lg:pl-1" style={{ perspective: '1000px' }}>
              <motion.h1
                initial={{ y: '-100vh', rotateX: 180, opacity: 0 }}
                animate={controls}
                style={{ transformStyle: 'preserve-3d' }}
                className="font-bold text-[#FF5733] text-[15rem] leading-[1] text-left"
              >
                {t("HomePage.AboutMe.ion")}
              </motion.h1>

              <div className="flex flex-col items-start w-full max-w-[55rem]">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 1 }}
                  className="text-white text-[1.75rem] w-full text-left mt-6"
                >
                  {t("HomePage.AboutMe.text")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2, duration: 1 }}
                  className="w-full flex justify-center mt-6"
                >
                  <motion.button
                    onClick={onScrollToNext}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2, duration: 1 }}
                    className="bg-transparent text-white hover:text-[#FF5733] transition-colors"
                    aria-label="Scroll to next section"
                  >
                    <ChevronDown className="w-28 h-28 animate-bounce" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>

{/* Mobile & Tablet layout */}
<div className="flex flex-col lg:hidden items-center text-center gap-3 relative z-30 px-4">

  <div className="w-full flex justify-between items-start">
    {/* Columna izquierda: h2 + h3 */}
    <div className="w-[40%] flex flex-col items-end text-right pr-2 -mt-24">
      <motion.h2
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-[2.5rem] font-semibold text-white leading-tight"
      >
        {t("HomePage.AboutMe.hey")}
      </motion.h2>

      <motion.h3
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-[1.6rem] text-white leading-tight"
      >
        {t("HomePage.AboutMe.im")}
      </motion.h3>
    </div>

    {/* Columna derecha: h1 + párrafo */}
    <div className="w-[65%] flex flex-col items-start text-left pl-2 -mt-32">
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-bold text-[#FF5733] text-[8rem] animate-ionFlip leading-[1]"
      >
        {t("HomePage.AboutMe.ion")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-white text-[1rem] mt-2 max-w-full pr-4"
      >
        {t("HomePage.AboutMe.text")}
      </motion.p>
    </div>
  </div>

  {/* Flecha abajo */}
  <motion.button
    onClick={onScrollToNext}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3, duration: 1 }}
    className=" bg-transparent text-white hover:text-[#FF5733] transition-colors"
    aria-label="Scroll to next section"
  >
    <ChevronDown className="w-20 h-20 animate-bounce" />
  </motion.button>
</div>


        </div>
        

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-full lg:w-auto h-auto flex justify-center lg:justify-end mb-0 lg:mb-0"
        >
          <img
            src="/generalAssets/fotobio.png"
            alt="My Illustration"
            className="
              pointer-events-none 
              select-none
              w-full h-auto object-contain
              scale-110 sm:scale-100 sm:mx-0 -mx-4
              lg:absolute lg:top-0 lg:right-[-5%] lg:h-screen lg:w-auto lg:object-right
            "
          />
        </motion.div>
      </div>
    </section>
  )
}
