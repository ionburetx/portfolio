import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/otros/tripticos/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Triptico = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full min-h-screen px-4 py-8 text-white overflow-hidden">
      {/* Columna izquierda */}
      <div className="w-[40vw] flex flex-col items-start gap-6 pr-4">
        {/* Titulo */}
        <h2 className="text-base md:text-lg lg:text-xl font-bold uppercase text-left">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.titima")}
        </h2>

        {/* Imagen TRIPTICO */}
        <img
          src={images['triptico1.jpg']}
          alt="Packaging planta"
          className="w-full object-contain"
        />

        {/* Imagen TRIPTICO */}
        <img
          src={images['triptico2.jpg']}
          alt="Packaging 3D"
          className="w-full object-contain"
        />
      </div>

      {/* Columna derecha */}
      <div className="w-[60vw] flex flex-col gap-6 pl-4">
        {/* Descri */}
        <p className="text-base md:text-lg lg:text-2xl font-bold text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.descri1")}
        </p>

        {/* Intro */}
        <p className="text-base md:text-lg lg:text-2xl text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.intro")}
        </p>

        {/* Descripción PLANTA */}
        <p className="text-base md:text-lg lg:text-2xl text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.utilizando")}
        </p>

        {/* Descripción 3D */}
        <p className="text-base md:text-lg lg:text-2xl text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.este")}
        </p>
      </div>
    </div>
  );
};

export default Triptico;