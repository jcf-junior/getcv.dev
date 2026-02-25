import type { WorkExperience } from "../../types/cv";

type Props = {
  value: WorkExperience[];
  onChange: (next: WorkExperience[]) => void;
};

export default function ExperienceInputs({ value, onChange }: Props) {
  const updateExperience = (
    index: number,
    key: keyof WorkExperience,
    fieldValue: string,
  ) => {
    const next = value.map((exp, i) =>
      i === index ? { ...exp, [key]: fieldValue } : exp,
    );

    onChange(next);
  };

  const updateHighlights = (index: number, highlights: string[]) => {
    const next = value.map((exp, i) =>
      i === index ? { ...exp, highlights } : exp,
    );

    onChange(next);
  };

  const removeExperience = (index: number) => {
    const newExperienceArray = value.filter((_, i) => {
      return i !== index;
    });

    onChange(newExperienceArray);
  };

  const addExperience = () => {
    const newExperience: WorkExperience = {
      id: crypto.randomUUID(),
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      highlights: [],
    };

    const newExperienceArray = [...value, newExperience];
    onChange(newExperienceArray);
  };

  return (
    <section className="mt-8">
      <strong className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 mt-8">
        Professional Experience
      </strong>

      {value.map((exp, i) => {
        return (
          <div
            key={exp.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl relative group  mb-4"
          >
            <button
              className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200 hover:cursor-pointer"
              onClick={() => removeExperience(i)}
            >
              <i className="fas fa-times text-[10px]"></i>
            </button>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              Position
              <input
                value={exp.position}
                onChange={(e) =>
                  updateExperience(i, "position", e.target.value)
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Senior Software Engineer"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              Company
              <input
                value={exp.company}
                onChange={(e) => updateExperience(i, "company", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Tech Corp"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              Location
              <input
                value={exp.location}
                onChange={(e) =>
                  updateExperience(i, "location", e.target.value)
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Remote"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              Start Date
              <input
                value={exp.startDate ?? "2000-01-01"}
                onChange={(e) =>
                  updateExperience(i, "startDate", e.target.value)
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Jan 2020 - Present"
                type="date"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              End Date
              <input
                value={exp.endDate ?? ""}
                onChange={(e) => updateExperience(i, "endDate", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Jan 2020"
                type="date"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
              Description (Separated by newlines)
              <textarea
                value={exp.highlights.join("\n")}
                onChange={(e) =>
                  updateHighlights(i, e.target.value.split("\n"))
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none col-span-2"
                placeholder="Describe your role and achievements..."
              />
            </label>
          </div>
        );
      })}

      <button
        className="px-4 py-2 border rounded-xl mx-auto hover:cursor-pointer"
        onClick={() => addExperience()}
      >
        <i className="fas fa-add" />
        ADD EXPERIENCE
      </button>
    </section>
  );
}
