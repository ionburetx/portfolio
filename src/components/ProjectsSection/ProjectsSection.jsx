import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionHeader from '../SectionHeader'
import PhotographyCard from './Photography/PhotographyCard'
import GraphicDesignCat from './GraphicDesign/GraphicDesignCat'
import WebDevelopmentCat from "./WebDevelopmentCat/WebDevelopmentCat";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  // Importar todas las imágenes de fotografía
  const images = import.meta.glob('/src/assets/fotografia/*/*.jpg', { eager: true })

  // Categorías en orden fijo
  const categories = [
    { slug: 'animal' },
    { slug: 'arquitectura'},
    { slug: 'calle'},
    { slug: 'estilo-de-vida'},
    { slug: 'naturaleza'},
    { slug: 'paisaje'},
    { slug: 'producto'},
    { slug: 'retratos'},
  ]

  // Obtener primera imagen para la card
  function getFirstImage(categorySlug) {
    const key = Object.keys(images).find(path => path.includes(`/fotografia/${categorySlug}/1.jpg`))
    return key ? images[key].default : ''
  }

  // Guardar scroll en sessionStorage al navegar a galería
  function handleCategoryClick(slug) {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    navigate(`/galeria/${slug}`)
  }

  // Al montar, si hay scroll guardado, hacer scroll
  useEffect(() => {
    const scrollPos = sessionStorage.getItem('scrollPosition')
    if (scrollPos) {
      window.scrollTo({ top: parseInt(scrollPos, 10), behavior: 'smooth' })
      sessionStorage.removeItem('scrollPosition')
    }
  }, [])

  return (
    <section id="trabajos" className="w-full min-h-screen px-0 mb-32">
      <SectionHeader titleKey="projects" />

      {/* Diseño Gráfico */}
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold my-16 tracking-wider">
        {t("HomePage.ProjectsSection.graphicdesign.title")}
      </h2>
      <GraphicDesignCat />

      {/* Desarrollo Web */}
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold my-16 tracking-wider">
        {t("HomePage.ProjectsSection.webdevelopment.title")}
      </h2>
      <WebDevelopmentCat />

      {/* Categoría Fotografía */}
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold my-12 tracking-wider">
        {t("HomePage.ProjectsSection.photography.title")}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {categories.map(({ slug, title }, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(slug)}
            className="cursor-pointer"
          >
            <PhotographyCard
              image={getFirstImage(slug)}
              title={t(`HomePage.ProjectsSection.photography.${slug}`)}
              categorySlug={slug}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
