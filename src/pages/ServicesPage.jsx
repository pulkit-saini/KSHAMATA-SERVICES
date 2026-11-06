import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  Clock,
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/home/CtaBanner';
import { services, serviceCategories } from '../data/services';

export default function ServicesPage({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

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

  // Scroll to hash on load or hash change
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

  const filteredServices = services.filter((srv) => {
    const matchesCategory = selectedCategory === "All Services" || srv.category === selectedCategory;
    const matchesSearch = 
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.typicalRoles.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-[#071A31] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate Staffing and Business Meeting"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A31] via-[#0B2545]/95 to-[#071A31]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E87722] border border-white/15">
              <span>Comprehensive Service Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Professional Services & Staffing Solutions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              End-to-end manpower supply, executive recruitment, contractual staffing, and HR consulting designed to drive operational velocity while safeguarding institutional compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-16 lg:top-20 z-30 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0B2545] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or roles..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] bg-slate-50 focus:bg-white"
            />
          </div>

        </div>
      </section>

      {/* Detailed Services Listing */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {filteredServices.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto my-12">
              <p className="text-slate-500 text-sm">No services matched your search or category filter.</p>
              <button
                onClick={() => { setSelectedCategory("All Services"); setSearchQuery(""); }}
                className="mt-3 text-xs font-bold text-[#E87722] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredServices.map((srv, index) => {
                const IconComponent = iconMap[srv.icon] || Users;
                return (
                  <div
                    key={srv.id}
                    id={srv.id}
                    className="scroll-mt-36 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Icon, Title & Narrative */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shadow-md">
                            <IconComponent className="w-6 h-6 text-[#E87722]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E87722]">
                              {srv.category}
                            </span>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545]">
                              {srv.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                          {srv.shortDescription}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {srv.fullDescription}
                        </p>

                        {/* Deliverables */}
                        <div className="pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                            Key Scope of Work & Deliverables:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                            {srv.keyDeliverables.map((item, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA button */}
                        <div className="pt-4 flex items-center gap-4">
                          <button
                            onClick={() => onOpenConsultation(srv.id)}
                            className="bg-[#0B2545] hover:bg-[#071A31] text-white text-xs font-bold px-5 py-3 rounded-lg transition-colors flex items-center gap-2 group"
                          >
                            <span>Inquire for {srv.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#E87722] group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>

                      {/* Right: Typical Roles & Business Benefits Box */}
                      <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-5">
                        
                        {/* SLA Tag */}
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                          <span className="text-xs text-slate-500">Service SLA:</span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E87722]">
                            <Clock className="w-3.5 h-3.5" />
                            {srv.sla}
                          </span>
                        </div>

                        {/* Business Benefits */}
                        <div>
                          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Measurable Business Benefits
                          </h5>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {srv.benefits.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E87722] shrink-0 mt-1.5"></span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Typical Roles Supplied */}
                        <div>
                          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            Typical Roles Supplied
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {srv.typicalRoles.map((role, rIdx) => (
                              <span
                                key={rIdx}
                                className="bg-white border border-slate-200 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center gap-2 text-[11px] text-emerald-800 font-medium">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>100% PF & ESIC Zero-Liability Guaranteed</span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Cta Banner */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
