import Card from "./Card";
import { useInView } from "react-intersection-observer";

const IdeCorCat = () => {
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
        className={`grid grid-cols-1 md:grid-cols-4 gap-0 slide-from-right ${
          inView1 ? 'visible' : ''
        }`}
      >
        {/* Imagen 1 */}
        <div className="col-span-1">
          <img
            src="src/assets/ideCor/Dra/logu/dradultz.png"
            alt="DRA!"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Texto 1 */}
        <div className="col-span-1 flex flex-col pt-8 p-6 relative text-white">
          <h3 className="text-2xl font-semibold mb-3">DRA!</h3>
          <p className="text-base mb-3">Diseñador Gráfico</p>
          <p className="text-lg">Descripción corta del proyecto 1.</p>
          <button
            type="button"
            aria-label="Más info sobre DRA!"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start border border-white"
          >
            +
          </button>
        </div>

        {/* Imagen 2 */}
        <div className="col-span-1">
          <img
            src="src/assets/ideCor/7Metropolis/Logos/logo.jpg"
            alt="7 Metropolis"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Texto 2 */}
        <div className="col-span-1 flex flex-col pt-8 p-6 relative text-white">
          <h3 className="text-2xl font-semibold mb-3">7METRÓPOLIS</h3>
          <p className="text-base mb-3">Diseñador Gráfico</p>
          <p className="text-lg">Descripción corta del proyecto 2.</p>
          <button
            type="button"
            aria-label="Más info sobre 7 Metropolis"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start border border-white"
          >
            +
          </button>
        </div>
      </div>

      {/* Segunda fila - invertida: texto primero, imagen después */}
      <div 
        ref={ref2}
        className={`grid grid-cols-1 md:grid-cols-4 gap-0 slide-from-left ${
          inView2 ? 'visible' : ''
        }`}
      >
        {/* Texto 3 */}
        <div className="col-span-1 flex flex-col pt-8 p-6 relative text-white items-end text-right">
          <h3 className="text-2xl font-semibold mb-3">KRESALA</h3>
          <p className="text-base mb-3">Consultor</p>
          <p className="text-lg">Descripción corta del proyecto 3.</p>
          <button
            type="button"
            aria-label="Más info sobre Empresa 3"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
          >
            +
          </button>
        </div>

        {/* Imagen 3 */}
        <div className="col-span-1">
          <img
            src="src/assets/ideCor/Kresala/kresala 2 jpeg.jpg"
            alt="Empresa 3"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Texto 4 */}
        <div className="col-span-1 flex flex-col pt-8 p-6 relative text-white items-end text-right">
          <h3 className="text-2xl font-semibold mb-3">CONSTONE</h3>
          <p className="text-base mb-3">Director Creativo</p>
          <p className="text-lg">Descripción corta del proyecto 4.</p>
          <button
            type="button"
            aria-label="Más info sobre Empresa 4"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition border border-white"
          >
            +
          </button>
        </div>

        {/* Imagen 4 */}
        <div className="col-span-1">
          <img
            src="src/assets/ideCor/Constone/constone logo.jpg"
            alt="Empresa 4"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Imagen 5 */}
        <div className="col-span-1">
          <img
            src="src/assets/ideCor/Codigo/codigo logo.jpg"
            alt="DRA!"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Texto 5 */}
        <div className="col-span-1 flex flex-col pt-8 p-6 relative text-white">
          <h3 className="text-2xl font-semibold mb-3">CÓDIGO</h3>
          <p className="text-base mb-3">Diseñador Gráfico</p>
          <p className="text-lg">Descripción corta del proyecto 1.</p>
          <button
            type="button"
            aria-label="Más info sobre DRA!"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start border border-white"
          >
            +
          </button>
        </div>

        {/* Imagen 6 */}
        <div className="col-span-1">
          <img
            src="src/assets/ideCor/7Metropolis/Logos/logo.jpg"
            alt="7 Metropolis"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Texto 6 */}
        <div className="col-span-1 flex flex-col pt-8 p-6 relative text-white">
          <h3 className="text-2xl font-semibold mb-3">ALQUIMIA TRIP</h3>
          <p className="text-base mb-3">Diseñador Gráfico</p>
          <p className="text-lg">Descripción corta del proyecto 2.</p>
          <button
            type="button"
            aria-label="Más info sobre 7 Metropolis"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start border border-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeCorCat;
