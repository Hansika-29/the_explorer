import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-red-700 shadow-md sticky top-0 z-50 relative">
      
      {/* BACK BUTTON */}
      {location.pathname !== "/" && (
        <button
          onClick={() => navigate(-1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1 text-white font-medium px-3 hover:opacity-80 transition"
        >
          <span className="text-xl font-bold">{"<"}</span>
          <span>Back</span>
        </button>
      )}

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

          <Link
            to="/"
            className="relative group text-white font-medium flex items-center gap-1"
          >
            Home
            <span className="opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1">→</span>
            <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          <a
            href="#states"
            className="relative group text-white font-medium flex items-center gap-1"
          >
            States
            <span className="opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1">→</span>
            <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;