import React from 'react'
import Header from '../components/Header'
import ContactSection from "../components/ContactSection";


const Home = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-auto">
      {/* Fondo que cubre todo el viewport */}
      <img
        src="/generalAssets/fondoBio.png"
        alt="Fondo Home"
        className="absolute inset-0 w-full h-full object-cover object-bottom object-right z-0"
      />

        {/* Overlay negro encima del fondo */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />

         <Header />

      {/* Contenido principal con padding top para no quedar debajo del header */}
      <main className="relative z-10 text-white pt-24">
        {/* Sección temporal de bienvenida */}
        <section className="px-8 mb-32">
          <h1 className="text-3xl md:text-5xl font-bold">Bienvenido a mi portfolio</h1>
          <p className="mt-4 text-lg">Aquí irán las secciones de biografía, trabajos, etc.</p>
        </section>

        {/* Aquí irá la sección de contacto */}
        <ContactSection />
      </main>

    </div>
  )
}

export default Home