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

      <div className="flex h-[calc(100vh-72px)]">
        <div className="w-2/5 border-r border-gray-500 overflow-y-scroll z-1">
          <EditorInputs cvData={cvData} setCvData={setCvData} />
        </div>

        <div
          ref={containerRef}
          className="w-3/5 flex flex-col items-center gap-4 rounded-lg z-0 
           bg-gray-100 pt-6 h-full overflow-scroll"

        >
          <Toolbar
            scaleFactor={scaleFactor}
            setScaleFactor={setScaleFactor}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            resetCv={resetCv}
          />

          <div
            className="w-fit shadow mx-auto block"
            style={{ zoom: `${scaleFactor}` }}
          >
            <JakesResume cvData={cvData} />
          </div>
        </div>
      </div>
    </>
  );
}
