import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/ideCor/Kresala/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Kresala = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-white px-4 py-8 gap-12">

      {/* 1. Texto inicial full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.intro")}
      </p>

      {/* 2. Título: LA MARCA */}
      <h2 className="text-xl font-bold uppercase">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.marca")}
      </h2>

      {/* 3. Imagen izquierda + texto fluido + texto partir a la derecha solo en tablet */}
      <div className="w-full overflow-hidden">
        <img
          src={images['tatto.jpg']}
          alt="Marca imagen"
          className="float-left w-[25%] mr-4 mb-4 object-contain"
        />
        <p className="text-base">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.marcaDesc")}
        </p>

        {/* Texto partir: mobile debajo, tablet a la derecha */}
        <p className="text-base md:absolute md:top-[calc(100%+1rem)]md:mt-0 md:float-none md:clear-none md:block md:relative md:pl-0">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.partir")}
        </p>
      </div>
      <div className="clear-both md:clear-none"></div>

      {/* 5. Título: LOGO */}
      <h2 className="text-xl font-bold uppercase">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logo")}
      </h2>

      {/* 6. Texto logoDesc arriba + abarca abajo en lado izquierdo y dos imágenes a la derecha (solo en tablets) */}
      <div className="w-full md:flex md:gap-6">

        {/* Texto lado izquierdo */}
        <div className="md:w-[65%]">
          <p className="text-base">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logoDesc")}
          </p>
          <p className="text-base mt-4">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.abarca")}
          </p>
        </div>

        {/* Imágenes a la derecha */}
        <div className="md:w-[35%] flex flex-col gap-4 mt-6 md:mt-0">
          <img src={images['kresala1.jpg']} alt="Logo Variante 2" className="w-full object-contain" />
          <img src={images['kresala2.jpg']} alt="Logo Variante 1" className="w-full object-contain" />
        </div>
      </div>

      {/* 8. Título: MERCHANDISING */}
      <h2 className="text-xl font-bold uppercase">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.merchandising")}
      </h2>

      {/* 9. Texto full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.merchandisingDesc")}
      </p>

      {/* 10. Imagen full-width */}
      <div className="w-full">
        <img src={images['kresalamerchandising.jpg']} alt="Merchandising imagen" className="w-full object-cover" />
      </div>

      {/* 11. Título: NOMBRE */}
      <h2 className="text-xl font-bold uppercase">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.nombre")}
      </h2>

      {/* 12. Texto full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.nombreDesc")}
      </p>

      {/* 13. Título: ILUSTRACIONES */}
      <h2 className="text-xl font-bold uppercase">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.ilus")}
      </h2>

      {/* 14. Ilustraciones con últimos dos al lado derecho de kresala1.png, alineados abajo */}
      <div className="w-full md:flex md:gap-6">

        {/* Izquierda: 2 imágenes arriba y las otras 2 al lado derecho de la segunda */}
        <div className="md:w-1/2 flex flex-col gap-4">

          <img src={images['kresalabisu.jpg']} alt="Ilustración 1" className="w-full object-contain" />
          
          {/* Contenedor para la segunda imagen y las dos últimas al lado */}
          <div className="flex md:flex-row md:items-end gap-4">

            <img src={images['kresala1.png']} alt="Ilustración 2" className="md:w-1/2 w-full object-contain" />

            <div className="md:w-1/2 flex gap-4">
              <img src={images['kresala8.png']} alt="Ilustración 3" className="w-1/2 object-contain" />
              <img src={images['kresala20.png']} alt="Ilustración 4" className="w-1/2 object-contain" />
            </div>

          </div>
        </div>

        {/* Derecha: texto */}
        <div className="md:w-1/2">
          <p className="text-base">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.ilusDesc")}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Kresala;

