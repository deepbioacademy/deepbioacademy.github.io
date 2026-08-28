"use client";
import { useState } from "react";
import Image from "next/image";


type Mentee = {
  name: string;
  university: string;
  department: string;
  photo: string | null;
  quote: string;
};

const mentees: Mentee[] = [
  {
    name: "Kulsuma Bahar Bethi",
    university: "University of Dhaka",
    department: "Nutrition and Food Science",
    photo: "/img/Mentees_Photo/inbound4866978039411946964 - Kulsuma Bahar Bethi.jpg",
    quote:
      "My research journey was significantly shaped by my experience at CHIRAL Bangladesh. The structured internship helped me understand principles of responsible research and evidence-based scientific inquiry.",
  },
  {
    name: "Mushfika Khanam",
    university: "Noakhali Science and Technology University",
    department: "Microbiology",
    photo: "/img/Mentees_Photo/images - Mushfika Khanam.jpeg",
    quote:
      "The mentorship helped me understand the fundamentals of scientific research and R programming. I learned how to approach a research problem, analyze data systematically, and interpret results more effectively.",
  },
  {
    name: "Ibtasum Islam",
    university: "Islamic University",
    department: "Pharmacy",
    photo: "/img/Mentees_Photo/Ibtasum_RA_BigBio_photo - Ibtasum islam Sun.jpg",
    quote:
      "Great teacher and an inspiring mentor. Loving every moment of learning from Jubayer vai.",
  },
  {
    name: "Rahnuma Tabassum",
    university: "Jagannath University",
    department: "Biochemistry and Molecular Biology",
    photo: "/img/Mentees_Photo/Rahnuma  - Rahnuma Tabassum.jpg",
    quote:
      "I get the full support during my internship programme and also getting any kind of mentorship regularly, which brings my confidence level to finish my work properly.",
  },
  {
    name: "Naznin Akter",
    university: "Gopalganj Science and Technology University",
    department: "Biotechnology and Genetic Engineering",
    photo: "/img/Mentees_Photo/naz - Naznin Shuktara.jpg",
    quote:
      "Being part of the Big Bioinformatics Lab has been a transformative experience. The mentorship provided me with the technical skills and analytical mindset needed to handle complex datasets effectively.",
  },
  {
    name: "Sabbir Khan",
    university: "Gazipur Agricultural University",
    department: "Faculty of Veterinary Medicine and Animal Science",
    photo: "/img/Mentees_Photo/IMG20251212191440 (1) - Sabbir Khan.jpg",
    quote:
      "The internship was a turning point as I began my bioinformatics journey. Under his guidance, I strengthened my skills in R programming, transcriptomics, and cancer bioinformatics — and worked on a kidney cancer project now becoming a full paper.",
  },
  {
    name: "Pritom Kundu",
    university: "Rajshahi University",
    department: "Pharmacy",
    photo: "/img/Mentees_Photo/Gemini_Generated_Image_txrvxutxrvxutxrv - Pritom Kundu.png",
    quote:
      "Our Lead Trainer MD Jubayer vai is really a polite and professional mentor. Working with him is a joy and pleasure — learning from him was very unique and interesting.",
  },
  {
    name: "Ellina Tasneem Bushra",
    university: "University of Rajshahi",
    department: "Pharmacy",
    photo: "/img/Mentees_Photo/Ellina Tasneem Bushra  - Ellina Bushra.jpg",
    quote:
      "The mentor provided clear direction, shared useful knowledge, and encouraged me to think critically about my work. It built my confidence in conducting research and planning my career path.",
  },
  {
    name: "Sheikh Naem Islam Abhi",
    university: "Islamic University, Kushtia",
    department: "Pharmacy",
    photo: "/img/Mentees_Photo/Abhi - Naem Islam Abhi.jpg",
    quote:
      "Before joining this platform, I had limited knowledge about how to apply bioinformatics practically. Now I can understand where to start research and I've applied these skills to my undergraduate project.",
  },
  {
    name: "Sharmin Sultana Lincoln",
    university: "Military Institute of Science & Technology",
    department: "Biomedical Engineering",
    photo: "/img/Mentees_Photo/DSC00399 (1) - Sharmin Sultana Lincoln.JPG",
    quote:
      "My experience with the 1-on-1 Bioinformatics Mentorship Program has been one of the most impactful parts of my academic journey. It fundamentally changed my perspective on research.",
  },
  {
    name: "Musab Shahariar",
    university: "Islamic University, Kushtia",
    department: "Pharmacy",
    photo: null,
    quote:
      "Whatever I know about the fundamentals of conducting research, ethics, academic writing, and how to learn something new on my own — I learned it from you.",
  },
  {
    name: "Mst. Afsana Meme",
    university: "Jahangirnagar University",
    department: "Pharmacy",
    photo: "/img/Mentees_Photo/Meme - Afsana Meme.png",
    quote:
      "My mentorship experience with Chiral Bangladesh significantly enhanced my research skills and understanding of Drug Design, strengthening my motivation to pursue pharmaceutical research.",
  },
  {
    name: "Mohammad Mahfuzul Islam",
    university: "Concord Stem Cell Limited",
    department: "Product Development & Clinical Trial Studies",
    photo: "/img/Mentees_Photo/Mohammad Mahfuzul Islam - Mohammad Mahfuzul Islam.jpeg",
    quote:
      "The teaching style and the resources provided were excellent. I highly recommend this lab to anyone who wants to start learning single-cell RNA-seq analysis.",
  },
  {
    name: "Anisha Tashruba Riya",
    university: "Khulna University",
    department: "Biotechnology and Genetic Engineering",
    photo: "/img/Mentees_Photo/Anisha_Tashruba_Riya - Anisha Tashruba Riya.png",
    quote:
      "I first learned proper research methods, R language, and basic cancer bioinformatics from Md. Jubayer. He explained difficult topics in a simple and clear way. Now I am working in the BigBioinformatics Lab under his supervision.",
  },
  {
    name: "Al-helal Nahid",
    university: "World University of Bangladesh",
    department: "Department of Pharmacy",
    photo: "/img/Mentees_Photo/Nahid_s Pic - AL HELAL NAHID.png",
    quote:
      "One of the most valuable parts was learning how to read and write a research paper. After Jubayer Bhai's sessions, many of my confusions were cleared. I have personally benefited a lot.",
  },
  {
    name: "MD AZIZUL ISLAM",
    university: "Jatiya Kabi Kazi Nazrul Islam University",
    department: "Economics",
    photo: "/img/Mentees_Photo/Azizul Islam.jpg",
    quote:
      "Through the courses offered by Research Help Bangladesh, I had the opportunity to attend many classes. Among all the classes I have attended, these were some of the most interactive and engaging ones. I started learning R analysis through these classes. Currently, I am working with a professor at my university, which is helping me gain more practical experience. In the past, most of the work around me was done using STATA. However, through your course and research-related guidance, I have been able to learn R and apply it in real work. My professor also appreciated the course and said that my motivation and foundation for learning R analysis came from this training. I am truly grateful for the knowledge and confidence I gained through your course.",
  },
  {
    name: "Jannatul Mawya Metu",
    university: "Jagannath University",
    department: "Economics",
    photo: "/img/Mentees_Photo/Mawya Jannat.jpg",
    quote:
      "Thanks vaiya for making easier way to learn each and every details of R programming. I hope this will be helpful for my research journey. I'm so grateful that I am learning things like R programming in more easiest way from you. Best wishes for u vaiya and Thanks for being our instructor.",
  },
];

