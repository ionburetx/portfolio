const SectionHeader = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <div className="flex-1 h-px bg-white/30" />
      <div className="text-2xl md:text-3xl font-bold tracking-widest text-white uppercase">
        {title}
      </div>
      <div className="flex-1 h-px bg-white/30" />
    </div>
  );
};

export default SectionHeader;
