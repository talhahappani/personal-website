import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={20} className="text-[#E34F26]" />,
      bgColor: "#E34F2626",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={20} className="text-[#2965F1]" />,
      bgColor: "#2965F126",
    },
    {
      name: "JavaScript",
      icon: <FaJs size={20} className="text-[#F0DB4F]" />,
      bgColor: "#F0DB4F26",
    },
    {
      name: "React",
      icon: <FaReact size={20} className="text-[#61DAFB]" />,
      bgColor: "#61DAFB26",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={20} className="text-[#8CC84B]" />,
      bgColor: "#8CC84B26",
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill size={20} className="text-[#38B2AC]" />,
      bgColor: "#38B2AC26",
    },
    {
      name: "MongoDB",
      icon: <DiMongodb size={20} className="text-[#47A248]" />,
      bgColor: "#47A24826",
    },
    {
      name: "Git",
      icon: <FaGitAlt size={20} className="text-[#F14E32]" />,
      bgColor: "#F14E3226",
    },
  ];
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0 }}
      viewport={{ once: true }}
      id="skills"
      className="container mx-auto px-4 md:px-8 flex relative flex-col gap-8 mt-48 w-full justify-center scroll-mt-20"
    >
      <h2 className="text-4xl md:text-5xl tracking-tight bg-gradient-to-r from-neutral-700 to-neutral-600 bg-clip-text text-transparent w-fit dark:from-gray-300 dark:to-gray-400">
        Skills
      </h2>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 items-center gap-8 max-w-full lg:max-w-1/2"
      >
        {skills.map((skill, index) => (
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            key={index}
            className="flex items-center lg:flex-col 2xl:flex-row gap-3 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-gray-100/50 dark:shadow-gray-100/25 p-3 "
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md dark:shadow-gray-100/10 p-2"
              style={{ backgroundColor: skill.bgColor }}
            >
              {skill.icon}
            </div>
            <span className="text-sm">{skill.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Skills;
