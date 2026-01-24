import { cvData } from "./data/data";
import type {
  Certification,
  Education,
  Project,
  Social,
  WorkExperience,
} from "./types/cv";
import { formatDate, formatPeriod } from "./utils/formatDate";

export default function App() {
  return (
    <div className="cv">
      <section>
        <h1 className="lm text-center text-[24.79pt] font-bold mb-[1pt]">
          {cvData.personalInfo.name}
        </h1>

        <div className="w-[97%] mx-auto mt-1 divide-x divide-gray-600 flex justify-center items-center flex-wrap">
          {cvData.personalInfo.socials.map((social: Social) => {
            return (
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

      {cvData.education && (
        <section>
          <span className="section-title">Education</span>

          {cvData.education.map((edu: Education) => {
            return (
              <div
                className="ml-[0.15in] flex justify-between w-[97%] mb-[5pt]"
                key={`${edu.degree}-${edu.institution}-${edu.startDate}-${edu.endDate}`}
              >
                <div>
                  <strong className="lm">{edu.institution}</strong>
                  <p className="lm-italic small">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="lm ">
                    {formatPeriod(edu.startDate, edu.endDate)}
                  </p>
                  <p className="lm-italic small">{edu.location}</p>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {cvData.workExperience && (
        <section>
          <span className="section-title">Experience</span>

          {cvData.workExperience.map((job: WorkExperience) => {
            return (
              <div
                className="ml-[0.15in] mb-[5pt] w-[97%]"
                key={`${job.position}-${job.company}-${job.startDate}-${job.endDate}`}
              >
                <div className="flex justify-between">
                  <div>
                    <strong className="lm">{job.position}</strong>
                    <p className="lm-italic small">{job.company}</p>
                  </div>

                  <div className="text-right">
                    <p className="lm">
                      {formatPeriod(job.startDate, job.endDate)}
                    </p>
                    <p className="lm-italic small">{job.location}</p>
                  </div>
                </div>

                <ul className="lm list-disc no-underline ml-[25pt] small mt-1">
                  {job.highlights.map((highlight: string, index: number) => {
                    return <li key={`highlight-${index}`}>{highlight}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </section>
      )}

      {cvData.projects && (
        <section>
          <span className="section-title">Projects</span>
          <div className="ml-[0.15in] w-[97%] mb-[5pt]">
            {cvData.projects.map((project: Project) => {
              return (
                <div
                  className="mb-[5pt]"
                  key={`${project.title}-${project.startDate}-${project.endDate}`}
                >
                  <div className="flex justify-between align-center">
                    <div className="flex gap-1.5">
                      <strong className="lm pr-1.5 small border-r-1 border-black">
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

                  <ul className="lm list-disc ml-[25pt] small mt-1">
                    {project.highlights.map(
                      (highlight: string, index: number) => {
                        return <li key={`highlight-${index}`}>{highlight}</li>;
                      },
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {cvData.certifications && (
        <section>
          <span className="section-title">Certifications</span>
          {cvData.certifications.map((certification: Certification) => {
            return (
              <div
                className="flex w-[97%] ml-[0.15in] justify-between mb-[5pt] small"
                key={`${certification.title}-${certification.issuer}-${certification.issueDate}`}
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

      {cvData.skills && (
        <section>
          <span className="section-title">Technical Skills</span>
          <div className="w-[97%] ml-[0.15in] small">
            {cvData.skills.programmingLanguages && (
              <div>
                <strong>Languages: </strong>
                <span>{cvData.skills.programmingLanguages.join(", ")}</span>
              </div>
            )}

            {cvData.skills.frameworks && (
              <div>
                <strong>Frameworks / Libraries: </strong>
                <span>{cvData.skills.frameworks.join(", ")}</span>
              </div>
            )}

            {cvData.skills.databases && (
              <div>
                <strong>Databases: </strong>
                <span>{cvData.skills.databases.join(", ")}</span>
              </div>
            )}

            {cvData.skills.developerTools && (
              <div>
                <strong>Developer Tools: </strong>
                <span>{cvData.skills.developerTools.join(", ")}</span>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
