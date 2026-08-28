'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Search, 
  CheckCircle2, 
  BookOpen, 
  Dna, 
  FlaskConical, 
  Bot, 
  ArrowRight,
  School
} from 'lucide-react';

interface AlumniMember {
  id: string;
  name: string;
  university: string;
  department: string;
  program: 'Bioinformatics Mentorship (BMP)' | 'Next-Gen Drug Discovery with AI' | 'No-Code AI for Life Sciences';
  photo: string | null;
}

const alumniList: AlumniMember[] = [
  {
    id: '1',
    name: 'Kulsuma Bahar Bethi',
    university: 'University of Dhaka',
    department: 'Department of Nutrition and Food Science',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/Mentees_Photo/inbound4866978039411946964 - Kulsuma Bahar Bethi.jpg',
  },
  {
    id: '2',
    name: 'Mushfika Khanam',
    university: 'Noakhali Science and Technology University',
    department: 'Department of Microbiology',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/Mentees_Photo/images - Mushfika Khanam.jpeg',
  },
  {
    id: '3',
    name: 'Ibtasum Islam',
    university: 'Islamic University, Kushtia',
    department: 'Department of Pharmacy',
    program: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Ibtasum_RA_BigBio_photo - Ibtasum islam Sun.jpg',
  },
  {
    id: '4',
    name: 'Rahnuma Tabassum',
    university: 'Jagannath University',
    department: 'Department of Biochemistry and Molecular Biology',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/GSA01/Rahnuma_Tabassum.jpg',
  },
  {
    id: '5',
    name: 'Naznin Akter',
    university: 'Gopalganj Science and Technology University',
    department: 'Department of Biotechnology and Genetic Engineering',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/Mentees_Photo/naz - Naznin Shuktara.jpg',
  },
  {
    id: '6',
    name: 'Sabbir Khan',
    university: 'Gazipur Agricultural University',
    department: 'Faculty of Veterinary Medicine and Animal Science',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/GSA01/Sabbir_Khan.png',
  },
  {
    id: '7',
    name: 'Pritom Kundu',
    university: 'University of Rajshahi',
    department: 'Department of Pharmacy',
    program: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Gemini_Generated_Image_txrvxutxrvxutxrv - Pritom Kundu.png',
  },
  {
    id: '8',
    name: 'Ellina Tasneem Bushra',
    university: 'University of Rajshahi',
    department: 'Department of Pharmacy',
    program: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Ellina Tasneem Bushra  - Ellina Bushra.jpg',
  },
  {
    id: '9',
    name: 'Sharmin Sultana Lincoln',
    university: 'Military Institute of Science & Technology (MIST)',
    department: 'Department of Biomedical Engineering',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/Mentees_Photo/DSC00399 (1) - Sharmin Sultana Lincoln.JPG',
  },
  {
    id: '10',
    name: 'Mst. Afsana Meme',
    university: 'Jahangirnagar University',
    department: 'Department of Pharmacy',
    program: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Meme - Afsana Meme.png',
  },
  {
    id: '11',
    name: 'Mohammad Mahfuzul Islam',
    university: 'Concord Stem Cell Limited',
    department: 'Clinical Trial & Stem Cell Studies',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/Mentees_Photo/Mohammad Mahfuzul Islam - Mohammad Mahfuzul Islam.jpeg',
  },
  {
    id: '12',
    name: 'Anisha Tashruba Riya',
    university: 'Khulna University',
    department: 'Department of Biotechnology and Genetic Engineering',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/Mentees_Photo/Anisha_Tashruba_Riya - Anisha Tashruba Riya.png',
  },
  {
    id: '13',
    name: 'Al-Helal Nahid',
    university: 'World University of Bangladesh',
    department: 'Department of Pharmacy',
    program: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Nahid_s Pic - AL HELAL NAHID.png',
  },
  {
    id: '14',
    name: 'Md. Azizul Islam',
    university: 'Jatiya Kabi Kazi Nazrul Islam University',
    department: 'Department of Economics',
    program: 'No-Code AI for Life Sciences',
    photo: '/img/Mentees_Photo/Azizul Islam.jpg',
  },
  {
    id: '15',
    name: 'Ridika Haque Shafin',
    university: 'University of Dhaka',
    department: 'Department of Botany',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/BMP-01/Ridika_Haque_Shafin.jpg',
  },
  {
    id: '16',
    name: 'Md. Liakot Ali',
    university: 'University of Chittagong',
    department: 'Department of Pharmacy',
    program: 'Next-Gen Drug Discovery with AI',
    photo: '/img/BMP-01/Md. Liakot Ali.png',
  },
  {
    id: '17',
    name: 'Mahim Hassan Chowdhury',
    university: 'BRAC University',
    department: 'School of Pharmacy',
    program: 'Next-Gen Drug Discovery with AI',
    photo: '/img/BMP-01/Mahim Hassan Chowdhury_bmp.jpg',
  },
  {
    id: '18',
    name: 'Jonaitul Islam',
    university: 'Jahangirnagar University',
    department: 'Department of Microbiology',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/BMP-01/Jonaitul Islam.jpg',
  },
  {
    id: '19',
    name: 'Enam Ahmed',
    university: 'Inha University, South Korea',
    department: 'Department of Biomedical Science',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/BMP-01/Enam Ahmed.jpg',
  },
  {
    id: '20',
    name: 'Supriya Dewanjee',
    university: 'Asian University for Women',
    department: 'Department of Bioinformatics',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/BMP-01/SupriyaDewanjee.jpeg',
  },
  {
    id: '21',
    name: 'Md Mobasser Hosain',
    university: 'University of Development Alternative',
    department: 'Department of Molecular Medicine & Bioinformatics',
    program: 'Bioinformatics Mentorship (BMP)',
    photo: '/img/BMP-01/Md Mobasser Hosain .jpg',
  },
];

