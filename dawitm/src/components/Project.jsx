import React from 'react';

const Projects = () => {
  const myProjects = [
    {
      title: "Student Management System",
      tech: "React, Tailwind",
      description: "A system built for Debre Berhan University students to track grades."
    },
    {
      title: "Python Task Automator",
      tech: "Python",
      description: "A script that automates daily file organization tasks."
    },
    {
      title: "Portfolio Website",
      tech: "React, Redux Toolkit",
      description: "The current website you are viewing!"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 underline decoration-blue-500 underline-offset-8">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((p, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 bg-white">
              <h3 className="text-xl font-bold mb-2 text-blue-700">{p.title}</h3>
              <p className="text-sm font-semibold text-gray-500 mb-4">{p.tech}</p>
              <p className="text-gray-600 mb-6">{p.description}</p>
              <button className="text-blue-600 font-bold hover:text-blue-800 transition">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;