import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/desweb/zapateria/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const LaRulla = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen px-4 py-8 text-white flex flex-row gap-6" style={{ height: '100vh' }}>
      
      {/* Columna izquierda */}
      <div 
        className="w-[40%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        {/* Marca */}
        <h2 className="text-lg md:text-2xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.titlanding")}
        </h2>
        <img src={images['zapa1.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-lg md:text-2xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.titcarro")}
        </h2>
        <img src={images['zapa2.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-lg md:text-2xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.titpdf")}
        </h2>
        <img src={images['zapa3.png']} alt="Marca imagen" className="w-full object-contain" />
      </div>

      {/* Columna derecha */}
      <div 
        className="w-[60%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.descri1")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.intro")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.para")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.como")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.este")}
        </p>
      </div>

    </div>
  );
};

export default LaRulla;
