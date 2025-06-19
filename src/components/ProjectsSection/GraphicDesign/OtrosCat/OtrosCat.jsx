import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const OtrosCat = () => {
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
              src="src/assets/otros/brokis/trptico argi2 trasero.jpg"
              alt="Brokis"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">BROKIS</h3>
            <p className="text-base mb-3">Diseñador Gráfico</p>
            <p className="text-lg">Descripción corta del proyecto 1.</p>
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
              src="src/assets/otros/cascos/Packaging cascos 3D.jpg"
              alt="Cascos"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">CASCOS</h3>
            <p className="text-base mb-3">Director Creativo</p>
            <p className="text-lg">Descripción corta del proyecto 2.</p>
            <button
              type="button"
              aria-label="Más info sobre Cascos"
              onClick={() => handleProjectClick('cascos')}
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
            <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('tripticos')}>
              <img
                src="src/assets/otros/tripticos/triptico la salle.jpg"
                alt="Trípticos"
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>

            <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
              <h3 className="text-2xl font-semibold mb-3">TRÍPTICOS</h3>
              <p className="text-base mb-3">Diseñador Gráfico</p>
              <p className="text-lg">Descripción corta del proyecto 3.</p>
              <button
                type="button"
                aria-label="Más info sobre Trípticos"
                onClick={() => handleProjectClick('tripticos')}
                className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
              >
                +
              </button>
            </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-row w-full lg:w-1/2">
          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">CARTELES</h3>
            <p className="text-base mb-3">Diseñador Gráfico</p>
            <p className="text-lg">Descripción corta del proyecto 4.</p>
            <button
              type="button"
              aria-label="Más info sobre Carteles"
              onClick={() => handleProjectClick('carteles')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>

          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('carteles')}>
            <img
              src="src/assets/otros/carteles/cartel1.jpg"
              alt="Carteles"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtrosCat;
