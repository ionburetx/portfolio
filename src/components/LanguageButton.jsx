const LanguageButton = ({ lang, onClick, ariaLabel, extraClasses }) => (
  <button
    onClick={() => onClick(lang)}
    aria-label={ariaLabel}
    className={`w-[16rem] h-[8rem] bg-transparent cursor-pointer ${extraClasses}`}
  />
)

export default LanguageButton