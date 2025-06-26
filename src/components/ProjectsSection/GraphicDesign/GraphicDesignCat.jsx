import React from "react";
import Illustration from "./IlustracionCat/illustration";
import IdeCorCat from "./IdeCorCat/IdeCorCat";
import OtrosCat from "./OtrosCat/OtrosCat";
import { useTranslation } from "react-i18next";

const GraphicDesignCat = () => {
  const { t } = useTranslation();
  return (
    <div className="pl-6 md:pl-20">
      {/* Ilustración */}
      <div>
        <h3 className="text-white text-2xl md:text-4xl font-bold tracking-wide mb-6">
          {t("HomePage.ProjectsSection.graphicdesign.subcategories.illustration")}
        </h3>
        <Illustration />
      </div>

      {/* Identidad Corporativa */}
      <div className="-ml-6 md:-ml-20 mb-4">
        <div className="pl-6 md:pl-20">
          <h3 className="text-white text-2xl md:text-4xl font-bold tracking-wide mb-6 mt-[390px] md:mt-[500px] lg:mt-[390px]">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.branding.title")}
          </h3>
        </div>
        <IdeCorCat />
      </div>


      {/* Otros */}
      <div className="-ml-6 md:-ml-20">
        <div className="pl-6 md:pl-20">
          <h3 className="text-white text-2xl md:text-4xl font-bold tracking-wide mt-24 mb-6">
            {t("HomePage.ProjectsSection.graphicdesign.subcategories.others.title")}
          </h3>
        </div>
        <OtrosCat />
      </div>
    </div>
  );
};

export default GraphicDesignCat;


