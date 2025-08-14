import { useState } from "react";
import { FaUser, FaPhoneAlt, FaClock, FaCheckCircle, FaTimesCircle, FaPaperPlane } from "react-icons/fa"; // Adjusted icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    callTime: "", // New field for preferred call time
    serviceDetails: "" // New field for details about service needs
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 4000); // Hide after 4 seconds
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.mobile || !formData.serviceDetails) {
      showNotification("Please fill in all required fields (Name, Mobile, Details).", "error");
      setLoading(false);
      return;
    }

    // --- Simulate API call ---
    // In a real application, replace this with an actual API call (e.g., fetch, axios)
    // to send data to your backend or a service like Formspree, Netlify Forms, etc.
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1800));

      // Simulate a successful response
      console.log("Form Data Sent:", formData);
      showNotification("Thank you! Your inquiry has been sent. I'll connect with you soon.", "success");
      setFormData({ name: "", mobile: "", callTime: "", serviceDetails: "" }); // Clear form
    } catch (error) {
      console.error("Form submission error:", error);
      showNotification("Failed to send your inquiry. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-1"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-2"></div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-14 leading-tight animate-fade-in-up">
          Let's Connect <span className="text-[#FDB813]">Today</span>
        </h2>

        <form onSubmit={handleSubmit} className="relative bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-blue-100 animate-scale-in">
          <p className="text-center text-gray-700 mb-8 text-lg">
            Ready to secure your future? Fill out the form below with your details and specific needs. I'll reach out to you shortly to discuss personalized LIC solutions.
          </p>

          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="sr-only">Your Name</label>
            <div className="relative flex items-center">
              <FaUser className="absolute left-4 text-blue-500 text-xl pointer-events-none" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FDB813] focus:border-[#FDB813] transition-all duration-300 text-lg text-gray-800 placeholder-gray-500 shadow-sm"
                required
              />
            </div>
          </div>

          {/* Mobile Number Input */}
          <div className="mb-6">
            <label htmlFor="mobile" className="sr-only">Mobile Number</label>
            <div className="relative flex items-center">
              <FaPhoneAlt className="absolute left-4 text-blue-500 text-xl pointer-events-none" />
              <input
                type="tel" // Use type="tel" for mobile numbers
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Your Mobile Number (e.g., +91 9876543210)"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FDB813] focus:border-[#FDB813] transition-all duration-300 text-lg text-gray-800 placeholder-gray-500 shadow-sm"
                required
              />
            </div>
          </div>

          {/* Preferred Call Time (Dropdown/Select) */}
          <div className="mb-6">
            <label htmlFor="callTime" className="sr-only">Preferred Call Time</label>
            <div className="relative flex items-center">
              <FaClock className="absolute left-4 text-blue-500 text-xl pointer-events-none" />
              <select
                id="callTime"
                name="callTime"
                value={formData.callTime}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FDB813] focus:border-[#FDB813] transition-all duration-300 text-lg text-gray-800 placeholder-gray-500 shadow-sm appearance-none" // appearance-none to allow custom arrow
              >
                <option value="" disabled>Preferred Call Time (Optional)</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                <option value="evening">Evening (3 PM - 7 PM)</option>
                <option value="any">Anytime is fine</option>
              </select>
              {/* Custom arrow for select */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Service Details Textarea */}
          <div className="mb-8">
            <label htmlFor="serviceDetails" className="sr-only">Tell us about your needs</label>
            <div className="relative flex items-start">
              <svg className="absolute left-4 top-4 text-blue-500 text-xl pointer-events-none w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg> {/* Custom icon for "details" */}
              <textarea
                id="serviceDetails"
                name="serviceDetails"
                value={formData.serviceDetails}
                onChange={handleChange}
                rows="6"
                placeholder="I'm interested in (e.g., life insurance for family, retirement planning, child education plan, pension scheme, investment advice, etc.). Please provide details of your specific needs."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FDB813] focus:border-[#FDB813] transition-all duration-300 resize-none text-lg text-gray-800 placeholder-gray-500 shadow-sm"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-3 bg-blue-700 text-white font-semibold py-4 rounded-xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-[1.01] shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="text-xl" /> Submit Your Inquiry
              </>
            )}
          </button>
        </form>
      </div>

      {/* Notification Toast */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out ${notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className={`flex items-center p-5 rounded-xl shadow-2xl text-white min-w-[300px] max-w-sm ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          <span className="text-2xl mr-3">{notification.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}</span>
          <span className="font-medium">{notification.message}</span>
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes blob-1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes blob-2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 20px) scale(0.95); }
          66% { transform: translate(10px, -30px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }

        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
        .animate-blob-1 { animation: blob-1 10s ease-in-out infinite alternate; }
        .animate-blob-2 { animation: blob-2 12s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default Contact;