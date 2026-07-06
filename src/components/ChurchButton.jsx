import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { motion, scale } from "framer-motion";

const ChurchButton = ({ text = "Plan Your Visit", onClick, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className='group relative flex gap-3 justify-center items-center text-xs md:text-base lg:text-xl font-["matter"] px-4 py-3 md:px-5 md:py-4 lg:px-7 lg:py-3 rounded-full cursor-pointer appearance-none outline-none'
    >
      <span className="absolute inset-0 rounded-full border border-[#9CAF88]"></span>
      <span
        className="absolute inset-0 rounded-full border-2 border-[#758467]
               [clip-path:inset(0_100%_0_0)]
               transition-all duration-500 ease-in-out
               group-hover:[clip-path:inset(0_0_0_0)]"
      ></span>

      <span className="">{text}</span>
      {/* Desktop Screen */}
      <div className="w-12.5 h-12.5 hidden lg:flex justify-center items-center">
        <motion.div
          animate={{
            width: isHovered ? "100%" : "4%",
            height: isHovered ? "100%" : "4%",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 12,
          }}
          className="bg-[#758467] rounded-full p-2 flex justify-center items-center"
        >
          <motion.div
            animate={{
              scale: isHovered ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex justify-center items-center text-white"
          >
            <ArrowUpRight />
          </motion.div>
        </motion.div>
      </div>
      {/* Mobile Screen */}
      <div className="lg:hidden w-5 h-5 md:w-7 md:h-7 flex justify-center items-center bg-[#758467] text-white rounded-full">
          <ArrowUpRight className="scale-[0.6]" />
      </div>
    </motion.button>
  );
};

export default ChurchButton;
