export interface CurriculumLesson {
  lessonNumber: number;
  title: string;
  description: string;
}

export interface CurriculumModule {
  id: string;
  unitNumber: number;
  title: string;
  tagline: string;
  ageGroup: '11-14' | '15-18' | '11-18' | 'All Ages' | 'Teachers';
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Educator';
  summary: string;
  lessons?: CurriculumLesson[];
  learningOutcomes: string[];
  classroomActivity: string;
  resources: {
    title: string;
    type: 'Slides' | 'Worksheet' | 'Colab Notebook' | 'Teacher Guide' | 'Video' | 'Google Docs';
    size?: string;
    url?: string;
  }[];
  keyTerms: {
    term: string;
    meaning: string;
  }[];
}

export interface WorkshopEvent {
  id: string;
  title: string;
  division: 'Dhaka' | 'Chattogram' | 'Sylhet' | 'Rajshahi' | 'Khulna' | 'Barishal' | 'Rangpur' | 'Mymensingh' | 'Online Nationwide';
  district: string;
  venue: string;
  date: string;
  time: string;
  track: 'Junior (11-14)' | 'Senior (15-18)' | 'Teachers (TOT)' | 'All Students';
  format: 'In-person Workshop' | 'Virtual Bootcamp' | 'Hybrid Session';
  totalSeats: number;
  seatsLeft: number;
  status: 'Open' | 'Filling Fast' | 'Waitlist' | 'Completed';
  formUrl: string;
  instructor: string;
}

export interface StudentProject {
  id: string;
  title: string;
  studentName: string;
  institution: string;
  location: string;
  age: number;
  description: string;
  techUsed: string[];
  impactCategory: 'Health' | 'Agriculture' | 'Accessibility' | 'Education' | 'Environment';
}

export interface MentorProfile {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  specialization: string;
  tags?: string[];
  bio?: string;
  imageUrl?: string;
  imagePlaceholderColor: string;
}

export interface LinkConfig {
  studentFormUrl: string;
  teacherFormUrl: string;
  schoolPartnerFormUrl: string;
  mentorFormUrl: string;
  contactEmail: string;
  curriculumGuideUrl?: string;
  mainDriveFolderUrl?: string;
  teacherDriveFolderUrl?: string;
  studentDriveFolderUrl?: string;
}
