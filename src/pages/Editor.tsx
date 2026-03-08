import EditorInputs from "../components/EditorInputs";
import JakesResume from "../templates/JakesResume";
import { useCvData } from "../hooks/useCvData";
import Toolbar from "../components/Toolbar";
import { useState } from "react";
import { createPortal } from 'react-dom';

export default function Editor() {
  const { cvData, setCvData, resetCv } = useCvData();

  const [scaleFactor, setScaleFactor] = useState(0.9);

  const zoomIn = () => {
    setScaleFactor((prev) => (prev < 3 ? prev + 0.1 : prev));
  };

  const zoomOut = () => {
    setScaleFactor((prev) => (prev >= 0.3 ? prev - 0.1 : prev));
  };


  return (
    <>
      {createPortal(<JakesResume cvData={cvData} />, document.getElementById("print-target")!)}
      <div className="flex px-6 py-6 justify-center gap-4">
        <div className="border border-gray-500 rounded-lg p-6 screen-height overflow-y-scroll">
          <EditorInputs cvData={cvData} setCvData={setCvData} />
        </div>

        <div className="flex flex-col gap-4 border border-gray-500 rounded-lg p-6 overflow-y-scroll screen-height">
          <Toolbar
            scaleFactor={scaleFactor}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            resetCv={resetCv}
          />

          <div
            className="w-fit shadow"
            style={{ scale: `${scaleFactor}`, transformOrigin: "top center" }}
          >
            <JakesResume cvData={cvData} />
          </div>
        </div>
      </div>
    </>
  );
}
