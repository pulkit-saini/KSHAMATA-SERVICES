import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { approachSteps } from '../../data/approach';

export default function ApproachSection({ onOpenConsultation }) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Structured Methodology"
          title="Our 4-Phase Operational & Delivery Framework"
          subtitle="A battle-tested deployment methodology that minimizes time-to-hire while ensuring absolute statutory compliance and workforce discipline."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {approachSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-[#E87722] transition-colors font-mono">
                    {item.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#E87722] transition-colors"></span>
                </div>

                <h3 className="text-base font-bold text-[#0B2545] group-hover:text-[#E87722] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[11px] font-semibold text-[#E87722] uppercase tracking-wider mt-0.5">
                  {item.subtitle}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                Phase {idx + 1} of Deployment
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#071A31] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all"
          >
            <span>Request a Tailored Deployment Roadmap</span>
            <ArrowRight className="w-4 h-4 text-[#E87722]" />
          </button>
        </div>

      </div>
    </section>
  );
}

