import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon } from "@animateicons/react/lucide";
import { X } from "lucide-react";

const Navbar = () => {
  const navlinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Sermons",
      path: "https://www.youtube.com",
    },
  ];

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <motion.div className="">
      {/* Menu Icon */}
      <span
        onClick={() => setMenuVisible(!menuVisible)}
        className="cursor-pointer fixed top-5 lg:top-10 right-5 lg:right-10 z-30"
      >
        <motion.div className="flex flex-col gap-1 lg:gap-1.5 z-30">
          <motion.span
            animate={{ rotate: menuVisible ? -45 : 0, y: menuVisible ? -1 : 0 }}
            style={{ transformOrigin: "right center" }}
            className="block w-6 lg:w-7 h-0.75 rounded-full bg-[#434C3A]/80 lg:bg-[#434C3A]"
          />
          <motion.span
            animate={{ opacity: menuVisible ? 0 : 1 }}
            style={{ transformOrigin: "left center" }}
            className="block w-6 lg:w-7 h-0.75 rounded-full bg-[#434C3A]/80 lg:bg-[#434C3A]"
          />
          <motion.span
            animate={{ rotate: menuVisible ? 45 : 0, y: menuVisible ? 1 : 0 }}
            style={{ transformOrigin: "right center" }}
            className="block w-6 lg:w-7 h-0.75 rounded-full bg-[#434C3A]/80 lg:bg-[#434C3A]"
          />
        </motion.div>
      </span>

      {/* Menu Appears from right */}
      <AnimatePresence>
        {menuVisible && (
          <>
            {/* Blurred BackGround */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuVisible(false)}
              className="fixed inset-0 z-10 backdrop-blur-sm"
            />
            {/* Nav Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%"}}
              transition={{ 
                type: "spring",
                stiffness: 170,
                damping: 20
               }}
              className="bg-linear-to-br from-[#f6f4ef] to-[#fbe9c0] shadow-2xl w-96 lg:w-[50vw] z-20 fixed top-0 right-0 max-w-2xl h-dvh p-10 flex flex-col gap-5"
            >
              {navlinks.map((nav, idx) => (
                <Link key={nav.path} to={nav.path}>
                  <motion.div
                    initial={{ scale: 0.97 }}
                    whileHover={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                    className="relative group text-xl lg:text-3xl text-[#68775B] font-matter leading-15 lg:leading-20"
                  >
                    <span className="absolute inset-0 border-b-2 border-[#68775B]/60" />
                    {nav.label}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
