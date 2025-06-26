import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/desweb/nalion/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Nalion = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen px-4 py-8 text-white flex flex-row gap-6" style={{ height: '100vh' }}>
      
      {/* Columna izquierda */}
      <div 
        className="w-[40%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.logo")}
        </h2>
        <img src={images['LOGONalion.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.cartel")}
        </h2>
        <img src={images['CARTEL.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-xl md:text-2xl lg:text-4xl font-light uppercase break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.desktop")}
        </h2>

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.principal")}
        </h2>

        <h2 className="text-base md:text-xl lg:text-xl uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.trending")}
        </h2>
        <img src={images['1.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.genero")}
        </h2>
        <img src={images['2.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.detalle")}
        </h2>
        <img src={images['4.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-xl md:text-2xl lg:text-4xl uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.movil")}
        </h2>

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.principal")}
        </h2>
        <img src={images['5.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.detalle")}
        </h2>
        <img src={images['6.png']} alt="Marca imagen" className="w-full object-contain" />
      </div>

      {/* Columna derecha */}
      <div 
        className="w-[60%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.descri1")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.metodo")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.metodoDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.boceto")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.bocetoDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.desarrollo")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.desarrolloDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.publi")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.publiDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.conclusion")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.nalion.conclusionDesc")}
        </p>
      </div>

    </div>
  );
};

export default Nalion;
