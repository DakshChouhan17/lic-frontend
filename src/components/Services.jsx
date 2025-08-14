import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation

// --- IMPORTANT ---
// This is a placeholder for your actual API configuration.
// Your app will use your own 'api/api.js' file to make the real API call.
// I've added a mock response here just to make this example runnable for demonstration.
const API = {
  get: (url) => {
    console.log(`Fetching data from: ${url}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { _id: "1", title: "Life Insurance Planning", description: "Comprehensive life insurance solutions to protect your loved ones' financial future." },
            { _id: "2", title: "Retirement Solutions", description: "Expert guidance for building a robust retirement corpus and ensuring financial independence." },
            { _id: "3", title: "Child Education & Marriage Plans", description: "Secure your child's future milestones with tailored education and marriage funding plans." },
            { _id: "4", title: "Health & Medical Insurance", description: "Find the best health insurance policies to cover medical emergencies and healthcare costs." },
            { _id: "5", title: "Pension Schemes", description: "Structured pension plans to provide a steady income stream during your golden years." },
            { _id: "6", title: "Investment-Linked Plans (ULIPs)", description: "Combine insurance coverage with investment opportunities for wealth creation." },
            { _id: "7", title: "Term Insurance", description: "Affordable and essential life cover for a specific period, providing high coverage at low cost." },
            { _id: "8", "title": "Endowment Plans", description: "Savings-oriented plans that offer both insurance cover and a lump sum payout on maturity or death." },
            { _id: "9", "title": "Money Back Plans", description: "Regular payouts at specified intervals during the policy term, plus a lump sum on maturity." },
            { _id: "10", "title": "Group Insurance", description: "Tailored insurance solutions for groups and organizations, offering benefits to employees or members." },
          ],
        });
      }, 1500); // Simulate network delay
    });
  },
};


const Services = ({ limit }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(); // Use useTranslation hook

  useEffect(() => {
    setLoading(true);
    API.get("/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Service fetch error:", err);
        setLoading(false);
      });
  }, []);

  const servicesToDisplay = limit ? services.slice(0, limit) : services;
  const showViewAllButton = limit && services.length > limit;

  return (
    <section id="services" className="py-16 px-4 font-sans bg-gradient-to-br from-gray-50 to-blue-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002D72] mb-4 leading-tight">
            {t('services.main_title')} {/* Translated Text */}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('services.main_subtitle')} {/* Translated Text */}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading Skeletons - show 6 or the specified limit of skeletons
            Array.from({ length: limit || 6 }).map((_, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-2xl animate-pulse shadow-md">
                <div className="h-8 w-3/4 rounded bg-gray-200 mb-6"></div>
                <div className="h-4 rounded bg-gray-200 mb-3"></div>
                <div className="h-4 rounded bg-gray-200 mb-3 w-5/6"></div>
                <div className="h-4 rounded bg-gray-200 mb-8 w-4/6"></div>
                <div className="h-6 w-1/2 rounded bg-gray-200"></div>
              </div>
            ))
          ) : (
            // Render actual services based on servicesToDisplay
            servicesToDisplay.map((service) => (
              <div
                key={service._id}
                className="bg-white border border-blue-200 p-8 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-400 flex flex-col shadow-lg"
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#002D72] mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6 min-h-[7rem]">{service.description}</p>
                </div>
                <Link
                  to={`/service/${service._id}`}
                  className="inline-block text-[#FDB813] font-bold text-lg hover:text-[#002D72] transition-colors duration-300 group self-end"
                >
                  {t('services.view_details')} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span> {/* Translated Text */}
                </Link>
              </div>
            ))
          )}
        </div>

        {/* "View All Services" Button - Conditionally rendered */}
        {showViewAllButton && (
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="bg-[#002D72] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#003B91] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
            >
              {t('services.view_all_services_btn')} {/* Translated Text */}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;