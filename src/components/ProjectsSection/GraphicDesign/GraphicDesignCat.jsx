import React from "react";
import Illustration from "./IlustracionCat/illustration";
import IdeCorCat from "./IdeCorCat/IdeCorCat";

const GraphicDesignCat = () => {
  return (
    <div className="pl-6 md:pl-20">
      {/* Ilustración */}
      <div className="mb-4">
        <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-4">
          Ilustración
        </h3>
        <Illustration />
      </div>

      {/* Identidad Corporativa */}
      <div className="-ml-6 md:-ml-20 mb-4">
        <div className="pl-6 md:pl-20">
          <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-4">
            Identidad Corporativa
          </h3>
        </div>
        <IdeCorCat />
      </div>

      {/* Otros */}
      <div className="pl-6 md:pl-20">
        <h3 className="text-white text-xl md:text-2xl font-semibold uppercase">
          Otros
        </h3>
      </div>
    </div>
  );
};

export default GraphicDesignCat;


