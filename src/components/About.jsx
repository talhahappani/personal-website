import { motion } from "framer-motion";

const aboutMeText = `Hi, I am Talha! I am a Computer Engineer who graduated from Bahçeşehir University. I currently work as a front-end developer. I build dynamic and user-friendly features using JavaScript. I am skilled in HTML, CSS, JavaScript, and React.js. I enjoy working on interfaces that are both functional and easy to use. In my spare time, I follow new trends in front-end development and work on small personal projects. I also try to improve my skills in tools like Node.js, React, and Tailwind CSS. I like learning and staying up to date with new technologies.`;

const experiences = [
  {
    year: "Jan. 2024 - Present",
    title: "Frontend Developer",
    at: "PersonaClick",
  },
  {
    year: "Aug. 2022 - Sep. 2022",
    title: "DevOps Engineer Intern",
    at: "Data Market",
  },
  {
    year: "Sep. 2018 - July 2023",
    title: "BSc in Computer Engineering",
    at: "Bahcesehir University",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 md:px-8 flex relative gap-8 justify-between mt-48 w-full flex-wrap md:flex-nowrap scroll-mt-20"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="flex relative flex-col gap-8 w-full md:w-1/2"
      >
        <h2 className="text-4xl md:text-5xl tracking-tight bg-gradient-to-r from-neutral-700 to-neutral-600 bg-clip-text text-transparent w-fit dark:from-gray-300 dark:to-gray-400">
          About Me
        </h2>
        <p className="text-md md:text-lg">{aboutMeText}</p>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex relative flex-col gap-8 w-full md:w-1/2 md:items-center"
      >
        <h2 className="text-4xl md:text-5xl tracking-tight bg-gradient-to-r from-neutral-700 to-neutral-600 bg-clip-text text-transparent w-fit dark:from-gray-300 dark:to-gray-400">
          Experience
        </h2>
        <ul>
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="flex flex-col relative ml-4 pl-6 pb-4 first-of-type:before:w-2.5 first-of-type:before:h-2.5 first-of-type:before:left-[1px] before:w-[7px] before:h-[7px] before:border-[3px] before:border-solid before:border-neutral-600 hover:before:[animation:custom-animation_1.2s_infinite] before:bg-neutral-500 before:rounded-[50%] before:left-[3px] before:absolute after:absolute after:w-[3px] after:h-full after:bg-neutral-500 after:left-[5px] after:top-0 before:z-10 dark:before:border-gray-400 dark:before:bg-gray-500 dark:after:bg-gray-500"
            >
              <span>{experience.title}</span>
              <div className="flex md:justify-between items-center gap-4">
                <span className="text-primary/50 text-sm">{experience.at}</span>
                <span className="text-primary/50 text-sm">
                  {experience.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
