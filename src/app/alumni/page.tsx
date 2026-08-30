'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Search, 
  CheckCircle2, 
  Dna, 
  FlaskConical, 
  Bot, 
  ArrowRight,
  School,
  Building2,
  BookOpen,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export type ProgramCode = 'BMP' | 'AI Drug Discovery' | 'No-Code AI';

export interface AlumniMember {
  id: string;
  name: string;
  university: string;
  department: string;
  program: ProgramCode;
  programFullName: string;
  photo: string | null;
  storySlug?: string;
}

const alumniList: AlumniMember[] = [
  {
    id: '1',
    name: 'Kulsuma Bahar Bethi',
    university: 'University of Dhaka',
    department: 'Department of Nutrition and Food Science',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/Mentees_Photo/inbound4866978039411946964 - Kulsuma Bahar Bethi.jpg',
  },
  {
    id: '2',
    name: 'Mushfika Khanam',
    university: 'Noakhali Science and Technology University',
    department: 'Department of Microbiology',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/Mentees_Photo/images - Mushfika Khanam.jpeg',
  },
  {
    id: '3',
    name: 'Ibtasum Islam',
    university: 'Islamic University, Kushtia',
    department: 'Department of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Ibtasum_RA_BigBio_photo - Ibtasum islam Sun.jpg',
  },
  {
    id: '4',
    name: 'Rahnuma Tabassum',
    university: 'Jagannath University',
    department: 'Department of Biochemistry and Molecular Biology',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/GSA01/Rahnuma_Tabassum.jpg',
    storySlug: 'rahnuma-tabassum',
  },
  {
    id: '5',
    name: 'Naznin Akter',
    university: 'Gopalganj Science and Technology University',
    department: 'Department of Biotechnology and Genetic Engineering',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/Mentees_Photo/naz - Naznin Shuktara.jpg',
  },
  {
    id: '6',
    name: 'Sabbir Khan',
    university: 'Gazipur Agricultural University',
    department: 'Faculty of Veterinary Medicine and Animal Science',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/GSA01/Sabbir_Khan.png',
    storySlug: 'sabbir-kidney-cancer-journey',
  },
  {
    id: '7',
    name: 'Fayez Ahmad',
    university: 'Notre Dame College, Dhaka / MIT',
    department: 'Department of Computational Biology & Life Sciences',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/GSA01/Fayez_Ahmad.png',
    storySlug: 'fayez-ahmad-stopped-being-afraid-to-ask-questions',
  },
  {
    id: '8',
    name: 'Lamisa Manha Aditee',
    university: 'BRAC University',
    department: 'Department of Biotechnology',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/GSA01/lamisamanhaaditee.jpg',
    storySlug: 'lamisa-manha',
  },
  {
    id: '9',
    name: 'Md. Shakil Ahamed',
    university: 'Mawlana Bhashani Science and Technology University',
    department: 'Department of Biotechnology and Genetic Engineering',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/GSA01/Shakil_Ahamed.png',
    storySlug: 'shakil-ahamed-a-little-bit-of-courage',
  },
  {
    id: '10',
    name: 'Pritom Kundu',
    university: 'University of Rajshahi',
    department: 'Department of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Gemini_Generated_Image_txrvxutxrvxutxrv - Pritom Kundu.png',
  },
  {
    id: '11',
    name: 'Ellina Tasneem Bushra',
    university: 'University of Rajshahi',
    department: 'Department of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Ellina Tasneem Bushra  - Ellina Bushra.jpg',
  },
  {
    id: '12',
    name: 'Sharmin Sultana Lincoln',
    university: 'Military Institute of Science & Technology (MIST)',
    department: 'Department of Biomedical Engineering',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/Mentees_Photo/DSC00399 (1) - Sharmin Sultana Lincoln.JPG',
  },
  {
    id: '13',
    name: 'Mst. Afsana Meme',
    university: 'Jahangirnagar University',
    department: 'Department of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Meme - Afsana Meme.png',
  },
  {
    id: '14',
    name: 'Mohammad Mahfuzul Islam',
    university: 'Concord Stem Cell Limited',
    department: 'Clinical Trial & Stem Cell Studies',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/Mentees_Photo/Mohammad Mahfuzul Islam - Mohammad Mahfuzul Islam.jpeg',
  },
  {
    id: '15',
    name: 'Anisha Tashruba Riya',
    university: 'Khulna University',
    department: 'Department of Biotechnology and Genetic Engineering',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/Mentees_Photo/Anisha_Tashruba_Riya - Anisha Tashruba Riya.png',
  },
  {
    id: '16',
    name: 'Al-Helal Nahid',
    university: 'World University of Bangladesh',
    department: 'Department of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Nahid_s Pic - AL HELAL NAHID.png',
  },
  {
    id: '17',
    name: 'Naem Islam Abhi',
    university: 'University of Rajshahi',
    department: 'Department of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Abhi - Naem Islam Abhi.jpg',
  },
  {
    id: '18',
    name: 'Lamia Hasan Barsha',
    university: 'University of Rajshahi',
    department: 'Department of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/Mentees_Photo/Barsha - Lamia Hasan Barsha.jpg',
  },
  {
    id: '19',
    name: 'Mawya Jannat',
    university: 'Noakhali Science and Technology University',
    department: 'Department of Biotechnology',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/Mentees_Photo/Mawya Jannat.jpg',
  },
  {
    id: '20',
    name: 'Md. Azizul Islam',
    university: 'Jatiya Kabi Kazi Nazrul Islam University',
    department: 'Department of Economics',
    program: 'No-Code AI',
    programFullName: 'No-Code & Agentic AI for Life Sciences',
    photo: '/img/Mentees_Photo/Azizul Islam.jpg',
  },
  {
    id: '21',
    name: 'Ridika Haque Shafin',
    university: 'University of Dhaka',
    department: 'Department of Botany',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/BMP-01/Ridika_Haque_Shafin.jpg',
  },
  {
    id: '22',
    name: 'Md. Liakot Ali',
    university: 'University of Chittagong',
    department: 'Department of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/BMP-01/Md. Liakot Ali.png',
  },
  {
    id: '23',
    name: 'Mahim Hassan Chowdhury',
    university: 'BRAC University',
    department: 'School of Pharmacy',
    program: 'AI Drug Discovery',
    programFullName: 'Next-Gen Drug Discovery with AI',
    photo: '/img/BMP-01/Mahim Hassan Chowdhury_bmp.jpg',
  },
  {
    id: '24',
    name: 'Jonaitul Islam',
    university: 'Jahangirnagar University',
    department: 'Department of Microbiology',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/BMP-01/Jonaitul Islam.jpg',
  },
  {
    id: '25',
    name: 'Enam Ahmed',
    university: 'Inha University, South Korea',
    department: 'Department of Biomedical Science',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/BMP-01/Enam Ahmed.jpg',
  },
  {
    id: '26',
    name: 'Supriya Dewanjee',
    university: 'Asian University for Women',
    department: 'Department of Bioinformatics',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
    photo: '/img/BMP-01/SupriyaDewanjee.jpeg',
  },
  {
    id: '27',
    name: 'Md Mobasser Hosain',
    university: 'University of Development Alternative',
    department: 'Department of Molecular Medicine & Bioinformatics',
    program: 'BMP',
    programFullName: 'Bioinformatics Mentorship Program',
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
  'MBSTU'
];

export default function AlumniPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const programFilters = [
    { code: 'All', label: 'All Programs', count: alumniList.length },
    { code: 'BMP', label: 'BMP', count: alumniList.filter(a => a.program === 'BMP').length },
    { code: 'AI Drug Discovery', label: 'AI Drug Discovery', count: alumniList.filter(a => a.program === 'AI Drug Discovery').length },
    { code: 'No-Code AI', label: 'No-Code AI', count: alumniList.filter(a => a.program === 'No-Code AI').length },
  ];

  const filteredAlumni = useMemo(() => {
    return alumniList.filter((a) => {
      const matchesProgram = selectedProgram === 'All' || a.program === selectedProgram;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        a.name.toLowerCase().includes(query) ||
        a.university.toLowerCase().includes(query) ||
        a.department.toLowerCase().includes(query) ||
        a.program.toLowerCase().includes(query) ||
        a.programFullName.toLowerCase().includes(query);
      return matchesProgram && matchesSearch;
    });
  }, [selectedProgram, searchQuery]);

  function encodePhotoUrl(url: string | null) {
    if (!url) return null;
    return url
      .split('/')
      .map((part) => encodeURIComponent(part))
      .join('/');
  }

  const getProgramBadge = (program: ProgramCode) => {
    switch (program) {
      case 'BMP':
        return {
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          accentBorder: 'border-t-blue-600',
          accentGradient: 'from-blue-600 to-indigo-600',
          icon: <Dna className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />,
          tagLabel: 'BMP',
          fullLabel: 'Bioinformatics Mentorship Program'
        };
      case 'AI Drug Discovery':
        return {
          badge: 'bg-teal-50 text-teal-700 border-teal-200',
          accentBorder: 'border-t-teal-600',
          accentGradient: 'from-teal-600 to-emerald-600',
          icon: <FlaskConical className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />,
          tagLabel: 'AI Drug Discovery',
          fullLabel: 'Next-Gen Drug Discovery with AI'
        };
      case 'No-Code AI':
        return {
          badge: 'bg-purple-50 text-purple-700 border-purple-200',
          accentBorder: 'border-t-purple-600',
          accentGradient: 'from-purple-600 to-indigo-600',
          icon: <Bot className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />,
          tagLabel: 'No-Code AI',
          fullLabel: 'No-Code & Agentic AI for Life Sciences'
        };
      default:
        return {
          badge: 'bg-slate-100 text-slate-700 border-slate-200',
          accentBorder: 'border-t-slate-600',
          accentGradient: 'from-slate-600 to-slate-800',
          icon: <BookOpen className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />,
          tagLabel: 'Fellow',
          fullLabel: 'DeepBio Fellow'
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
    <div className='py-12 lg:py-16 bg-slate-50/70 min-h-screen font-dm-sans'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        
        {/* Page Hero Header */}
        <div className='text-center max-w-3xl mx-auto space-y-4'>
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs'>
            <GraduationCap className='w-4 h-4' /> Verified Alumni Network
          </div>
          <h1 className='text-4xl sm:text-5xl font-black text-slate-900 tracking-tight'>
            DeepBio Alumni Directory
          </h1>
          <p className='text-base sm:text-lg text-slate-600 font-normal leading-relaxed'>
            Meet researchers, clinicians, and graduate scholars across 20+ universities who have transformed their research with DeepBio training tracks.
          </p>
        </div>

        {/* Global Stats Grid */}
        <div className='bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          <div className='space-y-1'>
            <h3 className='text-3xl sm:text-4xl font-black text-slate-900'>3,000+</h3>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Trained Scholars</p>
          </div>
          <div className='space-y-1'>
            <h3 className='text-3xl sm:text-4xl font-black text-blue-600'>20+</h3>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Universities</p>
          </div>
          <div className='space-y-1'>
            <h3 className='text-3xl sm:text-4xl font-black text-teal-600'>100+</h3>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Research Datasets</p>
          </div>
          <div className='space-y-1'>
            <h3 className='text-3xl sm:text-4xl font-black text-indigo-600'>100%</h3>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>Reproducible Code</p>
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
          
          {/* Shortened Program Filter Pills */}
          <div className='flex flex-wrap items-center gap-2 w-full md:w-auto'>
            {programFilters.map((filter) => (
              <button
                key={filter.code}
                onClick={() => setSelectedProgram(filter.code)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedProgram === filter.code
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs'
                }`}
              >
                <span>{filter.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  selectedProgram === filter.code ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className='relative w-full md:w-80'>
            <Search className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
            <input
              type='text'
              placeholder='Search by name, university, dept, track...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-2xs'
            />
          </div>

        </div>

        {/* Active Filter Summary Counter */}
        <div className='flex items-center justify-between text-xs text-slate-500 font-medium px-1'>
          <span>
            Showing <strong className='text-slate-800 font-bold'>{filteredAlumni.length}</strong> verified alumni
            {selectedProgram !== 'All' && <span> enrolled in <strong className='text-blue-600 font-bold'>{selectedProgram}</strong></span>}
            {searchQuery && <span> matching &quot;{searchQuery}&quot;</span>}
          </span>
          {(selectedProgram !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedProgram('All');
                setSearchQuery('');
              }}
              className='text-blue-600 hover:underline font-bold cursor-pointer'
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Alumni Cards Grid - Clean, Professional Card Design */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredAlumni.map((member, index) => {
            const badgeConfig = getProgramBadge(member.program);
            const encodedPhoto = encodePhotoUrl(member.photo);

            return (
              <div
                key={member.id}
                className='bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group'
              >
                {/* Top Accent Strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${badgeConfig.accentGradient}`} />

                <div className='p-6 flex-1 flex flex-col justify-between'>
                  <div>
                    {/* Header Row: Photo + Name + Program Short Code */}
                    <div className='flex items-start gap-4 mb-4'>
                      
                      {/* Mentee Photo Avatar */}
                      <div className='relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm flex-shrink-0 flex items-center justify-center font-bold text-slate-700 text-sm group-hover:scale-105 transition-transform'>
                        {encodedPhoto ? (
                          <Image
                            src={encodedPhoto}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 64px, 72px"
                            priority={index < 6}
                            loading={index < 6 ? "eager" : "lazy"}
                            className='object-cover object-top'
                          />
                        ) : (
                          <span className='text-slate-500 tracking-wider'>{getInitials(member.name)}</span>
                        )}
                      </div>

                      {/* Name & Short Program Tag */}
                      <div className='min-w-0 flex-1 space-y-1'>
                        
                        {/* Enrolled Program Short Badge */}
                        <div className='flex items-center justify-between gap-2'>
                          <span className={`inline-flex items-center gap-1.5 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border leading-tight ${badgeConfig.badge}`}>
                            {badgeConfig.icon}
                            <span>{badgeConfig.tagLabel}</span>
                          </span>
                          <span className='inline-flex items-center gap-1 text-[10px] font-bold text-slate-400'>
                            <CheckCircle2 className='w-3.5 h-3.5 text-blue-600' />
                            <span>Alumnus</span>
                          </span>
                        </div>

                        {/* Scholar Name */}
                        <h3 className='font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition-colors leading-tight pt-1'>
                          {member.name}
                        </h3>

                      </div>
                    </div>

                    {/* Academic Information Details */}
                    <div className='space-y-2 py-3 border-t border-slate-100 text-xs'>
                      
                      {/* University */}
                      <div className='flex items-start gap-2 text-slate-800 font-bold'>
                        <Building2 className='w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5' />
                        <span className='leading-snug'>{member.university}</span>
                      </div>

                      {/* Department */}
                      <div className='flex items-start gap-2 text-slate-500 font-medium'>
                        <GraduationCap className='w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5' />
                        <span className='leading-snug'>{member.department}</span>
                      </div>

                    </div>
                  </div>

                  {/* Card Footer: Program Full Name & Story link if available */}
                  <div className='pt-3.5 border-t border-slate-100 mt-2 flex items-center justify-between gap-2 text-xs'>
                    <div className='min-w-0'>
                      <span className='text-[10px] uppercase font-bold text-slate-400 block tracking-wider'>Enrolled Program</span>
                      <span className='font-bold text-slate-700 truncate block text-[11px]'>{member.programFullName}</span>
                    </div>

                    {member.storySlug ? (
                      <Link
                        href={`/blog/${member.storySlug}`}
                        className='px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-[11px] flex items-center gap-1 transition-colors flex-shrink-0'
                      >
                        <span>Read Story</span>
                        <ArrowRight className='w-3 h-3' />
                      </Link>
                    ) : (
                      <span className='px-2.5 py-1 rounded-lg bg-slate-50 text-slate-500 font-semibold text-[11px] flex-shrink-0'>
                        Verified Scholar
                      </span>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Admissions Banner */}
        <div className='bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-5 shadow-xl shadow-blue-600/10'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm'>
            <Sparkles className='w-3.5 h-3.5 text-cyan-300' /> Join the Network
          </div>
          <h2 className='text-2xl sm:text-4xl font-black tracking-tight'>
            Start Your Research Journey with DeepBio Academy
          </h2>
          <p className='text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed'>
            Master publication-grade bioinformatics (BMP), AI-powered drug discovery, or no-code agentic AI workflows with hands-on mentor guidance.
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
