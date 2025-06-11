import SectionHeader from "./SectionHeader";
import Acordeon from "./Acordeon";
import CVes from "../locales/CVes.json";
import { useEffect, useRef, useState } from "react";

const CV = () => {
  const content = CVes["es"];

  const scrollRef = useRef(null);
  const sobreMiRef = useRef(null);
  const estudiosRef = useRef(null);
  const experienciaRef = useRef(null);

  const [activeSection, setActiveSection] = useState("sobreMi");

  useEffect(() => {
    const handleScroll = () => {
      const scrollEl = scrollRef.current;
      if (!scrollEl) return;

      const scrollTop = scrollEl.scrollTop;
      const containerTop = scrollEl.getBoundingClientRect().top;
      const midpoint = scrollEl.clientHeight / 2;

      const checkPosition = (ref) => {
        const rect = ref.current.getBoundingClientRect();
        return rect.top - containerTop < midpoint;
      };

      if (checkPosition(experienciaRef)) {
        setActiveSection("experiencia");
      } else if (checkPosition(estudiosRef)) {
        setActiveSection("estudios");
      } else {
        setActiveSection("sobreMi");
      }
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="cv" className="w-full min-h-screen px-6 py-16 text-white">
      <SectionHeader title="CV" />

      <div className="flex flex-row gap-6 sm:gap-10 md:gap-14 w-full h-[calc(100vh-8rem)]">
        {/* Columna izquierda */}
        <div className="w-1/3 space-y-8 sticky top-24 self-start h-fit">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl uppercase text-white/50 font-bold">
              ION BURGOA ETXABURU
            </h1>
            <h2 className="text-sm sm:text-base md:text-xl text-white font-bold">
              Diseñador Gráfico /<br />
              Desarrollador FrontEnd
            </h2>
          </div>

          {/* Indicadores con scrollspy */}
          <div className="space-y-2">
            <p className={`uppercase text-sm font-bold ${activeSection === "sobreMi" ? "text-tomato" : "text-white"}`}>
              SOBRE MÍ
            </p>
            <p className={`uppercase text-sm font-bold ${activeSection === "estudios" ? "text-tomato" : "text-white"}`}>
              ESTUDIOS
            </p>
            <p className={`uppercase text-sm font-bold ${activeSection === "experiencia" ? "text-tomato" : "text-white"}`}>
              EXPERIENCIA
            </p>
          </div>

          <div>
            <a
              href="/generalAssets/CVdescarga.pdf"
              download
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border border-white bg-white/10 rounded-md hover:text-tomato transition w-fit max-w-[90%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              <span className="uppercase text-xs sm:text-sm font-semibold">
                Descarga mi CV
              </span>
            </a>
          </div>
        </div>

        {/* Columna derecha con scroll y referencias */}
        <div
          ref={scrollRef}
          className="w-2/3 space-y-12 overflow-y-auto max-h-[calc(100vh-8rem)] pr-4"
        >
          {/* SOBRE MÍ */}
          <div ref={sobreMiRef} className="space-y-4">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Diseñador gráfico con sólida base, combinada con un creciente interés y conocimiento en el desarrollo front-end. Gracias a mi experiencia en diseño, tengo un enfoque creativo, que combinando con tecnologías clave (HTML, CSS y JavaScript) logro tener un perfil multidisciplinario aportando un valor único al equipo para la creación de interfaces visuales atractivas y funcionales.
            </p>
          </div>

          {/* Estudios */}
          <div ref={estudiosRef}>
            <Acordeon title="Estudios" items={content.studies} />
          </div>

          {/* Experiencia */}
          <div ref={experienciaRef}>
            <Acordeon title="Experiencia" items={content.experience} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
