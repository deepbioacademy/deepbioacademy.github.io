import { StudentProject, MentorProfile } from '../types';

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'proj-1',
    title: 'Bangla Sign Language Alphabet Detector',
    studentName: 'Sadia Rahman & Team (Grade 10)',
    institution: 'Viqarunnisa Noon School & College, Dhaka',
    location: 'Dhaka',
    age: 15,
    description: 'Built a real-time computer vision classifier trained on 1,200 hand gesture photographs to translate Bengali sign language vowels into synthesized speech.',
    techUsed: ['Teachable Machine', 'OpenCV', 'Web Audio API'],
    impactCategory: 'Accessibility'
  },
  {
    id: 'proj-2',
    title: 'Shonali Sheba: Paddy Leaf Disease Diagnostic AI',
    studentName: 'Tanvir Ahmed (Class 11)',
    institution: 'Rajshahi College, Rajshahi',
    location: 'Rajshahi',
    age: 17,
    description: 'Created a mobile-friendly lightweight image classifier to diagnose Brown Spot and Bacterial Leaf Blight in local rice varieties with 94% test accuracy.',
    techUsed: ['MobileNet', 'TensorFlow.js', 'Google Colab'],
    impactCategory: 'Agriculture'
  },
  {
    id: 'proj-3',
    title: 'NodiRokkha: River Plastic Debris Monitor',
    studentName: 'Farhan Kabir & Aritra Sen (Grade 9)',
    institution: 'Chittagong Collegiate School, Chattogram',
    location: 'Chattogram',
    age: 14,
    description: 'An automated camera-trap AI solution to count floating plastic bottles and debris in Karnaphuli river channels to optimize municipal cleanup boats.',
    techUsed: ['YOLOv8', 'Python', 'Raspberry Pi'],
    impactCategory: 'Environment'
  },
  {
    id: 'proj-4',
    title: 'Oral Health AI Screener for Rural Kids',
    studentName: 'Maliha Tabassum (Grade 12)',
    institution: "Sylhet Govt. Women's College",
    location: 'Sylhet',
    age: 18,
    description: 'Trained a preliminary cavity and plaque detection model to assist community healthcare volunteers during remote health screening camps in tea garden areas.',
    techUsed: ['Computer Vision', 'FastAPI', 'Google Sheets DB'],
    impactCategory: 'Health'
  }
];

export const MENTORS: MentorProfile[] = [
  {
    id: 'mentor-1',
    name: 'Md. Jubayer Hossain',
    role: 'Lead Organizer',
    affiliation: 'Founder & Lead, agami.ai',
    specialization: 'Applied Deep Learning, Curriculum Design & Youth Mentorship',
    tags: ['Deep Learning', 'Curriculum Design', 'Youth Mentorship'],
    imageUrl: '/img/agamiai_mentors/jubayer.jpg',
    imagePlaceholderColor: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'mentor-2',
    name: 'Tasmim Rahman Adib',
    role: 'Mentor',
    affiliation: 'University of Dhaka (CSE)',
    specialization: 'Computer Science, Algorithms & Applied Machine Learning',
    tags: ['Computer Science', 'Machine Learning', 'Algorithms'],
    imageUrl: '/img/agamiai_mentors/adib.jpg',
    imagePlaceholderColor: 'from-violet-600 to-purple-700'
  },
  {
    id: 'mentor-3',
    name: 'Fayez Ahmad',
    role: 'Mentor',
    affiliation: 'MIT (Massachusetts Institute of Technology)',
    specialization: 'Computational Biology & Applied AI in Healthcare',
    tags: ['Computational Biology', 'Machine Learning', 'Bioinformatics'],
    imageUrl: '/img/agamiai_mentors/Fayez_Ahmad.png',
    imagePlaceholderColor: 'from-emerald-600 to-teal-700'
  }
];

export const IMPACT_METRICS = [
  { value: '15,000+', label: 'Students Targeted' },
  { value: '450+', label: 'Teachers to Train (TOT)' },
  { value: '64', label: 'Districts of Bangladesh' },
  { value: '100%', label: 'Free & Open Source' }
];
