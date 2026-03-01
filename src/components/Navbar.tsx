import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 sticky shadow-md mx-auto p-4 lg:px-8 lg:py-5 flex items-center justify-between no-print">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-3xl font-extrabold italic text-indigo-700"
            : "text-3xl font-extrabold italic text-gray-900"
        }
      >
        <h1>getcv.dev</h1>
      </NavLink>

      <div className="text-xl font-bold flex items-center gap-4">
        <NavLink
          to="/tips"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-700 hover:text-indigo-900 underline"
              : "text-gray-700 hover:text-gray-900"
          }
        >
          /tips
        </NavLink>

        <NavLink
          to="/editor"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-700 hover:text-indigo-900 underline"
              : "text-gray-700 hover:text-gray-900"
          }
        >
          /editor
        </NavLink>
      </div>
    </nav>
  );
}
