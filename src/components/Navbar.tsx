import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import { HiX } from "react-icons/hi";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full px-6 py-4 shadow bg-white dark:bg-background text-black dark:text-neutral-200 transition-all duration-300 sticky top-0 z-50 ${
        isTopOfPage ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* LEFT (Desktop) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center space-x-4 font-bold text-indigo-600 dark:text-indigo-400"
        >
          PORTFOLIO
        </motion.div>

        {/* CENTER (Desktop) */}
        <div className="hidden md:flex space-x-6 font-medium">
          {Object.values(SelectedPage).map((item) => {
            return (
              <motion.div
                key={item}
                // href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  page={item}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="#contact"
            className="px-4 py-2 border border-indigo-500 dark:border-indigo-400 font-dmsans font-medium rounded-md text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden flex justify-between items-center w-full">
          {/* Center mobile dropdown button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mx-auto text-indigo-600 dark:text-indigo-400 font-bold font-dmsans text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PORTFOLIO
          </motion.button>

          {/* Toggle button on right */}
          <motion.button
            aria-label="Toggle-dark-light-mode"
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen z-50  md:hidden overflow-hidden bg-white/80 dark:bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center "
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Close menu"
            >
              <HiX size={24} className="text-textLight dark:text-textDark" />
            </button>

            <div className="mt-4 space-y-3 text-center">
              {Object.values(SelectedPage).map((item) => (
                <motion.div
                  key={item}
                  className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    page={item}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                className="hover:text-indigo-500 dark:hover:text-indigo-400  font-dmsans block font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
