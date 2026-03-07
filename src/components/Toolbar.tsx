type Props = {
  scaleFactor: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetCv: () => void;
};

export default function Toolbar({ zoomIn, zoomOut, scaleFactor, resetCv }: Props) {
  return (
    <div className="flex gap-5 justify-center items-center no-print">
      <div className="bg-white flex items-center justify-center rounded-2xl gap-1 text-gray-100">
        <button
          className="flex gap-2 items-center px-5 py-2 rounded-l-2xl bg-slate-900 hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all"
          onClick={() => zoomIn()}
        >
          <i className="fas fa-magnifying-glass-plus"></i>
          Zoom In
        </button>

        <div className="text-black font-bold">
          {(scaleFactor * 100).toFixed(0)}%
        </div>

        <button
          className="flex gap-2 items-center px-5 py-2 rounded-r-2xl bg-slate-900 hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all"
          onClick={() => zoomOut()}
        >
          <i className="fas fa-magnifying-glass-minus"></i>
          Zoom Out
        </button>
      </div>

      <button
        className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-xl font-bold hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => window.print()}
      >
        <i className="fas fa-download"></i>Download PDF
      </button>

      <button
        className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-xl font-bold hover:bg-red-600 hover:scale-105 cursor-pointer transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          resetCv();
        }}
      >
        <i className="fas fa-redo"></i>Reset CV
      </button>
    </div>
  );
}
