import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/ideCor/kresala/**/*.{png,jpg,jpeg}', { eager: true });

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
      <h2 className="text-xl font-bold uppercase">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.lamarcaTitle")}</h2>

      {/* 3. Imagen izquierda (25%) + texto derecha (75%) */}
      <div className="flex flex-col sm:flex-row w-full gap-6 items-start">
        <div className="w-full sm:w-1/4">
          <img src={images['tatto.jpg']} alt="Marca imagen" className="w-full object-contain" />
        </div>
        <div className="w-full sm:w-3/4">
          <p className="text-base">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.lamarcaDesc")}</p>
        </div>
      </div>

      {/* 4. Texto debajo full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.lamarcaExtra")}
      </p>

      {/* 5. Título: LOGO */}
      <h2 className="text-xl font-bold uppercase">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logoTitle")}</h2>

      {/* 6. Texto (65%) izquierda + 2 imágenes (una abajo de otra) derecha */}
      <div className="flex flex-col sm:flex-row w-full gap-6 items-start">
        <div className="w-full sm:w-[65%]">
          <p className="text-base">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logoDesc")}
          </p>
        </div>
        <div className="w-full sm:w-[35%] flex flex-col gap-4">
          <img src={images['kresala2.jpg']} alt="Logo Variante 1" className="w-full object-contain" />
          <img src={images['kresala1.jpg']} alt="Logo Variante 2" className="w-full object-contain" />
        </div>
      </div>

      {/* 7. Texto debajo full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logoExtra")}
      </p>

      {/* 8. Título: MERCHANDISING */}
      <h2 className="text-xl font-bold uppercase">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.merchTitle")}</h2>

      {/* 9. Texto full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.merchDesc")}
      </p>

      {/* 10. Imagen full-width */}
      <div className="w-full">
        <img src={images['kresalamerchandising.jpg']} alt="Merchandising imagen" className="w-full object-cover" />
      </div>

      {/* 11. Título: NOMBRE */}
      <h2 className="text-xl font-bold uppercase">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.nombreTitle")}</h2>

      {/* 12. Texto full-width */}
      <p className="text-base md:text-lg w-full">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.nombreDesc")}
      </p>

      {/* 13. Título: ILUSTRACIONES */}
      <h2 className="text-xl font-bold uppercase">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.ilustracionesTitle")}</h2>

      {/* 14. Izquierda: imágenes 1 + 1 + (2 lado a lado) | Derecha: texto */}
      <div className="flex flex-col sm:flex-row w-full gap-6">
        <div className="w-full sm:w-1/2 flex flex-col gap-4">
          <img src={images['kresalabisu.jpg']} alt="Ilustración 1" className="w-full object-contain" />
          <img src={images['kresala1.png']} alt="Ilustración 2" className="w-full object-contain" />
          <div className="flex flex-row gap-4">
            <img src={images['kresala8.png']} alt="Ilustración 3" className="w-1/2 object-contain" />
            <img src={images['kresala20.png']} alt="Ilustración 4" className="w-1/2 object-contain" />
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <p className="text-base">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.ilustracionesDesc")}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Kresala;
