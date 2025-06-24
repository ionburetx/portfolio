import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import ilustracion1 from "../../../../assets/ilustracion/ilustracion1.png";

const Illustration = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [animate, setAnimate] = useState(false);
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    console.log("In view:", inView);
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  useEffect(() => {
    if (imgRef.current) {
      setImgHeight(imgRef.current.offsetHeight);
    }
  }, [animate]);

  return (
    <>
      <style>
        {`
          /* Móviles (por defecto) */
          @keyframes slideIn {
            0% {
              transform: translateX(100vw) scale(10);
            }
            100% {
              transform: translateX(calc(-1000% + 100vw)) scale(10);
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
        className="illustration-container flex flex-col items-start justify-start p-0 m-0"
        style={{ minHeight: "unset", height: "auto" }}
      >
        <img
          ref={imgRef}
          src={ilustracion1}
          alt="Ilustración"
          className={`${animate ? "animate-slide" : "translate-x-[100vw]"} scale-[12] sm:scale-[8] md:scale-[9] lg:scale-[4] origin-top-left pointer-events-none select-none mb-0`}
          style={{ display: "block" }}
          onLoad={() =>
            setImgHeight(
              imgRef.current ? imgRef.current.offsetHeight : 0
            )
          }
        />
        {/* Spacer below the image, only if height is measured */}
        <div
          style={{ height: imgHeight, width: "100%" }}
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default Illustration;


