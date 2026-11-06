import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutTeaser from '../components/home/AboutTeaser';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesGrid from '../components/home/IndustriesGrid';
import ApproachSection from '../components/home/ApproachSection';
import WorkforceCalculator from '../components/common/WorkforceCalculator';
import CtaBanner from '../components/home/CtaBanner';
import SectionHeading from '../components/common/SectionHeading';
import { clientFaqs } from '../data/approach';
import { HelpCircle } from 'lucide-react';

export default function HomePage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* 2. About Intro & 4 Pillars */}
      <AboutTeaser />

      {/* 3. 8 Core Services Overview */}
      <ServicesOverview onOpenConsultation={onOpenConsultation} />

      {/* 4. Why Choose Kshamata (Differentiators) */}
      <WhyChooseUs onOpenConsultation={onOpenConsultation} />

      {/* 5. Interactive Workforce Calculator Section */}
      <section className="py-20 lg:py-28 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Resource Planning Tool"
            title="Estimate Your Workforce & Shift Configuration"
            subtitle="Plan team sizes, calculate standby buffer capacities, and review mobilization timelines across your industry operations."
          />
          <WorkforceCalculator onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <IndustriesGrid />

      {/* 7. Our 4-Phase Deployment Approach */}
      <ApproachSection onOpenConsultation={onOpenConsultation} />

      {/* 8. Frequently Asked Questions Preview */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Client Inquiries"
            title="Frequently Asked Questions"
            subtitle="Clear answers on our statutory compliance, mobilization SLAs, and workforce governance."
          />

          <div className="space-y-4">
            {clientFaqs.slice(0, 4).map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0B2545] flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Closing High-Impact Call to Action Banner */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
