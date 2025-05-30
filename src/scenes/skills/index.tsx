import { SelectedPage } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiLaravel,
} from "react-icons/si";

type SkillIcon = React.FC<
  React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    title?: string;
  }
>;

type Skill = {
  name: string;
  Icon: SkillIcon;
};

const skills: Skill[] = [
  { name: "React", Icon: SiReact as SkillIcon },
  { name: "Next.js", Icon: SiNextdotjs as SkillIcon },
  { name: "Tailwind CSS", Icon: SiTailwindcss as SkillIcon },
  { name: "Express", Icon: SiExpress as SkillIcon },
  { name: "Node.js", Icon: SiNodedotjs as SkillIcon },
  { name: "MongoDB", Icon: SiMongodb as SkillIcon },
  { name: "PostgreSQL", Icon: SiPostgresql as SkillIcon },
  { name: "Laravel", Icon: SiLaravel as SkillIcon },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
  const pageKey = SelectedPage.Skills.replace(/ /g, "") as SelectedPage;

  return (
    <section id="skills" className="pb-20 bg-secondary dark:bg-background">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        onViewportEnter={() => setSelectedPage(pageKey)}
      >
        <motion.h2
          className="text-3xl font-bold text-primary mb-10 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {skills.map(({ name, Icon }, i) => (
            <motion.div
              key={i}
              className="
              flex flex-col items-center justify-center
              p-4 rounded-lg shadow-md
              bg-secondary           /* light */
              dark:bg-card-dark      /* custom dark, or use dark:bg-gray-800 */
              hover:bg-primary/10
              dark:hover:bg-primary/20
              transition-colors
            "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: i * 0.1,
              }}
            >
              <Icon size={40} className="text-primary mb-2" />
              <p className="text-sm font-medium text-textLight dark:text-textDark font-dmsans">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
