'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Layers, 
  ShieldCheck, 
  BrainCircuit, 
  MessageSquareCode, 
  Dna, 
  FlaskConical
} from 'lucide-react';
import { LinkConfig } from '@/types';
import { CURRICULUM_MODULES } from '@/data/curriculumData';
import { DEFAULT_CONFIG } from '@/utils/config';

interface CurriculumExplorerProps {
  config?: LinkConfig;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({
  config = DEFAULT_CONFIG
}) => {
  const [activeModuleId, setActiveModuleId] = useState<string>('tab-1');

  const modulesConfig = [
    {
      id: 'tab-1',
      moduleNumber: 1,
      name: 'AI Safety',
      icon: ShieldCheck,
      badge: '3 Lessons',
    },
    {
      id: 'tab-2',
      moduleNumber: 2,
      name: 'Foundations of AI',
      icon: BrainCircuit,
      badge: '6 Lessons',
    },
    {
      id: 'tab-3',
      moduleNumber: 3,
      name: 'LLMs',
      icon: MessageSquareCode,
      badge: '4 Lessons',
    },
    {
      id: 'tab-4',
      moduleNumber: 4,
      name: 'AI & Biology',
      icon: Dna,
      badge: '4 Lessons',
    },
    {
      id: 'tab-5',
      moduleNumber: 5,
      name: 'Labs',
      icon: FlaskConical,
      badge: '4 Live Labs',
    }
  ];

  const currentModule = CURRICULUM_MODULES.find(m => m.id === activeModuleId) || CURRICULUM_MODULES[0];
  const activeModuleMeta = modulesConfig.find(m => m.id === activeModuleId) || modulesConfig[0];

  return (
    <section id="curriculum" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Organization & Learning Modules</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            agami.ai Curriculum Roadmap
          </h2>

          <p className="text-slate-600 text-xs sm:text-base font-normal leading-relaxed">
            A comprehensive, progressive curriculum structured across five core modules: AI Safety, Foundations, Large Language Models, AI in Biology, and Interactive Hands-on Labs.
          </p>
        </div>

        {/* 5 Core Modules Navigation */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
            {modulesConfig.map((mod) => {
              const isActive = mod.id === activeModuleId;
              const Icon = mod.icon;
              return (
                <button
                  key={mod.id}
                  id={`module-btn-${mod.moduleNumber}`}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`flex-1 sm:flex-initial min-w-[100px] sm:min-w-[135px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer border text-center flex items-center justify-center gap-1.5 touch-manipulation active:scale-95 ${
                    isActive
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-500/20 ring-2 ring-indigo-600/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Module {mod.moduleNumber}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Module Content Display Area */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-8 lg:p-10 transition-all">
          
          {/* Module Header Banner */}
          <div className="border-b border-slate-100 pb-5 sm:pb-7 mb-5 sm:mb-7">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold bg-indigo-600 text-white shadow-xs">
                Module {activeModuleMeta.moduleNumber}
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                Target: {currentModule.ageGroup}
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                {currentModule.duration}
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/70">
                Level: {currentModule.difficulty}
              </span>
            </div>

            <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-2.5">
              Module {activeModuleMeta.moduleNumber}: {currentModule.title}
            </h3>

            <p className="text-slate-700 text-xs sm:text-base font-normal leading-relaxed max-w-4xl">
              {currentModule.summary}
            </p>
          </div>

          {/* Grid of Content: Left (Lessons & Outcomes) & Right (Key Terms) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Left Column: Lessons Breakdown & Learning Outcomes */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Lessons Breakdown */}
              {currentModule.lessons && currentModule.lessons.length > 0 && (
                <div className="space-y-3 sm:space-y-3.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Lessons ({currentModule.lessons.length})</span>
                    </h4>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Sequential Mastery</span>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3">
                    {currentModule.lessons.map((lesson) => (
                      <div 
                        key={lesson.lessonNumber} 
                        className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-extrabold text-[10px] sm:text-[11px] tracking-wide">
                            Lesson {lesson.lessonNumber}
                          </span>
                          <h5 className="font-bold text-xs sm:text-base text-slate-900">
                            {lesson.title}
                          </h5>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {lesson.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Key Concepts & Terminology */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              
              {/* Key Terminology */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Key Concepts & Terminology</span>
                </h4>
                <div className="space-y-2 sm:space-y-2.5">
                  {currentModule.keyTerms.map((term, idx) => (
                    <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="font-bold text-xs text-indigo-700 mb-0.5">{term.term}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">
                        {term.meaning}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

