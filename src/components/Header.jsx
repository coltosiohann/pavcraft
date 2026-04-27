import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { to: '/',                    label: 'Home' },
  { to: '/despre-noi',          label: 'Despre noi' },
  { to: '/produse',             label: 'Produse' },
  { to: '/proiecte',            label: 'Proiecte' },
  { to: '/certificate-calitate',label: 'Certificate' },
  { to: '/catalog-pdf',         label: 'Catalog' },
  { to: '/contact',             label: 'Contact' },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === '/'}
      className={({ isActive }) =>
        `site-nav-link font-manrope text-[12px] font-semibold tracking-[1.28px] uppercase transition-colors duration-200 ${
          isActive
            ? 'site-nav-link-active text-white'
            : 'text-neutral-400 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] lg:w-fit max-w-7xl z-50 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-3">

        {/* Brand */}
        <Link
          to="/"
          className="brand-wordmark text-xl font-black text-white uppercase shrink-0 lg:mr-10"
          onClick={close}
        >
          PAVCRAFT
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-8">
          {navLinks.map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} />
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4 lg:ml-10">
          <Link
            to="/cerere-oferta"
            onClick={close}
            className="site-cta hidden md:inline-flex items-center text-white uppercase font-manrope text-[12px] font-semibold tracking-[1.28px] px-6 py-2.5 rounded-full transition-colors duration-200 shrink-0"
          >
            Solicită ofertă
          </Link>
          <button
            className="md:hidden flex items-center justify-center min-w-[2.75rem] min-h-[2.75rem] text-white rounded-full border border-white/20 hover:bg-white/10 transition-colors bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="material-symbols-outlined">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-[110%] left-0 right-0 md:hidden px-8 py-6 flex flex-col gap-5 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl">
          {navLinks.map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} onClick={close} />
          ))}
          <Link
            to="/cerere-oferta"
            onClick={close}
            className="site-cta mt-2 text-white uppercase font-manrope text-[12px] font-semibold tracking-[1.28px] px-4 py-3 text-center transition-colors duration-200 rounded-full"
          >
            Solicită ofertă
          </Link>
        </div>
      )}
    </header>
  );
}
