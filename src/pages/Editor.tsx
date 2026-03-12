import EditorInputs from "../components/EditorInputs";
import JakesResume from "../templates/JakesResume";
import { useCvData } from "../hooks/useCvData";
import Toolbar from "../components/Toolbar";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MIN_ZOOM, MAX_ZOOM } from "../constants/zoom";

export default function Editor() {
  const { cvData, setCvData, resetCv } = useCvData();

  const [scaleFactor, setScaleFactor] = useState(1);

  const zoomIn = () => {
    setScaleFactor((prev) => Math.min(MAX_ZOOM, prev + 0.1));
  };

  const zoomOut = () => {
    setScaleFactor((prev) => Math.max(MIN_ZOOM, prev - 0.1));
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

      <div className="h-screen grid grid-cols-2 gap-4 bg-slate-100">
        <div className="overflow-y-scroll border-gray-600 border-r-2">
          <EditorInputs cvData={cvData} setCvData={setCvData} />
        </div>
        <div
          className="h-full p-6 flex flex-col items-center gap-4 overflow-y-scroll bg-slate-100"
          ref={containerRef}
        >
          <div className="sticky top-0 z-9999">
            <Toolbar
              scaleFactor={scaleFactor}
              setScaleFactor={setScaleFactor}
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              resetCv={resetCv}
            />
          </div>
          <div
            className="shadow"
            style={{ scale: `${scaleFactor}`, transformOrigin: "top center" }}
          >
            <JakesResume cvData={cvData} />
          </div>
        </div>
      </div>
    </>
  );
}
