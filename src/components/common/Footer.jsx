import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { companyDetails } from '../../data/company';
import { services } from '../../data/services';
import { industries } from '../../data/industries';

export default function Footer({ onOpenConsultation }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071A31] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      {/* Upper Pre-Footer Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0B2545] to-[#123663] p-8 sm:p-10 border border-slate-700/60 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87722]/15 text-[#E87722] text-xs font-bold tracking-wider uppercase mb-3 border border-[#E87722]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Corporate Workforce Advisory
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to resolve your workforce and staffing bottlenecks?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2.5 font-light">
              Connect with our corporate client desk for tailored staffing proposals, compliance audits, or volume manpower mobilization.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="bg-[#E87722] hover:bg-[#D06617] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-lg border border-white/20 transition-all duration-200"
            >
              Contact Client Desk
            </Link>
          </div>
          {/* Subtle background ambient graphic */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800">
          
          {/* Column 1: Company Profile & Identity */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo-emblem.png" 
                alt="Kshamata Logo" 
                className="h-12 w-auto object-contain" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider text-white font-sans">
                  KSHAMATA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E87722]">
                  Services & Support Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              {companyDetails.description}
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                <span>
                  {companyDetails.contact.address.line1}, {companyDetails.contact.address.line2}, {companyDetails.contact.address.city} - {companyDetails.contact.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E87722] shrink-0" />
                <a href={`tel:${companyDetails.contact.phone}`} className="hover:text-white transition-colors">
                  {companyDetails.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E87722] shrink-0" />
                <a href={`mailto:${companyDetails.contact.email}`} className="hover:text-white transition-colors">
                  {companyDetails.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero-Liability Statutory Compliance Guarantee</span>
              </div>
            </div>
          </div>

          {/* Column 2: Workforce Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#E87722] pl-2.5">
              Workforce Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {services.slice(0, 4).map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={`/services#${srv.id}`} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#E87722] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/services" 
                  className="text-[#E87722] hover:underline font-semibold flex items-center gap-1 pt-1"
                >
                  View All Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Support & Advisory */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#E87722] pl-2.5">
              Support & Consulting
            </h4>
            <ul className="space-y-2.5 text-xs">
              {services.slice(4).map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={`/services#${srv.id}`} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#E87722] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/about" 
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group pt-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#E87722] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  <span>Why Choose Kshamata</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Industries */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#E87722] pl-2.5">
              Key Industries
            </h4>
            <ul className="space-y-2.5 text-xs">
              {industries.slice(0, 5).map((ind) => (
                <li key={ind.id}>
                  <Link 
                    to={`/industries#${ind.id}`} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#E87722] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    <span className="truncate">{ind.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/industries" 
                  className="text-[#E87722] hover:underline font-semibold flex items-center gap-1 pt-1"
                >
                  All 8 Sectors <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <p>
              © {currentYear} <span className="text-slate-300 font-semibold">{companyDetails.name}</span>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Incorporated under the Companies Act. Registered as a Private Limited Company.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <span className="hover:text-slate-200 cursor-pointer">Statutory Compliance</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Engagement</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-200 cursor-pointer">Code of Business Ethics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

