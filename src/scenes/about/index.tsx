import { SelectedPage } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const pageWithoutSpace = SelectedPage.AboutMe.replace(
    / /g,
    ""
  ) as SelectedPage;

  return (
    <section id="aboutme" className="pb-20 bg-secondary dark:bg-background">
      <motion.div
        className="py-20 flex flex-col items-center text-center bg-secondary dark:bg-background text-textLight dark:text-textDark px-6 max-w-4xl mx-auto"
        onViewportEnter={() => setSelectedPage(pageWithoutSpace)}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-8 font-montserrat"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg leading-relaxed font-dmsans"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I’m a software engineer with a background in Computer Science and a
          curious mind that's always been drawn to building things with code.
          <br />
          <br />
          After a brief stint working with Laravel as a backend developer, I
          took some time to recalibrate and later reignited my passion by diving
          into the MERN stack. Since then, I’ve focused on front-end development
          — especially with React and Next.js — and love crafting clean,
          accessible, and responsive UIs with Tailwind CSS.
          <br />
          <br />I enjoy learning through building real-world projects and
          occasionally contributing to open source( I even got to make a small
          contribution to Firefox!). I’m all about thoughtful code, continuous
          growth, and solving meaningful problems with technology. This site
          itself is a reflection of my learning — designed and developed from
          scratch using React, Typescript, Tailwind CSS, and Framer Motion.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
