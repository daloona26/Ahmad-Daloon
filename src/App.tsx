import React from "react";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; // Assuming you have a Skills component
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      {" "}
      {/* Wrap your entire application with ThemeProvider */}
      {/* Apply base light/dark mode styles to the main container */}
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-500">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
