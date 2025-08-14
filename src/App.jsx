// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next'; // <--- Import I18nextProvider
import i18n from './i18n'; // <--- Import your i18n configuration

// Global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from './components/WhatsAppButton';

// Page-specific components (or sections that act as pages

import Home from './pages/Home';
import Services from './components/Services';
import ServiceDetails from './pages/ServiceDetail';
import Contact from './components/Contact';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import MediaGallery from './components/MediaGallery';
import About from './components/About';
import WhyMe from './components/WhyMe';
import Testimonials from './components/Testimonials';


function App() {
  return (
    // <--- Wrap your application with I18nextProvider
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<MediaGallery />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/whyme" element={<WhyMe />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton phoneNumber="919876543210" />
      </BrowserRouter>
    </I18nextProvider> // <--- End I18nextProvider wrapper
  );
}

export default App;