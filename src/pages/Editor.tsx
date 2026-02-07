import EditorInputs from "../components/EditorInputs";
import Cv from "../Cv";
import { useCvData } from "../hooks/useCvData";

export default function Editor() {
  const { cvData, setCvData } = useCvData();

  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-8">
      <div className="">
        <EditorInputs cvData={cvData} setCvData={setCvData} />
      </div>
      <div className="sticky top-24 h-fit flex flex-col gap-4">
        <div className="flex items-center justify-between no-print">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-slate-900">Live Preview</h3>
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">
              A4 Size
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-slate-800 cursor-pointer transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => window.print()}
            >
              <i className="fas fa-download"></i>Download PDF
            </button>
            <button
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-slate-800 cursor-pointer transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                localStorage.removeItem("cv-data")
                window.location.reload()
              }}
            >
              <i className="fas fa-trash"></i>Reset CV
            </button>
          </div>
        </div>

        <div className="">
          <div className="">
            <Cv cvData={cvData} />
          </div>
        </div>
      </div>
    </div>
  );
}
