import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import ilustracion1 from "../../../../assets/ilustracion/ilustracion1.png";

const Illustration = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <>
      <style>
        {`
          /* Móviles (por defecto) */
          @keyframes slideIn {
            0% {
              transform: translateX(100vw) scale(20);
            }
            100% {
              transform: translateX(calc(-2000% + 100vw)) scale(20);
            }
          }

          /* sm: ≥640px */
          @media (min-width: 640px) {
            @keyframes slideIn {
              0% {
                transform: translateX(100vw) scale(8);
              }
              100% {
                transform: translateX(calc(-800% + 100vw)) scale(8);
              }
            }
          }

          /* md: ≥768px */
          @media (min-width: 768px) {
            @keyframes slideIn {
              0% {
                transform: translateX(100vw) scale(9);
              }
              100% {
                transform: translateX(calc(-900% + 100vw)) scale(9);
              }
            }
          }

          /* lg: ≥1024px */
          @media (min-width: 1024px) {
            @keyframes slideIn {
              0% {
                transform: translateX(100vw) scale(4);
              }
              100% {
                transform: translateX(calc(-400% + 100vw)) scale(4);
              }
            }
          }

          .animate-slide {
            animation: slideIn 30s ease-out forwards;
          }

          .illustration-container {
            width: 100%;
            min-height: 300vh;
            position: relative;
          }

          .illustration-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
        `}
      </style>

      <div
        ref={ref}
        className="illustration-container"
      >
        {/* Versión para móviles y tablets */}
        <img
          src={ilustracion1}
          alt="Ilustración"
          className={`${
            animate ? "animate-slide" : "translate-x-[100vw]"
          } block lg:hidden scale-[20] sm:scale-[8] md:scale-[9] origin-top-left pointer-events-none select-none`}
        />
        {/* Versión para desktop */}
        <img
          src={ilustracion1}
          alt="Ilustración"
          className={`${
            animate ? "animate-slide" : "translate-x-[100vw]"
          } hidden lg:block scale-[4] origin-top-left pointer-events-none select-none`}
        />
      </div>
    </>
  );
};

export default Illustration;