const stats = [
  { value: "3K+", label: "Mentees" },
  { value: "20+", label: "Universities" },
  { value: "5+", label: "Research Tracks" },
  { value: "100%", label: "Research Output" },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function photoSrc(path: string) {
  const encoded = path
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  return `${BASE}${encoded}`;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function Card({ m }: { m: Mentee }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = m.quote.length > 200;
  const displayQuote = isLong && !isExpanded ? `${m.quote.slice(0, 197)}...` : m.quote;

  return (
    <div className={`mf-card ${isExpanded ? "mf-card-expanded" : ""}`}>
      {/* Large decorative left curly quote */}
      <div className="mf-quote-glyph">&#8220;</div>

      {/* Quote text */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="mb-4">
          <p className="mf-quote-text mb-2">
            {displayQuote}
          </p>
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-600 text-xs font-bold hover:underline focus:outline-none transition-colors"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="mf-divider" />

        {/* Profile row */}
        <div className="mf-profile">
          {/* Avatar */}
          <div className="mf-avatar">
            {m.photo ? (
              <Image
                src={photoSrc(m.photo)}
                alt={m.name}
                width={48}
                height={48}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            ) : (
              <div className="mf-avatar-initials">{getInitials(m.name)}</div>
            )}
          </div>

          {/* Name / university / dept */}
          <div>
            <div className="mf-profile-name">{m.name}</div>
            <div className="mf-profile-university">{m.university}</div>
            <div className="mf-profile-dept">{m.department}</div>
          </div>
        </div>

        {/* Stars */}
        <div className="mf-stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="mf-star">★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MenteesFeedback() {
  const row1 = mentees;
  const row2 = [...mentees].reverse();

  return (
    <section id="testimonials" className="mf-section">
      {/* Background glow */}

      {/* Section header */}
      <div className="mf-header">
        <p className="mf-eyebrow">Mentee Testimonials</p>
        <h2 className="mf-heading">Mentee Feedback</h2>
        <p className="mf-subtext">
          Direct feedback from mentees across 12+ universities who transformed their research.
        </p>
      </div>

      {/* Stats row */}
      <div className="mf-stats-row">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`mf-stat-cell ${i < stats.length - 1 ? "mf-stat-cell-border" : ""}`}
          >
            <div className="mf-stat-value">{s.value}</div>
            <div className="mf-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scrolling row 1 — left */}
      <div className="mf-scroll-fade mf-row-margin">
        <div className="mf-scroll-left">
          {[...row1, ...row1].map((m, i) => (
            <Card key={`r1-${i}`} m={m} />
          ))}
        </div>
      </div>

      {/* Scrolling row 2 — right */}
      <div className="mf-scroll-fade">
        <div className="mf-scroll-right">
          {[...row2, ...row2].map((m, i) => (
            <Card key={`r2-${i}`} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
