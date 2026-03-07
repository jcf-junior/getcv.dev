export default function Toolbar() {
  return (
    <div className="flex gap-5 justify-center items-center no-print">

      <button
        className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-xl font-bold hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => window.print()}
      >
        <i className="fas fa-download"></i>Download PDF
      </button>

      <button
        className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-xl font-bold hover:bg-red-600 hover:scale-105 cursor-pointer transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          localStorage.removeItem("cv-data");
          window.location.reload();
        }}
      >
        <i className="fas fa-redo"></i>Reset CV
      </button>
    </div>
  );
}
