import React from 'react';
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/ideCor/Dra/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const Dra = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen px-4 py-8 text-white flex flex-row gap-6" style={{ height: '100vh' }}>
      
      {/* Columna izquierda */}
      <div 
        className="w-[40%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        {/* Logo ADULTO */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.adulto")}
        </h2>
        <img src={images['dradultz.png']} alt="Logo Variante 1" className="w-full object-contain mb-4" />
        <img src={images['dradultb.png']} alt="Logo Variante 2" className="w-full object-contain" />

        {/* Logo NIÑO */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.nino")}
        </h2>
        <img src={images['drachild.png']} alt="Logo Variante 1" className="w-full object-contain mb-4" />
        <img src={images['drachildb.png']} alt="Logo Variante 2" className="w-full object-contain" />

        {/* ROTULOS */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.rotulo")}
        </h2>
        <img src={images['egur kolori.png']} alt="Logo Variante 1" className="w-full object-contain mb-4" />
        <img src={images['azulejo5.png']} alt="Logo Variante 2" className="w-full object-contain" />

        {/* TARJETAS */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.merchandising")}
        </h2>
        <img src={images['tarjeti2.png']} alt="Logo Variante 1" className="w-full object-contain mb-4" />
        <img src={images['tarjeti3.png']} alt="Logo Variante 2" className="w-full object-contain" />
        <img src={images['tarjetiber.png']} alt="Logo Variante 2" className="w-full object-contain" />
        <img src={images['tarjetizb.png']} alt="Logo Variante 2" className="w-full object-contain" />

        {/* FLYERS */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.flyers")}
        </h2>
        <img src={images['HOTEL CHILD ANVERSO.jpg']} alt="Logo Variante 1" className="w-full object-contain mb-4" />
        <img src={images['HOTEL CHILD REVERSO 2.jpg']} alt="Logo Variante 2" className="w-full object-contain" />
        <img src={images['HOTEL ADULT ANVERSO.jpg']} alt="Logo Variante 2" className="w-full object-contain" />
        <img src={images['HOTEL ADULT REVERSO2.jpg']} alt="Logo Variante 2" className="w-full object-contain" />
        
        {/* Ilustraciones */}
        <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.kresala.ilus")}
        </h2>
        <img src={images['dra!paris.jpg']} alt="Ilustración 1" className="w-full object-contain mb-4" />
        <img src={images['definitibu txiki.jpg']} alt="Ilustración 2" className="w-full object-contain mb-4" />
        <img src={images['definitibu nagusi 2.jpg']} alt="Ilustración 3" className="w-full object-contain mb-4" />
        <img src={images['facebokprest.jpg']} alt="Ilustración 4" className="w-full object-contain" />
        <img src={images['facebokprest2.jpg']} alt="Ilustración 4" className="w-full object-contain" />
      </div>

      {/* Columna derecha */}
      <div 
        className="w-[60%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.descri1")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.intro")}
        </p>
        <p className="text-base md:text-xl font-bold lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.logo")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.para")}
        </p>
        <p className="text-base md:text-xl font-bold lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.adulto")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.adultoDesc")}
        </p>
        <p className="text-base md:text-xl font-bold lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.nino")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.ninoDesc")}
        </p>
        <p className="text-base md:text-xl font-bold lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.merchandising")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.merchandisingDesc")}
        </p>
        <p className="text-base md:text-xl font-bold lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.flyers")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.flyersDesc")}
        </p>
        <p className="text-base md:text-xl font-bold lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.campanas")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.campanasDesc")}
        </p>
        <p className="text-base md:text-xl font-bold lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.foto")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.fotoDesc")}
        </p>
      </div>

    </div>
  );
};

export default Dra;
