import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ""
}) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 border">
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-[#E87722]' : 'bg-[#E87722]'}`}></span>
          <span className={dark ? 'text-[#E87722] border-slate-700 bg-slate-800/80' : 'text-[#0B2545] border-slate-200 bg-slate-100'}>
            {badge}
          </span>
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-[#0B2545]'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`mt-3.5 text-sm sm:text-base leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

