import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
