import LanguageSelector from '../components/LanguageSelector'

const LanguageScreen = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="src/assets/generalAssets/fondoBienvenida.png"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover object-bottom object-right z-0"
/>

      {/* Capa con recortes (imagen negra con eu/es/en) */}
      <img
        src="src/assets/generalAssets/idiomas.png"
        alt="Idioma Mask"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-10"
/>

      {/* Botones transparentes */}
      <LanguageSelector />
    </div>
  )
}

export default LanguageScreen
