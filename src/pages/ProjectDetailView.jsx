import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import FlechaSimple from '../components/FlechaSimple';
import projectComponents from '../ProjectDetails';
import fondoBio from '@/assets/generalAssets/fondoBio.png'

// Array de proyectos para la navegación
const PROJECTS = ['dra', 'metropolis', 'kresala', 'constone', 'codigo', 'alquimiatrip'];

const ProjectDetailView = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  // 🔝 Al montar, forzar scroll arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentIndex = PROJECTS.indexOf(projectId);
console.log('Current project index:', currentIndex);
  const handleClose = () => {
    const lastScrollPosition = localStorage.getItem('lastScrollPosition');
    if (!lastScrollPosition) {
      localStorage.setItem('lastScrollPosition', '1000');
    }
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
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Fondo con blur mediante ::before */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed blur-sm z-0"
  style={{ backgroundImage: `url(${fondoBio})` }} />

      {/* Capa de contenido con fondo negro semitransparente */}
      <div className="relative min-h-screen w-full bg-black/50 z-10">
        {/* Header sticky */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* Navigation Bar sticky */}
        <div className="sticky top-16 z-40 w-full">
          <div className="w-full flex justify-center px-4 py-4 relative">
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

            <button
              onClick={handleClose}
              className="text-white text-4xl hover:text-tomato transition-colors bg-transparent absolute right-4 z-60"
              aria-label="Close project view"
            >
              ×
            </button>
          </div>
        </div>

        {/* Project Content */}
        <div className="w-full px-4 py-10">
          {projectComponents[projectId] ? (
            React.createElement(projectComponents[projectId])
          ) : (
            <p className="text-white text-center text-lg">
              Este proyecto aún no tiene contenido definido.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
