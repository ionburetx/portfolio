import Card from "./Card";

const IdeCorCat = () => {
  return (
    <div className="space-y-12 w-full">
      {/* Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Imagen 1 */}
        <div className="col-span-1">
          <img
            src="src/assets/ideCor/Dra/logu/egur kolori.png"
            alt="DRA!"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Texto 1 */}
        <div className="col-span-1 flex flex-col justify-center p-6 relative">
          <h3 className="text-xl font-semibold mb-2">DRA!</h3>
          <p className="text-sm font-medium text-gray-600 mb-2">Diseñador Gráfico</p>
          <p className="text-gray-700">Descripción corta del proyecto 1.</p>
          <button
            type="button"
            aria-label="Más info sobre DRA!"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start"
          >
            +
          </button>
        </div>

        {/* Imagen 2 */}
        <div className="col-span-1">
          <img
            src="src/assets/ideCor/7Metropolis/Coasters/coaster1.jpg"
            alt="7 Metropolis"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Texto 2 */}
        <div className="col-span-1 flex flex-col justify-center p-6 relative">
          <h3 className="text-xl font-semibold mb-2">7 Metropolis</h3>
          <p className="text-sm font-medium text-gray-600 mb-2">Diseñador Gráfico</p>
          <p className="text-gray-700">Descripción corta del proyecto 2.</p>
          <button
            type="button"
            aria-label="Más info sobre 7 Metropolis"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start"
          >
            +
          </button>
        </div>
      </div>

      {/* Segunda fila - invertida: texto primero, imagen después */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Texto 3 */}
        <div className="col-span-1 flex flex-col justify-center p-6 relative">
          <h3 className="text-xl font-semibold mb-2">Empresa 3</h3>
          <p className="text-sm font-medium text-gray-600 mb-2">Consultor</p>
          <p className="text-gray-700">Descripción corta del proyecto 3.</p>
          <button
            type="button"
            aria-label="Más info sobre Empresa 3"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start"
          >
            +
          </button>
        </div>

        {/* Imagen 3 */}
        <div className="col-span-1">
          <img
            src="/images/imagen3.jpg"
            alt="Empresa 3"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        {/* Texto 4 */}
        <div className="col-span-1 flex flex-col justify-center p-6 relative">
          <h3 className="text-xl font-semibold mb-2">Empresa 4</h3>
          <p className="text-sm font-medium text-gray-600 mb-2">Director Creativo</p>
          <p className="text-gray-700">Descripción corta del proyecto 4.</p>
          <button
            type="button"
            aria-label="Más info sobre Empresa 4"
            className="mt-4 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition self-start"
          >
            +
          </button>
        </div>

        {/* Imagen 4 */}
        <div className="col-span-1">
          <img
            src="/images/imagen4.jpg"
            alt="Empresa 4"
            className="w-full h-full object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default IdeCorCat;
