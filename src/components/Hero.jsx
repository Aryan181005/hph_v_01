import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ChurchButton from "../components/ChurchButton";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const items = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  },[])

  return (
    <motion.div
      initial={{ height: "100vh"}}
      animate={{ height: isMobile ? "50vh" : "100vh"}}
      transition={{ delay: 2, duration: 1.3, ease: "easeInOut"}}
      className="flex flex-col gap-10 justify-center items-center lg:mt-10"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-[#758467] flex justify-center items-center flex-col gap-3 md:gap-5 lg:gap-10 cursor-default"
      >
        {/* Hero Welcome Section */}
        <motion.p
          variants={items}
          className='text-xs md:text-xl lg:text-3xl font-halimun font-light tracking-wider'
        >
          Welcome to
        </motion.p>
        <motion.h1
          variants={items}
          className='text-2xl md:text-6xl lg:text-8xl font-against text-center'
        >
          Hebron Prayer Hall
        </motion.h1>
        <motion.p
          variants={items}
          className='text-[0.8rem] md:text-[1.3rem] lg:text-[1.6rem] font-matter text-[#758467] tracking-widest'
        >
          Touching lives through the{" "}
          <span className='font-rochester text-[#758467]'>
            living word of God
          </span>
        </motion.p>
        {/* Hero Button */}
        <motion.div
          variants={items}
          className="flex justify-evenly items-center gap-5 lg:gap-10 mt-5 lg:mt-10"
        >
          <ChurchButton
            variants={items}
            onClick={() => alert("planned visit !")}
          />
          <ChurchButton
            variants={items}
            text="Watch Online"
            onClick={() => alert("youtube !")}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
