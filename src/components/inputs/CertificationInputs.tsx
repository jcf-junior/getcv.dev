export default function CertificationInputs({
  certifications,
  setCvData,
}) {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Certifications
          </span>
          {certifications.map((cert: Certification, i: number) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl"
            >
              <label className="flex flex-col text-xs font-bold text-slate-500 md:col-span-2">
                Certification
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                  // defaultValue={cert.title}
                />
              </label>

              <label className="flex flex-col text-xs font-bold text-slate-500">
                Issuer
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                  // defaultValue={cert.issuer}
                />
              </label>

              <label className="flex flex-col text-xs font-bold text-slate-500">
                Issue Date
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
                  type="date"
                  // defaultValue={cert.issueDate}
                />
              </label>
            </div>
          ))}
        </label>
      </div>
    </section>
  );
}
