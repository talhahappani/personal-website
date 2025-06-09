import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ once: true }}
      id="contact"
      className="container mx-auto px-4 md:px-8 flex relative flex-col justify-center my-48 w-full scroll-mt-20"
    >
      <h2 className="mb-8 text-4xl md:text-5xl tracking-tight bg-gradient-to-r from-neutral-700 to-neutral-600 bg-clip-text text-transparent w-fit dark:from-gray-300 dark:to-gray-400">
        Get In Touch
      </h2>
      <p className="mb-2 text-md md:text-lg max-w-full lg:max-w-1/2">
        If you'd like to chat, ask questions, or simply say hi, my inbox is
        always open. I'll be happy to reply as soon as possible!
      </p>
      <div className="w-48 h-16 lg:w-64 lg:h-20 perspective-[1000px]">
        <div
          onClick={() => isMobile && setFlipped((prev) => !prev)}
          className="relative w-full h-full group transform-3d"
        >
          {/* Front face */}
          <div
            className={`absolute w-full h-full border border-primary border-solid rounded-md flex items-center justify-center backface-hidden ${
              flipped ? "rotate-y-180" : ""
            } lg:group-hover:rotate-y-180 transition-[background-color,transform] duration-[300ms,500ms] ease-[ease-in-out,ease] will-change-transform`}
          >
            <span className="text-lg lg:text-xl text-black dark:text-white">
              Contact Me
            </span>
          </div>

          {/* Back face */}
          <div
            className={`absolute w-full h-full rounded-md bg-primary text-slate-100  flex items-center justify-center ${
              flipped ? "rotate-y-0" : "rotate-y-180 "
            } ${flipped ? "backface-visible" : "backface-hidden"} ${
              flipped ? "opacity-100" : "opacity-0"
            } lg:group-hover:rotate-y-0 lg:group-hover:backface-visible lg:group-hover:opacity-100 gap-6 transition-[background-color,transform,opacity] duration-[300ms,500ms,500ms] ease-[ease-in-out,ease,ease] will-change-transform`}
          >
            <a
              href="mailto:talhahappani@gmail.com"
              className="text-lg text-secondary"
              onClick={(e) => e.stopPropagation()}
            >
              <FaEnvelope size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/talhahappani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-secondary"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
