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
    <div className="w-full min-h-screen px-4 py-8 text-white flex flex-row gap-6" style={{ height: '100vh' }}>
      
      {/* Columna izquierda */}
      <div 
        className="w-[40%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        {/* Marca */}
        <h2 className="text-lg md:text-2xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.marca")}
        </h2>
        <img src={images['tatto.jpg']} alt="Marca imagen" className="w-full object-contain" />

        {/* Logo */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logo")}
        </h2>
        <img src={images['kresala1.jpg']} alt="Logo Variante 1" className="w-full object-contain mb-4" />
        <img src={images['kresala2.jpg']} alt="Logo Variante 2" className="w-full object-contain" />

        {/* Merchandising */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.merchandising")}
        </h2>
        <img src={images['kresalamerchandising.jpg']} alt="Merchandising imagen" className="w-full object-contain" />

        {/* Ilustraciones */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.ilus")}
        </h2>
        <img src={images['kresalabisu.jpg']} alt="Ilustración 1" className="w-full object-contain mb-4" />
        <img src={images['kresala1.png']} alt="Ilustración 2" className="w-full object-contain mb-4" />
        <img src={images['kresala8.png']} alt="Ilustración 3" className="w-full object-contain mb-4" />
        <img src={images['kresala20.png']} alt="Ilustración 4" className="w-full object-contain" />
      </div>

      {/* Columna derecha */}
      <div 
        className="w-[60%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.descri1")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.intro")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.marcaDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.partir")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.logoDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.abarca")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.merchandisingDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl font-bold uppercase">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.nombre")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.nombreDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.ilusDesc")}
        </p>
      </div>

    </div>
  );
};

export default Kresala;

