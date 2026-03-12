import type { PersonalInfo, Social } from "../../types/cv";
import { getSocialPlaceholder } from "../../utils/getSocialPlaceholder";

type Props = {
  value: PersonalInfo;
  onChange: (next: PersonalInfo) => void;
};

export default function PersonalInfoInputs({ value, onChange }: Props) {
  const addSocial = () => {
    const newSocial = {
      id: crypto.randomUUID(),
      link: "",
      value: "",
    };

    onChange({ ...value, socials: [...value.socials, newSocial] });
  };

  const updateSocial = (id: Social["id"], val: string) => {
    if (val.slice(0, 7) === "https://") {
      val = val.slice(8);
    } else if (val.slice(0, 6) === "http://") {
      val = val.slice(7);
    }

    console.log("val: ", val);

    const updated = value.socials.map((soc) => {
      if (soc.id === id) {
        return { ...soc, value: val };
      }

      return { ...soc };
    });

    console.log(updated);

    onChange({ ...value, name: val });
  };

  const updateCustomSocial = (
    id: Social["id"],
    field: string,
    val: Social["value"],
  ) => {
    const updatedSocial = value.socials.map((soc) => {
      if (soc.id === id) {
        return { ...soc, [field]: val };
      }
      return soc;
    });

    onChange({ ...value, socials: updatedSocial });
  };

  const getCustomSocial = (id: Social["id"]) => {
    return value.socials.filter((soc) => soc.id === id)[0];
  };

  const removeCustomSocial = (id: Social["id"]) => {
    const updatedSocialsArr = value.socials.filter((soc) => soc.id !== id);

    onChange({ ...value, socials: updatedSocialsArr });
  };

  return (
    <section className="bg-slate-50 p-6 rounded-xl shadow-md mb-6">
      <strong className="text-sm font-bold text-black uppercase tracking-widest mb-4">
        Personal Info
      </strong>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="font-bold text-xs text-black ">
          Full Name
          <input
            value={value.name}
            onChange={(e) => onChange({ ...value, name: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="John Doe Johnson"
            type="text"
          />
        </label>

        <label className="flex flex-col font-bold text-xs text-slate-500">
          Email
          <input
            value={getCustomSocial("email").value}
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
            value={getCustomSocial("phone").value}
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
            value={getCustomSocial("github").value}
            onChange={(e) => updateSocial("github", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="github.com/johnjohnson"
            type="url"
          />
        </label>

        <label className="flex flex-col font-bold text-xs text-slate-500">
          Linkedin
          <input
            value={getCustomSocial("linkedin").value}
            onChange={(e) => updateSocial("linkedin", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="linkedin.com/in/johnjohnson"
            type="url"
          />
        </label>

        <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
          Website
          <input
            value={getCustomSocial("website").value}
            onChange={(e) => updateSocial("website", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="johnjonson.dev"
            type="url"
          />
        </label>

        {value.socials.map((social, index) => 
        
        {
            if (index > 4) {
          return (
              <div
                key={social.id}
                className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl relative group"
              >
                <button
                  className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-focus:opacity-100 group-hover:opacity-100 transition-opacity hover:bg-red-200 hover:cursor-pointer"
                  onClick={() => removeCustomSocial(social.id)}
                  aria-label="Remove Social"
                >
                  <i className="fas fa-times text-[10px]"></i>
                </button>

                <label className="font-bold text-xs text-black">
                  URL
                  <input
                    value={social.link}
                    onChange={(e) =>
                      updateCustomSocial(social.id, "link", e.target.value)
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder={getSocialPlaceholder(index).link}
                    type="url"
                    maxLength={254}
                  />
                </label>
                <label className="font-bold text-xs text-black">
                  Value
                  <input
                    value={social.value}
                    onChange={(e) =>
                      updateCustomSocial(social.id, "value", e.target.value)
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder={getSocialPlaceholder(index).value}
                    maxLength={254}
                  />
                </label>
              </div>
          );
        }
        return null;
        })}
        <button
          className="col-span-2 flex gap-2 items-center justify-center mx-auto w-40 text-sm rounded-full bg-indigo-600 hover: bg-indigo-700 cursor-pointer text-white px-4 py-1.5 transition-all shadow-sm"
          onClick={() => addSocial()}
        >
          <i className="fa fa-plus"></i>Add Social
        </button>
      </div>
    </section>
  );
}
