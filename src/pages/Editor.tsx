import EditorInputs from "../components/EditorInputs";
import { useCvData } from "../hooks/useCvData";

export default function Editor() {
  const { cvData, setCvData } = useCvData();

  return (
    <div className="bg-slate-200">
      <div className=" mx-auto flex justify-between lg:p-8">
        <div className="overflow-y-scroll h-screen w-screen px-4 no-print">
          <EditorInputs cvData={cvData} setCvData={setCvData} />
        </div>

        <iframe className="w-screen h-screen" src="/editor/preview" />
      </div>
    </div>
  );
}
