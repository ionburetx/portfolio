import { motion } from "framer-motion";

const SectionHeader = ({ title }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-16">

      {/* Línea superior: izquierda hacia el centro con círculo a la derecha */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-[75%] md:w-[65%] h-px bg-white/30 self-start mb-4"
      >
        <div className="absolute -right-[6px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full" />
      </motion.div>

      {/* Título con fade-in */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold tracking-widest text-white uppercase text-center"
      >
        {title}
      </motion.h1>

      {/* Línea inferior: derecha hacia el centro con círculo a la izquierda */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-[75%] md:w-[65%] h-px bg-white/30 self-end mt-4"
      >
        <div className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full" />
      </motion.div>
      
    </div>
  );
};

export default SectionHeader;



