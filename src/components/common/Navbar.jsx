import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck,
  Briefcase,
  Users,
  Building2,
  Clock
} from 'lucide-react';
import { services } from '../../data/services';
import { industries } from '../../data/industries';
import { companyDetails } from '../../data/company';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#071A31] text-slate-300 text-xs border-b border-slate-800/80 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Statutory Compliant Workforce Management
            </span>
            <span className="text-slate-600">|</span>
            <a href={`tel:${companyDetails.contact.phone}`} className="flex items-center gap-1.5 hover:text-[#E87722] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#E87722]" />
              <span>{companyDetails.contact.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href={`mailto:${companyDetails.contact.email}`} className="flex items-center gap-1.5 hover:text-[#E87722] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#E87722]" />
              <span>{companyDetails.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>Mon – Sat: 9:00 AM – 6:30 PM IST</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-[#E87722] font-semibold tracking-wide">
              CIN / REG READY
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
            : 'bg-white/95 lg:bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center">
              <img 
                src="/logo-emblem.png" 
                alt="Kshamata Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-[#0B2545] font-sans leading-none">
                KSHAMATA
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-[#E87722] mt-0.5 leading-tight">
                Services & Support Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/') 
                  ? 'text-[#0B2545] font-semibold bg-slate-100/80' 
                  : 'text-slate-700 hover:text-[#0B2545] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/about') 
                  ? 'text-[#0B2545] font-semibold bg-slate-100/80' 
                  : 'text-slate-700 hover:text-[#0B2545] hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  isActive('/services') 
                    ? 'text-[#0B2545] font-semibold bg-slate-100/80' 
                    : 'text-slate-700 hover:text-[#0B2545] hover:bg-slate-50'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#E87722]' : 'text-slate-400'}`} />
              </Link>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] bg-white rounded-xl shadow-2xl border border-slate-100 p-5 mt-1 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Our Core Staffing & Consultancy Capabilities
                    </span>
                    <Link to="/services" className="text-xs font-semibold text-[#E87722] hover:underline flex items-center gap-1">
                      View All 8 Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {services.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services#${srv.id}`}
                      className="p-2.5 rounded-lg hover:bg-slate-50 transition-colors group flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-md bg-[#0B2545]/5 text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover:text-[#0B2545] transition-colors">
                          {srv.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {srv.shortDescription}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <Link
                to="/industries"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  isActive('/industries') 
                    ? 'text-[#0B2545] font-semibold bg-slate-100/80' 
                    : 'text-slate-700 hover:text-[#0B2545] hover:bg-slate-50'
                }`}
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180 text-[#E87722]' : 'text-slate-400'}`} />
              </Link>

              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 w-[500px] bg-white rounded-xl shadow-2xl border border-slate-100 p-4 mt-1 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Sectors We Serve
                    </span>
                    <Link to="/industries" className="text-xs font-semibold text-[#E87722] hover:underline flex items-center gap-1">
                      Explore Sectors <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {industries.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries#${ind.id}`}
                      className="p-2 rounded-lg hover:bg-slate-50 transition-colors group flex items-center gap-2.5"
                    >
                      <Building2 className="w-4 h-4 text-slate-400 group-hover:text-[#E87722] transition-colors shrink-0" />
                      <span className="text-xs font-medium text-slate-700 group-hover:text-[#0B2545] transition-colors truncate">
                        {ind.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/contact') 
                  ? 'text-[#0B2545] font-semibold bg-slate-100/80' 
                  : 'text-slate-700 hover:text-[#0B2545] hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Action Button & Consultation CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="bg-[#0B2545] hover:bg-[#071A31] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 group border border-[#0B2545]"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#E87722] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="text-xs font-bold bg-[#E87722] text-white px-3 py-2 rounded-md sm:hidden"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0B2545] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                About Us
              </Link>
              
              <div className="pt-2 pb-1">
                <Link
                  to="/services"
                  className="block px-3 py-1 text-base font-semibold text-[#0B2545]"
                >
                  Our Services
                </Link>
                <div className="pl-4 mt-2 space-y-1 border-l-2 border-[#E87722]/30 ml-3">
                  {services.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services#${srv.id}`}
                      className="block py-1.5 text-xs text-slate-600 hover:text-[#0B2545]"
                    >
                      {srv.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 pb-1">
                <Link
                  to="/industries"
                  className="block px-3 py-1 text-base font-semibold text-[#0B2545]"
                >
                  Industries We Serve
                </Link>
                <div className="pl-4 mt-2 grid grid-cols-2 gap-1 border-l-2 border-slate-200 ml-3">
                  {industries.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries#${ind.id}`}
                      className="block py-1.5 text-xs text-slate-600 hover:text-[#0B2545]"
                    >
                      {ind.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#0B2545] hover:bg-[#071A31] text-white font-semibold py-3 rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#E87722]" />
              </button>

              <div className="text-xs text-slate-500 space-y-1.5 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#E87722]" />
                  <span>{companyDetails.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#E87722]" />
                  <span>{companyDetails.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

