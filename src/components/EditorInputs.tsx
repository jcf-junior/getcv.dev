import type { Certification, Social, WorkExperience } from "../types/cv";

export default function EditorInputs({ cvData, setCvData }) {
  return (
    <div className="bg-white p-4 rounded-3xl">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Editor Inputs</h2>
      <p className="text-slate-500 text-sm mb-6">
        Your progress is saved automatically on Local Storage.
        <br />
        Inputs left blank will not be rendered.
      </p>
      <section>
        <strong className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
          Personal Info
        </strong>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-red-500">
          <label className="flex flex-col font-bold text-xs text-slate-500">
            Full Name
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="John Doe Johnson"
              defaultValue={cvData.personalInfo.name}
              type="text"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  personalInfo: {
                    ...cvData.personalInfo,
                    name: e.target.value,
                  },
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Email
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="john@example.com"
              defaultValue={cvData.personalInfo.socials.find((social: Social) => social.type === "email")?.value || ""}
              type="email"
              maxLength={254}
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  personalInfo: {
                    ...cvData.personalInfo,
                    socials: cvData.personalInfo.socials.map(
                      (social: Social) =>
                        social.type === "email"
                          ? { ...social, value: e.target.value }
                          : social,
                    ),
                  },
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Phone
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="+123456789"
              defaultValue={cvData.personalInfo.socials.find((social: Social) => social.type === "phone")?.value || ""}
              type="tel"
              maxLength={20}
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  personalInfo: {
                    ...cvData.personalInfo,
                    socials: cvData.personalInfo.socials.map(
                      (social: Social) =>
                        social.type === "phone"
                          ? { ...social, value: e.target.value }
                          : social,
                    ),
                  },
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Github
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="github.com/johnjohnson"
              defaultValue={cvData.personalInfo.socials.find((social: Social) => social.type === "github")?.value || ""}
              type="url"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  personalInfo: {
                    ...cvData.personalInfo,
                    socials: cvData.personalInfo.socials.map(
                      (social: Social) =>
                        social.type === "github"
                          ? { ...social, value: e.target.value }
                          : social,
                    ),
                  },
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Linkedin
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="linkedin.com/in/johnjohnson"
              defaultValue={cvData.personalInfo.socials.find((social: Social) => social.type === "linkedin")?.value || ""}
              type="url"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  personalInfo: {
                    ...cvData.personalInfo,
                    socials: cvData.personalInfo.socials.map(
                      (social: Social) =>
                        social.type === "linkedin"
                          ? { ...social, value: e.target.value }
                          : social,
                    ),
                  },
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
            Website
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="johnjonson.dev"
              defaultValue={cvData.personalInfo.socials.find((social: Social) => social.type === "website")?.value || ""}
              type="url"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  personalInfo: {
                    ...cvData.personalInfo,
                    socials: cvData.personalInfo.socials.map(
                      (social: Social) =>
                        social.type === "website"
                          ? { ...social, value: e.target.value }
                          : social,
                    ),
                  },
                });
              }}
            />
          </label>
        </div>
      </section>

      <section className="mt-8">
        <strong className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 mt-8">
          Professional Experience
        </strong>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl relative group ">
          <button className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200">
            <i className="fas fa-times text-[10px]"></i>
          </button>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Position
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Senior Software Engineer"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  workExperience: cvData.workExperience.map(
                    (job: WorkExperience, index: number) =>
                      index === 0 ? { ...job, position: e.target.value } : job,
                  ),
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Company
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Tech Corp"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  workExperience: cvData.workExperience.map(
                    (job: WorkExperience, index: number) =>
                      index === 0 ? { ...job, company: e.target.value } : job,
                  ),
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Location
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Remote"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  workExperience: cvData.workExperience.map(
                    (job: WorkExperience, index: number) =>
                      index === 0 ? { ...job, location: e.target.value } : job,
                  ),
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Start Date
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Jan 2020 - Present"
              type="date"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  workExperience: cvData.workExperience.map(
                    (job: WorkExperience, index: number) =>
                      index === 0 ? { ...job, startDate: e.target.value } : job,
                  ),
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            End Date
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Jan 2020"
              type="date"
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  workExperience: cvData.workExperience.map(
                    (job: WorkExperience, index: number) =>
                      index === 0 ? { ...job, endDate: e.target.value } : job,
                  ),
                });
              }}
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
            Description
            <textarea
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none col-span-2"
              placeholder="Describe your role and achievements..."
              onChange={(e) => {
                setCvData({
                  ...cvData,
                  workExperience: cvData.workExperience.map(
                    (job: WorkExperience, index: number) =>
                      index === 0
                        ? {
                            ...job,
                            highlights: e.target.value.split("\n"),
                          }
                        : job,
                  ),
                });
              }}
            />
          </label>
        </div>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Skills (Comma Separated)
            </span>
            <div className="grid grid-cols-1 gap-4 bg-slate-50 p-4 rounded-xl relative group ">
              <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
                Programming Languages
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                  placeholder="JavaScript, React, Node.js, CSS, HTML"
                  onChange={(e) => {
                    setCvData({
                      ...cvData,
                      skills: {
                        ...cvData.skills,
                        programmingLanguages: e.target.value
                          .split(",")
                          .map((skill) => skill.trim()),
                      },
                    });
                  }}
                />
              </label>

              <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
                Frameworks / Libraries
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                  placeholder="React, Angular, Vue, Tailwind CSS"
                  onChange={(e) => {
                    setCvData({
                      ...cvData,
                      skills: {
                        ...cvData.skills,
                        frameworks: e.target.value
                          .split(",")
                          .map((skill) => skill.trim()),
                      },
                    });
                  }}
                />
              </label>

              <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
                Databases
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                  placeholder="MySQL, PostgreSQL, MongoDB, Redis"
                  onChange={(e) => {
                    setCvData({
                      ...cvData,
                      skills: {
                        ...cvData.skills,
                        databases: e.target.value
                          .split(",")
                          .map((skill) => skill.trim()),
                      },
                    });
                  }}
                />
              </label>

              <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
                Developer Tools
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                  placeholder="Git, Docker, Jenkins, AWS"
                  onChange={(e) => {
                    setCvData({
                      ...cvData,
                      skills: {
                        ...cvData.skills,
                        developerTools: e.target.value
                          .split(",")
                          .map((skill) => skill.trim()),
                      },
                    });
                  }}
                />
              </label>
            </div>
          </label>
        </div>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Certifications
            </span>
            {cvData.certifications.map((cert: Certification, i: number) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl"
              >
                <label className="flex flex-col text-xs font-bold text-slate-500 md:col-span-2">
                  Certification
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                    value={cert.title}
                    onChange={(e) => {
                      const updated = [...cvData.certifications];
                      updated[i] = { ...updated[i], title: e.target.value };
                      setCvData({ ...cvData, certifications: updated });
                    }}
                  />
                </label>

                <label className="flex flex-col text-xs font-bold text-slate-500">
                  Issuer
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                    value={cert.issuer}
                    onChange={(e) => {
                      const updated = [...cvData.certifications];
                      updated[i] = { ...updated[i], issuer: e.target.value };
                      setCvData({ ...cvData, certifications: updated });
                    }}
                  />
                </label>

                <label className="flex flex-col text-xs font-bold text-slate-500">
                  Issue Date
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                    type="date"
                    value={cert.issueDate}
                    onChange={(e) => {
                      const updated = [...cvData.certifications];
                      updated[i] = { ...updated[i], issueDate: e.target.value };
                      setCvData({ ...cvData, certifications: updated });
                    }}
                  />
                </label>
              </div>
            ))}
          </label>
        </div>
      </section>
    </div>
  );
}
