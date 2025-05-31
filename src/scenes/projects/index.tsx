import { ProjectCardProps, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

let projects: ProjectCardProps[] = [
  {
    title: "MERN Admin Dashboard",
    description:
      "A full-stack admin dashboard built with the MERN stack. It includes authentication, dynamic charts, and real-time statistics. Designed for data-heavy admin interfaces with responsive UI and modular architecture, this dashboard makes call to the backend using redux toolkit query.",
    tech: [
      "React",
      "Material UI",
      "Tailwind CSS",
      "ReduxToolkit Query",
      "Node JS",
      "Express JS",
      "Mongo DB",
      "Passport",
    ],
    frontendLink: "https://github.com/saira512dev/AdminDashboard-Client",
    backendLink: "https://github.com/saira512dev/AdminDashboard-Server",
    liveDemo: "https://admin-dashboard-mernstack.netlify.app",
    imageUrl: "./adminDashboard.webp",
  },
  {
    title: "Get Fit Go – Modern Gym Marketing Website",
    description:
      "Get Fit Go is a sleek, responsive marketing website built for a modern gym. It highlights the gym’s offerings, benefits, and testimonials with smooth animations and a clean design. Built with React and Framer Motion, the site features engaging transitions, clear call-to-actions, and a professional layout to attract potential members and improve online presence.",
    tech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Form Submit",
    ],
    frontendLink: "https://github.com/saira512dev/GymApp",
    liveDemo: "https://get-fit-go.netlify.app/",
    imageUrl: "./GymApp.webp",
  },
  // {
  //   title: "Travel Agency Dashboard",
  //   description:
  //     "Admin dashboard for managing travel destinations, bookings, and users.",
  //   tech: ["React", "Tailwind", "Appwrite", "Stripe"],
  //   github: "https://github.com/yourusername/travel-dashboard",
  //   demo: "https://travel.yoursite.com",
  //   image: "",
  // },
  // {
  //   title: "Book Exchange App",
  //   description: "A platform for users to post, exchange, and review books.",
  //   tech: ["Next.js", "MongoDB", "ShadCN", "Auth.js"],
  //   github: "https://github.com/yourusername/book-exchange",
  //   demo: "",
  //   image: "",
  // },
];
const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects">
      <motion.div
        className=" bg-secondary dark:bg-background text-textLight dark:text-textDark py-16 px-4 md:px-10m mini:px-16"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-primary mb-10 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Projects
        </motion.h2>
        <div className="grid place-items-center gap-7 lg:gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} delay={idx * 0.2} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
