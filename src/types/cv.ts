export interface PersonalInfo {
  name: string;
  summary: string;
  socials: Social[];
}

export interface Social {
  id: string;
  link: string;
  value: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  grade: string;
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
  projectUrl: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
}

export interface Skill {
  programmingLanguages: string[];
  frameworks: string[];
  databases: string[];
  developerTools: string[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  certifications: Certification[];
  skills: Skill;
}