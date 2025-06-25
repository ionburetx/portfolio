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
    <div className="text-white px-4 py-8 space-y-6">

      {/* 1. Intro */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.intro")}
      </p>

      {/* 2. Diseño adaptativo imágenes + texto */}
      <div className="w-full relative overflow-hidden">

        {/* MÓVIL: imagen a la izquierda + texto fluyendo a la derecha */}
        <div className="block md:hidden">
          <img
            src={images['triptico1.jpg']}
            alt="Tríptico 1"
            className="float-left w-[40vw] mr-4 mb-4 mt-4 object-contain"
          />
          <img
            src={images['triptico2.jpg']}
            alt="Tríptico 2"
            className="float-left w-[40vw] mr-4 mb-4 mt-4"
          />
          <p className="text-base">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.utilizando")}
          </p>
          <p className="text-base">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.este")}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* TABLET Y +: imágenes en una fila + texto a la derecha */}
        <div className="hidden md:flex w-full gap-4">
          {/* Imágenes lado a lado */}
          <div className="flex w-1/2 gap-4">
            <img
              src={images['triptico1.jpg']}
              alt="Tríptico 1"
              className="w-1/2 object-contain"
            />
            <img
              src={images['triptico2.jpg']}
              alt="Tríptico 2"
              className="w-1/2 object-contain mr-4"
            />
          </div>

          {/* Textos a la derecha */}
          <div className="w-1/2 flex flex-col justify-center space-y-4 ml-4">
            <p className="text-base">
              {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.utilizando")}
            </p>
            <p className="text-base">
              {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.tripticos.este")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triptico;
