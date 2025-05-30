import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react"; // using lucide icons

const Footer = () => {
  return (
    <div className="w-full bg-white dark:bg-background py-6">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="https://x.com/saira_codes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition"
        >
          <Twitter size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/saira-abdulla/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition"
        >
          <Linkedin size={25} />
        </a>
        <a
          href="https://github.com/saira512dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition"
        >
          <Github size={25} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Built with ❤️ by Saira
      </p>
    </div>
  );
};

export default Footer;
