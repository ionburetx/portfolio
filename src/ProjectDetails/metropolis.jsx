import React from "react";
import { useTranslation } from "react-i18next";

const imageModules = import.meta.glob('/src/assets/ideCor/metropolis/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const filename = path.split('/').pop();
    return [filename.trim(), mod.default];
  })
);

const Metropolis = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen px-4 py-8 text-white flex flex-row gap-6" style={{ height: '100vh' }}>
      {/* Contenedor columnas con altura de pantalla */}
      
      {/* Columna izquierda */}
      <div 
        className="w-[40%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        {/* Aquí todo igual */}
        <div>
          <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.logo")}
          </h2>
          <img src={images['logo.jpg']} alt="Logo principal" className="w-full h-auto object-cover" />
        </div>

        <div>
          <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.logocola")}
          </h2>
          <img src={images['logocolaboraciones.png']} alt="Logo colaborativo" className="w-full object-contain" />
        </div>

        <div className="flex flex-row gap-4">
          {['logocircular1.png', 'logocircular2.png'].map((name) => (
            <div key={name} className="w-1/2 aspect-square overflow-hidden rounded-full">
              <img src={images[name]} alt={name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.tarjetas")}
          </h2>
          <img src={images['tarjeta 3d.png']} alt="Tarjetas" className="w-full object-contain" />
        </div>

        <div>
          <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.etiquetas")}
          </h2>
          <div className="flex flex-col gap-4">
            <img src={images['etiqueta vino.jpg']} alt="Etiqueta vino" className="w-full object-contain" />
            <img src={images['etiquetas vino.png']} alt="Banner etiquetas" className="w-full object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl lg:text-xl font-bold uppercase mb-2 break-words">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.menu")}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <img src={images['posavasos frontal.jpg']} alt="Posavasos frontal" className="w-1/2 object-contain" />
              <img src={images['posavasos trasero.jpg']} alt="Posavasos trasero" className="w-1/2 object-contain" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['coaster1.jpg', 'coaster2.jpg', 'coaster3.jpg', 'coaster4.jpg'].map((name) => (
                <img key={name} src={images[name]} alt={name} className="w-full object-cover aspect-square" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div 
        className="w-[60%] flex flex-col gap-6 overflow-y-auto" 
        style={{ position: 'sticky', top: 0, maxHeight: '100vh' }}
      >
        <p className="text-base md:text-xl lg:text-xl font-bold">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.descri1")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.intro")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.logocolaDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.tarjetasDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.etiquetasDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.menuDesc")}
        </p>
        <p className="text-base md:text-xl lg:text-xl">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.projects.7metropolis.final")}
        </p>
      </div>
    </div>
  );
};

export default Metropolis;





