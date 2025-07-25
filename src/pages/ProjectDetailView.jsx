import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import FlechaSimple from '../components/FlechaSimple';
import projectComponents from '../ProjectDetails';
import fondoBio from '@/assets/generalAssets/fondoBio.png'

// Mapeo de proyectos a subcategoría
const PROJECT_CATEGORIES = {
  dra: 'identidad',
  metropolis: 'identidad',
  kresala: 'identidad',
  constone: 'identidad',
  codigo: 'identidad',
  alquimiatrip: 'identidad',
  brokis: 'otros',
  triton: 'otros',
  triptico: 'otros',
  nalion: 'web',
  larulla: 'web',
  portfolio: 'web',
  playwrong: 'web',
};

const PROJECTS = [
  'dra', 'metropolis', 'kresala', 'constone', 'codigo', 'alquimiatrip',
  'brokis', 'triton', 'triptico',
  'nalion', 'larulla', 'portfolio', 'playwrong'
];

const ProjectDetailView = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  // 🔝 Al montar, forzar scroll arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtrar proyectos de la misma subcategoría
  const currentCategory = PROJECT_CATEGORIES[projectId];
  const filteredProjects = PROJECTS.filter(
    (id) => PROJECT_CATEGORIES[id] === currentCategory
  );
  const currentIndex = filteredProjects.indexOf(projectId);

  const handleClose = () => {
    const lastScrollPosition = localStorage.getItem('lastScrollPosition');
    if (!lastScrollPosition) {
      localStorage.setItem('lastScrollPosition', '1000');
    }
    navigate('/home', { replace: true });
  };

  const handlePrevious = () => {
    if (filteredProjects.length === 0) return;
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    navigate(`/project/${filteredProjects[prevIndex]}`);
  };

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    navigate(`/project/${filteredProjects[nextIndex]}`);
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
            <div className="flex items-center gap-px md:gap-1">
              <button
                onClick={handlePrevious}
                className="text-white hover:text-tomato transition-colors bg-transparent text-base md:text-3xl"
                aria-label="Previous project"
                style={{ minWidth: '32px' }}
              >
                <FlechaSimple direction="left" />
              </button>

              <h1 className="text-white text-xl md:text-3xl font-bold uppercase max-w-[50vw] truncate text-center">
                {projectId}
              </h1>

              <button
                onClick={handleNext}
                className="text-white hover:text-tomato transition-colors bg-transparent text-base md:text-3xl"
                aria-label="Next project"
                style={{ minWidth: '32px' }}
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
