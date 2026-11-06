import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { industries } from '../../data/industries';

export default function IndustriesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Sectors of Specialization"
          title="Industries We Empower with Specialized Talent"
          subtitle="Delivering customized workforce pipelines tailored to the technical requirements, shift complexities, and safety standards of diverse economic sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries#${ind.id}`}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200 transition-all duration-300 flex flex-col h-[380px]"
            >
              {/* Industry Photography */}
              <div className="absolute inset-0 z-0">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A31] via-[#0B2545]/80 to-transparent" />
              </div>

              {/* Top Metric Badge */}
              <div className="relative z-10 p-5 flex justify-between items-start">
                <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/20 uppercase tracking-wider">
                  {ind.id.replace(/-/g, ' ')}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-auto p-5 text-white space-y-2">
                <h3 className="text-lg font-bold group-hover:text-[#E87722] transition-colors leading-snug">
                  {ind.title}
                </h3>
                
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {ind.shortSummary}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#E87722]">
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Industry Coverage <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2545] hover:text-[#E87722] transition-colors"
          >
            <span>Learn more about role profiles, certifications & compliance by sector</span>
            <ChevronRight className="w-4 h-4 text-[#E87722]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

