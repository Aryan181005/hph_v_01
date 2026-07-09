import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Background = () => {
  const { scrollY } = useScroll();

  return (
    <>
      <motion.div
        style={{ y: useTransform(scrollY, [0, 3000], [0, -250]) }}
        className="fixed inset-0 -z-20 bg-radial from-[#ffe7b8] to-transparent blur-3xl"
      />

      <motion.div
        style={{ y: useTransform(scrollY, [0, 3000], [0, -120]) }}
        className="fixed inset-0 -z-10 bg-radial from-[#FFF8E6] to-[#FFFDF8]"
      />
    </>
  );
};

export default Background;
