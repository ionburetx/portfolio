import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const IdeCorCat = () => {
  const navigate = useNavigate();
  const [hasAnimated, setHasAnimated] = useState(() => {
    // Intentar recuperar el estado de las animaciones de sessionStorage
    const saved = sessionStorage.getItem('ideCorAnimations');
    return saved ? JSON.parse(saved) : {
      row1: false,
      row2: false,
      row3: false
    };
  });

  // Guardar el estado de las animaciones en sessionStorage cuando cambie
  useEffect(() => {
    sessionStorage.setItem('ideCorAnimations', JSON.stringify(hasAnimated));
  }, [hasAnimated]);

  const handleProjectClick = (projectId) => {
    // Guardar la posición actual del scroll antes de navegar
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
  const [ref3, inView3] = useInView({
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
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('dra')}>
            <img
              src="src/assets/ideCor/Dra/DRA!.jpg"
              alt="DRA!"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">DRA!</h3>
            <p className="text-base mb-3">Diseñador Gráfico</p>
            <p className="text-lg">1.</p>
            <button
              type="button"
              aria-label="Más info sobre DRA!"
              onClick={() => handleProjectClick('dra')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start border border-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-row-reverse lg:flex-row w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('7metropolis')}>
            <img
              src="src/assets/ideCor/7Metropolis/7m.jpg"
              alt="7 Metropolis"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">7METRÓPOLIS</h3>
            <p className="text-base mb-3">Diseñador Gráfico</p>
            <p className="text-lg">2.</p>
            <button
              type="button"
              aria-label="Más info sobre 7 Metropolis"
              onClick={() => handleProjectClick('7metropolis')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start border border-white"
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
      >
        {/* Card 3 */}
        <div className="flex flex-row lg:flex-row-reverse w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('kresala')}>
            <img
              src="src/assets/ideCor/Kresala/kresala.jpg"
              alt="Kresala"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">KRESALA</h3>
            <p className="text-base mb-3">Consultor</p>
            <p className="text-lg">3.</p>
            <button
              type="button"
              aria-label="Más info sobre Kresala"
              onClick={() => handleProjectClick('kresala')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-row lg:flex-row w-full lg:w-1/2">
          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">CONSTONE</h3>
            <p className="text-base mb-3">Director Creativo</p>
            <p className="text-lg">4.</p>
            <button
              type="button"
              aria-label="Más info sobre Constone"
              onClick={() => handleProjectClick('constone')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>

          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('constone')}>
            <img
              src="src/assets/ideCor/Constone/constone.jpg"
              alt="Constone"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Tercera fila - desde derecha */}
      <div 
        ref={ref3}
        className={`flex flex-col lg:flex-row gap-0 ${getAnimationClass('slide-from-right', inView3, 'row3')}`}
      >
        {/* Card 5 */}
        <div className="flex flex-row w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('codigo')}>
            <img
              src="src/assets/ideCor/Codigo/codigo.jpg"
              alt="Código"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">CÓDIGO</h3>
            <p className="text-base mb-3">Diseñador Gráfico</p>
            <p className="text-lg">5.</p>
            <button
              type="button"
              aria-label="Más info sobre CÓDIGO"
              onClick={() => handleProjectClick('codigo')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-arrow-right transition self-start border border-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex flex-row-reverse lg:flex-row w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('alquimiatrip')}>
            <img
              src="src/assets/ideCor/alquimia/alquimia.jpg"
              alt="Alquimia Trip"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>

          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">ALQUIMIA TRIP</h3>
            <p className="text-base mb-3">Diseñador Gráfico</p>
            <p className="text-lg">6.</p>
            <button
              type="button"
              aria-label="Más info sobre Alquimia Trip"
              onClick={() => handleProjectClick('alquimiatrip')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start border border-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeCorCat;
