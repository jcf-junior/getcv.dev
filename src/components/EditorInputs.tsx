export default function EditorInputs() {
  return (
    <div className="bg-white p-4 rounded-3xl">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Editor Inputs</h2>
      <p className="text-slate-500 text-sm mb-6">
        Your progress is saved automatically on Local Storage.
        <br />
        Inputs left blank will not be rendered.
      </p>
      <section>
        <strong className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
          Personal Info
        </strong>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-red-500">
          <label className="flex flex-col font-bold text-xs text-slate-500">
            Full Name
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="John Doe Johnson"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Email
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="john@example.com"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Phone
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="+123456789"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Github
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="github.com/johnjohnson"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Linkedin
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="linkedin.com/in/johnjohnson"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
            Website
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="johnjonson.dev"
            />
          </label>
        </div>
      </section>

      <section className="mt-8">
        <strong className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 mt-8">
          Professional Experience
        </strong>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl relative group ">
          <button className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200">
            <i className="fas fa-times text-[10px]"></i>
          </button>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Position
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Senior Software Engineer"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Company
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Tech Corp"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Location
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Remote"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            Start Date
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Jan 2020 - Present"
              type="date"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500">
            End Date
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Jan 2020"
              type="date"
            />
          </label>

          <label className="flex flex-col font-bold text-xs text-slate-500 md:cols-span-2">
            Description
            <textarea
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none col-span-2"
              placeholder="Describe your role and achievements..."
            />
          </label>
        </div>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col font-bold text-xs text-slate-500 col-span-2">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Skills (Comma Separated)
            </span>
            <input
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none "
              placeholder="JavaScript, React, Node.js, CSS, HTML"
            />
          </label>
        </div>
      </section>
    </div>
  );
}
