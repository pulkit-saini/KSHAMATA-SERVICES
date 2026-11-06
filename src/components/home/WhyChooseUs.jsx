import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Clock, 
  FileCheck2, 
  Headphones, 
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function WhyChooseUs({ onOpenConsultation }) {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: "100% Statutory Compliance",
      description: "Complete legal indemnification. We furnish verifiable EPF, ESIC, professional tax, and labor welfare challans alongside monthly invoices with zero liability for the client."
    },
    {
      icon: UserCheck,
      title: "Institutional Vetting Rigor",
      description: "Every candidate undergoes multi-tier identity authentication (Aadhaar/PAN), past work verification, physical fitness testing, and police verification clearance."
    },
    {
      icon: Clock,
      title: "24 – 48 Hour Mobilization",
      description: "Our active talent pipelines and regional sourcing hubs enable lightning-fast personnel deployment for critical operational vacancies and seasonal surges."
    },
    {
      icon: FileCheck2,
      title: "Active Standby Buffer (10-15%)",
      description: "Never suffer line stoppages or customer service drops due to absenteeism. We maintain standby buffers ready to step onto the floor instantly."
    },
    {
      icon: Headphones,
      title: "Dedicated Single Account Lead",
      description: "One senior operational point of contact responsible for shift rosters, grievance redressal, SLA governance, and executive reporting."
    },
    {
      icon: HeartHandshake,
      title: "Ethical Workforce Governance",
      description: "We believe satisfied workers perform better. We guarantee on-time wage disbursement, fair treatment, workplace safety, and transparent dispute resolutions."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#071A31] text-white relative overflow-hidden">
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B2545] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <SectionHeading
          badge="The Kshamata Advantage"
          title="Why Leading Enterprises Entrust Their Workforce to Kshamata"
          subtitle="Moving beyond transactional labor contracting to deliver institutional reliability, legal safety, and operational excellence."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 rounded-2xl p-7 border border-white/10 hover:border-[#E87722]/40 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B2545] border border-white/15 text-[#E87722] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#E87722] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#E87722] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard Operating Procedure</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold text-white">
              Need a comprehensive compliance audit of your current staffing vendors?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
              Our legal and HR consulting team conducts confidential evaluations of PF/ESIC liabilities, contractor licenses, and regulatory exposure.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-[#E87722] hover:bg-[#D06617] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
          >
            <span>Request Compliance Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

