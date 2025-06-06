const ContactForm = () => {
  return (
    <form className="w-full max-w-xl mx-auto space-y-6 text-white">
      <div>
        <label htmlFor="nombre" className="block mb-2 font-semibold">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="w-full p-3 rounded-md bg-white bg-opacity-10 placeholder-white placeholder-opacity-60 border border-white border-opacity-30 focus:outline-none"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 rounded-md bg-white bg-opacity-10 placeholder-white placeholder-opacity-60 border border-white border-opacity-30 focus:outline-none"
          placeholder="Tu email"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block mb-2 font-semibold">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows="5"
          className="w-full p-3 rounded-md bg-white bg-opacity-10 placeholder-white placeholder-opacity-60 border border-white border-opacity-30 focus:outline-none"
          placeholder="Tu mensaje"
        />
      </div>

      {/* Botón centrado, blanco semitransparente */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-3 bg-white bg-opacity-20 text-white font-bold uppercase rounded-md hover:bg-opacity-40 transition"
        >
          Disparar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

