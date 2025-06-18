import React from "react";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"
    >
      {/* The overlay and gradient background remain consistent across modes for this hero */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="/images/Ahmad Daloon copy.png"
              alt="Ahmad Daloon"
              // Adjust border color for dark mode if desired, though white often works well against dark
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-2xl dark:border-primary-200"
            />
          </div>

          {/* Text colors are already white/light, which works for this background */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Ahmad Daloon
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Full Stack Developer passionate about creating exceptional web
            experiences with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            {/* Button 1: White background, primary text (in light mode) */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg
                         dark:bg-primary-100 dark:text-primary-900 dark:hover:bg-primary-200 dark:shadow-none"
            >
              View My Work
            </button>
            {/* Button 2: White border, white text (in light mode) */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105
                         dark:border-primary-300 dark:text-primary-100 dark:hover:bg-primary-300 dark:hover:text-primary-900"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down button, already white text, which works for this background */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow"
        aria-label="Scroll to About section" // Added for accessibility
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
