import EditorInputs from "../components/EditorInputs";
import JakesResume from "../templates/JakesResume";
import { useCvData } from "../hooks/useCvData";
import Toolbar from "../components/Toolbar";
import { useState } from "react";

export default function Editor() {
  const { cvData, setCvData, resetCv } = useCvData();

  const [scaleFactor, setScaleFactor] = useState(0.9);

  const zoomIn = () => {
    setScaleFactor((prev) => (prev > 0.3 ? prev - 0.1 : prev));
  };

  const zoomOut = () => {
    setScaleFactor((prev) => (prev < 3 ? prev - 0.1 : prev));
  };

  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:p-8">
      <div className="no-print">
        <EditorInputs cvData={cvData} setCvData={setCvData} />
      </div>

      <div className="flex flex-col gap-4">
        <Toolbar scaleFactor={scaleFactor} zoomIn={zoomIn} zoomOut={zoomOut} resetCv={resetCv} />

        <div className="w-fit shadow">
          <JakesResume cvData={cvData} />
        </div>
      </div>
    </div>
  );
}
