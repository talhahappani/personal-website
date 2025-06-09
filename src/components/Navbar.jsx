import {
  LuHouse,
  LuUser,
  LuCode,
  LuMail,
  LuGithub,
  LuLinkedin,
  LuSun,
  LuMoon,
} from "react-icons/lu";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full p-4 z-50 bg-secondary">
        <div className="container mx-auto flex justify-between items-center text-primary px-4 md:px-8">
          <div className="flex gap-4 items-center relative after:absolute after:right-full after:bg-primary after:h-px after:w-[calc(100vw-100%)] transition-colors duration-300">
            <a href="#home">
              <LuHouse
                size={24}
                className="cursor-pointer hover:transform hover:scale-120 transition-transform duration-300"
              />
            </a>
            <a href="#about">
              <LuUser
                size={24}
                className="cursor-pointer hover:transform hover:scale-120 transition-transform duration-300"
              />
            </a>
            <a href="#skills">
              <LuCode
                size={24}
                className="cursor-pointer hover:transform hover:scale-120 transition-transform duration-300"
              />
            </a>
            <a href="#contact">
              <LuMail
                size={24}
                className="cursor-pointer hover:transform hover:scale-120 transition-transform duration-300"
              />
            </a>
          </div>
          <div className="flex gap-4 items-center relative after:absolute after:left-full after:bg-primary after:h-px after:w-[calc(100vw-100%)]">
            <button onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? (
                <LuMoon
                  size={24}
                  className="cursor-pointer hover:transform hover:scale-120 transition-transform duration-300"
                />
              ) : (
                <LuSun
                  size={24}
                  className="cursor-pointer hover:transform hover:scale-120 transition-transform duration-300"
                />
              )}
            </button>
            <a
              href="https://www.github.com/talhahappani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub
                size={24}
                className="cursor-pointer hover:transform hover:scale-120 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/talhahappani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuLinkedin
                size={24}
                className="cursor-pointer hover:transform hover:scale-120 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
