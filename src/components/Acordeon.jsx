import { useState } from "react";

const Acordeon = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {/* Título del acordeón más pequeño en móviles */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-t border-white/30 pt-4">
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              {/* Texto con max-width para que no pise el botón */}
              <div className="max-w-[80%] break-words">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                {item.subtitle && (
                  <p className="text-sm text-white/60">{item.subtitle}</p>
                )}
              </div>

              {/* Botón + / - redondo, blanco semitransparente, cambia a naranja cuando está abierto */}
              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full border border-white/50 bg-white/10 text-2xl font-bold leading-none transition-colors ${
                  openIndex === index ? "text-tomato" : "text-white/80"
                }`}
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>

            {/* Contenido desplegado */}
            {openIndex === index && (
              <p className="mt-2 text-white/80 leading-relaxed">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acordeon;

