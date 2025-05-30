import { ProjectCardProps } from "@/shared/types";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tech,
  frontendLink,
  backendLink,
  liveDemo,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-[#1e1e1e] md:min-h-[350px] rounded-2xl shadow-md overflow-hidden max-w-xl w-full"
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={`${title} screenshot`}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {frontendLink && (
            <a
              href={frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-medium shadow hover:brightness-110 transition"
            >
              <Github size={18} />
              Frontend Code
            </a>
          )}
          {backendLink && (
            <a
              href={backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-medium shadow hover:brightness-110 transition"
            >
              <Github size={18} />
              Backend Code
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl font-medium shadow hover:brightness-110 transition"
            >
              🌐 Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
