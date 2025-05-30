import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full h-[80px] bg-white dark:bg-background">
      <p className="text-md text-center   text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Built with ❤️ by Saira
      </p>
    </div>
  );
};

export default Footer;
