import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/ideCor/Constone/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Constone = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full min-h-screen px-4 py-8 text-white overflow-hidden">
      {/* Columna izquierda */}
      <div className="w-[40vw] flex flex-col items-start gap-6 pr-4">
        {/* Título LOGO */}
        <h2 className="text-base md:text-lg lg:text-xl font-bold uppercase text-left">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.constone.logo")}
        </h2>

        {/* Imagen LOGO */}
        <img
          src={images['constone logo.jpg']}
          alt="Packaging planta"
          className="w-full object-contain"
        />

        {/* Título PAPELERIA */}
        <h2 className="text-base md:text-lg lg:text-xl font-bold uppercase text-left">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.constone.merchan")}
        </h2>

        {/* Imagen PAPELERIA */}
        <img
          src={images['constone papeleria.jpg']}
          alt="Logo"
          className="w-full object-contain"
        />

        <img
          src={images['constone papeleria2.jpg']}
          alt="Merchandising"
          className="w-full object-contain"
        />

        <img
          src={images['constone camiseta.jpg']}
          alt="Merchandising"
          className="w-full object-contain"
        />

        <img
          src={images['constone vehiculo.jpg']}
          alt="Merchandising"
          className="w-full object-contain"
        />
      </div>

      {/* Columna derecha */}
      <div className="w-[60vw] flex flex-col gap-6 pl-4">
         {/* Des */}
        <p className="text-base md:text-lg lg:text-xl font-bold text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.codigo.descri1")}
        </p>

        {/* Texto */}
        <p className="text-base md:text-lg lg:text-xl text-left leading-relaxed">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.constone.texto")}
        </p>
      </div>
    </div>
  );
};

export default Constone;