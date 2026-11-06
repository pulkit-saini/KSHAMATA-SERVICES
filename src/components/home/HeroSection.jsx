import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, CheckCircle2, ChevronRight, Award, Clock } from 'lucide-react';
import { companyDetails } from '../../data/company';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-[#071A31] text-white">
      {/* Background Corporate Photography with Subtle Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Corporate Building and Business Infrastructure"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform motion-safe:animate-pulse duration-[10000ms]"
        />
        {/* Navy and vignette overlays to ensure utmost readability & premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A31] via-[#0B2545]/95 to-[#071A31]/90" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#E87722] animate-pulse"></span>
              <span className="text-[#E87722] font-bold">KSHAMATA</span>
              <span className="text-slate-400">|</span>
              <span className="tracking-wide">Services & Support Private Limited</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Empowering Businesses Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#E87722]">
                People, Expertise
              </span>{" "}
              & Reliable Support.
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              {companyDetails.subHeadline}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="bg-[#E87722] hover:bg-[#D06617] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200 flex items-center gap-2.5 text-sm sm:text-base group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-200 text-sm sm:text-base flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Quick Micro-Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E87722]" />
                100% Statutory Compliance
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E87722]" />
                Multi-Tier Background Checked
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E87722]" />
                Zero-Liability Third Party Payroll
              </span>
            </div>

          </div>

          {/* Right Hero Visual Card / Brand Focal Element */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/15 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white p-1.5 shadow">
                    <img src="/logo-emblem.png" alt="Kshamata Emblem" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      KSHAMATA
                    </h4>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                      Workforce Assurance Desk
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  ACTIVE
                </span>
              </div>

              {/* Pillars preview */}
              <div className="space-y-3">
                <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Standard Mobilization SLA</span>
                    <span className="text-[#E87722] font-bold">24 – 48 Hours</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#E87722] h-full w-[95%]"></div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Statutory Compliance Audit</span>
                    <span className="text-emerald-400 font-bold">100% Zero-Liability</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[100%]"></div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Shift Attendance SLA</span>
                    <span className="text-blue-400 font-bold">98.4% Guaranteed</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[98%]"></div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-white hover:bg-slate-100 text-[#0B2545] font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Corporate Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E87722]" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {companyDetails.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

