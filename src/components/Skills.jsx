import { useSelector } from "react-redux";
import aicetify from "../assets/aicetify.png";
import funprog from "../assets/funprog.png";

const Skills = () => {
  const isDark = useSelector((state) => state.nav.darkMode);

  const certificates = [
    {
      title: "Fundamental Programming",
      provider: "Udacity", // Provider አስተካክለነዋል
      img: funprog,
      link: "https://www.udacity.com/certificate/e/d3724a90-9980-11f0-bb18-b7b34be26e27",
    },
    {
      title: "AI Certificate",
      provider: "Udacity",
      img: aicetify,
      link: "https://www.udacity.com/certificate/e/2b779ede-989b-11f0-b7f0-d3e369c6c483",
    },
    // {
    //   title: "Full Stack Mastery",
    //   provider: "Coming Soon",
    //   img: "https://via.placeholder.com/150?text=Wait",
    //   link: "#",
    // },
    {
      title: "Advanced React",
      provider: "Coming Soon",
      img: "https://via.placeholder.com/150?text=Wait",
      link: "#",
    },
  ];

  return (
    <section
      id="skills"
      className={`py-24 px-6 ${isDark ? "bg-slate-900 text-white" : "bg-gray-50 text-slate-900"}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-black mb-16 uppercase italic">
          Skills & Certificates
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`p-4 rounded-3xl text-center border-2 transition-all flex flex-col justify-between ${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-blue-50 shadow-lg"
              }`}
            >
              <div>
                <div className="w-full aspect-square mb-4 rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-sm">{cert.title}</h4>
                <p className="text-xs text-blue-600 font-bold mt-1 mb-4">
                  {cert.provider}
                </p>
              </div>

              {/* See in site Button */}
              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                    isDark
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  See in site
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-gray-500 font-medium italic">
          More professional certificates will be uploaded as I complete my MERN
          stack journey.
        </p>
      </div>
    </section>
  );
};

export default Skills;
