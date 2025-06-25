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
    <div className="text-white px-4 py-8 space-y-6">

      {/* 1. Intro */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.intro")}
      </p>

      {/* 2. TÍTULO: PLANTA */}
      <h2 className="text-xl font-bold uppercase w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.planta")}
      </h2>

      {/* 3. Imagen PLANTA */}
      <img
        src={images['Packagingplanta.jpg']}
        alt="Packaging planta"
        className="w-full lg:w-1/2 object-contain mx-auto"
      />

      {/* 4. Texto descripción PLANTA */}
      <p className="text-base w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.plantaDesc")}
      </p>

      {/* 5. TÍTULO: 3D */}
      <h2 className="text-xl font-bold uppercase w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.d")}
      </h2>

      {/* 6. Imagen 3D */}
      <img
        src={images['Packagingd.jpg']}
        alt="Packaging 3D"
        className="w-full lg:w-1/2 object-contain mx-auto"
      />

      {/* 7. Texto descripción 3D */}
      <p className="text-base w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.projects.cascos.dDesc")}
      </p>
    </div>
  );
};

export default Triton;
