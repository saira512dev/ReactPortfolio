import Navbar from "@/components/Navbar";
import { SelectedPage } from "@/shared/types";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  const handleClick = () => {
    console.log("HERE");

    const el = document.getElementById("projects");
    console.log(el);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home">
      <motion.div
        className="min-h-screen flex items-center justify-center bg-secondary dark:bg-background text-textLight dark:text-textDark px-6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight font-montserrat"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Hi, I'm <span className="text-primary">Saira Abdulla</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-8 font-dmsans"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Software Engineer crafting clean, responsive UIs with React &
            Next.js
          </motion.p>

          <motion.button
            aria-label="Link to projects"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:brightness-110 transition font-dmsans font-medium tracking-wide"
            initial={{ x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
