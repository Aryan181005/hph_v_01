import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { statements } from "../components/statements";
import { XIcon } from "@animateicons/react/lucide";

const Dialogue = ({ sof, setSof }) => {
  return (
    <AnimatePresence>
      {sof && (
        <>
          {/* Blurred BackGround */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSof(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          {/* Dialogue Box */}
          <motion.div
            layoutId={`sof-${sof.id}`}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 lg:gap-7 w-[90%] max-w-5xl max-h-[80vh] overflow-auto z-50 text-[#5a674f] bg-linear-to-b from-[#ffe7b8] to-[#FFFDF8] p-5 lg:p-15 font-['matter'] rounded-4xl"
          >
            <h2 className="text-xl lg:text-4xl font-semibold">{sof.title}</h2>
            {sof.description && (
              <>
                <p className="text-xs lg:text-base">{sof.description}</p>
                {sof.verses && (
                  <p className="text-stone-600 text-xs lg:text-sm tracking-wide">
                    {sof.verses.join(" | ")}
                  </p>
                )}
              </>
            )}
            {sof.sections?.map((section, idx) => (
              <>
                <div key={section.heading} className="flex flex-col gap-5">
                  <h2 className="text-md lg:text-2xl font-semibold">
                    {section.heading}
                  </h2>
                  {section.description && (
                    <p className="text-xs lg:text-base">
                      {section.description}
                    </p>
                  )}
                  {section.verses.length > 0 && (
                    <p className="text-stone-600 text-xs lg:text-sm tracking-wide">
                      {section.verses.join(" | ")}
                    </p>
                  )}
                </div>
              </>
            ))}

            <XIcon
              size={24}
              duration={1}
              onClick={() => setSof(null)}
              className="hidden lg:flex absolute lg:top-10 lg:right-10 lg:bg-zinc-900/10 text-[#4e5c41] rounded-lg lg:p-2 cursor-pointer"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Sof = () => {
  const [sof, setSof] = useState(null);

  return (
    <>
      <h2 className="font-['cinzel'] text-3xl md:text-5xl lg:text-7xl text-center text-[#758467] tracking-wider">
        Statement of Faith
      </h2>
      <p className="font-['matter'] text-sm md:text-lg lg:text-2xl text-center text-[#758467] mt-5 tracking-widest">
        Our Tenets of Faith and Doctrine
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 lg:mx-50 mt-20">
        {statements.map((items) => (
          <motion.button
            key={items.id}
            layoutId={`sof-${items.id}`}
            whileHover="hover"
            initial="rest"
            onClick={() => setSof(items)}
            className="group relative cursor-pointer h-25 px-5 flex justify-center items-center text-center rounded-4xl font-['matter']"
          >
            {/* Border Animation */}
            <motion.span
              className="absolute inset-0 rounded-4xl border-2 border-[#758467]"
              variants={{
                rest: { scale: 0.9, opacity: 0.4 },
                hover: { scale: 1, opacity: 1 },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
            {/* Tile Heading */}
            <div className="z-10 text-[#575757] text-xs md:text-sm lg:text-base">
              {items.title}
            </div>
          </motion.button>
        ))}
      </div>

      <Dialogue sof={sof} setSof={setSof} />
    </>
  );
};

export default Sof;
