import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With a strong foundation in both frontend and backend development, I bring ideas to life 
                through clean code, thoughtful design, and attention to detail.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Development</h3>
                </div>
                <p className="text-gray-600">
                  Building robust applications with clean, maintainable code and best practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Palette className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Design</h3>
                </div>
                <p className="text-gray-600">
                  Creating intuitive user interfaces with modern design principles and accessibility in mind.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
                </div>
                <p className="text-gray-600">
                  Staying up-to-date with the latest technologies and implementing innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;