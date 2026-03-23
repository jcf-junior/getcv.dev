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
    <div className="fixed bottom-10 mx-auto flex gap-5 w-fit justify-center items-center bg-white rounded-full px-2 py-2 border border-slate-200 shadow-lg z-9999">
      <div className="bg-white flex gap-1 items-center justify-center text-gray-100">
        <button
          className="text-slate-500 hover:text-slate-800 cursor-pointer transition-all"
          onClick={() => zoomOut()}
        >
          <i className="fas fa-minus"></i>
        </button>

        <input
          key={scaleFactor}
          aria-label="Zoom percentage"
          defaultValue={(scaleFactor * 100).toFixed(0) + "%"}
          className="text-slate-500 w-[5ch] font-bold px-1 text-center focus:outline-none text-xs"
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

        <button
          className="text-slate-500 hover:text-slate-800 cursor-pointer transition-all"
          onClick={() => zoomIn()}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <span className="w-px h-4 bg-slate-300"></span>

      <button
        className="text-slate-500 hover:text-slate-800 cursor-pointer transition-all"
        onClick={() => {
          resetCv();
        }}
      >
        <i className="fas fa-redo"></i>
      </button>

      <button
        className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full font-bold hover:bg-slate-800 cursor-pointer transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        onClick={() => window.print()}
      >
        <i className="fas fa-print"></i>Print PDF
      </button>
    </div>
  );
}
