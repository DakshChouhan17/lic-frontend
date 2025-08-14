import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; // <--- Import useTranslation


const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation(); // <--- Use useTranslation hook

  const [service, setService] = useState(null);
  const [media, setMedia] = useState([]);
  const [loadingService, setLoadingService] = useState(true);
  const [loadingMedia, setLoadingMedia] = useState(true);
  const [errorService, setErrorService] = useState(null);
  const [errorMedia, setErrorMedia] = useState(null);

  useEffect(() => {
    setLoadingService(true);
    setErrorService(null);
    API.get(`/services/${id}`)
      .then(res => {
        setService(res.data);
        setLoadingService(false);
      })
      .catch(err => {
        console.error("Error fetching service details:", err);
        setErrorService(t('services.error_loading')); // <--- Translated Text
        setLoadingService(false);
      });

    setLoadingMedia(true);
    setErrorMedia(null);
    API.get(`/media?serviceId=${id}`)
      .then(res => {
        setMedia(res.data);
        setLoadingMedia(false);
      })
      .catch(err => {
        console.error("Error fetching media:", err);
        setErrorMedia(t('services.error_loading_media')); // <--- Translated Text
        setLoadingMedia(false);
      });
  }, [id, t]); // Add 't' to dependencies if you expect errors/messages to change with language

  if (loadingService || loadingMedia) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center text-blue-700">
          <svg className="animate-spin h-10 w-10 text-blue-700 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-xl">{t('services.loading')}</p> {/* <--- Translated Text */}
        </div>
      </div>
    );
  }

  if (errorService) {
    return (
      <div className="flex justify-center items-center h-96 bg-red-50 text-red-700 p-8 rounded-lg shadow-md max-w-xl mx-auto my-16">
        <FaExclamationCircle className="text-4xl mr-4" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{t('services.error_loading')}</h2> {/* <--- Translated Text */}
          <p>{errorService}</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition duration-300"
          >
            {t('services.back_to_services')} {/* <--- Translated Text */}
          </button>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex justify-center items-center h-96 bg-yellow-50 text-yellow-800 p-8 rounded-lg shadow-md max-w-xl mx-auto my-16">
        <FaExclamationCircle className="text-4xl mr-4" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{t('services.service_not_found')}</h2> {/* <--- Translated Text */}
          <p>{t('services.service_not_found_desc')}</p> {/* <--- Translated Text */}
          <button
            onClick={() => navigate('/services')}
            className="mt-4 bg-yellow-700 text-white px-5 py-2 rounded-full hover:bg-yellow-800 transition duration-300"
          >
            {t('services.view_all_services')} {/* <--- Translated Text */}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-700 hover:text-blue-900 transition-colors duration-300 mb-8 font-semibold text-lg"
      >
        <FaArrowLeft className="mr-2" /> {t('services.back_to_services')} {/* <--- Translated Text */}
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 border border-blue-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
          {service.title}
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          {service.description}
        </p>
      </div>

      <h3 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-3">
        {t('services.media_gallery')} {/* <--- Translated Text */}
      </h3>
      {errorMedia && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center mb-8">
          <FaExclamationCircle className="mr-3 text-2xl" />
          <p>{errorMedia}</p>
        </div>
      )}

      {media.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {media.map(item => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-200"
            >
              {item.type === "photo" ? (
                <img
                  src={item.fileUrl}
                  alt={item.title || "Service Media"}
                  className="w-full h-48 object-cover object-center"
                />
              ) : (
                <video
                  src={item.fileUrl}
                  controls
                  className="w-full h-48 object-cover object-center bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              )}
              {item.title && (
                  <p className="p-4 text-gray-700 font-medium text-center">{item.title}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        !loadingMedia && (
          <div className="bg-blue-50 text-blue-700 p-6 rounded-lg text-center shadow-md">
            <p className="text-lg font-medium">{t('services.no_media')}</p> {/* <--- Translated Text */}
          </div>
        )
      )}
    </div>
  );
};

export default ServiceDetails;