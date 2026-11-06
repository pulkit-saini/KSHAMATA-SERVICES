import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  UserCheck, 
  Layers, 
  Briefcase, 
  FileText, 
  Settings, 
  FileSpreadsheet, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { services } from '../../data/services';

export default function ServicesOverview({ onOpenConsultation }) {
  const iconMap = {
    Users,
    UserCheck,
    Layers,
    Briefcase,
    FileText,
    Settings,
    FileSpreadsheet,
    Building2
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Our Core Capabilities"
          title="Comprehensive Manpower & Business Support Services"
          subtitle="Engineered to eliminate workforce friction, reduce fixed overhead liabilities, and ensure seamless statutory compliance across all operational divisions."
        />

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => {
            const IconComponent = iconMap[srv.icon] || Users;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0B2545]/5 text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      {srv.category.split('&')[0]}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B2545] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-3">
                    {srv.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {srv.keyDeliverables.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services#${srv.id}`}
                    className="text-xs font-semibold text-[#0B2545] group-hover:text-[#E87722] flex items-center gap-1 transition-colors"
                  >
                    <span>Learn Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <button
                    onClick={() => onOpenConsultation(srv.id)}
                    className="text-[11px] font-semibold text-slate-400 hover:text-[#0B2545] transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#0B2545]">
              Looking for a custom hybrid staffing or multi-location deployment?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              We design custom service level agreements (SLAs), dedicated vendor management, and unified billing schedules.
            </p>
          </div>
          <Link
            to="/services"
            className="shrink-0 bg-[#0B2545] hover:bg-[#071A31] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <span>View Full Service Catalog</span>
            <ArrowRight className="w-4 h-4 text-[#E87722]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

