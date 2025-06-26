import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/otros/cascos/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Triton = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full min-h-screen px-4 py-8 text-white overflow-hidden">
      {/* Columna izquierda */}
      <div className="w-[40vw] flex flex-col items-start gap-6 pr-4">
        {/* Título PLANTA */}
        <h2 className="text-base md:text-lg lg:text-xl font-bold uppercase text-left">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.planta")}
        </h2>

        {/* Imagen PLANTA */}
        <img
          src={images['Packagingplanta.jpg']}
          alt="Packaging planta"
          className="w-full object-contain"
        />

        {/* Título 3D */}
        <h2 className="text-base md:text-lg lg:text-xl font-bold uppercase text-left">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.d")}
        </h2>

        {/* Imagen 3D */}
        <img
          src={images['Packagingd.jpg']}
          alt="Packaging 3D"
          className="w-full object-contain"
        />
      </div>

      {/* Columna derecha */}
      <div className="w-[60vw] flex flex-col gap-6 pl-4">
        {/* Descri */}
        <p className="text-base md:text-lg lg:text-2xl font-bold text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.descri1")}
        </p>

        {/* Intro */}
        <p className="text-base md:text-lg lg:text-2xl text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.intro")}
        </p>

        {/* Descripción PLANTA */}
        <p className="text-base md:text-lg lg:text-2xl text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.plantaDesc")}
        </p>

        {/* Descripción 3D */}
        <p className="text-base md:text-lg lg:text-2xl text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.dDesc")}
        </p>
      </div>
    </div>
  );
};

export default Triton;

