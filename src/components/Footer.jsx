import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home',              to: '/' },
  { label: 'Despre noi',        to: '/despre-noi' },
  { label: 'Produse',           to: '/produse' },
  { label: 'Proiecte',          to: '/proiecte' },
  { label: 'Certificate',       to: '/certificate-calitate' },
  { label: 'Catalog PDF',       to: '/catalog-pdf' },
  { label: 'Contact',           to: '/contact' },
  { label: 'Cerere ofertă',     to: '/cerere-oferta' },
];

const legalLinks = [
  { label: 'Politică confidențialitate', to: '#' },
  { label: 'Termeni și condiții',        to: '#' },
  { label: 'Sustenabilitate',            to: '#' },
];

const socialLinks = [
  { label: 'LinkedIn',   href: '#', icon: 'group' },
  { label: 'Facebook',   href: '#', icon: 'thumb_up' },
  { label: 'Instagram',  href: '#', icon: 'photo_camera' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 w-full">
      <div className="max-w-[1920px] mx-auto px-8 md:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-xl font-black tracking-tighter text-white uppercase">
            PAVCRAFT
          </Link>
          <p className="font-manrope text-[12px] tracking-widest uppercase text-neutral-500 leading-loose">
            Turnăm rezistență.<br />Construim încredere.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-neutral-500 hover:text-ferrari-red transition-colors"
              >
                <span className="material-symbols-outlined text-xl">{s.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation column */}
        <div className="flex flex-col gap-4">
          <p className="font-manrope text-[11px] tracking-widest uppercase text-neutral-500 mb-2">
            Navigare
          </p>
          {footerLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-manrope text-[12px] tracking-widest uppercase text-neutral-500 hover:text-white transition-colors opacity-80 hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact column */}
        <div className="flex flex-col gap-4">
          <p className="font-manrope text-[11px] tracking-widest uppercase text-neutral-500 mb-2">
            Contact
          </p>
          <div className="flex items-start gap-3 text-neutral-500">
            <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
            <span className="font-manrope text-[12px] tracking-wide uppercase leading-relaxed">
              Str. Industriilor 12<br />București, România
            </span>
          </div>
          <div className="flex items-center gap-3 text-neutral-500">
            <span className="material-symbols-outlined text-base">call</span>
            <a href="tel:+40700000000" className="font-manrope text-[12px] tracking-wide uppercase hover:text-white transition-colors">
              +40 700 000 000
            </a>
          </div>
          <div className="flex items-center gap-3 text-neutral-500">
            <span className="material-symbols-outlined text-base">mail</span>
            <a href="mailto:contact@pavcraft.ro" className="font-manrope text-[12px] tracking-wide uppercase hover:text-white transition-colors">
              contact@pavcraft.ro
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-900 px-8 md:px-16 py-6 max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between gap-4">
        <p className="font-manrope text-[11px] tracking-widest uppercase text-neutral-600">
          © {new Date().getFullYear()} PAVCRAFT. Toate drepturile rezervate.
        </p>
        <div className="flex flex-wrap gap-6">
          {legalLinks.map((l) => (
            <a
              key={l.label}
              href={l.to}
              className="font-manrope text-[11px] tracking-widest uppercase text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
