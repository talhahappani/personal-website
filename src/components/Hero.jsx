import { useState } from "react";
import { motion } from "framer-motion";

const personalInfo = {
  name: "Talha Happani",
  title: "Frontend Developer",
  description:
    "I am passionate about designing and building web interfaces that are both visually appealing and easy to use. I enjoy turning ideas into interactive experiences with thoughtful design and clean code.",
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0 }}
      viewport={{ once: true }}
      id="home"
      className="container mx-auto px-4 md:px-8 w-full flex relative flex-col justify-center mt-40 scroll-mt-20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`max-w-screen pattern-bg default-fade ${
          isHovering ? "opacity-0" : "opacity-30"
        } transition-opacity duration-300 ease-in-out`}
      ></div>
      <div
        className={`max-w-screen pattern-bg transition-opacity duration-300 ease-in-out ${
          isHovering ? "opacity-30" : "opacity-0"
        }`}
        style={{
          WebKitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--secondary) 0%, transparent 35%)`,
          mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--secondary) 0%, transparent 35%)`,
        }}
      ></div>
      <span className="text-lg md:text-xl">Hi, I'm</span>
      <h2 className="text-2xl tracking-tight md:text-5xl mt-2 -ml-0.5 bg-gradient-to-r from-neutral-700 to-neutral-600 bg-clip-text text-transparent w-fit dark:from-gray-300 dark:to-gray-400">
        {personalInfo.name}
      </h2>
      <span className="text-xl md:text-3xl tracking-tight w-fit text-primary/50 dark:text-primary/30">
        {personalInfo.title}
      </span>
      <p className="text-md md:text-lg">{personalInfo.description}</p>
      <div className="flex gap-4 mt-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary px-4 py-2 text-xl rounded-md cursor-pointer bg-transparent border border-solid border-primary hover:bg-primary hover:text-secondary duration-300 transition-colors"
        >
          Get My Resume
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
