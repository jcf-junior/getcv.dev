import EditorInputs from "../components/EditorInputs";
import Cv from "../Cv";

export default function Editor() {
  return (
    <div className="flex justify-between items-start gap-4 px-[32px] bg-slate-200">
      <div className="w-[50%] py-8">
        <EditorInputs />
      </div>
      <div className="w-[50%] py-8">
        <Cv />
      </div>
    </div>
  );
}
