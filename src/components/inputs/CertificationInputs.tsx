import type { Certification } from "../../types/cv";

type Props = {
  value: Certification[];
  onChange: (next: Certification[]) => void;
};

export default function CertificationInputs({ value, onChange }: Props) {
  const updateCertification = (
    index: number,
    key: keyof Certification,
    fieldValue: string,
  ) => {
    const next = value.map((exp, i) =>
      i === index ? { ...exp, [key]: fieldValue } : exp,
    );

    onChange(next);
  };

  const removeCertification = (index: number) => {
    const newCertificationArray = value.filter((_, i) => {
      return i !== index;
    });

    onChange(newCertificationArray);
  };

  const addCertification = () => {
    const newCertification: Certification = {
      id: crypto.randomUUID(),
      title: "",
      issuer: "",
      issueDate: "",
      credentialUrl: "",
    };

    const newCertificationArray = [...value, newCertification];

    onChange(newCertificationArray);
  };

  return (
    <section className="mt-8">
      <strong className="text-sm text-slate-400 uppercase tracking-widest mb-4">
        Certifications
      </strong>

      {value.map((cert, index) => (
        <div
          key={cert.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 relative group rounded-xl mb-4"
        >
          <button
            className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200 hover:cursor-pointer"
            onClick={() => removeCertification(index)}
          >
            <i className="fas fa-times text-[10px]"></i>
          </button>

          <label className="flex flex-col text-xs font-bold text-slate-500 md:col-span-2">
            Certification Title
            <input
              value={cert.title}
              onChange={(e) =>
                updateCertification(index, "title", e.target.value)
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
            />
          </label>

          <label className="flex flex-col text-xs font-bold text-slate-500">
            Issuer
            <input
              value={cert.issuer}
              onChange={(e) =>
                updateCertification(index, "issuer", e.target.value)
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
            />
          </label>

          <label className="flex flex-col text-xs font-bold text-slate-500">
            Issue Date
            <input
              value={cert.issueDate}
              onChange={(e) =>
                updateCertification(index, "issueDate", e.target.value)
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
              type="date"
            />
          </label>

          <label className="flex flex-col text-xs font-bold text-slate-500 col-span-2">
            Credential URL
            <input
              value={cert.credentialUrl}
              onChange={(e) =>
                updateCertification(index, "credentialUrl", e.target.value)
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
              type="url"
            />
          </label>
        </div>
      ))}
      <button
        className="px-4 py-2 border rounded-xl mx-auto hover:cursor-pointer"
        onClick={() => addCertification()}
      >
        <i className="fas fa-add" />
        ADD CERTIFICATION
      </button>
    </section>
  );
}
