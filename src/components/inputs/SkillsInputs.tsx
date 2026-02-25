import type { Skill } from "../../types/cv.ts"


type Props = {
  value: Skill,
  onChange: (next: Skill) => void,
}

export default function SkillsInputs({ value, onChange}: Props) {


  const updateSkill = (key: keyof(Skill), newValue: string) => {

    const newSkillObj = {
      ...value,
      [key]: newValue.trim() === "" ? [] : newValue.split(",").map(word => word.trim()),
    };

    return onChange(newSkillObj);
  }
  
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
                value={value.programmingLanguages}
                onChange={(e) => updateSkill("programmingLanguages", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                placeholder="JavaScript, React, Node.js, CSS, HTML"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
              Frameworks / Libraries
              <input
                value={value.frameworks}
                onChange={(e) => updateSkill("frameworks", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                placeholder="React, Angular, Vue, Tailwind CSS"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
              Databases
              <input
                value={value.databases}
                onChange={(e) => updateSkill("databases", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                placeholder="MySQL, PostgreSQL, MongoDB, Redis"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
              Developer Tools
              <input
                value={value.developerTools}
                onChange={(e) => updateSkill("developerTools", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                placeholder="Git, Docker, Jenkins, AWS"
                />
            </label>
          </div>
        </label>
      </div>
    </section>
  );
}
