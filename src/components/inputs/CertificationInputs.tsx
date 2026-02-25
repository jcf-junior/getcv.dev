import type { Certification } from "../../types/cv";

type Props = {
  value: Certification[];
  onChange: (next: Certification[]) => void;
};

export default function CertificationInputs({ value, onChange }: Props) {
  // console.log("value nas certs: ", value)

  const updateCertification = (
    id: string,
    key: keyof Certification,
    newValue: string,
  ) => {

    const oldCertification = value.find((cert) => cert.id == id) || {
      id: crypto.randomUUID(),
      title: "",
      issuer: "",
      issueDate: "",
      credentialUrl: "",
    };

    const updated = { ...oldCertification, [key]: newValue };

    const updatedArr = value.filter((cert) => cert.id !== id);
    updatedArr.push(updated);

    return onChange(updatedArr);
  };

  const addCertification = () => {
    const newCert: Certification = {
      id: crypto.randomUUID(),
      title: "",
      issuer: "",
      issueDate: "",
      credentialUrl: "",
    };

    onChange([...value, newCert]);
  };

  const removeCertification = (id: string) => {
    const updated = value.filter((cert) => cert.id !== id);

    onChange(updated);
  };

  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Certifications
          </span>
          {value.map((cert) => (
            <div
              key={cert.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 relative group rounded-xl mb-4"
            >
              <button
                className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200 hover:cursor-pointer"
                onClick={() => removeCertification(cert.id)}
              >
                <i className="fas fa-times text-[10px]"></i>
              </button>

              <label className="flex flex-col text-xs font-bold text-slate-500 md:col-span-2">
                Certification
                <input
                  value={cert.title}
                  onChange={(e) =>
                    updateCertification(cert.id, "title", e.target.value)
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                />
              </label>

              <label className="flex flex-col text-xs font-bold text-slate-500">
                Issuer
                <input
                  value={cert.issuer}
                  onChange={(e) =>
                    updateCertification(cert.id, "issuer", e.target.value)
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                />
              </label>

              <label className="flex flex-col text-xs font-bold text-slate-500">
                Issue Date
                <input
                  value={cert.issueDate}
                  onChange={(e) =>
                    updateCertification(cert.id, "issueDate", e.target.value)
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
                    updateCertification(
                      cert.id,
                      "credentialUrl",
                      e.target.value,
                    )
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
            ADD PROJECT
          </button>
        </label>
      </div>
    </section>
  );
}
