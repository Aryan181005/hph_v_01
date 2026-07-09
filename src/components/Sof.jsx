import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { statements } from "../components/statements";
import { XIcon } from "@animateicons/react/lucide";
import { ChevronDown } from "lucide-react";

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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 lg:gap-7 w-[90%] max-w-5xl max-h-[80vh] overflow-auto scrollbar-hide z-50 text-[#5a674f] bg-linear-to-b from-[#ffe7b8] to-[#FFFDF8] p-8 lg:p-15 font-['matter'] rounded-4xl"
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
              <div key={section.heading} className="flex flex-col gap-5">
                <h2 className="text-md lg:text-2xl font-semibold">
                  {section.heading}
                </h2>
                {section.description && (
                  <p className="text-xs lg:text-base">{section.description}</p>
                )}
                {section.verses.length > 0 && (
                  <p className="text-stone-600 text-xs lg:text-sm tracking-wide">
                    {section.verses.join(" | ")}
                  </p>
                )}
              </div>
            ))}

            <div className="hidden lg:block absolute top-10 right-10">
              <XIcon
                size={22}
                duration={1}
                onClick={() => setSof(null)}
                className="bg-zinc-900/10 text-[#4e5c41] rounded-lg p-2 cursor-pointer"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Sof = () => {
  const [sof, setSof] = useState(null);
  const [openId, setOpenId] = useState(null);

  return (
    <div className="max-w-[90vw] mx-auto mt-20">
      <h2 className="font-['cinzel_decorative'] text-2xl md:text-5xl lg:text-7xl text-center text-[#68775B] tracking-wider">
        Statement of Faith
      </h2>
      <p className="font-['rochester'] text-md md:text-xl lg:text-3xl text-center text-[#758467] mt-1 lg:mt-5 tracking-widest">
        our tenets of faith and doctrine
      </p>
      <div className="lg:mt-20">
        {statements.map((category) => (
          <div key={category.id} className="lg:w-[70vw] mx-auto">
            {/* Accordian */}
            <motion.button
              onClick={() =>
                setOpenId(openId === category.id ? null : category.id)
              }
              className="relative w-full flex justify-between items-center p-5 cursor-pointer font-['matter'] text-lg md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-15 text-[#5D6A51]"
            >
              <motion.span className="absolute inset-y-1 inset-x-5 border-b-2 border-[#758467] opacity-50" />
              {/* Title */}
              <span>{category.category}</span>
              {/* Arrow Icon */}
              <motion.span
                animate={{ rotate: openId === category.id ? 180 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                <ChevronDown />
              </motion.span>
            </motion.button>

            {/* Accordian Details */}
            <AnimatePresence initial={false}>
              {openId === category.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: {
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 0.9,
                      ease: "easeInOut",
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:text-xs md:text-sm lg:text-base gap-5 mt-10 m-2 font-['matter'] text-[#505B45]">
                    {category.items.map((beliefs) => (
                      <motion.div
                        key={beliefs.id}
                        layoutId={`sof-${beliefs.id}`}
                        whileHover="hover"
                        initial="rest"
                        onClick={() => setSof(beliefs)}
                        className="relative p-10 h-25 flex items-center justify-center cursor-pointer"
                      >
                        {/* Border Hover Animation */}
                        <motion.span
                          className="absolute inset-0 border-2 border-[#758467] rounded-3xl"
                          variants={{
                            rest: { opacity: 0.5, scale: 0.9 },
                            hover: { opacity: 1, scale: 1 },
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                          }}
                        />
                        {beliefs.title}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <Dialogue sof={sof} setSof={setSof} />
    </div>
  );
};

export default Sof;
