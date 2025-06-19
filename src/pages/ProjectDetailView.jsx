import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import FlechaSimple from '../components/FlechaSimple';

// Array de proyectos para la navegación
const PROJECTS = ['dra', '7metropolis', 'kresala', 'constone', 'codigo', 'alquimiatrip'];

const ProjectDetailView = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const currentIndex = PROJECTS.indexOf(projectId);

  const handleClose = () => {
    // Asegurarnos de que lastScrollPosition existe antes de navegar
    const lastScrollPosition = localStorage.getItem('lastScrollPosition');
    if (!lastScrollPosition) {
      // Si por alguna razón no tenemos la posición guardada, al menos iremos a la sección de proyectos
      localStorage.setItem('lastScrollPosition', '1000'); // Valor aproximado para llegar a la sección de proyectos
    }
    
    // Usar replace para evitar que el usuario pueda volver al detalle con el botón de atrás
    navigate('/home', { replace: true });
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/project/${PROJECTS[currentIndex - 1]}`);
    } else {
      navigate(`/project/${PROJECTS[PROJECTS.length - 1]}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < PROJECTS.length - 1) {
      navigate(`/project/${PROJECTS[currentIndex + 1]}`);
    } else {
      navigate(`/project/${PROJECTS[0]}`);
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-[url('/generalAssets/fondoBienvenida.png')] bg-cover bg-center">
      <div className="min-h-screen w-full bg-black/50">
        {/* Header sticky */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* Navigation Bar sticky - Centrado en el viewport */}
        <div className="sticky top-16 z-40 w-full">
          <div className="w-full flex justify-center px-4 py-4 relative">
            {/* Contenedor central con las flechas y el título */}
            <div className="flex items-center gap-6">
              <button
                onClick={handlePrevious}
                className="text-white hover:text-tomato transition-colors bg-transparent"
                aria-label="Previous project"
              >
                <FlechaSimple direction="left" />
              </button>
              
              <h1 className="text-white text-3xl font-bold uppercase">
                {projectId}
              </h1>
              
              <button
                onClick={handleNext}
                className="text-white hover:text-tomato transition-colors bg-transparent"
                aria-label="Next project"
              >
                <FlechaSimple direction="right" />
              </button>
            </div>

            {/* Botón de cerrar posicionado absolutamente */}
            <button
              onClick={handleClose}
              className="text-white text-4xl hover:text-tomato transition-colors bg-transparent absolute right-4"
              aria-label="Close project view"
            >
              ×
            </button>
          </div>
        </div>

        {/* Project Content - Full width */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Project content will be dynamically loaded based on projectId */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
