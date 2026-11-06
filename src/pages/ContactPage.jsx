import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  Building,
  User,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { companyDetails } from '../data/company';
import { services } from '../data/services';
import { clientFaqs } from '../data/approach';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "manpower-supply-staffing",
    headcount: "10-25 associates",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid corporate email address.";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Please provide a valid contact number.";
    }
    if (!formData.company.trim()) errs.company = "Please provide your company or enterprise name.";
    if (!formData.message.trim()) errs.message = "Please include a brief description of your workforce requirements.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const code = `KSH-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(code);
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
      message: ""
    });
    setErrors({});
  };

  return (
    <div className="pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-[#071A31] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate Office Reception and Client Desk"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A31] via-[#0B2545]/95 to-[#071A31]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E87722] border border-white/15">
              <span>Corporate Accounts & Inquiries</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Connect With Our Corporate Desk
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Submit your workforce requirement, request a formal manpower quotation, or schedule a statutory compliance evaluation with our senior consulting team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Office Information & Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0B2545] text-xs font-bold uppercase tracking-wider border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E87722]" />
                  Headquarters
                </div>

                <h3 className="text-xl font-bold text-[#0B2545]">
                  {companyDetails.name}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 font-semibold mb-0.5">Corporate Office:</strong>
                      <p>{companyDetails.contact.address.line1}</p>
                      <p>{companyDetails.contact.address.line2}</p>
                      <p>{companyDetails.contact.address.city} – {companyDetails.contact.address.pincode}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                    <Phone className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 font-semibold mb-0.5">Direct Telephones:</strong>
                      <a href={`tel:${companyDetails.contact.phone}`} className="hover:text-[#0B2545] font-medium block">
                        {companyDetails.contact.phone} (Main Board)
                      </a>
                      <a href={`tel:${companyDetails.contact.altPhone}`} className="hover:text-[#0B2545] text-slate-500 block text-xs mt-0.5">
                        {companyDetails.contact.altPhone} (Client Services)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                    <Mail className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 font-semibold mb-0.5">Electronic Inquiries:</strong>
                      <a href={`mailto:${companyDetails.contact.email}`} className="hover:text-[#0B2545] font-medium block">
                        {companyDetails.contact.email}
                      </a>
                      <a href={`mailto:${companyDetails.contact.supportEmail}`} className="hover:text-[#0B2545] text-slate-500 block text-xs mt-0.5">
                        {companyDetails.contact.supportEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                    <Clock className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 font-semibold mb-0.5">Office Timings:</strong>
                      <p>{companyDetails.contact.workingHours}</p>
                      <p className="text-[11px] text-emerald-600 font-medium mt-1">
                        {companyDetails.contact.emergencySupport}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-[#0B2545] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#E87722]" />
                    Client Confidentiality Guarantee
                  </div>
                  <p>
                    All proprietary operational data, workforce headcounts, and corporate briefs submitted are protected by strict non-disclosure obligations.
                  </p>
                </div>
              </div>

              {/* Map Placeholder Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#E87722]" />
                    Corporate Location Map
                  </h4>
                  <span className="text-[10px] text-slate-400">Delhi-NCR CBD</span>
                </div>
                
                {/* Styled Map Graphic Representation */}
                <div className="relative h-48 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center text-center p-4">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0B2545_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs space-y-1">
                    <div className="w-8 h-8 rounded-full bg-[#0B2545] text-white mx-auto flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#E87722]" />
                    </div>
                    <div className="text-xs font-bold text-[#0B2545]">
                      KSHAMATA SERVICES AND SUPPORT
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Sector 44, Gurugram / New Delhi NCR
                    </div>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[10px] font-bold text-[#E87722] hover:underline pt-1"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                
                <div className="pb-6 mb-6 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E87722]">
                    Direct Client Submission Form
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0B2545] mt-1">
                    Submit Your Workforce Requirement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Please provide your operational details so our corporate accounts desk can prepare a tailored service schedule.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#0B2545]">
                        Enquiry Successfully Logged
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your enquiry has been received and logged in our client response system.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-md mx-auto text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Enquiry Reference Code:</span>
                        <span className="font-mono font-bold text-[#0B2545]">{refCode}</span>
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
                        <span className="text-slate-500">Response SLA:</span>
                        <span className="font-bold text-emerald-600">Within 24 Business Hours</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400">
                      * This inquiry has been logged on the frontend client desk. Our accounts manager will connect via {formData.email} or {formData.phone}.
                    </p>

                    <button
                      onClick={handleReset}
                      className="bg-[#0B2545] hover:bg-[#071A31] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
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
                            placeholder="e.g. Vikram Mehta"
                            className={`w-full pl-9 pr-3 py-2.5 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                              errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                            }`}
                          />
                        </div>
                        {errors.fullName && <p className="text-[10px] text-red-500 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Company / Enterprise Name *
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Acme Logistics India"
                            className={`w-full pl-9 pr-3 py-2.5 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                              errors.company ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                            }`}
                          />
                        </div>
                        {errors.company && <p className="text-[10px] text-red-500 mt-1">{errors.company}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Corporate Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className={`w-full pl-9 pr-3 py-2.5 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                              errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                            }`}
                          />
                        </div>
                        {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Contact Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className={`w-full pl-9 pr-3 py-2.5 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                              errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                            }`}
                          />
                        </div>
                        {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
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
                          className="w-full px-3 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] bg-white font-medium text-slate-800"
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
                          Estimated Headcount Required
                        </label>
                        <select
                          value={formData.headcount}
                          onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                          className="w-full px-3 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] bg-white font-medium text-slate-800"
                        >
                          <option value="1-10 associates">1 – 10 associates</option>
                          <option value="10-25 associates">10 – 25 associates</option>
                          <option value="25-100 associates">25 – 100 associates</option>
                          <option value="100+ associates">100+ volume deployment</option>
                          <option value="Advisory / Consultancy only">Advisory / Consultancy only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Detailed Message / Requirement Scope *
                      </label>
                      <div className="relative">
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please provide details regarding specific roles, facility location, shift schedules, target start date, or statutory requirements..."
                          className={`w-full p-3 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
                            errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                          }`}
                        />
                      </div>
                      {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-[11px] text-slate-400">
                        * All corporate inquiries receive formal response within 24 business hours.
                      </span>

                      <button
                        type="submit"
                        className="bg-[#0B2545] hover:bg-[#071A31] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group shrink-0"
                      >
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 text-[#E87722] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Common Inquiries"
            title="Questions Before Submitting an Enquiry"
            subtitle="Understand our service delivery timelines, compliance handling, and contractor agreements."
          />

          <div className="space-y-4">
            {clientFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-xl p-6 border border-slate-200"
              >
                <h4 className="text-sm font-bold text-[#0B2545] flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 mt-2 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
