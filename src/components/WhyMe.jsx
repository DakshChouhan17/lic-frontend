import React from "react";
import { FaRegHandshake, FaShieldAlt, FaStar, FaLightbulb, FaClock } from "react-icons/fa"; // Using different icons for better visual storytelling

const WhyMe = () => {
  // Enhanced points with more evocative language and icons
  const points = [
    {
      icon: <FaRegHandshake className="text-blue-600 text-5xl" />,
      title: "Decades of Expertise",
      description: "With <strong>over a decade (10+ years)</strong> in LIC advisory and wealth management, I bring deep knowledge and proven strategies to secure your financial future."
    },
    {
      icon: <FaShieldAlt className="text-green-600 text-5xl" />,
      title: "Trusted by Many",
      description: "<strong>500+ families</strong> have entrusted me with their financial well-being, building a foundation of secure and reliable planning."
    },
    {
      icon: <FaLightbulb className="text-yellow-600 text-5xl" />,
      title: "Tailored Solutions",
      description: "I craft <strong>customized LIC plans</strong> meticulously designed to align with your unique income, lifestyle, and financial aspirations."
    },
    {
      icon: <FaStar className="text-purple-600 text-5xl" />,
      title: "Absolute Transparency",
      description: "Expect <strong>100% transparency</strong> and candid, honest consultations. Your understanding and confidence are my top priorities."
    },
    {
      icon: <FaClock className="text-red-600 text-5xl" />,
      title: "Enduring Relationships",
      description: "Committed to <strong>quick, efficient service</strong> and fostering long-term client relationships built on trust and consistent support."
    },
  ];

  return (
    <section
      id="whyme"
      className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20 px-4 sm:px-8 md:px-12 border-b border-blue-200"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 font-display leading-tight animate-fade-in-up">
          Why Partner With Me?
        </h2>

        <p className="text-gray-700 text-xl md:text-2xl mb-16 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Empowering your financial journey with <strong>trust</strong>, <strong>expertise</strong>, and <strong>personalized care</strong>.
        </p>

        {/* Featured Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl shadow-xl bg-white overflow-hidden
                         border-b-4 border-blue-500 hover:border-blue-700 transition-all duration-300
                         transform hover:scale-[1.03] animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }} // Staggered animation
            >
              {/* Subtle background gradient for flair */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-40 rounded-3xl pointer-events-none"></div>

              {/* Icon Container */}
              <div className="mb-6 z-10">
                <div className="p-6 rounded-full bg-blue-100 inline-flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {point.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-blue-900 mb-3 z-10">{point.title}</h3>
              <p
                className="text-gray-700 text-lg leading-relaxed z-10"
                dangerouslySetInnerHTML={{ __html: point.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default WhyMe;