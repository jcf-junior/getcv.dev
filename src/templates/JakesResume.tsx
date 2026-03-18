import "./jakesResume.css";

import type {
  Certification,
  Education,
  Project,
  Social,
  WorkExperience,
  CVData,
} from "../types/cv";
import { formatDate, formatPeriod } from "../utils/formatDate";

type CvProps = {
  cvData: CVData;
};

export default function JakesResume({ cvData }: CvProps) {
  const hasSkills =
    cvData.skills?.programmingLanguages?.length > 0 ||
    cvData.skills?.frameworks?.length > 0 ||
    cvData.skills?.databases?.length > 0 ||
    cvData.skills?.developerTools?.length > 0;

  return (
    <div>
      <div className="my-0 mx-auto lm leading-[1em] text-[10.91pt] w-[8.27in] h-[11.69in] p-[0.5in] bg-white text-black box-border">
        <section className="mt-[5pt] mb-[5pt]">
          <h1 className="text-center text-[24.79pt] font-bold mb-[9pt]">
            {cvData.personalInfo.name}
          </h1>

          <div className="mx-auto divide-x divide-gray-600 flex justify-center items-center flex-wrap gap-y-[3pt]">
            {cvData.personalInfo.socials.map((social: Social) => {
              return social.value === "" ? null : (
                <span
                  className="underline px-1.5 first:pl-0 last:pr-0 whitespace-nowrap"
                  key={`${social.type}-${social.value}`}
                >
                  {social.value}
                </span>
              );
            })}
          </div>
        </section>

        {cvData.education?.length > 0 && (
          <section className="mt-[8pt] mb-[7pt]">
            <span className="section-title">Education</span>

            {cvData.education.map((edu: Education) => {
              return (
                <div
                  className="ml-[0.15in] w-[97%] mb-[7.35pt]"
                  key={`${edu.id}`}
                >
                  <div className="flex justify-between">
                    <strong className="">{edu.institution}</strong>
                    <p className="">
                      {formatPeriod(edu.startDate, edu.endDate)}
                    </p>
                  </div>

                  <div className="flex justify-between mt-[3.225pt]">
                    <p className="lm-italic small">{edu.degree}</p>
                    <p className="lm-italic small">{edu.location}</p>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {cvData.workExperience?.length > 0 && (
          <section className="mt-[9pt]">
            <span className="section-title">Experience</span>

            {cvData.workExperience.map((job: WorkExperience) => {
              const emptyExperience: boolean =
                job.company.trim() == "" &&
                job.position.trim() == "" &&
                job.location.trim() == "" &&
                job.startDate.trim() == "" &&
                job.endDate.trim() == "";

              return emptyExperience ? null : (
                <div
                  className="ml-[0.15in] mb-[7.35pt] w-[97%]"
                  key={`${job.id}`}
                >
                  <div className="flex justify-between">
                    <strong>{job.position}</strong>
                    <p>{formatPeriod(job.startDate, job.endDate)}</p>
                  </div>

                  <div className="flex justify-between mt-[3.225pt]">
                    <p className="lm-italic small">{job.company}</p>
                    <p className="lm-italic small">{job.location}</p>
                  </div>

                  <ul className="list-disc no-underline ml-[25pt] small mt-[3.75pt]">
                    {job.highlights.map((highlight: string, index: number) => {
                      return highlight.trim() === "" ? (
                        ""
                      ) : (
                        <li key={`highlight-${index}`} className="mb-[3.75pt]">
                          {highlight.trim()}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </section>
        )}

        {cvData.projects?.length > 0 && (
          <section className="mt-[9pt]">
            <span className="section-title">Projects</span>
            <div className="ml-[0.15in] w-[97%] mb-[7.35pt]">
              {cvData.projects.map((project: Project) => {
                return (
                  <div className="mb-[9pt]" key={`${project.id}`}>
                    <div className="flex justify-between align-center">
                      <div className="flex gap-1.5">
                        <strong className="pr-1.5 small border-r-1 border-black">
                          {project.title}
                        </strong>
                        <p className="lm-italic small">
                          {project.technologies.join(", ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="">
                          {formatPeriod(project.startDate, project.endDate)}
                        </p>
                      </div>
                    </div>

                    <ul className="list-disc ml-[25pt] small mt-[3.75pt]">
                      {project.highlights.map(
                        (highlight: string, index: number) => {
                          return (
                            <li
                              key={`highlight-${index}`}
                              className="mb-[3.75pt]"
                            >
                              {highlight}
                            </li>
                          );
                        },
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {cvData.certifications?.length > 0 && (
          <section className="mt-[8pt]">
            <span className="section-title">Certifications</span>
            {cvData.certifications.map((certification: Certification) => {
              const emptyCert: boolean =
                certification.title.trim() == "" &&
                certification.issuer.trim() == "" &&
                certification.issueDate.trim() == "" &&
                certification.credentialUrl.trim() == "";

              return emptyCert ? null : (
                <div
                  className="flex w-[97%] ml-[0.15in] justify-between mb-[5.25pt] small"
                  key={`${certification.id}`}
                >
                  <div className="flex gap-1.5">
                    <strong>{certification.issuer}</strong>
                    <strong>-</strong>
                    <p>{certification.title}</p>
                  </div>
                  <p>{formatDate(certification.issueDate)}</p>
                </div>
              );
            })}
          </section>
        )}

        {hasSkills && (
          <section className="mt-[8pt]">
            <span className="section-title">Technical Skills</span>
            <div className="w-[97%] ml-[0.15in] small flex flex-col gap-[5.25pt] leading-[1em]">
              {cvData.skills.programmingLanguages.length > 0 && (
                <div className="flex gap-1.5">
                  <strong>Programming Languages:</strong>
                  <span>{cvData.skills.programmingLanguages.join(", ")}</span>
                </div>
              )}

              {cvData.skills.frameworks.length > 0 && (
                <div className="flex gap-1.5">
                  <strong>Frameworks / Libraries:</strong>
                  <span>{cvData.skills.frameworks.join(", ")}</span>
                </div>
              )}

              {cvData.skills.databases.length > 0 && (
                <div className="flex gap-1.5">
                  <strong>Databases:</strong>
                  <span>{cvData.skills.databases.join(", ")}</span>
                </div>
              )}

              {cvData.skills.developerTools.length > 0 && (
                <div className="flex gap-1.5">
                  <strong>Developer Tools:</strong>
                  <span>{cvData.skills.developerTools.join(", ")}</span>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