const institutions = [
  'University of Dhaka',
  'Jahangirnagar University',
  'University of Rajshahi',
  'University of Chittagong',
  'Khulna University',
  'MIST',
  'Jagannath University',
  'BRAC University',
  'Inha University, South Korea',
  'Asian University for Women',
  'Islamic University',
  'NSTU',
  'Concord Stem Cell Ltd',
  'Gazipur Agricultural University',
];

export default function AlumniPage() {
  const [selectedProgram, setSelectedProgram] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const programOptions = [
    'All',
    'Bioinformatics Mentorship (BMP)',
    'Next-Gen Drug Discovery with AI',
    'No-Code AI for Life Sciences'
  ];

  const filteredAlumni = alumniList.filter((a) => {
    const matchesProgram = selectedProgram === 'All' || a.program === selectedProgram;
    const matchesSearch =
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesProgram && matchesSearch;
  });

  function encodePhotoUrl(url: string | null) {
    if (!url) return null;
    return url
      .split('/')
      .map((part) => encodeURIComponent(part))
      .join('/');
  }

  const getProgramStyles = (program: AlumniMember['program']) => {
    switch (program) {
      case 'Bioinformatics Mentorship (BMP)':
        return {
          badge: 'bg-blue-50 text-blue-800 border-blue-200/90 font-bold',
          accent: 'border-t-blue-600',
          icon: <Dna className="w-4 h-4 text-blue-600 flex-shrink-0" />
        };
      case 'Next-Gen Drug Discovery with AI':
        return {
          badge: 'bg-teal-50 text-teal-800 border-teal-200/90 font-bold',
          accent: 'border-t-teal-600',
          icon: <FlaskConical className="w-4 h-4 text-teal-600 flex-shrink-0" />
        };
      case 'No-Code AI for Life Sciences':
        return {
          badge: 'bg-purple-50 text-purple-800 border-purple-200/90 font-bold',
          accent: 'border-t-purple-600',
          icon: <Bot className="w-4 h-4 text-purple-600 flex-shrink-0" />
        };
      default:
        return {
          badge: 'bg-slate-100 text-slate-800 border-slate-200 font-bold',
          accent: 'border-t-slate-600',
          icon: <BookOpen className="w-4 h-4 text-slate-600 flex-shrink-0" />
        };
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n: string) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className='py-12 lg:py-16 bg-slate-50/70 min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        
        {/* Page Hero Header */}
        <div className='text-center max-w-3xl mx-auto space-y-4'>
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs'>
            <GraduationCap className='w-4 h-4' /> Verified Mentee &amp; Alumni Roster
          </div>
          <h1 className='text-4xl sm:text-5xl font-black text-slate-900 tracking-tight'>
            Alumni Network &amp; Mentee Directory
          </h1>
          <p className='text-base sm:text-lg text-slate-600 font-normal leading-relaxed'>
            Showcasing researchers, clinicians, and graduate scholars from 20+ universities who have completed intensive computational biology, AI drug discovery, and bioinformatics training.
          </p>
        </div>

        {/* Global Stats Grid */}
        <div className='bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          <div className='space-y-1'>
            <h3 className='text-3xl sm:text-4xl font-black text-slate-900'>3,000+</h3>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Trained Researchers</p>
          </div>
          <div className='space-y-1'>
            <h3 className='text-3xl sm:text-4xl font-black text-blue-600'>20+</h3>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Partner Universities</p>
          </div>
          <div className='space-y-1'>
            <h3 className='text-3xl sm:text-4xl font-black text-teal-600'>100+</h3>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Genomic Datasets</p>
          </div>
          <div className='space-y-1'>
            <h3 className='text-3xl sm:text-4xl font-black text-indigo-600'>100%</h3>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Hands-On Code Output</p>
          </div>
        </div>

        {/* Universities Bar */}
        <div className='space-y-3 text-center'>
          <p className='text-xs font-bold uppercase tracking-wider text-slate-400'>
            Alumni Representing Leading Academic &amp; Research Institutions
          </p>
          <div className='flex flex-wrap items-center justify-center gap-2 pt-1'>
            {institutions.map((inst, i) => (
              <span
                key={i}
                className='px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-colors'
              >
                {inst}
              </span>
            ))}
          </div>
        </div>

        {/* Search & Program Filter Controls */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/80'>
          
          {/* Program Filter Pills */}
          <div className='flex flex-wrap items-center gap-2'>
            {programOptions.map((prog) => (
              <button
                key={prog}
                onClick={() => setSelectedProgram(prog)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedProgram === prog
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                }`}
              >
                {prog === 'All' ? 'All Programs' : prog}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className='relative w-full md:w-80'>
            <Search className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
            <input
              type='text'
              placeholder='Search by name, university, dept...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-2xs'
            />
          </div>

        </div>

        {/* Alumni Cards Grid - High Contrast, Clear Photo & Distinct Typography */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredAlumni.map((member, index) => {
            const styles = getProgramStyles(member.program);
            const encodedPhoto = encodePhotoUrl(member.photo);

            return (
              <div
                key={member.id}
                className={`bg-white rounded-2xl p-6 border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all flex flex-col justify-between group relative overflow-hidden border-t-4 ${styles.accent}`}
              >
                <div>
                  {/* Photo & Profile Header */}
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 shadow-md flex-shrink-0 flex items-center justify-center font-bold text-slate-700 text-base group-hover:scale-105 transition-transform'>
                      {encodedPhoto ? (
                        <Image
                          src={encodedPhoto}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 80px, 88px"
                          priority={index < 6}
                          loading={index < 6 ? "eager" : "lazy"}
                          className='object-cover'
                        />
                      ) : (
                        <span className='text-slate-500 tracking-wider'>{getInitials(member.name)}</span>
                      )}
                    </div>

                    <div className='min-w-0 flex-1'>
                      <div className='flex items-center gap-1.5'>
                        <h3 className='font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition-colors truncate leading-tight'>
                          {member.name}
                        </h3>
                        <CheckCircle2 className='w-4 h-4 text-blue-600 flex-shrink-0' />
                      </div>
                      
                      <div className='flex items-center gap-1.5 text-xs font-bold text-slate-800 mt-1.5 truncate'>
                        <School className='w-3.5 h-3.5 text-slate-500 flex-shrink-0' />
                        <span className='truncate'>{member.university}</span>
                      </div>

                      <p className='text-[11px] text-slate-500 font-medium truncate mt-1 leading-snug'>
                        {member.department}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enrolled Program Badge at Bottom */}
                <div className='pt-4 border-t border-slate-100 mt-2'>
                  <div className={`w-full py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 shadow-2xs ${styles.badge}`}>
                    {styles.icon}
                    <span className='truncate'>{member.program}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Admissions Banner */}
        <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-5 shadow-xl shadow-blue-600/10'>
          <h2 className='text-2xl sm:text-4xl font-black tracking-tight'>
            Join Our Next Cohort of Researchers
          </h2>
          <p className='text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed'>
            Master publication-grade bioinformatics, AI drug discovery, or no-code agentic workflows with 1-on-1 mentor guidance.
          </p>
          <div className='pt-2 flex flex-col sm:flex-row items-center justify-center gap-3'>
            <Link
              href='/apply'
              className='w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2'
            >
              <span>Apply for Upcoming Cohort</span>
              <ArrowRight className='w-4 h-4' />
            </Link>

            <Link
              href='/programs'
              className='w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2'
            >
              <span>Explore All 4 Programs</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
