import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

// --- IMPORTANT ---
// This is a placeholder for your actual API configuration.
// Your app will use your own 'api/api.js' file. I've added a mock
// response here to make this example runnable and demonstrate functionality.
const API = {
  get: (url) => {
    console.log(`Fetching data from: ${url}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { _id: "1", name: "Sarah L.", feedback: "Working with this team was a game-changer. Their expertise and dedication are unmatched. Highly recommended for any business looking to scale!" },
            { _id: "2", name: "Michael B.", feedback: "The final product exceeded all our expectations. The process was smooth, communication was clear, and the results speak for themselves." },
            { _id: "3", name: "Jessica P.", feedback: "An absolutely fantastic experience from start to finish. They truly understood our vision and brought it to life with incredible skill." },
            { _id: "4", name: "David R.", feedback: "I was impressed by their professionalism and the high quality of their work. They delivered on time and on budget. A reliable partner." },
          ],
        });
      }, 1000);
    });
  },
  post: (url, data) => {
    console.log(`Posting data to: ${url}`, data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 200 });
        }, 500);
    });
  }
};

// --- Custom Hook for handling outside clicks ---
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", feedback: "" });
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const modalRef = useRef();
  const { t } = useTranslation(); // Use useTranslation hook

  useEffect(() => {
    API.get("/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error("Testimonials fetch error", err));
  }, []);

  useOnClickOutside(modalRef, () => setShowForm(false));

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000); // Hide after 3 seconds
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.feedback) {
        showNotification(t("testimonials.notification_fill_all_fields"), "error"); // Translated Text
        return;
    }
    try {
      await API.post("/testimonials", formData);
      showNotification(t("testimonials.notification_success")); // Translated Text
      setFormData({ name: "", feedback: "" });
      setShowForm(false);
    } catch (err) {
      console.error("Submit error:", err);
      showNotification(t("testimonials.notification_error"), "error"); // Translated Text
    }
  };

  const repeatedTestimonials = testimonials.length > 0 ? [...testimonials, ...testimonials, ...testimonials] : [];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-indigo-50 to-blue-100 font-sans py-16 sm:py-24 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D72] tracking-tight leading-tight">
            {t('testimonials.main_title')} {/* Translated Text */}
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            {t('testimonials.main_subtitle')} {/* Translated Text */}
          </p>
        </div>

        {/* Write a Review Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#002D72] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#003B91] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 animate-bounce-once"
          >
            {t('testimonials.share_experience_button')} {/* Translated Text */}
          </button>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative w-full overflow-hidden group py-4">
          <div className="flex flex-nowrap animate-marquee group-hover:paused">
            {repeatedTestimonials.length > 0 ? (
              repeatedTestimonials.map((testimonialItem, index) => ( // Renamed 't' to 'testimonialItem' to avoid conflict with i18n 't'
                <div
                  key={index}
                  className="bg-white border border-blue-200 p-8 rounded-3xl min-w-[380px] max-w-[380px] mx-4 flex-shrink-0 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
                  <div className="flex items-center mb-6">
                    <img src={`https://i.pravatar.cc/60?u=${testimonialItem._id}`} alt={testimonialItem.name} className="w-16 h-16 rounded-full mr-5 border-3 border-[#FDB813] shadow-md" />
                    <div>
                      <h4 className="font-bold text-xl text-[#002D72]">{testimonialItem.name}</h4>
                      <div className="flex text-[#FDB813] mt-1">
                          {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.463a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.385 2.463c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.613 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                          ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base italic">
                    “{testimonialItem.feedback}”
                  </p>
                </div>
              ))
            ) : (
                // Skeleton Loader
                [...Array(3)].map((_, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-8 rounded-3xl min-w-[380px] max-w-[380px] mx-4 flex-shrink-0 shadow-lg animate-pulse">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full mr-5 bg-gray-200"></div>
                            <div className="flex-1">
                                <div className="h-7 w-3/4 rounded bg-gray-200 mb-2"></div>
                                <div className="h-6 w-1/2 rounded bg-gray-200"></div>
                            </div>
                        </div>
                        <div className="h-5 w-full rounded bg-gray-200 mb-3"></div>
                        <div className="h-5 w-5/6 rounded bg-gray-200"></div>
                    </div>
                ))
            )}
          </div>
        </div>
      </div>

      {/* Modal Form with refined transition */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div ref={modalRef} className="bg-white rounded-3xl p-8 w-full max-w-lg relative shadow-3xl transform transition-all duration-300 scale-90 opacity-0 animate-modal-in">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 transition-colors text-3xl font-light"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-[#002D72] mb-7 text-center">
              {t('testimonials.modal_title')} {/* Translated Text */}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">{t('testimonials.form_name_placeholder')}</label> {/* Translated Text */}
                <input
                  id="name"
                  type="text"
                  placeholder={t('testimonials.form_name_placeholder')} 
                  className="w-full border-gray-300 p-4 rounded-xl focus:ring-3 focus:ring-[#FDB813] focus:border-transparent transition-all shadow-sm text-lg"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="feedback" className="sr-only">{t('testimonials.form_feedback_placeholder')}</label> {/* Translated Text */}
                <textarea
                  id="feedback"
                  placeholder={t('testimonials.form_feedback_placeholder')} 
                  className="w-full border-gray-300 p-4 rounded-xl focus:ring-3 focus:ring-[#FDB813] focus:border-transparent transition-all shadow-sm text-lg"
                  rows={6}
                  required
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#002D72] text-white w-full py-4 rounded-xl font-semibold text-xl hover:bg-[#003B91] transition-all duration-300 transform hover:scale-[1.02] shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75"
              >
                {t('testimonials.submit_review_button')} {/* Translated Text */}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      <div className={`fixed bottom-8 right-8 transition-all duration-500 ease-out ${notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className={`flex items-center p-5 rounded-xl shadow-2xl text-white min-w-[280px] ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          <span className="text-2xl mr-3">{notification.type === 'success' ? '✅' : '❌'}</span>
          <span className="font-medium">{notification.message}</span>
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .group:hover .animate-marquee, .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes modal-in {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-modal-in {
            animation: modal-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          @keyframes bounce-once {
            0%, 100% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(-5px);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
          .animate-bounce-once {
            animation: bounce-once 1s ease-in-out 1;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;