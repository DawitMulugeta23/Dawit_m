import { useSelector } from 'react-redux';
import profileImg from '../assets/profile.png';

const Hero = () => {
  // dispatch እዚህ ጋር አያስፈልግም፣ ስህተቱን ለማጥፋት አውጥተነዋል
  const isDark = useSelector((state) => state.nav.darkMode);

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-20 transition-all duration-500 ${isDark ? 'bg-slate-900' : 'bg-[#f3f4ff]'}`}>
      
      {/* Container Card */}
      <div className={`relative w-[92%] max-w-7xl min-h-[75vh] grid md:grid-cols-2 rounded-[40px] overflow-hidden shadow-2xl ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
        
        {/* Left Side: Text Content */}
        <div className="p-10 md:p-16 flex flex-col justify-center space-y-6 relative z-10">
          <div className="space-y-1">
            <h3 className={`text-xl font-bold ${isDark ? 'text-blue-400' : 'text-gray-400'}`}>Hello, I am</h3>
            <h1 className={`text-5xl md:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Dawit Mulugeta
            </h1>
          </div>
          
          <p className={`text-base leading-relaxed max-w-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            I am a CS student at **Debre Berhan University**. I focus on building clean, 
            modern and functional web applications.
          </p>

          <div className="flex gap-3">
            {['f', 't', 'i', 'in'].map((social) => (
              <div key={social} className="w-9 h-9 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition-all">
                {social}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-all">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Side: Colored Background & Image */}
        <div className="relative bg-blue-600 flex items-end justify-center overflow-hidden">
          
          {/* White Arc (ከምስሉ ጋር ተመሳሳይ እንዲሆን) */}
          <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-24 h-48 bg-inherit md:bg-white rounded-r-full hidden md:block" 
               style={{ backgroundColor: isDark ? '#1e293b' : 'white' }}></div>
          
          <div className="relative w-full h-full flex items-end justify-center">
             <img 
              src={profileImg} 
              alt="Dawit Mulugeta" 
              className="h-[85%] w-auto object-contain z-20"
            />
            
            {/* "Web Developer" Badge */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-30 bg-white px-5 py-2 rounded-full shadow-xl hidden md:flex items-center gap-2 border border-blue-50">
               <span className="text-blue-600 font-bold">{"</>"}</span>
               <span className="text-blue-900 font-black text-xs uppercase tracking-tighter">Web Developer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;