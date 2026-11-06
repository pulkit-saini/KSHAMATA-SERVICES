import React, { useState } from 'react';
import { Calculator, Users, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { industries } from '../../data/industries';

export default function WorkforceCalculator({ onOpenConsultation }) {
  const [selectedIndustry, setSelectedIndustry] = useState("manufacturing");
  const [baseHeadcount, setBaseHeadcount] = useState(25);
  const [shiftModel, setShiftModel] = useState("2-shifts"); // 1-shift, 2-shifts, 3-shifts
  const [timeline, setTimeline] = useState("urgent"); // urgent (24-48h), standard (1-2 weeks), planned

  // Compute calculated metrics
  const shiftMultiplier = shiftModel === "1-shift" ? 1 : shiftModel === "2-shifts" ? 1.8 : 2.7;
  const totalFloorStaff = Math.round(baseHeadcount * (shiftModel === "1-shift" ? 1 : shiftModel === "2-shifts" ? 1.5 : 2.2));
  const bufferStaff = Math.max(2, Math.round(totalFloorStaff * 0.12)); // 12% buffer
  const supervisorCount = Math.max(1, Math.ceil(totalFloorStaff / 20)); // 1 supervisor per 20 workers
  const totalMobilization = totalFloorStaff + bufferStaff;

  const currentInd = industries.find(i => i.id === selectedIndustry) || industries[0];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
      <div className="bg-[#0B2545] p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87722]/20 text-[#E87722] text-xs font-bold uppercase tracking-wider mb-2 border border-[#E87722]/30">
            <Calculator className="w-3.5 h-3.5" />
            Operational Workforce Estimator
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Calculate Your Staffing & Shift Configuration
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl font-light">
            Interactive resource modeling for manufacturing, logistics, healthcare, retail, and corporate facilities.
          </p>
        </div>

        <div className="shrink-0 bg-white/10 rounded-xl px-4 py-3 border border-white/10 text-center">
          <span className="text-xs text-slate-300 block">Recommended Mobilization</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#E87722]">
            {totalMobilization} <span className="text-xs text-white font-normal">Personnel</span>
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Industry Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Industry Sector
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] bg-white font-medium text-slate-800"
            >
              {industries.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.title}
                </option>
              ))}
            </select>
          </div>

          {/* Base Headcount Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Base Shift Requirement: <span className="text-[#0B2545] font-extrabold text-sm">{baseHeadcount} associates</span>
              </label>
              <span className="text-[11px] text-slate-500">Scale: 5 to 250</span>
            </div>
            <input
              type="range"
              min="5"
              max="250"
              step="5"
              value={baseHeadcount}
              onChange={(e) => setBaseHeadcount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E87722]"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>5 associates (Core Team)</span>
              <span>100 associates</span>
              <span>250+ associates (Volume)</span>
            </div>
          </div>

          {/* Shift Structure */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Operational Shift Model
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { id: "1-shift", label: "Single Shift", desc: "8-9 Hour General" },
                { id: "2-shifts", label: "Double Shift", desc: "16-Hour Extended" },
                { id: "3-shifts", label: "24/7 Rotational", desc: "3 Shifts Continuous" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setShiftModel(opt.id)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    shiftModel === opt.id
                      ? 'border-[#0B2545] bg-[#0B2545]/5 ring-1 ring-[#0B2545]'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className={`text-xs font-bold ${shiftModel === opt.id ? 'text-[#0B2545]' : 'text-slate-800'}`}>
                    {opt.label}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobilization Urgency */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              4. Mobilization Window
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { id: "urgent", label: "Urgent Mobilization", desc: "24 – 48 Hours" },
                { id: "standard", label: "Standard Ramp-Up", desc: "1 – 2 Weeks" },
                { id: "planned", label: "Planned Expansion", desc: "30+ Days Advance" },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTimeline(t.id)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    timeline === t.id
                      ? 'border-[#E87722] bg-[#E87722]/5 ring-1 ring-[#E87722]'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className={`text-xs font-bold ${timeline === t.id ? 'text-[#E87722]' : 'text-slate-800'}`}>
                    {t.label}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Breakdown Output Summary Column */}
        <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="pb-3 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Deployment Architecture
              </span>
              <h4 className="text-base font-extrabold text-[#0B2545] mt-1">
                {currentInd.title} Solution
              </h4>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-600 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#0B2545]" />
                  Active Shift Personnel:
                </span>
                <span className="font-bold text-slate-900">{totalFloorStaff} associates</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-600 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Standby Absenteeism Buffer:
                </span>
                <span className="font-bold text-emerald-700">+{bufferStaff} associates (12%)</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-600 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E87722]" />
                  On-site Supervision Tier:
                </span>
                <span className="font-bold text-slate-900">{supervisorCount} Lead / Supervisor</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-600">Compliance & Verification:</span>
                <span className="font-bold text-slate-900">100% PF, ESIC & Aadhaar</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-slate-600">Expected Mobilization SLA:</span>
                <span className="font-bold text-[#E87722]">
                  {timeline === 'urgent' ? '24 – 48 Hours' : timeline === 'standard' ? '5 – 7 Business Days' : 'As Scheduled'}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <div className="font-semibold text-slate-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Zero Administrative Burden
              </div>
              <p>
                Includes all muster rolls, biometric logging, replacement guarantees, and monthly verified statutory deposit challans.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={onOpenConsultation}
              className="w-full bg-[#0B2545] hover:bg-[#071A31] text-white font-bold py-3 px-4 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group"
            >
              <span>Request Formal Proposal with this Spec</span>
              <ArrowRight className="w-4 h-4 text-[#E87722] group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-2">
              Confidential, non-binding corporate quotation within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

