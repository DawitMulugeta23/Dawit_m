const Hero = () => (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Beginner <span className="text-blue-600">Web Developer</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I am a CS student at <span className="font-semibold text-gray-800">Debre Berhan University</span>. 
          Building clean, modern web applications with React and Python.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-lg">View Projects</a>
          <a href="#contact" className="border-2 border-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition">Contact Me</a>
        </div>
      </div>
    </section>
  );
  
  export default Hero;