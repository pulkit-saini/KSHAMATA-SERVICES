import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, Mail, Phone, User } from 'lucide-react';
import { services } from '../../data/services';

export default function ConsultationModal({ isOpen, onClose, initialService = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: initialService || "manpower-supply-staffing",
    headcount: "10-25 associates",
    timeline: "Immediate (< 48 Hours)",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid corporate email is required";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid phone number is required";
    }
    if (!formData.company.trim()) errs.company = "Company / Organization name is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Generate reference code
    const generatedRef = `KSH-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "manpower-supply-staffing",
      headcount: "10-25 associates",
      timeline: "Immediate (< 48 Hours)",
      message: ""
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#071A31]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl z-10 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#0B2545] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E87722]/20 text-[#E87722] text-[11px] font-bold tracking-wider uppercase mb-2 border border-[#E87722]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            Priority Client Desk
          </div>
          <h3 className="text-xl font-bold tracking-tight">
            Schedule a Corporate Consultation
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Discuss customized staffing pipelines, SLA terms, or compliance governance with our team.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#0B2545]">
                Consultation Request Logged
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your requirement has been assigned to our corporate workforce desk.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Inquiry Reference ID:</span>
                <span className="font-mono font-bold text-[#0B2545]">{refId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Organization:</span>
                <span className="font-medium text-slate-800">{formData.company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service Category:</span>
                <span className="font-medium text-slate-800 capitalize">
                  {formData.service.replace(/-/g, ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated SLA Response:</span>
                <span className="font-semibold text-emerald-600">Within 24 Business Hours</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              * Note: A representative will contact you via {formData.email} or {formData.phone} with preliminary staffing availability and cost schedules.
            </p>

            <button
              onClick={handleReset}
              className="w-full bg-[#0B2545] hover:bg-[#071A31] text-white font-semibold py-3 rounded-lg text-sm transition-colors"
            >
              Close & Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full pl-9 pr-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Organization *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Industries Pvt Ltd"
                    className={`w-full pl-9 pr-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                      errors.company ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.company && <p className="text-[10px] text-red-500 mt-0.5">{errors.company}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Corporate Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full pl-9 pr-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full pl-9 pr-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Interested In
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] bg-white"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Headcount
                </label>
                <select
                  value={formData.headcount}
                  onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] bg-white"
                >
                  <option value="1-10 associates">1 – 10 associates</option>
                  <option value="10-25 associates">10 – 25 associates</option>
                  <option value="25-100 associates">25 – 100 associates</option>
                  <option value="100+ associates">100+ bulk deployment</option>
                  <option value="Advisory / Consultancy only">Advisory / Consultancy only</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Brief Description of Requirements (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention specific roles, location, shift timings, or immediate timeline..."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              <span className="text-[11px] text-slate-500">
                🔒 Protected under strict NDA & non-disclosure protocol.
              </span>
              <button
                type="submit"
                className="bg-[#0B2545] hover:bg-[#071A31] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E87722]" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

