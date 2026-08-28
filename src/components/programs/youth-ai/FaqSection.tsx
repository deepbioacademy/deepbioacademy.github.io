'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown
} from 'lucide-react';

interface FaqSectionProps {}

export const FaqSection: React.FC<FaqSectionProps> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is agami.ai and how is it connected to Experience AI?',
      a: 'agami.ai is an independent Bangladeshi educational initiative focused on empowering school and college students with artificial intelligence skills. We adapt curriculum and classroom resources developed by the Raspberry Pi Foundation and Google DeepMind (Experience AI), customizing them for students and educators in Bangladesh.'
    },
    {
      q: 'Is there any fee or cost to participate in Bangladesh?',
      a: 'No. All workshops, slide decks, study kits, and certification are 100% free. Our mission in Bangladesh is to ensure every student—regardless of financial background—has equal access to artificial intelligence literacy.'
    },
    {
      q: 'Do students need prior coding knowledge or an expensive computer?',
      a: 'Not at all! Over 50% of the lessons are "unplugged" (can be taught with printed paper cards, role-playing, and blackboard logic). Hands-on computer exercises run entirely in free web browsers via Google Teachable Machine or Google Colab on basic computers.'
    },
    {
      q: 'How do I access the curriculum materials and lesson plans?',
      a: 'You can explore all unit breakdowns, learning outcomes, key terminology, and classroom activities directly in the Curriculum section of this website.'
    },
    {
      q: 'How can a school headmaster or principal arrange a workshop for their students?',
      a: 'School authorities can fill out the "School Partnership" Google Form on this site. Our team will coordinate with you to schedule an on-site or hybrid training day for your students and ICT faculty.'
    },
    {
      q: 'Are certificates provided upon completion of the training?',
      a: 'Yes, every student and teacher who completes a cohort receives a verifiable Digital Certificate of Participation and a Junior AI Explorer Badge.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything You Need to Know
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Clear answers for students, parents, teachers, and school administrators in Bangladesh.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
