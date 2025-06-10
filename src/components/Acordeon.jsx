import { useState } from "react";

const Acordeon = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold uppercase">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-t border-white/30 pt-4">
            <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleIndex(index)}>
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                {item.subtitle && <p className="text-sm text-white/60">{item.subtitle}</p>}
              </div>
              <button className="text-tomato text-2xl font-bold leading-none">
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-white/80 leading-relaxed">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acordeon;
