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
  return (
    <>
      <div className="py-1.5 px-4 text-xs flex items-center justify-center gap-3 font-bold text-gray-800 rounded-full shadow-sm border-1 border-slate-200 bg-white mb-6">
        <button className="w-4 h-4 cursor-pointer" onClick={() => zoomOut()}>
          <i className="fa fa-minus"></i>
        </button>

        <input
          defaultValue={`${(scaleFactor * 100).toFixed(0)}%`}
          className="w-10 text-center"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              const val = parseInt(e.currentTarget.value);
              if (!isNaN(val)) {
                const clamped = Math.min(
                  MAX_ZOOM * 100,
                  Math.max(MIN_ZOOM * 100, val),
                );
                setScaleFactor(clamped / 100);
              }
            }
          }}
        />
        <button className="w-4 h-4 cursor-pointer" onClick={() => zoomIn()}>
          <i className="fa fa-plus"></i>
        </button>

        <div className="h-4 bg-slate-200 w-px mx-1"></div>

        <button className="cursor-pointer" onClick={() => resetCv()}>
          <i className="fa fa-arrows-rotate"></i>
        </button>
        <button className="bg-indigo-600 rounded-full px-4 py-1.5 text-white ml-3 hover:bg-indigo-700 transition-all cursor-pointer">
          Download PDF
        </button>
      </div>
    </>
  );
}


