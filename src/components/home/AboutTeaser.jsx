import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, UserCheck, TrendingUp, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { companyDetails } from '../../data/company';

export default function AboutTeaser() {
  const iconMap = {
    ShieldCheck,
    UserCheck,
    TrendingUp,
    Headphones
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Imagery & Focal Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Workforce Meeting and Executive Strategy"
                className="w-full h-[440px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E87722] block mb-1">
                  Institutional Corporate Standards
                </span>
                <h4 className="text-lg font-bold">
                  Reliability. Integrity. Operational Discipline.
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Engineered to meet the stringent compliance and delivery expectations of enterprise employers.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0B2545] text-white p-5 rounded-xl shadow-xl border border-slate-700 max-w-[220px] hidden sm:block">
              <div className="text-2xl font-extrabold text-[#E87722]">100%</div>
              <div className="text-xs font-semibold mt-0.5">Statutory Compliance</div>
              <div className="text-[10px] text-slate-400 mt-1 leading-snug">
                Fully compliant with Indian Labor Codes, PF, ESIC & tax mandates.
              </div>
            </div>
          </div>

          {/* Right Information Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0B2545] text-xs font-bold tracking-wider uppercase border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E87722]"></span>
              About Kshamata
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              A Strategic Partner for Scalable, Compliant Workforce Operations.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong className="text-slate-900 font-semibold">{companyDetails.name}</strong>, we bridge the gap between high-growth organizational ambitions and dependable workforce execution. We recognize that businesses thrive when their frontline, operational, and administrative teams function with seamless regularity and zero legal friction.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you need skilled machine technicians on factory floors, certified logistics handlers in high-throughput fulfillment centers, paramedical teams in hospitals, or executive administrative personnel in corporate headquarters, our recruitment and managed staffing infrastructure delivers talent that is thoroughly vetted, trained, and legally compliant.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {companyDetails.pillars.map((pillar, idx) => {
                const IconComponent = iconMap[pillar.icon] || ShieldCheck;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-[#0B2545]/10 text-[#0B2545] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-[#0B2545]" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2545] hover:text-[#E87722] transition-colors group"
              >
                <span>Read more about our vision, leadership & ethical standards</span>
                <ArrowRight className="w-4 h-4 text-[#E87722] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

