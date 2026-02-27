const Skills = () => {
  const skills = [
    { name: 'React', level: '85%' },
    { name: 'Express', level: '70%' },
    { name: 'Python', level: '65%' },
    { name: 'Java', level: '55%' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="text-blue-600 font-bold">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-700" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;