import { useState } from "react";
import { useTranslation } from "react-i18next";

const Acordeon = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Detectar si es la sección de Estudios
  const isEstudios = title.toLowerCase().includes("estudios");

  return (
    <div className="space-y-6">
      <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-t border-white/30 pt-4">
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              {/* Columna de texto */}
              <div className="max-w-[80%] break-words">
                <h4 className="text-lg font-semibold">{item.title}</h4>

                {/* Experiencia: mostrar where y when siempre */}
                {!isEstudios && (
                  <p className="text-sm text-white/60 mt-1">
                    {item.where} {item.where && `| ${item.when}`}
                  </p>
                )}

                {/* Estudios: mostrar where y when solo al desplegar */}
                {isEstudios && openIndex === index && (
                  <p className="text-sm text-white/60 mt-1">
                    {item.where} {item.where && `| ${item.when}`}
                  </p>
                )}
              </div>

              {/* Botón + / - */}
              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full border border-white/50 bg-white/10 text-2xl font-bold leading-none transition-colors ${
                  openIndex === index ? "text-tomato" : "text-white/80"
                }`}
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>

            {/* Contenido desplegable */}
            {openIndex === index && (
              <p className="mt-2 text-white/80 leading-relaxed whitespace-pre-line">{t(item.content)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acordeon;
