export interface PersonalInfo {
  name: string;
  summary: string | null;
  socials: Social[];
}

export interface Social {
  type: string | null;
  value: string | null;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  grade: string | null;
  location: string;
}

export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  location: string;
}

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  projectUrl: string | null;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string | null;
}

interface Skills {
  programmingLanguages: string[] | null;
  frameworks: string[] | null;
  databases: string[] | null;
  developerTools: string[] | null;
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[] | null;
  workExperience: WorkExperience[];
  projects: Project[];
  certifications: Certification[] | null;
  skills: Skills | null;
}
