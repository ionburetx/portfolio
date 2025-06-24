import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import ContactSection from "../components/ContactSection/ContactSection";
import CV from "../components/CVSection/CV";
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import AboutSection from "../components/AboutSection/AboutSection";
import fondoBio from '@/assets/generalAssets/fondoBio.png'

const Home = () => {
  const location = useLocation()

  const scrollToProjects = () => {
    const el = document.getElementById('trabajos');
    if (el) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8; // 8px extra margen
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    // Restaurar la posición del scroll después de que el componente se monte completamente
    const restoreScroll = () => {
      const lastScrollPosition = localStorage.getItem('lastScrollPosition');
      if (lastScrollPosition) {
        window.scrollTo({
          top: parseInt(lastScrollPosition),
          behavior: 'instant' // Usamos 'instant' para evitar la animación
        });
        localStorage.removeItem('lastScrollPosition');
      }
    };

    // Darle tiempo al DOM para renderizarse completamente
    const timer = setTimeout(restoreScroll, 100);

    // Si hay un hash en la URL, manejarlo después de restaurar el scroll
    if (location.hash) {
      const hashTimer = setTimeout(() => {
        const id = location.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 200);
      return () => clearTimeout(hashTimer);
    }

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative w-screen min-h-screen overflow-auto">
      {/* Fondo que cubre todo el viewport */}
      <img
        src={fondoBio}
        alt="Fondo Home"
        className="fixed top-0 left-0 w-screen h-screen object-cover object-right z-0"
      />

      {/* Overlay negro encima del fondo */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      <Header />

      <section id="sobre-mi" style={{
    position: 'relative',
    zIndex: 20
  }}>
</section>

      {/* Contenido principal con padding top para no quedar debajo del header */}
     <main className="relative z-10 text-white pt-20 md:pt-24">
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

