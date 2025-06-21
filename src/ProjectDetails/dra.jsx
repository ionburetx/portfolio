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
    <div className="flex flex-col text-white px-4 py-8 gap-12">

      {/* Texto introductorio */}
      <p className="w-full text-white text-base md:text-lg">
        {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.intro")} 
      </p>

      {/* Sección Diseño de Logotipos (solo visible en mobile/tablet) */}
      <div className="flex flex-col gap-12 lg:hidden">
        {/* Diseño de logotipos */}
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.logo")}</h2>
          <p className="text-base md:text-lg">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.para")}
          </p>
        </div>

        {/* Logo adultos */}
        <div className="flex flex-row gap-6 w-full">
          <div className="w-[30%] flex flex-col gap-4">
            <div className="aspect-square rounded-full overflow-hidden">
              <img src={images['dradultz.png']} alt="Logo adultos 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-full overflow-hidden">
              <img src={images['dradultb.png']} alt="Logo adultos 2" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-[70%]">
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.adulto")}</h2>
            <p className="text-base md:text-lg">
              {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.adultoDesc")}
            </p>
          </div>
        </div>

        {/* Logo niños */}
        <div className="flex flex-row gap-6 w-full">
          <div className="w-[70%] text-right">
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.nino")}</h2>
            <p className="text-base md:text-lg">
              {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.ninoDesc")}
            </p>
          </div>
          <div className="w-[30%] flex flex-col gap-4">
            <div className="aspect-square rounded-full overflow-hidden">
              <img src={images['drachild.png']} alt="Logo niños 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-full overflow-hidden">
              <img src={images['drachildb.png']} alt="Logo niños 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección Diseño de Logotipos (solo visible en desktop) */}
<div className="hidden lg:flex w-full gap-8">
  <div className="w-[30%] flex flex-col gap-6">
    <h2 className="text-2xl font-bold uppercase">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.logo")}</h2>
    <p className="text-lg">
      {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.para")}
    </p>

    <h2 className="text-2xl font-bold uppercase">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.adulto")}</h2>
    <p className="text-lg">
      {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.adultoDesc")}
    </p>

    <h2 className="text-2xl font-bold uppercase">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.nino")}</h2>
    <p className="text-lg">
      {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.ninoDesc")}
    </p>
  </div>

  <div className="w-[45%] grid grid-cols-4 mt-24 ml-24 gap-4">
    {['dradultz.png', 'dradultb.png', 'drachild.png', 'drachildb.png'].map((name) => (
      <div
        key={name}
        className="w-60 h-60 rounded-full overflow-hidden flex mx-auto"
      >
        <img
          src={images[name]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>

{/* Texto siguiente y dos imágenes */}
<p className="w-full text-base md:text-lg">
  {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.como")}
</p>

<div className="flex flex-row gap-4 w-full">
  {['egur kolori.png', 'azulejo1.png'].map((name) => (
    <div
      key={name}
      className="w-full lg:w-1/2 flex justify-center items-center"
    >
      <div className="w-90 h-90 rounded overflow-hidden">
        <img
          src={images[name]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  ))}
</div>


      {/* Merchandising y Flyers en 2 columnas en desktop */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Merchandising */}
        <div className="lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.merchandising")}</h2>
          <p className="text-base md:text-lg mb-6">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.merchandisingDesc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['tarjeti3.png', 'tarjeti2.png', 'tarjetizb.png', 'tarjetiber.png'].map((name) => (
              <div key={name} className="w-full h-64 rounded overflow-hidden flex items-center justify-center">
                <img src={images[name]} alt={name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Flyers */}
        <div className="lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.flyers")}</h2>
          <p className="text-base md:text-lg mb-6">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.flyersDesc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              'HOTEL ADULT ANVERSO.jpg',
              'HOTEL ADULT REVERSO2.jpg',
              'HOTEL CHILD ANVERSO.jpg',
              'HOTEL CHILD REVERSO 2.jpg',
            ].map((name) => (
              <div key={name} className="w-full h-80 rounded overflow-hidden flex items-center justify-center">
                <img src={images[name]} alt={name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campañas estacionales */}
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.campanas")}</h2>
        <p className="text-base md:text-lg mb-6">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.campanasDesc")}
        </p>
        <div className="flex flex-col gap-4">
          {[
            'definitibu nagusi 2.jpg',
            'definitibu txiki.jpg',
            'dra!paris.jpg',
            'facebokprest.jpg',
            'facebokprest2.jpg',
          ].map((name, index) => (
            <img key={index} src={images[name]} alt={`Imagen ${index + 1}`} className="w-full object-contain" />
          ))}
        </div>
      </div>

      {/* Fotografía y redes */}
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">{t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.foto")}</h2>
        <p className="text-base md:text-lg">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.dra.fotoDesc")}
        </p>
      </div>
    </div>
  );
};

export default Dra;
