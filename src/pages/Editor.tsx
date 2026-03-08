import EditorInputs from "../components/EditorInputs";
import JakesResume from "../templates/JakesResume";
import { useCvData } from "../hooks/useCvData";
import Toolbar from "../components/Toolbar";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Editor() {
  const { cvData, setCvData, resetCv } = useCvData();

  const [scaleFactor, setScaleFactor] = useState(1);

  const zoomIn = () => {
    setScaleFactor((prev) => (prev < 3 ? prev + 0.1 : prev));
  };

  const zoomOut = () => {
    setScaleFactor((prev) => Math.max(0.3, prev - 0.1));
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const cvWidth = 8.27 * 110; //8.27in * 110dpi
      setScaleFactor(containerWidth / cvWidth);
    }
  }, []);

  return (
    <>
      {createPortal(
        <JakesResume cvData={cvData} />,
        document.getElementById("print-target")!,
      )}

      <div className="flex px-6 py-6 gap-4 screen-height">
        <div className="w-1/2 border border-gray-500 rounded-lg p-6 overflow-y-scroll">
          <EditorInputs cvData={cvData} setCvData={setCvData} />
        </div>

        <div
          ref={containerRef}
          className="w-1/2 flex flex-col items-center gap-4 border border-gray-500 rounded-lg p-6 overflow-y-scroll"
        >
          <Toolbar
            scaleFactor={scaleFactor}
            setScaleFactor={setScaleFactor}
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
