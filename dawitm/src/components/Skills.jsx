import React from 'react';
import { useSelector } from 'react-redux';

const Skills = () => {
  // የ Dark Mode ሁኔታን ከ Redux እንወስዳለን
  const isDark = useSelector((state) => state.nav.darkMode);

  const skills = [
    { name: 'React', level: '85%', color: 'bg-blue-500' },
    { name: 'Express', level: '70%', color: 'bg-green-500' },
    { name: 'Python', level: '65%', color: 'bg-yellow-500' },
    { name: 'Java', level: '55%', color: 'bg-red-500' },
  ];

  return (
    <section 
      id="skills" 
      className={`py-24 px-6 transition-colors duration-500 ${isDark ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className={`p-8 rounded-3xl transition-all shadow-xl hover:scale-[1.02] ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-100'}`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold tracking-tight">{skill.name}</span>
                <span className={`text-sm font-black px-3 py-1 rounded-full ${isDark ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                  {skill.level}
                </span>
              </div>
              
              {/* Progress Bar Container */}
              <div className={`w-full h-3 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-gray-100'}`}>
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.color}`} 
                  style={{ width: skill.level }}
                ></div>
              </div>
              
              <p className={`mt-4 text-sm font-medium opacity-60`}>
                Proficiency in {skill.name} development.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;