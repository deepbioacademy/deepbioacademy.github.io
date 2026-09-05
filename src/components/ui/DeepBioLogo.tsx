import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
  size?: number;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  isLight = false,
  size = 32,
  iconOnly = false
}) => {
  const primaryTextColor = isLight ? "text-white" : "text-slate-900";
  const iconBoxStyle = isLight
    ? "bg-slate-800 text-cyan-400 border-slate-700 shadow-sm"
    : "bg-gradient-to-tr from-blue-600 via-indigo-600 to-teal-500 text-white shadow-md shadow-indigo-500/20";

  return (
    <div className={`inline-flex items-center gap-3 cursor-pointer select-none pointer-events-auto ${className}`} aria-label="DeepBio Academy">
      {/* Signature Academic Emblem */}
      <div className={`flex-shrink-0 flex items-center justify-center p-2 rounded-xl transition-transform duration-200 group-hover:scale-105 ${iconBoxStyle}`}>
        <GraduationCap style={{ width: size ? size * 0.72 : 22, height: size ? size * 0.72 : 22 }} strokeWidth={2.3} />
      </div>

      {/* Signature DeepBio Typography - Fully Clickable */}
      {!iconOnly && (
        <div className="flex items-center gap-1.5 leading-none cursor-pointer">
          <span className={`text-xl sm:text-[22px] font-extrabold tracking-tight ${primaryTextColor}`}>
            DeepBio
          </span>
          <span className={`text-xl sm:text-[22px] font-extrabold tracking-tight ${
            isLight 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300"
              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600"
          }`}>
            Academy
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
