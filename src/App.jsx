import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ConsultationModal from './components/common/ConsultationModal';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("");

  const handleOpenConsultation = (serviceId = "") => {
    setConsultationService(typeof serviceId === 'string' ? serviceId : "");
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationService("");
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-[#0B2545] selection:text-white">
        <ScrollToTop />
        
        {/* Sticky Header Navigation */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/industries" 
              element={<IndustriesPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <Footer onOpenConsultation={handleOpenConsultation} />

        {/* Global Consultation Modal */}
        <ConsultationModal 
          isOpen={isConsultationOpen} 
          onClose={handleCloseConsultation}
          initialService={consultationService}
        />
      </div>
    </BrowserRouter>
  );
}
