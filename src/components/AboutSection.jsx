'use client'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from "react-i18next";

export const AboutSection = ({ onScrollToNext }) => {
  const { t } = useTranslation();
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
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
    className="text-[6rem] font-semibold text-white leading-none m-0 p-0"
  >
    {t("HomePage.AboutMe.hey")}
  </motion.h2>

  <motion.h3
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="text-[4rem] text-white leading-none m-0 p-0"
  >
    {t("HomePage.AboutMe.im")}
  </motion.h3>
</div>

            {/* Columna derecha: h1, p, flecha */}
            <div className="w-full flex flex-col items-start bg-green-900/10 pl-8 lg:pl-12">
  <motion.h1
    initial={{ y: -200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="font-bold text-[#FF5733] text-[15rem] animate-ionFlip leading-[1] text-left text-left"
  >
    {t("HomePage.AboutMe.ion")}
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 1 }}
    className="text-white text-[1.75rem] max-w-[55rem] w-full text-left mt-6"
  >
                {t("HomePage.AboutMe.text")}
              </motion.p>

              <motion.button
  onClick={onScrollToNext}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4, duration: 1 }}
  className="bg-transparent text-white hover:text-[#FF5733] transition-colors"
  aria-label="Scroll to next section"
>
  <ChevronDown className="w-28 h-28 animate-bounce" />
</motion.button>

            </div>
          </div>

          {/* Mobile & Tablet layout (sin cambios) */}
          <div className="flex flex-col lg:hidden items-center text-center gap-3 relative z-30">
            <div
              className={`
                absolute 
                w-full 
                flex justify-center
                top-[82%]
                sm:top-[83%]
                md:top-[84%]
              `}
            >
              <motion.h1
  initial={{ y: -200, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="font-bold text-[#FF5733] text-[15rem] animate-ionFlip leading-[1] text-left lg:-translate-x-4 border"
>
  ion
</motion.h1>

            </div>

            <motion.h2
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-[6rem] font-semibold text-white leading-tight m-0"
            >
              HOLA
            </motion.h2>

            <motion.h3
  initial={{ x: "100vw", opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="text-[4rem] text-white leading-tight m-0"
>
  Soy
</motion.h3>


            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-white text-base max-w-md border"
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

