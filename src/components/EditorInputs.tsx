import type { CVData } from "../types/cv";
import CertificationInputs from "./inputs/CertificationInputs";
import EducationInputs from "./inputs/EducationInputs";
import ExperienceInputs from "./inputs/ExperienceInputs";
import PersonalInfoInputs from "./inputs/PersonalInfoInputs";
import ProjectsInputs from "./inputs/ProjectsInputs";
import SkillsInputs from "./inputs/SkillsInputs";

type Props = {
  cvData: CVData;
  setCvData: React.Dispatch<React.SetStateAction<CVData>>;
};

export default function EditorInputs({ cvData, setCvData }: Props) {
  return (
    <div className="bg-white p-4 rounded-3xl">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Editor Inputs</h2>
      <p className="text-slate-500 text-sm mb-6">
        Your progress is saved automatically on Local Storage.
        <br />
        Inputs left blank will not be rendered.
      </p>

      <PersonalInfoInputs
        value={cvData.personalInfo}
        onChange={(personalInfo) => {
          setCvData((cv) => ({ ...cv, personalInfo }));
        }}
      />
      <EducationInputs
        value={cvData.education}
        onChange={(education) => {
          setCvData((cv) => ({ ...cv, education }));
        }}
      />

      <ExperienceInputs
        value={cvData.workExperience}
        onChange={(workExperience) => {
          setCvData((cv) => ({ ...cv, workExperience }));
        }}
      />

      <ProjectsInputs
        value={cvData.projects}
        onChange={(projects) => {
          setCvData((cv) => ({ ...cv, projects }));
        }}
      />

      <SkillsInputs
        value={cvData.skills}
        onChange={(skills) => {
          setCvData((cv) => ({ ...cv, skills }));
        }}
      />

      <CertificationInputs
        value={cvData.certifications}
        onChange={(certifications) => {
          setCvData((cv) => ({ ...cv, certifications }));
        }}
      />
    </div>
  );
}
