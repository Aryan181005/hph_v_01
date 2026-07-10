import React, { useState } from "react";
import { PhoneIcon, MailIcon } from "@animateicons/react/lucide";
import { FiYoutube, FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <hr className={`text-stone-400/50 h-10 border-t-2 max-w-[92vw] mx-auto mt-20`} />
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-[50vw] text-center flex flex-col gap-7 justify-center items-center">
          <h2 className="text-xl lg:text-3xl font-['halimun'] text-[#758467]">
            Hebron Prayer Hall
          </h2>
          {/* Contact */}
          <div className="flex items-center justify-center gap-4 text-sm text-[#758467]">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 hover:text-[#505B45] transition-colors text-xs lg:text-sm bg-mist-300/30 px-4 py-3 rounded-2xl outline-none"
            >
              <PhoneIcon size={20} />
              <p className="hidden md:block">+91 12345 67890</p>
              <p className="md:hidden">Call Us</p>
            </a>

            <div className="h-5 w-px bg-gray-400" />

            <a
              href="mailto:info@yourchurch.org"
              className="flex items-center gap-2 hover:text-[#505B45] transition-colors text-xs lg:text-sm bg-mist-300/30 px-4 py-3 rounded-2xl outline-none"
            >
              <MailIcon size={20} />
              <p className="hidden md:block">info@yourchurch.org</p>
              <p className="md:hidden">Mail Your Query</p>
            </a>
          </div>
          {/* CopyRight */}
          <p className="font-matter text-stone-600 text-[11px] md:text-xs lg:text-sm">
            &copy; 2026 Hebron Prayer Hall. All Rights Reserved
          </p>

          {/* Notice */}
          <div className="w-[80vw] lg:w-[40vw] mb-10 flex flex-col items-center text-[#434C3A]">
            <motion.button
              onClick={() => setOpen(!open)}
              className="w-2/5 lg:w-1/5 border-b-2 border-[#758467]/40 px-1 pb-2 lg:mb-5 text-xs md:text-sm font-matter flex justify-between items-center overflow-hidden"
            >
              <p>Legal Notice</p>
              {/* Arrow Icon */}
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </motion.button>
            {/* Disclaimer */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.p
                  initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                  animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
                  exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                  transition={{
                    clipPath: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                  }}
                  className="font-matter text-red-500 text-[11px] lg:text-sm mb-10 text-left"
                >
                  The life and message of Jesus Christ, together with the
                  teachings of the Bible, are intended for everyone. Our
                  services, events, and resources are open to all individuals
                  who freely choose to participate. They are provided to
                  encourage and strengthen faith in Jesus Christ and the
                  teachings of the Bible. <br /> This statement is made in view
                  of the anti-conversion laws applicable in certain regions of
                  India. The Constitution of India guarantees fundamental rights
                  to all citizens, including the right to freedom of conscience
                  and the freedom to profess, practice, and propagate religion
                  (Articles 12–35, Part III), as well as the right to seek
                  constitutional remedies for the protection of these rights.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
