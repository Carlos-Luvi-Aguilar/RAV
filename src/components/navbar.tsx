import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "px-3 py-2 rounded-xl font-medium transition outline-none focus:ring-2 focus:ring-emerald-500/50";
  const active =
    "bg-white/10 text-white shadow";
  const idle =
    "text-slate-300 hover:text-white hover:bg-white/5";

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80 border-b border-slate-800">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-2 text-white">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_6px_rgba(16,185,129,0.6)]" />
            <span className="text-sm uppercase tracking-widest group-hover:opacity-90">
              Fauna Trivia
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>
              Inicio
            </NavLink>
            <NavLink to="/quiz" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>
              Quiz
            </NavLink>
            <NavLink to="/acerca" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>
              Acerca
            </NavLink>
          </div>

          {/* Mobile button */}
          <button
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-200 hover:bg-white/5 md:hidden"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Línea inferior con degradado */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/70 to-transparent" />

        {/* Mobile menu */}
        {open && (
          <div className="border-b border-slate-800 md:hidden">
            <div className="mx-auto grid max-w-6xl gap-1 px-4 py-2">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/quiz"
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}
              >
                Quiz
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}
              >
                Acerca
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
