import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', level: 95, color: 'bg-orange-500' },
    { name: 'CSS', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
    { name: 'React', level: 85, color: 'bg-cyan-500' },
    { name: 'Next.js', level: 80, color: 'bg-gray-800' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
    { name: 'Django', level: 75, color: 'bg-green-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-50 p-4 rounded-xl text-center hover:bg-gray-100 transition-colors duration-300 group cursor-pointer"
              >
                <div className="text-2xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.name.split(' ')[0]}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;