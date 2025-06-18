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
          @keyframes slideIn {
            0% {
              transform: translateX(100vw) scale(5);
            }
            100% {
              transform: translateX(calc(100vw - 500%)) scale(5);
            }
          }

          @media (min-width: 640px) {
            @keyframes slideIn {
              0% {
                transform: translateX(100vw) scale(5.2);
              }
              100% {
                transform: translateX(calc(100vw - 520%)) scale(5.2);
              }
            }
          }

          @media (min-width: 768px) {
            @keyframes slideIn {
              0% {
                transform: translateX(100vw) scale(5.5);
              }
              100% {
                transform: translateX(calc(100vw - 550%)) scale(5.5);
              }
            }
          }

          @media (min-width: 1024px) {
            @keyframes slideIn {
              0% {
                transform: translateX(100vw) scale(4);
              }
              100% {
                transform: translateX(calc(100vw - 400%)) scale(4);
              }
            }
          }

          .animate-slide {
            animation: slideIn 30s ease-out forwards;
          }
        `}
      </style>

      <div
        ref={ref}
        className="w-full min-h-[300vh] overflow-hidden flex justify-start items-start"
      >
        <img
          src={ilustracion1}
          alt="Ilustración"
          className={`${
            animate ? "animate-slide" : "translate-x-[100vw]"
          } scale-[5] sm:scale-[5.2] md:scale-[5.5] lg:scale-[4] origin-top-left pointer-events-none select-none`}
        />
      </div>
    </>
  );
};

export default Illustration;










