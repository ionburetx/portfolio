import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/desweb/playwrong/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Playwrong = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen px-4 py-8 text-white flex flex-row gap-6" style={{ height: '100vh' }}>
      
      {/* Columna izquierda */}
      <div 
        className="w-[40%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.logo")}
        </h2>
        <img src={images['Logoplaywrongblanco.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.medallon")}
        </h2>
        <img src={images['medallon.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.trending")}
        </h2>
        <img src={images['pw2.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.genero")}
        </h2>
        <img src={images['pw3.png']} alt="Marca imagen" className="w-full object-contain" />

        <h2 className="text-base md:text-xl lg:text-xl font-bold uppercase break-words">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.detalle")}
        </h2>
        <img src={images['pw1.png']} alt="Marca imagen" className="w-full object-contain" />
      </div>

      {/* Columna derecha */}
      <div 
        className="w-[60%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.descri1")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.intro")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.metodo")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.metodoDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.diseno")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.disenoDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.tecno")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.tecnoDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.componentes")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.componentesDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.rutas")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.rutasDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.testing")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.testingDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.funcion")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.funcionDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.conclusion")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.webdevelopment.projects.playwrong.conclusionDesc")}
        </p>
      </div>

    </div>
  );
};

export default Playwrong;
