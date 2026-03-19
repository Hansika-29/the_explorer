import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Temple Explorer
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-8">

          {/* HOME */}
          <Link
            to="/"
            className="relative group text-white font-medium flex items-center gap-1"
          >
            Home
            <span className="opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1">
              →
            </span>

            {/* underline */}
            <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          {/* STATES */}
          <a
            href="#states"
            className="relative group text-white font-medium flex items-center gap-1"
          >
            States
            <span className="opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1">
              →
            </span>

            {/* underline */}
            <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;