"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/programs/youth-ai/Hero";
import { CurriculumCredits } from "@/components/programs/youth-ai/CurriculumCredits";
import { ProgramOverview } from "@/components/programs/youth-ai/ProgramOverview";
import { CurriculumExplorer } from "@/components/programs/youth-ai/CurriculumExplorer";
import { MentorSection } from "@/components/programs/youth-ai/MentorSection";
import { FaqSection } from "@/components/programs/youth-ai/FaqSection";
import { LinkConfig } from "@/types";
import { DEFAULT_CONFIG, getLinkConfig, saveLinkConfig } from "@/utils/config";

const ConfigModal = dynamic(
  () => import("@/components/programs/youth-ai/ConfigModal").then((mod) => mod.ConfigModal),
  { ssr: false }
);

const RegistrationModal = dynamic(
  () => import("@/components/programs/youth-ai/RegistrationModal").then((mod) => mod.RegistrationModal),
  { ssr: false }
);

export default function YouthAIPage() {
  const [linkConfig, setLinkConfig] = useState<LinkConfig>(DEFAULT_CONFIG);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [registrationTrack, setRegistrationTrack] = useState<string | undefined>(undefined);
  const [registrationEventTitle, setRegistrationEventTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLinkConfig(getLinkConfig());
  }, []);

  const handleSaveConfig = (newConfig: LinkConfig) => {
    setLinkConfig(newConfig);
    saveLinkConfig(newConfig);
  };

  const handleOpenRegistration = (track?: string, eventTitle?: string) => {
    setRegistrationTrack(track);
    setRegistrationEventTitle(eventTitle);
    setIsRegistrationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <main id="main-content" className="flex-1">
        <Hero
          onOpenRegistration={handleOpenRegistration}
          config={linkConfig}
        />
        <CurriculumCredits />
        <ProgramOverview />
        <CurriculumExplorer />
        <MentorSection
          onOpenRegistration={handleOpenRegistration}
          config={linkConfig}
        />
        <FaqSection />
      </main>

      {/* Dynamic Modals */}
      {isConfigModalOpen && (
        <ConfigModal
          isOpen={isConfigModalOpen}
          onClose={() => setIsConfigModalOpen(false)}
          config={linkConfig}
          onSave={handleSaveConfig}
        />
      )}

      {isRegistrationModalOpen && (
        <RegistrationModal
          isOpen={isRegistrationModalOpen}
          onClose={() => setIsRegistrationModalOpen(false)}
          initialTrack={registrationTrack}
          eventTitle={registrationEventTitle}
          config={linkConfig}
        />
      )}
    </div>
  );
}

