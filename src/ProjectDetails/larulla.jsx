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
    <div className="text-white px-4 py-8 space-y-6">

      {/* 1. Intro */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.intro")}
      </p>

      {/* 2. TÍTULO: IMAGEN */}
      <h2 className="text-xl font-bold uppercase w-full">
        {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.titlanding")}
      </h2>

      {/* 3. Imagen LANDING */}
      <img
        src={images['zapa1.png']}
        alt="Packaging planta"
        className="w-full lg:w-1/2 object-contain mx-auto"
      />

      {/* 4. Texto DESARROLLAR */}
      <p className="text-base w-full">
        {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.para")}
      </p>

      {/* 5. Titulo CARRITO */}
      <h2 className="text-xl font-bold uppercase w-full">
        {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.titcarro")}
      </h2>

      {/* 6. Imagen CARRITO */}
      <img
        src={images['zapa2.png']}
        alt="Packaging 3D"
        className="w-full lg:w-1/2 object-contain mx-auto"
      />

      {/* 7. Texto COMO */}
      <p className="text-base w-full">
        {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.como")}
      </p>

      {/* 8. Titulo DOCUMENTO */}
      <h2 className="text-xl font-bold uppercase w-full">
        {t("HomePage.ProjectsSection.webdevelopment.projects.larulla.titpdf")}
      </h2>

      {/* 9. Imagen DOCUMENTO */}
      <img
        src={images['zapa3.png']}
        alt="Packaging 3D"
        className="w-full lg:w-1/2 object-contain mx-auto"
      />
    </div>
  );
};

export default LaRulla;
