import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Monitor, 
  Factory, 
  HeartPulse, 
  ShoppingBag, 
  Truck, 
  UtensilsCrossed, 
  HardHat, 
  Building, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/home/CtaBanner';
import { industries } from '../data/industries';

export default function IndustriesPage({ onOpenConsultation }) {
  const location = useLocation();

  const iconMap = {
    Monitor,
    Factory,
    HeartPulse,
    ShoppingBag,
    Truck,
    UtensilsCrossed,
    HardHat,
    Building
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-[#071A31] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
            alt="Industrial and Corporate Workforce Operations"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A31] via-[#0B2545]/95 to-[#071A31]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E87722] border border-white/15">
              <span>Industry Specializations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Sectors & Industries We Power
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Every industry carries unique shift constraints, compliance mandates, and skill matrices. We customize our recruitment, vetting, and management models to match the operational rhythm of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {industries.map((ind, index) => {
            const Icon = iconMap[ind.icon] || Factory;
            const isEven = index % 2 === 0;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="scroll-mt-36 bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Visual Column */}
                  <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A31]/80 via-transparent to-transparent lg:hidden" />
                    
                    {/* Floating Metric Badge */}
                    <div className="absolute bottom-6 left-6 right-6 bg-[#0B2545]/90 backdrop-blur-md p-4 rounded-xl border border-white/15 text-white">
                      <span className="text-[10px] uppercase tracking-wider text-[#E87722] font-bold block">
                        Performance Benchmark
                      </span>
                      <div className="text-xs font-bold mt-0.5 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#E87722]" />
                        <span>{ind.metric}</span>
                      </div>
                    </div>
                  </div>

                  {/* Information Details Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0B2545]/10 text-[#0B2545] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0B2545]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E87722]">
                          Sector Coverage
                        </span>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545]">
                          {ind.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ind.overview}
                    </p>

                    {/* Challenges Solved */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Operational Challenges Solved:
                      </h4>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        {ind.challengesSolved.map((ch, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{ch}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Roles Supplied */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                        Common Roles Deployed:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.keyRoles.map((role, rIdx) => (
                          <span
                            key={rIdx}
                            className="bg-slate-100 text-slate-800 text-[11px] font-medium px-3 py-1 rounded-md border border-slate-200"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compliance & Action */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>Compliance:</strong> {ind.complianceStandards}</span>
                      </div>

                      <button
                        onClick={onOpenConsultation}
                        className="bg-[#0B2545] hover:bg-[#071A31] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
                      >
                        <span>Request Staffing for {ind.title.split('&')[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E87722]" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cta Banner */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
