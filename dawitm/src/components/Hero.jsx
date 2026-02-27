import React from 'react';
import profileImg from '../assets/profile.png'; // ፎቶህን እዚህ ጋር import አደረግነው እንዳይጠፋ

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* የግራ ክፍለ አካል - ጽሁፍ */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              Dawit <br /> 
              <span className="text-gray-500">Mulugeta</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-mono max-w-md leading-relaxed">
              I am a CS student at Debre Berhan University and a beginner web developer. 
              I focus on building clean and functional user experiences.
            </p>
          </div>
          
          <div className="pt-4">
            {/* አረንጓዴው ቁልፍ (ከምስሉ ጋር ተመሳሳይ) */}
            <a 
              href="#contact" 
              className="inline-flex items-center bg-[#4ade80] text-black px-10 py-5 rounded-md font-bold text-lg hover:bg-[#22c55e] transition-all group shadow-[0_10px_30px_rgba(74,222,128,0.2)]"
            >
              Let's get started 
              <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">›</span>
            </a>
          </div>

          {/* Worked With ክፍል (ስኪልስ በሳጥን) */}
          <div className="pt-12">
            <p className="text-gray-600 text-xs uppercase tracking-[0.3em] font-mono mb-6">Worked with</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'React', level: '85%' },
                { name: 'Python', level: '65%' },
                { name: 'Express', level: '70%' },
                { name: 'Java', level: '55%' }
              ].map((skill) => (
                <div key={skill.name} className="bg-[#161616] border border-gray-800 px-6 py-3 rounded-lg flex flex-col items-center justify-center hover:border-[#4ade80] transition-colors group">
                  <span className="text-gray-400 font-bold group-hover:text-white transition-colors">{skill.name}</span>
                  <span className="text-gray-600 text-xs mt-1">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* የቀኝ ክፍለ አካል - ክብ ፎቶ (ከAsset የሚመጣ) */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            {/* ከፎቶው ጀርባ ያለ Glow Effect */}
            <div className="absolute -inset-1 bg-[#4ade80] rounded-full blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            
            <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-[10px] border-[#161616] shadow-2xl shadow-black">
              <img 
                src={profileImg} // Import ያደረግነውን ፋይል እዚህ ተጠቀምነው
                alt="Dawit Mulugeta" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.target.src = "https://via.placeholder.com/500/161616/ffffff?text=Dawit" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;