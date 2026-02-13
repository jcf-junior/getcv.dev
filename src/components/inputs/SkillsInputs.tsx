export default function SkillsInputs({ skills, setCvData}: { skills: Skills; setCvData: React.Dispatch<React.SetStateAction<CVData>> }) {
  return (
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
                    skills: {
                      ...skills,
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
                    skills: {
                      ...skills,
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
                    skills: {
                      ...skills,
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
                      ...skills,
                      developerTools: e.target.value
                        .split(",")
                        .map((skill) => skill.trim()),
                    },
                  );
                }}
              />
            </label>
          </div>
        </label>
      </div>
    </section>
  );
}
