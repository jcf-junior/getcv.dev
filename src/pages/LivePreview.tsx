import JakesResume from "../templates/JakesResume";
import { useCvData } from "../hooks/useCvData";
import Toolbar from "../components/Toolbar";

export default function LivePreview() {

  const { cvData } = useCvData();

  return (
    <>
      <div className="p-2 flex flex-col gap-4">
        <Toolbar />

        <div
          className="w-fit shadow mx-auto "
          
        >
          <JakesResume cvData={cvData} />
        </div>
      </div>
    </>
  );
}
