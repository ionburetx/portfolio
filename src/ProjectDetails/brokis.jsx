import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/otros/brokis/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Brokis = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white px-4 py-8 space-y-6">

      {/* 1. Intro */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.brokis.intro")}
      </p>

      {/* 2. TÍTULO: PLANTA */}
      <h2 className="text-xl font-bold uppercase w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.brokis.planta")}
      </h2>

      {/* 3. Imagen PLANTA – ocupa 100% solo en tablet/desktop */}
      <img
        src={images['triptico1.jpg']}
        alt="Packaging planta"
        className="w-full object-contain"
      />

      {/* 4. Texto descripción PLANTA */}
      <p className="text-base w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.brokis.plantaDesc")}
      </p>

      {/* 5. TÍTULO: 3D */}
      <h2 className="text-xl font-bold uppercase w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.brokis.d")}
      </h2>

      {/* 6. Imagen + texto: en fila 50/50 en todas las pantallas */}
      <div className="flex flex-col md:flex-row w-full gap-4 items-center">
        {/* Imagen izquierda */}
        <img
          src={images['triptico3.jpg']}
          alt="Packaging 3D"
          className="w-full md:w-1/2 object-contain"
        />

        {/* Texto derecha */}
        <p className="text-base w-full md:w-1/2">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.brokis.dDesc")}
        </p>
      </div>
    </div>
  );
};

export default Brokis;

