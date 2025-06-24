export const AboutSection = ({ onScrollToNext }) => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [slideFinished, setSlideFinished] = useState(false);
  
  // Estado de animaciones usando sessionStorage
  const [hasAnimated, setHasAnimated] = useState(() => {
    const saved = sessionStorage.getItem('aboutSectionAnimations');
    return saved ? JSON.parse(saved) : {
      initial: false,
      text: false,
      image: false,
      arrow: false
    };
  });

  // Asegurarse de que los elementos estén en su estado final si ya se animaron
  useEffect(() => {
    if (hasAnimated.initial) {
      controls.set({ y: 0, rotateX: 0, opacity: 1 });
      setSlideFinished(true);
    }
  }, []);

  // Guardar el estado de las animaciones
  useEffect(() => {
    sessionStorage.setItem('aboutSectionAnimations', JSON.stringify(hasAnimated));
  }, [hasAnimated]);

  // Manejar la animación inicial solo si no se ha mostrado antes
  useEffect(() => {
    if (!hasAnimated.initial) {
      controls.start({
        y: 0,
        rotateX: 180,
        opacity: 1,
        transition: { duration: 2.5, ease: "easeOut" }
      }).then(() => {
        setSlideFinished(true);
        setHasAnimated(prev => ({ ...prev, initial: true }));
      });
    }
  }, [controls, hasAnimated.initial]);

  // Rotación periódica solo si es la primera vez
  useEffect(() => {
    if (!slideFinished || hasAnimated.initial) return;

    controls.start({
      rotateX: 0,
      transition: { duration: 1, ease: "easeInOut" }
    });
  }, [slideFinished, controls, hasAnimated.initial]);

  return (
    <section
      id="sobre-mi"
      className="relative w-full min-h-screen flex flex-col justify-start items-center overflow-visible px-4 md:px-8 lg:px-20 pt-40 pb-16"
    >
      {/* Encabezado */}
      <motion.div
        initial={hasAnimated.text ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-2"
      >
        <SectionHeader titleKey="about" />
      </motion.div>

      {/* Contenido principal con estado inicial correcto */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-[1400px]">
        <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
          <div className="hidden lg:flex w-full items-start justify-start gap-8 relative z-30 -ml-12">
            <div className="flex flex-col gap-0 p-0 m-0 items-end text-right lg:translate-y-[50px]">
              <motion.h2
                initial={hasAnimated.text ? { x: 0, opacity: 1 } : { x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[6rem] font-semibold text-white leading-none m-0 p-0"
              >
                {t("HomePage.AboutMe.hey")}
              </motion.h2>

              <motion.h3
                initial={hasAnimated.text ? { x: 0, opacity: 1 } : { x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: hasAnimated.text ? 0 : 0.5, duration: 1 }}
                className="text-[4rem] text-white leading-none m-0 p-0"
              >
                {t("HomePage.AboutMe.im")}
              </motion.h3>
            </div>

            <div className="w-full flex flex-col items-start pl-1 lg:pl-1" style={{ perspective: '1000px' }}>
              <motion.h1
                initial={hasAnimated.initial ? { y: 0, rotateX: 0, opacity: 1 } : { y: '-100vh', rotateX: 180, opacity: 0 }}
                animate={controls}
                style={{ transformStyle: 'preserve-3d' }}
                className="font-bold text-[#FF5733] text-[15rem] leading-[1] text-left"
              >
                {t("HomePage.AboutMe.ion")}
              </motion.h1>

              <div className="flex flex-col items-start w-full max-w-[55rem]">
                <motion.p
                  initial={hasAnimated.text ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: hasAnimated.text ? 0 : 2.2, duration: 1 }}
                  className="text-white text-[1.75rem] w-full text-left mt-6"
                >
                  {t("HomePage.AboutMe.text")}
                </motion.p>

                <motion.div
                  initial={hasAnimated.arrow ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: hasAnimated.arrow ? 0 : 3.2, duration: 1 }}
                  onAnimationComplete={() => setHasAnimated(prev => ({ ...prev, arrow: true }))}
                  className="w-full flex justify-center mt-6"
                >
                  <motion.button
                    onClick={onScrollToNext}
                    className="bg-transparent text-white hover:text-[#FF5733] transition-colors"
                    aria-label="Scroll to next section"
                  >
                    <ChevronDown className="w-28 h-28 animate-bounce" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet layout */}
          <div className="flex flex-col lg:hidden items-center text-center gap-3 relative z-30 px-4">
            <div className="w-full flex justify-between items-start">
              <div className="w-[40%] flex flex-col items-end text-right pr-2 -mt-24">
                <motion.h2
                  initial={hasAnimated.text ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: hasAnimated.text ? 0 : 0.3, duration: 1 }}
                  className="text-[2.5rem] font-semibold text-white leading-tight"
                >
                  {t("HomePage.AboutMe.hey")}
                </motion.h2>

                <motion.h3
                  initial={hasAnimated.text ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: hasAnimated.text ? 0 : 0.5, duration: 1 }}
                  className="text-[1.6rem] text-white leading-tight"
                >
                  {t("HomePage.AboutMe.im")}
                </motion.h3>
              </div>

              <div className="w-[65%] flex flex-col items-start text-left pl-2 -mt-32">
                <motion.h1
                  initial={hasAnimated.initial ? { y: 0, rotateX: 0, opacity: 1 } : { y: '-100vh', rotateX: 180, opacity: 0 }}
                  animate={controls}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="font-bold text-[#FF5733] text-[8rem] leading-[1]"
                >
                  {t("HomePage.AboutMe.ion")}
                </motion.h1>

                <motion.p
                  initial={hasAnimated.text ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: hasAnimated.text ? 0 : 1.5, duration: 1 }}
                  className="text-white text-[1rem] mt-2 max-w-full pr-4"
                >
                  {t("HomePage.AboutMe.text")}
                </motion.p>
              </div>
            </div>

            <motion.button
              onClick={onScrollToNext}
              initial={hasAnimated.arrow ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: hasAnimated.arrow ? 0 : 3, duration: 1 }}
              onAnimationComplete={() => setHasAnimated(prev => ({ ...prev, arrow: true }))}
              className="bg-transparent text-white hover:text-[#FF5733] transition-colors"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-20 h-20 animate-bounce" />
            </motion.button>
          </div>
        </div>

        {/* Imagen con estado inicial correcto */}
        <motion.div
          initial={hasAnimated.image ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setHasAnimated(prev => ({ ...prev, image: true }))}
          className="w-full lg:w-auto h-auto flex justify-center lg:justify-end mb-0 lg:mb-0"
        >
          <img
            src="../../generalAssets/fotobio.png"
            alt="My Illustration"
            className="
              pointer-events-none 
              select-none
              w-full h-auto object-contain
              scale-110 sm:scale-100 sm:mx-0 -mx-4
              lg:absolute lg:top-0 lg:right-[-5%] lg:h-screen lg:w-auto lg:object-right
            "
          />
        </motion.div>
      </div>
    </section>
  );
};