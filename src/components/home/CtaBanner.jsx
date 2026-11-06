import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { companyDetails } from '../../data/company';

export default function CtaBanner({ onOpenConsultation }) {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#071A31] via-[#0B2545] to-[#0A223E] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-700/60">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#E87722]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E87722]" />
              <span>Partner with Kshamata Today</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Build a Stronger, More Productive & Fully Compliant Workforce?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Eliminate operational downtime, mitigate regulatory liabilities, and scale your workforce on-demand. Connect with our client accounts desk today for a detailed consultation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="bg-[#E87722] hover:bg-[#D06617] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200 flex items-center gap-2.5 group"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                Direct Office Channels
              </Link>
            </div>

            {/* Quick Contact Micro-bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <a href={`tel:${companyDetails.contact.phone}`} className="flex items-center gap-2 hover:text-[#E87722] transition-colors">
                <Phone className="w-4 h-4 text-[#E87722]" />
                <span>Direct: {companyDetails.contact.phone}</span>
              </a>
              <a href={`mailto:${companyDetails.contact.email}`} className="flex items-center gap-2 hover:text-[#E87722] transition-colors">
                <Mail className="w-4 h-4 text-[#E87722]" />
                <span>{companyDetails.contact.email}</span>
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Average Response SLA: Under 4 Hours</span>
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

