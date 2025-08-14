import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Added more icons for contact info

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#002D72] to-[#001F52] text-white pt-16 pb-8 mt-16 relative overflow-hidden">
      {/* Optional: Subtle wave/pattern at the top for visual separation */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-[#002D72] to-transparent opacity-20 transform -translate-y-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">

        {/* Brand Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Link to="/" className="text-3xl font-extrabold text-[#FDB813] mb-4 hover:text-yellow-300 transition-colors duration-300">
            LIC Advisor
          </Link>
          <p className="text-sm text-blue-100 leading-relaxed mb-6">
            Empowering families to build a secure financial future with personalized LIC planning and trusted, expert advice.
          </p>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-[#FDB813] transform hover:scale-110 transition-transform duration-200" aria-label="Instagram Profile">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-[#FDB813] transform hover:scale-110 transition-transform duration-200" aria-label="Facebook Profile">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-[#FDB813] transform hover:scale-110 transition-transform duration-200" aria-label="WhatsApp Chat">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-[#FDB813] transform hover:scale-110 transition-transform duration-200" aria-label="LinkedIn Profile">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-4 text-[#FDB813] border-b-2 border-blue-600 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-3 text-base text-blue-100 mt-4">
            <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors duration-200">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors duration-200">Services</Link></li>
            <li><Link to="/whyme" className="hover:text-white transition-colors duration-200">Why Me</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition-colors duration-200">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-4 text-[#FDB813] border-b-2 border-blue-600 pb-2 inline-block">Get In Touch</h4>
          <ul className="space-y-3 text-base text-blue-100 mt-4">
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <FaPhoneAlt className="text-blue-300 flex-shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">+91 98765 43210</a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <FaEnvelope className="text-blue-300 flex-shrink-0" />
              <a href="mailto:rahulkelud@gmail.com" className="hover:text-white transition-colors duration-200">rahulkelud@gmail.com</a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <FaMapMarkerAlt className="text-blue-300 flex-shrink-0" />
              <span>Indore, Madhya Pradesh, India</span>
            </li>
          </ul>
        </div>

        {/* Developer Info */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-4 text-[#FDB813] border-b-2 border-blue-600 pb-2 inline-block">Developed By</h4>
          <p className="text-base text-blue-100 mb-2 mt-4">Daksh Chouhan</p>
          <p className="text-sm text-blue-200 mb-4">MERN Stack Developer</p>
          <div className="flex gap-4 text-xl justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/dakshchouhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-[#FDB813] transform hover:scale-110 transition-transform duration-200"
              aria-label="Daksh Chouhan LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://yourportfolio.com" // Placeholder, update with actual portfolio
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-[#FDB813] transform hover:scale-110 transition-transform duration-200"
              aria-label="Daksh Chouhan Portfolio"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 text-center text-xs text-blue-300 border-t border-blue-700 pt-6">
        &copy; {new Date().getFullYear()} LIC Advisor. All rights reserved.
        <p className="mt-2">
          Developed with <span className="text-red-500">❤️</span> by <a href="https://www.linkedin.com/in/dakshchouhan" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FDB813] transition-colors duration-200">Daksh Chouhan</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;