import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import CTASection from '../components/CTASection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA1x8J_GuCxh2C-B4DlOBss6iPGTDX0zqmqQVLzsQjn74OHZ1CgGWA1UKddYRMInHXoz14FZ2xntfhGEpTac1PHNcBwuxrr3AZvNleVQwuyjKPntrKiBp7MfWidfwZJvD-pbObevLQVAjTN9UA88fp_mCAcwmFmLObIE0Z0E94jXo6nMvQ9mG_mDGeS5H7V0kdUU5XBSkm9tns4o3YfQTF6t9f49OT4T0wvJHPDr_ul0Q1XGLF8alvCaJDptoSUdqE9xCPPRYBpIZc';

const snagov   = projects.find((p) => p.id === 'snagov-estate');
const transylvania = projects.find((p) => p.id === 'transylvania-retreat');
const bucharest = projects.find((p) => p.id === 'bucharest-corporate');

export default function Projects() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        className="relative w-full flex items-end pb-16 px-8 overflow-hidden"
        style={{ minHeight: '60vh', paddingTop: '100px' }}
      >
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Portofoliu proiecte PAVCRAFT" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 max-w-[1920px] mx-auto w-full"
        >
          <motion.h1 variants={fadeUp} className="font-section-title text-section-title text-pure-white mb-4 uppercase tracking-tight">
            Eleganță inginerească
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-silver-gray font-normal max-w-2xl leading-relaxed">
            O galerie selectivă a celor mai solicitante instalații ale noastre. Pavaj de precizie care redefinește peisajul rezidențial și comercial din România.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Project 1: Snagov Estate (Dark) ──────────────────────── */}
      {snagov && (
        <section className="w-full py-24 px-8 bg-absolute-black">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="order-2 md:order-1"
            >
              <motion.p variants={fadeRight} className="font-label-upper text-label-upper text-mid-gray mb-3 uppercase tracking-widest">
                {snagov.type}
              </motion.p>
              <motion.h2 variants={fadeRight} className="font-section-title text-section-title text-pure-white mb-6">
                {snagov.nameRo}
              </motion.h2>
              <motion.p variants={fadeRight} className="font-body-bold text-body-bold text-silver-gray font-normal mb-8 leading-relaxed">
                {snagov.description}
              </motion.p>
              <motion.div variants={fadeRight} className="grid grid-cols-2 gap-6 border-t border-neutral-800 pt-6">
                <div>
                  <p className="font-micro-label text-micro-label text-mid-gray mb-1">MATERIAL</p>
                  <p className="font-ui-heading text-ui-heading text-pure-white">{snagov.material}</p>
                </div>
                <div>
                  <p className="font-micro-label text-micro-label text-mid-gray mb-1">SUPRAFAȚĂ</p>
                  <p className="font-ui-heading text-ui-heading text-pure-white">{snagov.area}</p>
                </div>
                <div>
                  <p className="font-micro-label text-micro-label text-mid-gray mb-1">AN</p>
                  <p className="font-ui-heading text-ui-heading text-pure-white">{snagov.year}</p>
                </div>
                <div>
                  <p className="font-micro-label text-micro-label text-mid-gray mb-1">LOCAȚIE</p>
                  <p className="font-ui-heading text-ui-heading text-pure-white">{snagov.location}</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeLeft}
              className="order-1 md:order-2 h-[500px] overflow-hidden bg-surface-container"
            >
              <img src={snagov.imagePrimary} alt={snagov.nameRo} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Project 2: Transylvania Retreat — Before/After (White) ── */}
      {transylvania && (
        <BeforeAfterSection transylvania={transylvania} />
      )}

      {/* ── Project 3: Bucharest Corporate (Dark) ─────────────────── */}
      {bucharest && (
        <section className="w-full py-24 px-8 bg-absolute-black">
          <div className="max-w-[1920px] mx-auto flex flex-col gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col md:flex-row justify-between items-end border-b border-neutral-800 pb-6"
            >
              <motion.div variants={fadeUp}>
                <p className="font-label-upper text-label-upper text-mid-gray mb-2 uppercase tracking-widest">
                  {bucharest.type}
                </p>
                <h2 className="font-section-title text-section-title text-pure-white">
                  {bucharest.nameRo}
                </h2>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  to="/contact"
                  className="font-button-label text-button-label text-pure-white flex items-center gap-1 hover:text-ferrari-red transition-colors mt-4 md:mt-0"
                >
                  Solicită detalii <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <motion.div variants={fadeUp} className="col-span-1 md:col-span-2 h-[400px] overflow-hidden bg-surface-container">
                <img src={bucharest.imagePrimary} alt={bucharest.nameRo} className="w-full h-full object-cover" />
              </motion.div>
              <motion.div variants={fadeUp} className="h-[400px] overflow-hidden bg-surface-container hidden md:block">
                <img src={bucharest.imageSecondary} alt="Detaliu îmbinare" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-4"
            >
              <motion.div variants={fadeUp}>
                <h3 className="font-ui-heading text-ui-heading text-pure-white mb-4 border-l-2 border-ferrari-red pl-4">
                  Provocarea
                </h3>
                <p className="font-body-bold text-body-bold text-silver-gray font-normal text-sm leading-relaxed">
                  {bucharest.challenge}
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h3 className="font-ui-heading text-ui-heading text-pure-white mb-4 border-l-2 border-ferrari-red pl-4">
                  Soluția
                </h3>
                <p className="font-body-bold text-body-bold text-silver-gray font-normal text-sm leading-relaxed">
                  {bucharest.solution}
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col justify-center">
                <Link
                  to="/cerere-oferta"
                  className="bg-transparent border border-pure-white text-pure-white px-6 py-3 font-button-label text-button-label hover:bg-pure-white hover:text-absolute-black transition-colors uppercase tracking-widest text-center text-sm"
                >
                  Proiect similar?
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      <CTASection
        title="Proiectul tău poate fi următorul."
        subtitle="Contactează-ne cu detaliile proiectului și primești o evaluare tehnică gratuită în 48 de ore."
      />
    </>
  );
}

