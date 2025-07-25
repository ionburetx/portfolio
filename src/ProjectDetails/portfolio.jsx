import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/desweb/portfolio/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full min-h-screen px-4 py-8 text-white overflow-hidden">
      {/* Columna izquierda */}
      <div 
        className="w-[40%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <h2 className="text-xl md:text-2xl lg:text-4xl font-light uppercase break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.portfolio.movil")}
        </h2>

        <h2 className="text-base md:text-xl lg:text-xl uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.portfolio.vert")}
        </h2>

        <img src={images['1.png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Sobre mi Movil (Vertical).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Ide Cor Movil (Vertical).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Ide Cor Movil (Vertical) (1).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Fotografía Movil (Vertical).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Rama fotográfica Movil (Vertical).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Modal Fotografía Movil (Vertical).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['CV Movil (Vertical).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Contacto Movil (Vertical).png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.portfolio.hori")}
        </h2>

        <img src={images['Idiomas Movil (Horizontal).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Linea Movil (Horizontal) (1).png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-xl md:text-2xl lg:text-4xl font-light uppercase break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.portfolio.desktop")}
        </h2>

        <img src={images['Idiomas (DeskTop).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Línea (DeskTop).png']} alt="Marca imagen" className="w-full object-contain" />
        <img src={images['Presentación(DeskTop).png']} alt="Marca imagen" className="w-full object-contain" />
      </div>

      {/* Columna derecha */}
      <div className="w-[60vw] flex flex-col gap-6 pl-4">
         {/* Des */}
        <p className="text-base md:text-lg lg:text-xl font-bold text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.codigo.descri1")}
        </p>

        {/* Texto */}
        <p className="text-base md:text-lg lg:text-xl text-left leading-relaxed">
          {t("HomePage.ProjectsSection.webdevelopment.projects.portfolio.texto")}
        </p>
      </div>
    </div>
  );
};

export default Portfolio;