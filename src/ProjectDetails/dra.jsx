import React from 'react';

const imageModules = import.meta.glob('/src/assets/ideCor/Dra/**/*.{png,jpg,jpeg}', { eager: true })

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/')
    const filename = parts[parts.length - 1]
    return [filename, mod.default]
  })
)

const Dra = () => {
  return (
    <div className="flex flex-col text-white px-4 py-8 gap-12">
      {/* Texto introductorio que ocupa todo el viewport */}
      <p className="w-full text-white text-base md:text-lg">
        Me incorporé a la empresa durante mis prácticas para liderar un rediseño integral de su imagen corporativa. La tienda, especializada en accesorios de moda y productos infantiles, necesitaba diferenciar ambas líneas con identidades visuales únicas, manteniendo la esencia de la marca. Al mismo tiempo dándole una vuelta a la imagen de la empresa. Pare ello, tuvimos que trabajar en equipo para entender sus necesidades y objetivos finales. 
      </p>

      {/* Primer título y texto */}
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">DISEÑO DE LOGOTIPOS</h2>
        <p className="text-base md:text-lg">
          Para ello, empecé con la investigación de público objetivo de la empresa (adultos vs. niños), creando dos logotipos diferenciados bajo una misma marca, conservando su nombre pero renovando su estética para cada segmento.
        </p>
      </div>

      {/* Sección Logo Adultos */}
      <div className="flex flex-row gap-6 w-full">
        <div className="w-[30%] flex flex-col gap-4">
          <div className="aspect-square rounded-full overflow-hidden">
            <img
              src={images['dradultz.png']}
              alt="Imagen circular 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-full overflow-hidden">
            <img
              src={images['dradultb.png']}
              alt="Imagen circular 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-[70%]">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">LOGO ADULTOS</h2>
          <p className="text-base md:text-lg">
            Creé un logo sobrio y minimalista que sirviera para unir todos los producto que vendian en las tiendas. De este modo, consiguiendo que el branding de la empresa unificara todos los productos que vendian.
          </p>
        </div>
      </div>

      {/* Sección Logo Niños */}
      <div className="flex flex-row gap-6 w-full">
        <div className="w-[70%] text-right">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">LOGO NIÑOS</h2>
          <p className="text-base md:text-lg">
            Creé un logo divertido y colorido que capturara la atención de los más pequeños, utilizando formas y tipografías amigables.
          </p>
        </div>
        <div className="w-[30%] flex flex-col gap-4">
          <div className="aspect-square rounded-full overflow-hidden">
            <img
              src={images['drachild.png']}
              alt="Imagen circular 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-full overflow-hidden">
            <img
              src={images['drachildb.png']}
              alt="Imagen circular 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Texto completo y dos imágenes cuadradas */}
      <p className="w-full text-base md:text-lg">
        Como querían tambien poner un rótulo fuera de los comercios infantíles que tenían, les diseñe 2 opciones diferentes. Uno era de listones de madera de diferentes colores con el logo versionado impreso en él, y el otro era un collage de azulejos de colores.
      </p>
      
      <div className="flex flex-row gap-4 w-full">
        <div className="w-1/2 aspect-square">
          <img
            src={images['egur kolori.png']}
            alt="Imagen cuadrada 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 aspect-square">
          <img
            src={images['azulejo1.png']}
            alt="Imagen cuadrada 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Merchandising */}
<div className="w-full">
  <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">MERCHANDISING CORPORATIVO</h2>
  <p className="text-base md:text-lg mb-6">
    Diseño de bolsas de tela, tarjetas de cliente y packaging (bolsas de papel) con la nueva identidad.
  </p>
  <div className="grid grid-cols-2 gap-4">
    {['tarjeti3.png', 'tarjeti2.png', 'tarjetizb.png', 'tarjetiber.png'].map((name) => (
      <div key={name} className="w-full h-64 rounded overflow-hidden flex items-center justify-center">
        <img
          src={images[name]}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ))}
  </div>
</div>

{/* Flyers */}
<div className="w-full">
  <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">FLYERS</h2>
  <p className="text-base md:text-lg mb-6">
    Diseño de flyers para promociones y eventos especiales, manteniendo la identidad visual de la marca.
  </p>
  <div className="grid grid-cols-2 gap-4">
    {[
      'HOTEL ADULT ANVERSO.jpg',
      'HOTEL ADULT REVERSO2.jpg',
      'HOTEL CHILD ANVERSO.jpg',
      'HOTEL CHILD REVERSO 2.jpg',
    ].map((name) => (
      <div key={name} className="w-full h-80 rounded overflow-hidden flex items-center justify-center">
        <img
          src={images[name]}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ))}
  </div>
</div>

     <div className="w-full">
  <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">CAMPAÑAS ESTACIONALES</h2>
  <p className="text-base md:text-lg mb-6">
    Banners, emailings y flyers para promociones de (navidad, rebajas, por cada cambio de temporada etc.).
  </p>
  <div className="flex flex-col gap-4">
    {[
      'definitibu nagusi 2.jpg',
      'definitibu txiki.jpg',
      'dra!paris.jpg',
      'facebokprest.jpg',
      'facebokprest2.jpg',
    ].map((name, index) => (
      <img
        key={index}
        src={images[name]}
        alt={`Imagen ${index + 1}`}
        className="w-full object-contain"
      />
    ))}
  </div>
</div>

      {/* Foto y Redes */}
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold uppercase mb-4">FOTOGRAFÍA DE PRODUCTO Y REDES SOCIALES</h2>
        <p className="text-base md:text-lg">
          Por último mencionar que tmabién me dediqué a la fotografía de producto para su web y las redes sociales, mejorando la cohesión visual.
        </p>
      </div>
    </div>
  );
};

export default Dra;