/* ── Interactive Before / After Slider ───────────────────────────────── */
function BeforeAfterSection({ transylvania }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchStart = useCallback((e) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section className="w-full py-24 px-8 bg-pure-white">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="font-section-title text-section-title text-absolute-black mb-2"
          >
            {transylvania.nameRo}
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest"
          >
            Înainte &amp; după — precizie demonstrată
          </motion.p>
        </motion.div>

        {/* Interactive Before/After slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            ref={containerRef}
            className="relative w-full h-[500px] md:h-[600px] overflow-hidden border border-border-gray select-none"
            style={{ cursor: 'ew-resize' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* After image (full, behind) */}
            <div className="absolute inset-0 z-0">
              <img
                src={transylvania.imageAfter}
                alt="După"
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-ui-overlay px-3 py-1.5 text-pure-white font-micro-label text-micro-label uppercase tracking-widest z-10">
                După
              </div>
            </div>

            {/* Before image (clipped to slider position) */}
            <div
              className="absolute inset-0 z-10 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={transylvania.imageBefore}
                alt="Înainte"
                className="absolute inset-0 h-full object-cover grayscale opacity-90 pointer-events-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw', maxWidth: 'none' }}
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-ui-overlay px-3 py-1.5 text-pure-white font-micro-label text-micro-label uppercase tracking-widest">
                Înainte
              </div>
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 z-20"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-0.5 h-full bg-white/80" />
            </div>

            {/* Drag handle */}
            <div
              className="absolute top-1/2 z-30 flex items-center justify-center"
              style={{ left: `${sliderPos}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl border-2 border-white/50 backdrop-blur-sm transition-transform hover:scale-110">
                <span className="material-symbols-outlined text-absolute-black" style={{ fontSize: 20 }}>
                  swap_horiz
                </span>
              </div>
            </div>

            {/* Instruction hint */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-ui-overlay px-4 py-2 rounded-full flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-white text-sm">swipe</span>
              <span className="font-micro-label text-micro-label text-white uppercase tracking-widest">
                Trage pentru a compara
              </span>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-center font-body-bold text-body-bold text-secondary-container font-normal leading-relaxed"
        >
          {transylvania.description}
        </motion.p>
      </div>
    </section>
  );
}

