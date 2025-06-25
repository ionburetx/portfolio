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

      {/* 3. Imagen izquierda + texto fluido */}
      <div className="w-full overflow-hidden">
        <img
          src={images['tatto.jpg']}
          alt="Marca imagen"
          className="float-left w-[25%] mr-4 mb-4 object-contain"
        />
        <p className="text-base">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.marcaDesc")}
        </p>
      </div>
      <div className="clear-both"></div>

      {/* 4. Texto debajo full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.partir")}
      </p>

      {/* 5. Título: LOGO */}
      <h2 className="text-xl font-bold uppercase">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logo")}
      </h2>

      {/* 6. Texto fluido + imágenes verticales */}
      <div className="w-full overflow-hidden">
        <div className="float-left w-[35%] mr-4 mb-4 flex flex-col gap-4">
          <img src={images['kresala2.jpg']} alt="Logo Variante 1" className="w-full object-contain" />
          <img src={images['kresala1.jpg']} alt="Logo Variante 2" className="w-full object-contain" />
        </div>
        <p className="text-base">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logoDesc")}
        </p>
      </div>
      <div className="clear-both"></div>

      {/* 7. Texto debajo full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.abarca")}
      </p>

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

      {/* 14. Ilustraciones izquierda + texto fluido derecha */}
      <div className="w-full overflow-hidden">
        <div className="float-left w-[50%] mr-4 mb-4 flex flex-col gap-4">
          <img src={images['kresalabisu.jpg']} alt="Ilustración 1" className="w-full object-contain" />
          <img src={images['kresala1.png']} alt="Ilustración 2" className="w-full object-contain" />
          <div className="flex flex-row gap-4">
            <img src={images['kresala8.png']} alt="Ilustración 3" className="w-1/2 object-contain" />
            <img src={images['kresala20.png']} alt="Ilustración 4" className="w-1/2 object-contain" />
          </div>
        </div>
        <p className="text-base">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.ilusDesc")}
        </p>
      </div>
      <div className="clear-both"></div>

    </div>
  );
};

export default Kresala;
