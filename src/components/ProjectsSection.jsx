import React from 'react'
import { useNavigate } from 'react-router-dom'
import SectionHeader from './SectionHeader'
import PhotographyCard from './PhotographyCard'

const ProjectsSection = () => {
  const navigate = useNavigate()

  // Importar todas las imágenes de fotografía
  const images = import.meta.glob('/src/assets/fotografia/*/*.jpg', { eager: true })

  // Array con slugs limpios y títulos para mostrar
  const categories = [
    { slug: 'animal', title: 'Animal' },
    { slug: 'arquitectura', title: 'Arquitectura' },
    { slug: 'calle', title: 'Calle' },
    { slug: 'estilo-de-vida', title: 'Estilo de vida' },
    { slug: 'naturaleza', title: 'Naturaleza' },
    { slug: 'paisaje', title: 'Paisaje' },
    { slug: 'producto', title: 'Producto' },
    { slug: 'retratos', title: 'Retratos' }
  ]

  // Función para obtener la primera imagen de la categoría
  function getFirstImage(categorySlug) {
    const key = Object.keys(images).find(path => path.includes(`/fotografia/${categorySlug}/1.jpg`))
    return key ? images[key].default : ''
  }

  return (
    <section id="projects" className="w-full min-h-screen px-8 mb-32">
      <SectionHeader title="Proyectos" />
      
      {/* Aquí las otras categorías que tienes (Diseño gráfico, etc) */}

      {/* CATEGORÍA: FOTOGRAFÍA */}
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold my-12 tracking-wider">
        Fotografía
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(({ slug, title }, index) => (
          <PhotographyCard
            key={index}
            image={getFirstImage(slug)}
            title={title}
            categorySlug={slug}
            // Navegar usando Link dentro de PhotographyCard, no hace falta onClick aquí
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
