import React from "react";
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/ideCor/alquimia/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Alquimia = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full min-h-screen px-4 py-8 text-white overflow-hidden">
      {/* Columna izquierda */}
      <div className="w-[40vw] flex flex-col items-start gap-6 pr-4">
        {/* Título LOGO */}
        <h2 className="text-base md:text-lg lg:text-xl font-bold uppercase text-left">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.alquimia.logo")}
        </h2>

        {/* Imagen LOGO */}
        <img
          src={images['alquimialogo.jpg']}
          alt="Logo"
          className="w-full object-contain"
        />

        {/* Título PAPELERIA */}
        <h2 className="text-base md:text-lg lg:text-xl font-bold uppercase text-left">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.alquimia.bolso")}
        </h2>

        {/* Imagen PAPELERIA */}
        <img
          src={images['alquimiabolso.png']}
          alt="Bolso"
          className="w-full object-contain"
        />

        {/* Título PAPELERIA */}
        <h2 className="text-base md:text-lg lg:text-xl font-bold uppercase text-left">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.alquimia.etiqueta")}
        </h2>

        {/* Imagen PAPELERIA */}
        <img
          src={images['alquimiajoyas.jpg']}
          alt="Etiqueta Joyas"
          className="w-full object-contain"
        />
      </div>

      {/* Columna derecha: Texto descriptivo */}
      <div className="md:w-1/2 w-full flex flex-col justify-start mt-0">
        <h2 className="text-2xl font-bold text-white mb-4">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.alquimia.descri1")}</h2>
        <p className="text-white text-lg whitespace-pre-line">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.alquimia.description")}
        </p>
      </div>
    </div>
  );
};

export default Alquimia;
