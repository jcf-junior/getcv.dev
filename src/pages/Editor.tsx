import EditorInputs from "../components/EditorInputs";
import { useCvData } from "../hooks/useCvData";

export default function Editor() {
  const { cvData, setCvData } = useCvData();

  return (
    <div className="bg-slate-200">
      <div className=" mx-auto flex justify-between lg:p-8">
        <div className="overflow-y-scroll h-screen w-1/2 px-4">
          <EditorInputs cvData={cvData} setCvData={setCvData} />
        </div>

        <iframe title="CV Live Preview" className="w-1/2 h-screen" src="/editor/preview" />
      </div>
    </div>
  );
}
