import type { PersonalInfo, Social } from "../../types/cv";

type Props = {
  value: PersonalInfo;
  onChange: (next: PersonalInfo) => void;
};

export default function PersonalInfoInputs({ value, onChange }: Props) {

  const updateField = (field: keyof PersonalInfo, fieldValue: string) => {
    onChange({ ...value, [field]: fieldValue });
  };

  const updateSocial = (type: Social["type"], fieldValue: string) => {
    onChange({
      ...value,
      socials: value.socials.map((social) =>
        social.type === type ? { ...social, value: fieldValue } : social,
      ),
    });
  };

  const getSocial = (type: Social["type"]) =>
    value.socials.find((s) => s.type === type)?.value ?? "";

  return (
    <section>
      <strong className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
        Personal Info
      </strong>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-red-500">
        <label className="flex flex-col font-bold text-xs text-slate-500">
          Full Name
          <input
            defaultValue={value.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="John Doe Johnson"
            type="text"
          />
        </label>

        <label className="flex flex-col font-bold text-xs text-slate-500">
          Email
          <input
            defaultValue={getSocial("email")}
            onChange={(e) => updateSocial("email", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="john@example.com"
            type="email"
            maxLength={254}
          />
        </label>

        <label className="flex flex-col font-bold text-xs text-slate-500">
          Phone
          <input
            defaultValue={getSocial("phone")}
            onChange={(e) => updateSocial("phone", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="+123456789"
            type="tel"
            maxLength={20}
          />
        </label>

        <label className="flex flex-col font-bold text-xs text-slate-500">
          Github
          <input
            defaultValue={getSocial("github")}
            onChange={(e) => updateSocial("github", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="github.com/johnjohnson"
            type="url"
          />
        </label>

        <label className="flex flex-col font-bold text-xs text-slate-500">
          Linkedin
          <input
            defaultValue={getSocial("linkedin")}
            onChange={(e) => updateSocial("linkedin", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="linkedin.com/in/johnjohnson"
            type="url"
          />
        </label>

        <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
          Website
          <input
            defaultValue={getSocial("website")}
            onChange={(e) => updateSocial("website", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="johnjonson.dev"
            type="url"
          />
        </label>
      </div>
    </section>
  );
}
