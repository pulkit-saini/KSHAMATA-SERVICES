import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Briefcase, Mail } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#0B2545]/10 text-[#0B2545] mx-auto flex items-center justify-center font-extrabold text-2xl font-mono">
          404
        </div>
        
        <div>
          <h1 className="text-xl font-extrabold text-[#0B2545]">
            Corporate Page Not Found
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            The operational document or page you requested could not be located on the Kshamata Services network.
          </p>
        </div>

        <div className="pt-2 space-y-2">
          <Link
            to="/"
            className="w-full bg-[#0B2545] hover:bg-[#071A31] text-white font-semibold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4 text-[#E87722]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Briefcase className="w-4 h-4 text-[#0B2545]" />
            <span>View Workforce Services</span>
          </Link>

          <Link
            to="/contact"
            className="w-full text-slate-500 hover:text-[#0B2545] font-semibold py-2 text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Client Support Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

