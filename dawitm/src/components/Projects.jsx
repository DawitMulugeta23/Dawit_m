import React from 'react';
import { useSelector } from 'react-redux';
import ecommerceImg from '../assets/ecommerce.png'; 
// ሌሎች ፎቶዎች ካሉህ እዚህ import አድርጋቸው፤ ለጊዜው በዲዛይን መልክ እናስቀምጣቸው

const Projects = () => {
  const isDark = useSelector((state) => state.nav.darkMode);

  const projects = [
    {
      title: "Ecommerce Web App",
      tech: "MongoDB, Express, React, Node",
      link: "https://github.com/DawitMulugeta23/Ecommerce-web-app",
      image: ecommerceImg,
      desc: "A full-stack MERN platform featuring secure MongoDB integration, product management, and real-time filtering."
    },
    {
      title: "Automotive Repair System",
      tech: "Python, Desktop GUI",
      link: "https://github.com/DawitMulugeta23/AMRMS/blob/main/AutomotiveRepairSystem.java",
      image: "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Python+Project", 
      desc: "A robust Python-based management tool for automotive repair shops to track service history and customer records."
    },
    {
      title: "Video Post App",
      tech: "MERN Stack, Cloudinary",
      link: "https://github.com/DawitMulugeta23/video-Post-app-using-mern-stake",
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Video+App",
      desc: "A social media style application for sharing and interacting with video content using the MERN stack."
    },
    {
      title: "Online Exam System",
      tech: "Java, MySQL",
      link: "https://github.com/DawitMulugeta23/Exam-System",
      image: "https://via.placeholder.com/600x400/10b981/ffffff?text=Exam+System",
      desc: "A secure system for conducting and managing academic examinations online with real-time results."
    }
  ];

  return (
    <section 
      id="portfolio" 
      className={`py-24 px-6 transition-all duration-500 ${isDark ? 'bg-[#0f172a] text-white' : 'bg-[#f8faff] text-slate-900'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter uppercase italic">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-500 border-2 ${
                isDark 
                ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500' 
                : 'bg-white border-white shadow-xl hover:shadow-2xl hover:border-blue-500'
              }`}
            >
              {/* ፕሮጀክት ምስል */}
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <a href={project.link} target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase shadow-lg">
                     View GitHub
                   </a>
                </div>
              </div>

              {/* ፕሮጀክት ዝርዝር */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(', ').map((t) => (
                    <span key={t} className={`text-[9px] font-black px-3 py-1 rounded-md uppercase tracking-wider ${
                      isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-3">{project.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;