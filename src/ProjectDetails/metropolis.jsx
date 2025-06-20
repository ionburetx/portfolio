import React from 'react';

const imageModules = import.meta.glob('/src/assets/ideCor/metropolis/**/*.{png,jpg,jpeg}', { eager: true });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return [filename, mod.default];
  })
);

const metropolis = () => {
  return (
    <div className="flex flex-col text-white px-4 py-8 gap-12">

      {/* 1. Texto inicial - ancho completo */}
      <p className="text-base md:text-lg w-full">
        Una joven empresa con alma solidaria. Importa vinos vascos y catalanes, destinando parte de cada venta a reforestar y reurbanizar zonas olvidadas de Colombia.
Inspirada en el libro Metropolis de Ben Wilson, la marca evoca las grandes civilizaciones, los mapas náuticos, el comercio ancestral y la evolución urbana. Todo fue cuidadosamente pensado para transmitir solidez, legado y compromiso social.
Desde el logo hasta las aplicaciones más pequeñas, cada pieza forma parte de un universo gráfico con personalidad propia.
Cada pieza debía comunicar tanto el sabor del vino como el compromiso social del proyecto. 
Una experiencia donde el diseño no solo vendía productos, sino que ayudaba a sembrar futuro.
      </p>

      <div className="w-full h-40 overflow-hidden mb-6 sm:h-52 md:h-64">
  <img
    src={images['logo.jpg']}
    alt="Logo principal"
    className="w-full h-full object-cover"
  />
</div>

      {/* Contenedor principal: texto + imagen (stack en mobile, side-by-side en tablet) */}
<div className="flex flex-col sm:flex-row w-full gap-6">
  
  {/* Texto: 100% en mobile, 50% en tablet */}
  <div className="w-full sm:w-1/2">
    <h2 className="text-xl font-bold uppercase mb-2">LOGO COLABORATIVO</h2>
    <p className="text-base">
      Diseñé variantes del logotipo para integrar las identidades de 7Metropolis con las de los restaurantes y distribuidores con los que trabajaban.
      El reto fue fusionar estilos sin perder la esencia de cada marca. Se optó por composiciones flexibles y equilibradas, manteniendo la estética clásica de 7Metropolis con elementos representativos del socio colaborador.
    </p>
  </div>

  {/* Imagen logocolaboraciones: 100% en mobile, 50% en tablet */}
  <div className="w-full sm:w-1/2 flex justify-center">
    <img
      src={images['logocolaboraciones.png']}
      alt="Logo colaborativo"
      className="w-full object-contain"
    />
  </div>
</div>

{/* Logos circulares: lado a lado (50% cada uno) en todas las resoluciones */}
<div className="flex flex-row gap-4 w-full mt-6">
  {['logocircular1.png', 'logocircular2.png'].map((name) => (
    <div key={name} className="w-1/2 aspect-square overflow-hidden rounded-full">
      <img src={images[name]} alt={name} className="w-full h-full object-cover" />
    </div>
  ))}
</div>



      {/* 5. Tarjetas: texto alineado derecha + imagen a la izquierda */}
      <div className="flex flex-col sm:flex-row-reverse w-full gap-4 items-start">
        <div className="w-full sm:w-1/2 text-right">
          <h2 className="text-xl font-bold uppercase mb-2">TARJETAS</h2>
          <p className="text-base">
            Las tarjetas de presentación y otros elementos de papelería fueron diseñados fusionando la marca corporativa con distintas banderas o ikurriña, haciendo un  juego de colores (representando de una forma la hermandad y colaboración).
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <img src={images['tarjeta 3d.png']} alt="Tarjetas" className="w-3/4 object-contain" />
        </div>
      </div>

      {/* 6. Etiquetas: texto a la izquierda + imagen a la derecha */}
      <div className="flex flex-col sm:flex-row w-full gap-4 items-start">
        <div className="w-full sm:w-1/2">
          <h2 className="text-xl font-bold uppercase mb-2">ETIQUETAS</h2>
          <p className="text-base">
            Las etiquetas de vino fusionan el origen europeo de los productos con la narrativa antigua de 7Metropolis. Se usaron ilustraciones con textura, serifas elegantes y composiciones que evocan mapas o escudos históricos.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <img src={images['etiqueta vino.jpg']} alt="Etiquetas" className="w-3/4 object-contain" />
        </div>
      </div>

      {/* 7. Imagen full-width */}
      <div className="w-full">
        <img src={images['etiquetas vino.png']} alt="Banner etiquetas" className="w-full object-cover" />
      </div>

      {/* 8. MENÚ Y POSAVASOS */}
      <div className="w-full">
        <h2 className="text-xl font-bold uppercase mb-2">MENÚ Y POSAVASOS</h2>
        <p className="text-base mb-4">
          Diseñados para complementar la experiencia sensorial del vino. Con un estilo editorial limpio y toques gráficos antiguos, para transmitir sofisticación y coherencia con el universo de marca.
        </p>

        {/* Primera fila: 2 imágenes (50% cada una) */}
        <div className="flex flex-row gap-4">
          {['posavasos frontal.jpg', 'posavasos trasero.jpg'].map((name) => (
            <div key={name} className="w-1/2 flex justify-center items-center">
              <img src={images[name]} alt={name} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Segunda fila: 3 imágenes (33.3% cada una) */}
        <div className="flex flex-row gap-4 mt-4">
          {['menu american ugly.png', 'menu horacio barbato.png', 'menu osaki.png'].map((name) => (
            <div key={name} className="w-1/3 flex justify-center items-center">
              <img src={images[name]} alt={name} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* 9. Cuatro imágenes cuadradas (2x2) */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {['coaster1.jpg', 'coaster2.jpg', 'coaster3.jpg', 'coaster4.jpg'].map((name) => (
          <div key={name} className="aspect-square overflow-hidden">
            <img src={images[name]} alt={name} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* 10. Texto final full-width */}
      <p className="text-base md:text-lg w-full">
        Todo este trabajo fue realizado usando el paquete Adobe (Illustrator, Photoshop, InDesign y Lightroom), cuidando no solo la estética, sino también la intención de cada elemento.
Fue una experiencia donde el diseño se convirtió en lenguaje, y la marca, en historia visual.
      </p>

    </div>
  );
};

export default metropolis;
