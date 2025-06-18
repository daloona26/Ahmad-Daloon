import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "ShamMart",
      description:
        "A comprehensive e-commerce platform connecting customers with authentic Syrian products. Features include product catalog, shopping cart, user authentication, and seller dashboard.",
      image: "/images/sham mart copy.png",
      link: "https://shammart.vercel.app/",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Omnifood",
      description:
        "A modern food delivery service website with beautiful design and smooth animations. Features meal planning, subscription services, and responsive design.",
      image: "/images/ominfood copy.png",
      link: "https://omnifood-ahmad-daloon.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      title: "CRWN Clothing",
      description:
        "A full-featured e-commerce clothing store with user authentication, shopping cart functionality, and payment integration using modern React patterns.",
      image: "/images/crwnth.png",
      link: "https://crwnthes.netlify.app/",
      technologies: ["React", "Redux", "Firebase", "Stripe API"],
    },
    {
      title: "Forkify",
      description:
        "A recipe search application that allows users to search for recipes, view detailed cooking instructions, and save their favorite recipes with a clean, intuitive interface.",
      image: "/images/forkify copy.png",
      link: "https://forkify-daloona26.netlify.app/",
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
    },
    {
      title: "PageTurner",
      description:
        "Explore our vast collection of books across various categories. From thrilling mysteries to heartwarming classics, we have something for everyone.",
      image: "/images/pageturner.png",
      link: "https://ahmadlibrary.netlify.app/",
      technologies: ["React Js", "HTML", "Tailwind CSS", "API Integration"],
    },
    {
      title: "Go",
      description:
        "حلول تسويق رقمي احترافية تحقق النتائج وتنمي علامتك التجارية|Professional digital marketing solutions that drive results and grow your brand",
      image: "/images/Go pic 2.png",
      link: "https://go-marketing-agency.vercel.app/",
      technologies: [
        "React Js",
        "HTML",
        "Tailwind CSS",
        "Vite",
        "Vercel",
        "Arabic",
      ],
    },
    {
      title: "Vellora Dental Office",
      description:
        "Experience world-class dental care with our team of expert dentists. Modern technology meets compassionate care.",
      image: "/images/vellora dental 1.png",
      link: "https://vellora-dental-office.vercel.app/",
      technologies: ["React Js", "HTML", "Tailwind CSS", "Vite", "Vercel"],
    },
  ];

  const projectsPerPage = 4; // You can change this to 5 if you prefer
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the projects to display for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle next and previous page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {currentProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-600/80 dark:bg-primary-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 font-semibold transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-12 space-x-2">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                : "bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                currentPage === i + 1
                  ? "bg-primary-600 text-white dark:bg-primary-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                : "bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
