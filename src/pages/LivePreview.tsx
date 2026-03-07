import { useState } from "react";
import JakesResume from "../templates/JakesResume";
import { useCvData } from "../hooks/useCvData";
import Toolbar from "../components/Toolbar";

export default function LivePreview() {
  const [scaleFactor, setScaleFactor] = useState(0.9);
  const { cvData } = useCvData();

  return (
    <>
      <div className="sticky p-2 flex flex-col gap-4">
        <Toolbar setScaleFactor={setScaleFactor} scaleFactor={scaleFactor} />

        <div
          className="w-fit shadow mx-auto "
          style={{ scale: `${scaleFactor}`, transformOrigin: "top center" }}
        >
          <JakesResume cvData={cvData} />
        </div>
      </div>
    </>
  );
}
