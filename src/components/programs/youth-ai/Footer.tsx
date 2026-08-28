'use client';

import React from 'react';
import { 
  Mail,
  Globe,
  ArrowRight
} from 'lucide-react';
import { LinkConfig } from '@/types';
import { DEFAULT_CONFIG } from '@/utils/config';

interface FooterProps {
  onOpenConfig?: () => void;
  config?: LinkConfig;
}

export const Footer: React.FC<FooterProps> = ({
  config = DEFAULT_CONFIG
}) => {
  const safeConfig = config || DEFAULT_CONFIG;
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-slate-300 font-semibold">
          agami.ai — National AI Literacy Initiative by DeepBio Academy
        </p>
        <p className="text-slate-500">
          Delivering foundational Artificial Intelligence & Machine Learning toolkits to school and college students aged 11–18 and educators across all 8 divisions of Bangladesh.
        </p>
        <div className="flex items-center justify-center gap-6 text-slate-400 pt-2">
          <a href="mailto:support@deepbioacademy.com" className="hover:text-white flex items-center gap-1.5">
            <Mail className="w-4 h-4" /> support@deepbioacademy.com
          </a>
          <span className="flex items-center gap-1.5">
            <Globe className="w-4 h-4" /> Dhaka, Bangladesh
          </span>
        </div>
      </div>
    </footer>
  );
};
