import { useCvData } from "../hooks/useCvData";
import JakesResume from "../templates/JakesResume";

export default function Preview() {
  const { cvData } = useCvData();

  return (
    <div className="border border-red-500 w-fit mx-auto">
      <JakesResume cvData={cvData} />;
    </div>
  );
}
