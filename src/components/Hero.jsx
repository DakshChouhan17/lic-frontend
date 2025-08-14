import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api.js";
import myImage from "../assets/profile.jpg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    API.get("/quotes/daily")
      .then((res) => {
        if (res.data && res.data.quote) {
          setQuote(res.data.quote);
        } else {
          setQuote("“The future belongs to those who believe in the beauty of their dreams.”");
        }
      })
      .catch((err) => {
        console.error("Quote fetch error:", err);
        setQuote("“The best way to predict the future is to create it.”");
      });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#002D72] to-[#001F52] text-white py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Background patterns/shapes for visual interest */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-fast"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-medium"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center relative z-10 text-center md:text-left">
        {/* Left: Image (now larger) */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0 animate-fade-in-left">
          <img
            src={myImage}
            alt="Rahul Kelud"
            className="w-48 h-48 object-cover rounded-full mx-auto md:mx-0 mb-6 border-4 border-[#FDB813] shadow-xl transform hover:scale-105 transition-transform duration-300 ring-4 ring-yellow-200 ring-opacity-50"
          />
        </div>

        {/* Right: Text Content and Call to Action (now after quote) */}
        <div className="md:w-2/3 md:pl-12 animate-fade-in-right">
          <p className="text-xl md:text-2xl font-light text-blue-200 mb-2 animate-fade-in-up delay-100">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-up delay-200">
            Rahul Kelud
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-5 animate-fade-in-up delay-300">
            Your Trusted Wealth Manager & LIC Advisor
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-blue-100 animate-fade-in-up delay-400">
            With <strong>over a decade of dedicated experience</strong>, I specialize in helping families and individuals like you secure their financial future and achieve peace of mind through strategic and personalized LIC planning.
          </p>

          {quote && (
            <blockquote className="italic text-yellow-200 border-l-4 border-yellow-400 pl-5 pt-1 pb-1 pr-2 max-w-xl mx-auto md:mx-0 mb-8 text-lg animate-fade-in-up delay-500">
              “{quote}”
            </blockquote>
          )}

          {/* Moved Call to Action here */}
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-[#FDB813] text-[#002D72] px-6 py-3 rounded-full font-bold text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-fade-in-up delay-600"
          >
            Book Your Free Consultation
            <FaArrowRight className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
          .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
          .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; } /* Added delay for the button */

          /* Blob animations */
          @keyframes blob-slow {
            0%, 100% { transform: scale(1) translate(0px, 0px); }
            33% { transform: scale(1.1) translate(20px, -30px); }
            66% { transform: scale(0.9) translate(-10px, 15px); }
          }
          @keyframes blob-medium {
            0%, 100% { transform: scale(1) translate(0px, 0px); }
            33% { transform: scale(1.05) translate(-25px, 10px); }
            66% { transform: scale(0.95) translate(10px, -20px); }
          }
          @keyframes blob-fast {
            0%, 100% { transform: scale(1) translate(0px, 0px); }
            33% { transform: scale(1.2) translate(40px, 10px); }
            66% { transform: scale(0.8) translate(-15px, -30px); }
          }

          .animate-blob-slow { animation: blob-slow 18s infinite alternate ease-in-out; }
          .animate-blob-medium { animation: blob-medium 14s infinite alternate ease-in-out; }
          .animate-blob-fast { animation: blob-fast 10s infinite alternate ease-in-out; }
        `}
      </style>
    </section>
  );
};

export default Hero;