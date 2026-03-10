import { useEffect, useState } from "react";
import { MIN_ZOOM, MAX_ZOOM } from "../constants/zoom";

type Props = {
  scaleFactor: number;
  setScaleFactor: (value: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetCv: () => void;
};

export default function Toolbar({
  zoomIn,
  zoomOut,
  scaleFactor,
  setScaleFactor,
  resetCv,
}: Props) {

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(`${Math.round(scaleFactor * 100)}%`);
  }, [scaleFactor]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = parseInt(e.currentTarget.value.replace(/[^0-9]/g, ""));
      if (!isNaN(val)) {
        const clamped = Math.min(MAX_ZOOM * 100, Math.max(MIN_ZOOM * 100, val));
        setScaleFactor(clamped / 100);
        e.currentTarget.blur();
      } else {
        setInputValue(`${Math.round(scaleFactor * 100)}%`);
      }
    }
  };

  return (
    <>
      <div className="py-1.5 px-4 text-xs flex items-center justify-center gap-3 font-bold text-gray-800 rounded-full shadow-sm border border-slate-200 bg-white mb-6">
        <button
          className="w-4 h-4 cursor-pointer hover:text-indigo-600"
          onClick={zoomOut}
          aria-label="Zoom out"
        >
          <i className="fa fa-minus" />
        </button>

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => setInputValue(`${Math.round(scaleFactor * 100)}%`)}
          className="w-12 text-center bg-transparent focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded"
        />


        <button className="w-4 h-4 cursor-pointer" onClick={() => zoomIn()} aria-label="Zoom in">
          <i className="fa fa-plus"></i>
        </button>

        <div className="h-4 bg-slate-200 w-px mx-1"></div>

        <button className="cursor-pointer" onClick={() => resetCv()} aria-label="Reset CV">
          <i className="fa fa-arrows-rotate"></i>
        </button>
        <button className="bg-indigo-600 rounded-full px-4 py-1.5 text-white ml-3 hover:bg-indigo-700 transition-all cursor-pointer" aria-label="Download PDF">
          Download PDF
        </button>
      </div>
    </>
  );
}
