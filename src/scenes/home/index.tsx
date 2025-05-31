import Navbar from "@/components/Navbar";
import { SelectedPage } from "@/shared/types";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "@/components/Link";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};

const index = ({ setSelectedPage, selectedPage }: Props) => {
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
          <div className="flex justify-center items-center flex-col md:flex-row gap-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                page="Projects"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
                style="inline-block px-6 py-3 text-white bg-indigo-700 rounded-lg"
              />
            </motion.div>

            <motion.a
              href="https://bugzilla.mozilla.org/buglist.cgi?email1=sairaabdullapa%40gmail.com&classification=Client%20Software&classification=Developer%20Infrastructure&classification=Components&classification=Server%20Software&classification=Other&list_id=17572875&emailassigned_to1=1&query_format=advanced&emailtype1=equals&resolution=FIXED"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-700 text-white rounded-lg shadow hover:brightness-110 transition font-dmsans font-medium tracking-wide"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              aria-label="link to bugs fixed in mozilla"
            >
              Open Source Contributions
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
