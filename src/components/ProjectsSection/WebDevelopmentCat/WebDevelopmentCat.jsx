import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Importar imágenes de desarrollo web
import naliImg from '@/assets/desweb/nalion/nali.jpg';
import zapaImg from '@/assets/desweb/zapateria/zapa.jpg';
import ionImg from '@/assets/desweb/portfolio/ion.jpg';
import pwImg from '@/assets/desweb/playwrong/pw.jpg';

const WebDevelopment = () => {
  const navigate = useNavigate();
  const [hasAnimated, setHasAnimated] = useState(() => {
    const saved = sessionStorage.getItem('webDevAnimations');
    return saved ? JSON.parse(saved) : {
      row1: false,
      row2: false
    };
  });

  useEffect(() => {
    sessionStorage.setItem('webDevAnimations', JSON.stringify(hasAnimated));
  }, [hasAnimated]);

  const handleProjectClick = (projectId) => {
    localStorage.setItem('lastScrollPosition', window.scrollY);
    navigate(`/project/${projectId}`);
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0, rootMargin: "-50px 0px" });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0, rootMargin: "-50px 0px" });

  const handleAnimation = (row, inView) => {
    if (inView && !hasAnimated[row]) {
      setHasAnimated(prev => ({ ...prev, [row]: true }));
      return true;
    }
    return hasAnimated[row];
  };

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

      {/* Primera fila */}
      <div 
        ref={ref1}
        className={`flex flex-col lg:flex-row gap-0 ${getAnimationClass('slide-from-right', inView1, 'row1')}`}
      >
        {/* Card 1 */}
        <div className="flex flex-row w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('nalion')}>
            <img
              src={naliImg}
              alt="Nalion"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">NALION</h3>
            <p className="text-lg">1.</p>
            <button
              type="button"
              aria-label="Más info sobre Nalion"
              onClick={() => handleProjectClick('nalion')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-row-reverse lg:flex-row w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('zapateria')}>
            <img
              src={zapaImg}
              alt="Zapatería"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">LA RULLA</h3>
            <p className="text-lg">2.</p>
            <button
              type="button"
              aria-label="Más info sobre La Rulla"
              onClick={() => handleProjectClick('zapateria')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Segunda fila */}
      <div 
        ref={ref2}
        className={`flex flex-col lg:flex-row gap-0 ${getAnimationClass('slide-from-left', inView2, 'row2')}`}
      >
        {/* Card 3 */}
        <div className="flex flex-row lg:flex-row-reverse w-full lg:w-1/2">
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('portfolio')}>
            <img
              src={ionImg}
              alt="Portfolio Ion"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">PORTFOLIO</h3>
            <p className="text-lg">3.</p>
            <button
              type="button"
              aria-label="Más info sobre Portfolio"
              onClick={() => handleProjectClick('portfolio')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-row lg:flex-row w-full lg:w-1/2">
          <div className="w-1/2 flex flex-col pt-8 p-6 relative text-white justify-center">
            <h3 className="text-2xl font-semibold mb-3">PLAYWRONG</h3>
            <p className="text-lg">4.</p>
            <button
              type="button"
              aria-label="Más info sobre Playwrong"
              onClick={() => handleProjectClick('playwrong')}
              className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
            >
              +
            </button>
          </div>
          <div className="w-1/2 cursor-pointer aspect-square" onClick={() => handleProjectClick('playwrong')}>
            <img
              src={pwImg}
              alt="PlayWrong"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
