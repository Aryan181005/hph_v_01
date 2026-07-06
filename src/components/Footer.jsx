import React from "react";
import { PhoneIcon, MailIcon } from "@animateicons/react/lucide";
import { FiYoutube, FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  const socials = {
    hover: {
      scale: 1.3,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
      },
    },
  };

  return (
    <>
      <hr className="text-stone-400/50 h-10 border-t-2 mx-5 lg:mx-20 mt-30" />
      <div className="flex flex-col justify-center items-center">
        <div className="lg:w-1/2 mx-10 text-center flex flex-col gap-5 justify-center items-center">
          <h2 className="text-3xl lg:text-5xl font-['brush_script_mt'] text-[#758467]">
            Hebron Prayer Hall
          </h2>
          {/* Contact */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-sm text-stone-600">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 hover:text-[#5e6f4e] transition-colors text-xs lg:text-sm bg-[#ffefd0cf] px-4 py-3 rounded-2xl outline-none"
            >
              <PhoneIcon size={20} />
              +91 12345 67890
            </a>

            <div className="hidden lg:flex h-5 w-px bg-gray-400" />

            <a
              href="mailto:info@yourchurch.org"
              className="flex items-center gap-2 hover:text-[#5e6f4e] transition-colors text-xs lg:text-sm bg-[#ffefd0cf] p-3 rounded-2xl outline-none"
            >
              <MailIcon size={20} />
              info@yourchurch.org
            </a>
          </div>
          {/* CopyRight */}
          <p className="font-['matter'] text-stone-600 text-xs lg:text-sm">
            &copy; 2026 Hebron Prayer Hall. <br className="md:hidden" /> All
            Rights Reserved
          </p>
          {/* Social Icons */}
          {/* <div className="flex gap-5 my-3 text-3xl text-[#5d6951]">
          <motion.a
            href=""
            whileHover="hover"
            variants={socials}
            className="outline-none"
          >
            <FiYoutube />
          </motion.a>
          <motion.a
            href=""
            whileHover="hover"
            variants={socials}
            className="outline-none"
          >
            <FiFacebook />
          </motion.a>
          <motion.a
            href=""
            whileHover="hover"
            variants={socials}
            className="outline-none"
          >
            <FaInstagram />
          </motion.a>
        </div> */}
          {/* Disclaimer */}
          <p className="font-['matter'] text-red-600 text-xs lg:text-sm mb-10">
            The life and message of Jesus Christ, together with the teachings of
            the Bible, are intended for everyone. Our services, events, and
            resources are open to all individuals who freely choose to
            participate. They are provided to encourage and strengthen faith in
            Jesus Christ and the teachings of the Bible. <br /> This statement
            is made in view of the anti-conversion laws applicable in certain
            regions of India. The Constitution of India guarantees fundamental
            rights to all citizens, including the right to freedom of conscience
            and the freedom to profess, practice, and propagate religion
            (Articles 12–35, Part III), as well as the right to seek
            constitutional remedies for the protection of these rights.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
