export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  phone: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  projects?: Project[];
}

export interface Project {
  name: string;
  techStack: string[];
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  gpa: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
  experience: Experience[];
  education: Education;
  certifications: Certification[];
  skills: SkillCategory[];
  achievements: string[];
}

