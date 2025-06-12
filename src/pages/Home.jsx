import React from 'react'
import Header from '../components/Header'
import ContactSection from "../components/ContactSection";
import CV from "../components/CV";
import ProjectsSection from '../components/ProjectsSection'
import { AboutSection } from "../components/AboutSection";


const Home = () => {

  // 👉 Aquí va la función de scroll
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-screen min-h-screen overflow-auto">
      {/* Fondo que cubre todo el viewport */}
      <img
        src="/generalAssets/fondoBio.png"
        alt="Fondo Home"
        className="fixed top-0 left-0 w-screen h-screen object-cover object-right z-0"
/>

      {/* Overlay negro encima del fondo */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      <Header />

      {/* Contenido principal con padding top para no quedar debajo del header */}
     <main className="relative z-10 text-white pt-10 md:pt-14">
    
        {/* 👉 Pasamos la función de scroll como prop */}
        <AboutSection onScrollToNext={scrollToProjects} />
        <ProjectsSection />
        <CV />
        <ContactSection />
      </main>
    </div>
  )
}

export default Home
