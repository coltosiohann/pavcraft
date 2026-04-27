import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const sections = [
  { icon: 'category',       label: '6 Colecții complete' },
  { icon: 'straighten',     label: 'Dimensiuni și toleranțe' },
  { icon: 'palette',        label: 'Paletă de culori și finisaje' },
  { icon: 'science',        label: 'Specificații tehnice detaliate' },
  { icon: 'construction',   label: 'Ghid de instalare' },
  { icon: 'calculate',      label: 'Tabele de calcul suprafețe' },
];

export default function CatalogPDF() {
  return (
    <>
      {/* ── Hero Download Block ────────────────────────────────────── */}
      <section className="w-full bg-absolute-black min-h-screen flex items-center px-8 pt-24">
        <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-24">

          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-6">
              Catalog tehnic
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tighter text-pure-white uppercase leading-none mb-8">
              Catalog<br />
              <span className="text-ferrari-red">PAVCRAFT 2024</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-neutral-400 font-normal max-w-xl leading-relaxed mb-12">
              148 de pagini cu specificații tehnice complete, ghid de instalare, paletă de culori și dimensiuni pentru toate colecțiile PAVCRAFT. Actualizat pentru anul 2024.
            </motion.p>

            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <motion.a
              variants={fadeUp}
              href="#catalog-pdf"
              download
              className="inline-flex items-center justify-center gap-3 bg-ferrari-red text-pure-white border border-ferrari-red px-12 py-5 font-button-label text-button-label uppercase tracking-widest hover:bg-dark-red-hover hover:border-dark-red-hover transition-colors duration-300 text-base"
            >
              <span className="material-symbols-outlined">download</span>
              Descarcă catalogul (PDF, 18 MB)
            </motion.a>

            <motion.p variants={fadeUp} className="mt-6 font-micro-label text-micro-label text-mid-gray uppercase tracking-widest">
              Format PDF · 148 pagini · Actualizat feb. 2024
            </motion.p>
          </motion.div>

          {/* Catalog preview card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center gap-0 select-none"
          >
            <div className="w-full max-w-sm bg-near-black border border-neutral-800 shadow-2xl">
              {/* Mock cover */}
              <div className="bg-ferrari-red aspect-[3/4] flex flex-col items-center justify-center gap-6 p-8">
                <span className="material-symbols-outlined text-pure-white" style={{ fontSize: 64 }}>
                  auto_stories
                </span>
                <div className="text-center">
                  <p className="font-black text-pure-white text-3xl tracking-tighter uppercase leading-none">
                    PAVCRAFT
                  </p>
                  <p className="font-label-upper text-label-upper text-pure-white/70 uppercase tracking-widest mt-2">
                    Catalog Tehnic 2024
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {sections.map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-ferrari-red text-base">{s.icon}</span>
                      <span className="font-micro-label text-micro-label text-silver-gray text-xs leading-tight">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <section className="w-full bg-near-black py-24 px-8 border-t border-neutral-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="font-section-title text-section-title text-pure-white mb-2">
              Ai nevoie de o ofertă personalizată?
            </h2>
            <p className="font-body-bold text-body-bold text-neutral-400 font-normal">
              Catalogul conține prețuri de referință. Pentru un deviz exact, completează formularul de ofertă.
            </p>
          </div>
          <Link
            to="/cerere-oferta"
            className="shrink-0 inline-flex items-center gap-2 bg-ferrari-red text-pure-white border border-ferrari-red px-10 py-4 font-button-label text-button-label uppercase tracking-widest hover:bg-dark-red-hover transition-colors"
          >
            Solicită ofertă
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
