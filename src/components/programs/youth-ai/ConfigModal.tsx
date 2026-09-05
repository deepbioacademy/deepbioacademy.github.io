'use client';

import React, { useState } from 'react';
import { 
  X, 
  Settings, 
  Save, 
  RotateCcw, 
  ClipboardList, 
  CheckCircle2 
} from 'lucide-react';
import { LinkConfig } from '@/types';
import { DEFAULT_CONFIG } from '@/utils/config';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config?: LinkConfig;
  onSave: (newConfig: LinkConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config = DEFAULT_CONFIG,
  onSave
}) => {
  const [formValues, setFormValues] = useState<LinkConfig>(config || DEFAULT_CONFIG);
  const [savedStatus, setSavedStatus] = useState(false);

  if (!isOpen) return null;

  const handleChange = (key: keyof LinkConfig, value: string) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave(formValues);
    setSavedStatus(true);
    setTimeout(() => {
      setSavedStatus(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormValues(DEFAULT_CONFIG);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Customize Registration Form Links
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Update your official Google Form URLs. Saved locally in your browser.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Inputs */}
        <div className="space-y-5 text-xs sm:text-sm">
          
          {/* Section: Google Forms */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <ClipboardList className="w-4 h-4 text-indigo-600" />
              <span>Google Forms (Registration Links)</span>
            </h4>

            <div>
              <label className="block font-medium text-xs text-slate-700 mb-1">
                Student Registration Google Form URL:
              </label>
              <input
                type="url"
                value={formValues.studentFormUrl}
                onChange={(e) => handleChange('studentFormUrl', e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-xs text-slate-700 mb-1">
                Teacher / TOT Registration Form URL:
              </label>
              <input
                type="url"
                value={formValues.teacherFormUrl}
                onChange={(e) => handleChange('teacherFormUrl', e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-xs text-slate-700 mb-1">
                School Partnership Request Form URL:
              </label>
              <input
                type="url"
                value={formValues.schoolPartnerFormUrl}
                onChange={(e) => handleChange('schoolPartnerFormUrl', e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-xs text-slate-700 mb-1">
                Mentor / Volunteer Application Form URL:
              </label>
              <input
                type="url"
                value={formValues.mentorFormUrl}
                onChange={(e) => handleChange('mentorFormUrl', e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restore Defaults</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              {savedStatus ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              <span>{savedStatus ? 'Saved!' : 'Save Changes'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

