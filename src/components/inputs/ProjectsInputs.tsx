import type { Project } from "../../types/cv";

type Props = {
  value: Project[];
  onChange: (next: Project[]) => void;
};

export default function ProjectsInputs({ value, onChange }: Props) {

  const updateProject = (
    index: number,
    key: keyof Project,
    fieldValue: string,
  ) => {
    const next = value.map((project, i) =>
      i === index ? { ...project, [key]: fieldValue } : project,
    );

    onChange(next);
  };

  const updateHighlights = (index: number, highlights: string[]) => {
    const next = value.map((project, i) =>
      i === index ? { ...project, highlights } : project,
    );

    onChange(next);
  };

  const updateTechnologies = (index: number, technologies: string[]) => {
    const next = value.map((project, i) =>
        i === index ? {...project, technologies} : project);

    onChange(next)
  }

  const removeProject = (index: number) => {
    const newProjectArray = value.filter((_, i) => {
      return i !== index;
    });

    onChange(newProjectArray);
  };

  const addProject = () => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      title: "",
      technologies: [],
      startDate: "",
      endDate: "",
      projectUrl: "",
      highlights: [],
    };

    const newProjectArray = [...value, newProject];
    onChange(newProjectArray);
  };

  return (
    <section className="mt-8">
      <strong className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 mt-8">
        Projects
      </strong>

      {value.map((project, i) => {
        return (
          <div
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl relative group  mb-4"
          >
            <button
              className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200 hover:cursor-pointer"
              onClick={() => removeProject(i)}
              aria-label="Remove Project"
            >
              <i className="fas fa-times text-[10px]"></i>
            </button>

            <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
              Title
              <input
                value={project.title}
                onChange={(e) => updateProject(i, "title", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="eCommerce Platform"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
              Tech Stack (Comma Separated)
              <input
                value={project.technologies.join(", ")}
                onChange={(e) =>
                  updateTechnologies(i, e.target.value.split(","))
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Remote"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
              Project URL (Optional)
              <input
                value={project.projectUrl ?? ""}
                onChange={(e) => updateProject(i, "projectUrl", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                placeholder="https://getcv.dev"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              Start Date
              <input
                value={project.startDate ?? "2000-01-01"}
                onChange={(e) => updateProject(i, "startDate", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Jan 2020 - Present"
                type="date"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500">
              End Date
              <input
                value={project.endDate ?? ""}
                onChange={(e) => updateProject(i, "endDate", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Jan 2020"
                type="date"
              />
            </label>

            <label className="flex flex-col font-bold text-xs text-slate-500 md:col-span-2">
              Description (Separated by newlines)
              <textarea
                value={project.highlights.join("\n")}
                onChange={(e) =>
                  updateHighlights(i, e.target.value.split("\n"))
                }
                className="w-full md:min-h-[100px] bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none col-span-2"
                placeholder="Describe your role and achievements..."
              />
            </label>
          </div>
        );
      })}

      <button
        className="px-4 py-2 border rounded-xl mx-auto hover:cursor-pointer"
        onClick={() => addProject()}
      >
        <i className="fas fa-add" />
        ADD PROJECT
      </button>
    </section>
  );
}
