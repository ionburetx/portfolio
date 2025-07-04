import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Importar imágenes de OtrosCat
import brokisImg from '@/assets/otros/brokis/triptico2.jpg';
import cascosImg from '@/assets/otros/cascos/Packagingd.jpg';
import tripticoImg from '@/assets/otros/tripticos/triptico2.jpg';

const OtrosCat = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hasAnimated, setHasAnimated] = useState(() => {
    const saved = sessionStorage.getItem('otrosAnimations');
    return saved ? JSON.parse(saved) : {
      row1: false,
      row2: false
    };
  });

  // Guardar el estado de las animaciones en sessionStorage cuando cambie
  useEffect(() => {
    sessionStorage.setItem('otrosAnimations', JSON.stringify(hasAnimated));
  }, [hasAnimated]);

  const handleProjectClick = (projectId) => {
    localStorage.setItem('lastScrollPosition', window.scrollY);
    navigate(`/project/${projectId}`);
  };

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "-50px 0px"
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "-50px 0px"
  });

  // Función para manejar la animación de cada fila
  const handleAnimation = (row, inView) => {
    if (inView && !hasAnimated[row]) {
      setHasAnimated(prev => ({ ...prev, [row]: true }));
      return true;
    }
    return hasAnimated[row];
  };

  // Función para obtener la clase de animación
  const getAnimationClass = (direction, inView, row) => {
    const shouldAnimate = handleAnimation(row, inView);
    return shouldAnimate ? `${direction} visible` : direction;
  };

  return (
    <div className="w-full">
      <style>
        {`
          .slide-from-right {
            opacity: 0;
            transform: translateX(50%);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .slide-from-left {
            opacity: 0;
            transform: translateX(-50%);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .slide-from-right.visible {
            opacity: 1;
            transform: translateX(0);
          }

          .slide-from-left.visible {
            opacity: 1;
            transform: translateX(0);
          }
        `}
      </style>

      {/* Primera fila - desde derecha */}
      <div 
        ref={ref1}
        className={`flex flex-col lg:flex-row gap-0 ${getAnimationClass('slide-from-right', inView1, 'row1')}`}
      >
        {/* Card 1 */}
        <div className="flex flex-row w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('brokis')}>
            <img
              src={brokisImg}
              alt="Brokis"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">BROKIS</h3>
            <p className="text-lg">{t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.brokis.descri")}</p>
            <button
              type="button"
              aria-label="Más info sobre Brokis"
              onClick={() => handleProjectClick('brokis')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-row-reverse lg:flex-row w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('cascos')}>
            <img
              src={cascosImg}
              alt="Cascos"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">TRITON</h3>
            <p className="text-lg">{t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.descri")}</p>
            <button
              type="button"
              aria-label="Más info sobre Cascos"
              onClick={() => handleProjectClick('triton')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Segunda fila - desde izquierda */}
      <div 
        ref={ref2}
        className={`flex flex-col lg:flex-row gap-0 ${getAnimationClass('slide-from-left', inView2, 'row2')}`}
      >          {/* Card 3 */}
          <div className="flex flex-row lg:flex-row-reverse w-full lg:w-1/2">
            <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('triptico')}>
              <img
                src={tripticoImg}
                alt="Tríptico La Salle"
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>

            <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
              <h3 className="text-2xl font-semibold mb-3">TRÍPTICOS</h3>
              <p className="text-lg">{t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.descri")}</p>
              <button
                type="button"
                aria-label="Más info sobre Trípticos"
                onClick={() => handleProjectClick('triptico')}
                className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
              >
                +
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OtrosCat;
