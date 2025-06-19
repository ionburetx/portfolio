const Card = ({ imageSrc, altText, title, role, description }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Imagen - ocupa 50% del ancho del card */}
      <div className="w-full md:w-1/2 aspect-square">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto - ocupa 50% del ancho del card */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between relative">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm font-medium text-gray-600 mb-2">{role}</p>
          <p className="text-gray-700">{description}</p>
        </div>

        <button
          type="button"
          aria-label={`Más info sobre ${title}`}
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;


