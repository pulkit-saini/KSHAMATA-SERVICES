import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Users2,
  FileCheck,
  Scale
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/home/CtaBanner';
import { companyDetails } from '../data/company';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Header Banner */}
      <section className="bg-[#071A31] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate Business Collaboration"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A31] via-[#0B2545]/95 to-[#071A31]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E87722] border border-white/15">
              <span>Corporate Overview</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              About KSHAMATA SERVICES AND SUPPORT PRIVATE LIMITED
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Built on the principles of institutional compliance, rigorous talent vetting, and client-centric workforce execution.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Corporate Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0B2545] text-xs font-bold tracking-wider uppercase border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87722]"></span>
                Who We Are
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
                An Integrated Workforce & Business Support Partner.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <strong className="text-slate-900 font-semibold">{companyDetails.name}</strong> was established with a clear mandate: to professionalize manpower supply, contractual staffing, and HR consulting services for enterprises seeking dependable, legally protected human capital solutions.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Modern corporations face continuous hurdles—including fluctuating shift demands, high turnover in operational roles, statutory legal complexities, and time-consuming administrative payroll tasks. Kshamata acts as an extended operational arm, absorbing these complexities so that client management can concentrate on their core business strategy and commercial growth.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-sm font-bold text-[#0B2545] mb-1">
                    Statutory Protection
                  </div>
                  <p className="text-xs text-slate-500">
                    Comprehensive indemnification against labor disputes, PF, ESIC, and minimum wage non-compliance.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-sm font-bold text-[#0B2545] mb-1">
                    Operational Agility
                  </div>
                  <p className="text-xs text-slate-500">
                    Rapid scaling capability to meet plant expansions, warehouse surges, and corporate shifts.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Corporate Team Strategic Planning"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E87722]">
                    Corporate Standards
                  </span>
                  <h4 className="text-base font-bold mt-1">
                    Delivering Dependability at Every Touchpoint
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Statements */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Institutional Direction"
            title="Our Vision & Mission"
            subtitle="Guiding our day-to-day operations and strategic client partnerships across India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545]/10 text-[#0B2545] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#0B2545]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E87722] block mb-2">
                Our Long-Term Horizon
              </span>
              <h3 className="text-xl font-bold text-[#0B2545] mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                "{companyDetails.vision}"
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#E87722]/10 text-[#E87722] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#E87722]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] block mb-2">
                Our Daily Mandate
              </span>
              <h3 className="text-xl font-bold text-[#0B2545] mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                "{companyDetails.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Organizational DNA"
            title="Our Core Values"
            subtitle="The fundamental beliefs that govern our interactions with clients, associates, regulatory authorities, and communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyDetails.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E87722] bg-orange-50 px-2 py-1 rounded-md border border-orange-200/60 inline-block mb-4">
                    {val.badge}
                  </span>
                  <h3 className="text-base font-bold text-[#0B2545] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Kshamata Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Commitment: Clients & Workforce */}
      <section className="py-20 bg-[#071A31] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Operating Ethos"
            title="Our Commitment to Clients and Workforce"
            subtitle="We believe sustainable corporate success requires absolute balance: unwavering excellence for clients, and dignity, fair treatment, and on-time compensation for workers."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Commitment to Clients */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0B2545] text-[#E87722] flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Our Commitment to Clients
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span><strong>100% Statutory Compliance:</strong> Full indemnification with verifiable challans for PF, ESIC, and statutory bonuses.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span><strong>Shift Discipline:</strong> Proactive standby buffers that prevent operational lines from falling idle.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span><strong>Transparent Commercials:</strong> Clear billing schedules with no hidden statutory surcharges or surprise costs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span><strong>Rapid Mobilization:</strong> Strict turnaround SLAs to ensure urgent vacancies are staffed without delay.</span>
                </li>
              </ul>
            </div>

            {/* Commitment to Workforce */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0B2545] text-emerald-400 flex items-center justify-center">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Our Commitment to Our Workforce
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Punctual Wage Disbursement:</strong> Guaranteed on-time salary credit directly into verified bank accounts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Social Security & Healthcare:</strong> Active enrollment in ESIC medical coverage and provident fund savings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Workplace Dignity & Safety:</strong> Strict enforcement of protective safety equipment (PPE) and anti-harassment policies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Skill Upgradation:</strong> Orientation in modern workplace etiquette, safety drills, and career pathways.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance & Ethics */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0B2545] text-xs font-bold tracking-wider uppercase border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E87722]" />
            Corporate Governance
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
            Ethics, Integrity & Legal Transparency
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            At KSHAMATA SERVICES AND SUPPORT PRIVATE LIMITED, our governance practices are structured to adhere to all corporate filing norms under the Indian Companies Act and the Central & State Labor Regulations. We maintain zero tolerance for financial discrepancies, unauthorized labor contracting, or exploitation of vulnerable workforce cohorts.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#0B2545] hover:bg-[#071A31] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
            >
              <span>Speak with Our Compliance Desk</span>
              <ArrowRight className="w-4 h-4 text-[#E87722]" />
            </button>
          </div>
        </div>
      </section>

      {/* Cta Banner */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
