import { useEffect, useState } from "react";
import JakesResume from "../templates/JakesResume";
import { useCvData } from "../hooks/useCvData";
import Toolbar from "../components/Toolbar";

export default function LivePreview() {
  const [scaleFactor, setScaleFactor] = useState(0.9);
  const { cvData: initialCvData } = useCvData();
  const [cvData, setCvData] = useState(initialCvData);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "cv-data") {
          const updated = event.newValue ? JSON.parse(event.newValue) : null;

          if (updated) {
            setCvData(updated);
          }
      };
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  });

  const zoomIn = () => {
    setScaleFactor((prev) => prev + 0.1);
  };

  const zoomOut = () => {
    setScaleFactor((prev) => prev - 0.1);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <Toolbar zoomIn={zoomIn} zoomOut={zoomOut} scaleFactor={scaleFactor} />

        <div
          id="cv-container"
          className="w-fit shadow mx-auto"
          style={{ scale: `${scaleFactor}`, transformOrigin: "top center" }}
        >
          <JakesResume cvData={cvData} />
        </div>
      </div>
    </>
  );
}
