import { LinkConfig } from '../types';

export const DEFAULT_CONFIG: LinkConfig = {
  studentFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-experience-ai-bd-student/viewform',
  teacherFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-experience-ai-bd-teacher-tot/viewform',
  schoolPartnerFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-experience-ai-bd-school-host/viewform',
  mentorFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-experience-ai-bd-mentor/viewform',
  mainDriveFolderUrl: 'https://drive.google.com/drive/folders/1ExperienceAI-Bangladesh-Curriculum-Drive',
  teacherDriveFolderUrl: 'https://drive.google.com/drive/folders/1ExperienceAI-BD-Teacher-Guides',
  studentDriveFolderUrl: 'https://drive.google.com/drive/folders/1ExperienceAI-BD-Student-Worksheets',
  curriculumGuideUrl: 'https://drive.google.com/drive/folders/1ExperienceAI-Bangladesh-Curriculum-Drive',
  contactEmail: 'agamiai@gmail.com'
};

const STORAGE_KEY = 'experience_ai_bd_links_config';

export function getLinkConfig(): LinkConfig {
  if (typeof window === 'undefined') {
    return DEFAULT_CONFIG;
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') {
        return { ...DEFAULT_CONFIG, ...parsed };
      }
    }
  } catch (e) {
    console.error('Failed to load link configuration:', e);
  }
  return DEFAULT_CONFIG;
}

export function saveLinkConfig(config: LinkConfig): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save link configuration:', e);
  }
}
