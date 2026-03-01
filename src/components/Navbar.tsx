import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-sm mx-auto p-4 lg:px-8 lg:py-5 flex items-center justify-between no-print">
      <NavLink
        to="/"
      >
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 italic">
          getcv.dev
          <span className="ml-2 text-red-500 text-sm bg-red-100 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
            Beta
          </span>
        </h1>
      </NavLink>

      <div className="text-xl font-bold flex items-center gap-4">
        <NavLink
          to="/tips"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-700 hover:text-indigo-900 border-b-2 border-indigo-700"
              : "text-gray-700 hover:text-gray-900"
          }
        >
          /tips
        </NavLink>

        <NavLink
          to="/editor"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-700 hover:text-indigo-900 border-b-2 border-indigo-700"
              : "text-gray-700 hover:text-gray-900"
          }
        >
          /editor
        </NavLink>
      </div>
    </nav>
  );
}
