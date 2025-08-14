import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa"; // Changed FaFacebook to FaFacebookF for a solid icon version

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-white to-blue-50 text-gray-800 py-16 px-4 border-b border-blue-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Info */}
        <div className="order-2 md:order-1"> {/* Reorder for mobile: map above text */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 leading-tight animate-fade-in-left">
            Crafting Your Financial Peace of Mind
          </h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed animate-fade-in-left delay-100">
            Hi, I'm <strong className="text-blue-700">Rahul Kelud</strong>, a dedicated LIC advisor and Wealth Manager with <strong>over 10 years of experience</strong>. My mission is to empower individuals and families like yours to achieve lasting financial security and genuine peace of mind.
          </p>
          <p className="text-md text-gray-600 mb-8 leading-relaxed animate-fade-in-left delay-200">
            Whether you're planning for your child's bright future, securing a comfortable retirement, or strategically building your wealth, I'm here to provide <strong>personalized LIC solutions</strong> with unwavering integrity, professionalism, and a commitment to your success.
          </p>

          <div className="space-y-4 mb-8 animate-fade-in-left delay-300">
            <p className="flex items-center gap-3 text-lg text-gray-700">
              <FaPhoneAlt className="text-blue-600 text-xl flex-shrink-0" /> <a href="tel:+919876543210" className="hover:text-blue-800 transition-colors">+91 98765 43210</a>
            </p>
            <p className="flex items-center gap-3 text-lg text-gray-700">
              <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" /> <a href="mailto:rahulkelud@gmail.com" className="hover:text-blue-800 transition-colors">rahulkelud@gmail.com</a>
            </p>
            <p className="flex items-center gap-3 text-lg text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 text-xl flex-shrink-0" /> Indore, Madhya Pradesh, India
            </p>
          </div>

          <div className="flex gap-5 mt-6 animate-fade-in-left delay-400">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
               className="text-green-500 text-3xl hover:scale-110 transform transition-transform duration-200 hover:text-green-600"
               aria-label="Connect on WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer"
               className="text-blue-700 text-3xl hover:scale-110 transform transition-transform duration-200 hover:text-blue-800"
               aria-label="Follow on Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer"
               className="text-pink-600 text-3xl hover:scale-110 transform transition-transform duration-200 hover:text-pink-700"
               aria-label="Follow on Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right: Map with improved styling */}
        <div className="order-1 md:order-2 w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 animate-fade-in-right">
          <iframe
            title="Rahul Kelud's Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15276.561571249914!2d75.85698055!3d22.71954845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3753757521%3A0xc49b77983656c109!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" // Example for Indore
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.7s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.7s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default About;