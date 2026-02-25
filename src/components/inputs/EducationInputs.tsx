import type { Education } from "../../types/cv";

type Props = {
  value: Education[];
  onChange: (next: Education[]) => void;
};

export default function EducationInputs({ value, onChange }: Props) {
  const updateEducation = (
    index: number,
    key: keyof Education,
    fieldValue: string,
  ) => {
    const next = value.map((edu, i) =>
      i === index ? { ...edu, [key]: fieldValue } : edu,
    );

    onChange(next);
  };

  const updateHighlights = (index: number, highlights: string[]) => {
    const next = value.map((edu, i) =>
      i === index ? { ...edu, highlights } : edu,
    );

    onChange(next);
  };

  const removeEducation = (index: number) => {
    const newEducationArr = value.filter((_, i) => {
      return i !== index;
    });

    onChange(newEducationArr);
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: crypto.randomUUID(),
      degree: "",
      institution: "",
      startDate: "",
      endDate: "",
      grade: "",
      location: "",
    };

    const newEducationArr = [...value, newEducation];
    onChange(newEducationArr);
  };

  return (
    <section className="mt-8">
      <strong className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 mt-8">
        Education
      </strong>

      {value.map((edu, i) => {
        return (
          <div
            key={edu.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl relative group  mb-4"
          >
            <button
              className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200 hover:cursor-pointer"
              onClick={() => removeEducation(i)}
            >
              <i className="fas fa-times text-[10px]"></i>
            </button>

            <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
              School Name
              <input
                value={edu.institution}
                onChange={(e) =>
                  updateEducation(i, "institution", e.target.value)
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="University of Technology"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
              Degree
              <input
                value={edu.degree}
                onChange={(e) => updateEducation(i, "degree", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="B.Sc. in Computer Science"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              Location
              <input
                value={edu.location}
                onChange={(e) => updateEducation(i, "location", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Cityville, Country"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              Grade (Optional)
              <input
                value={edu.grade}
                onChange={(e) => updateEducation(i, "grade", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none col-span-2"
                placeholder="e.g. 20/20 or 4.00 GPA"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              Start Date
              <input
                value={edu.startDate ?? "2000-01-01"}
                onChange={(e) =>
                  updateEducation(i, "startDate", e.target.value)
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="YYYY-MM-DD"
                type="date"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              End Date (Clear if currently studying)
              <input
                value={edu.endDate ?? ""}
                onChange={(e) => updateEducation(i, "endDate", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="YYYY-MM-DD"
                type="date"
              />
            </label>
          </div>
        );
      })}

      <button
        className="px-4 py-2 border rounded-xl mx-auto hover:cursor-pointer"
        onClick={() => addEducation()}
      >
        <i className="fas fa-add" />
        ADD EDUCATION
      </button>
    </section>
  );
}
