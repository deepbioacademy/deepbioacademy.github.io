"use client";
import Image from "next/image";


type CurrentMentee = {
  name: string;
  university: string;
  department: string;
  photo: string | null;
};

const currentMentees: CurrentMentee[] = [
  {
    name: "Ridika Haque Shafin",
    university: "University of Dhaka",
    department: "Department of Botany",
    photo: "/img/BMP-01/Ridika_Haque_Shafin.jpg",
  },
  {
    name: "Md. Liakot Ali",
    university: "University of Chittagong",
    department: "Department of Pharmacy",
    photo: "/img/BMP-01/Md. Liakot Ali.png",
  },
  {
    name: "Mahim Hassan Chowdhury",
    university: "BRAC University",
    department: "School of Pharmacy",
    photo: "/img/BMP-01/Mahim Hassan Chowdhury_bmp.jpg",
  },
  {
    name: "Jonaitul Islam",
    university: "Jahangirnagar University",
    department: "Department of Microbiology",
    photo: "/img/BMP-01/Jonaitul Islam.jpg",
  },
  {
    name: "Enam Ahmed",
    university: "Inha University, South Korea",
    department: "Department of Biomedical Science",
    photo: "/img/BMP-01/Enam Ahmed.jpg",
  },
  {
    name: "Supriya Dewanjee",
    university: "Asian University for Women",
    department: "Department of Bioinformatics",
    photo: "/img/BMP-01/SupriyaDewanjee.jpeg",
  },
  {
    name: "Md Mobasser Hosain",
    university: "University of Development Alternative",
    department: "Department of Molecular Medicine and Bioinformatics",
    photo: "/img/BMP-01/Md Mobasser Hosain .jpg",
  },
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

function MenteeCard({ m }: { m: CurrentMentee }) {
  return (
    <div className="cm-card">
      {/* Square photo area */}
      <div className="cm-photo-area">
        {m.photo ? (
          <Image
            src={photoSrc(m.photo)}
            alt={m.name}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="cm-initials">{getInitials(m.name)}</div>
        )}
        {/* Hover overlay */}
        <div className="cm-photo-overlay" />
      </div>

      {/* Info */}
      <div className="cm-info">
        <div className="cm-name">{m.name}</div>
        <div className="cm-university">{m.university}</div>
        <div className="cm-department">{m.department}</div>
      </div>
    </div>
  );
}

export default function CurrentMentees() {
  return (
    <section id="current-mentees" className="cm-section">
      {/* Background glow */}

      {/* Section header */}
      <div className="cm-header">
        <p className="cm-eyebrow">Current Cohort</p>
        <h2 className="cm-heading">
          Current Cohort
        </h2>
        <p className="cm-subtext">
          Meet the researchers currently building their bioinformatics portfolios.
        </p>
      </div>

      {/* Mentee cards */}
      <div className="cm-grid-wrapper">
        <div className="cm-grid">
          {currentMentees.map((m) => (
            <MenteeCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
