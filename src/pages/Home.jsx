import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import CTASection from '../components/CTASection';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

/* ── Animation variants ─────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

/* ── Assets ──────────────────────────────────────────────────────────── */
const HERO_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBdZQs5TOvkRNe_xSOEFAfUO70N9oiPn1nYizQA8pbkf3TZ3nZ8SMxG9YL2f9h975Qjr4_VKnMMvg33Be-iB3QJBUWSUMu5YUTL6uauX7hkhxkO-nYpjjj66lDUlFAXzgjd_YY6H8x03iVRoxIUVTIur50q1ovjXT_R8P5yrkqRf0wSeBTHCiinM2baIhwrDTblQ0VO6fnzN_ZQki--oFqg010vVcGqQPmfS5I8QCnUgKF_lsjRlah-D-8E0wKb0LdZWwUpQuB1lLg';
const DETAIL_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBr_saHvzv4HdKiT7iC90JK9UBjG8EzD8bKjbmuyo5XyJm9NiPqbSg5LA_fezne_y4JGl5wbBCX4BCegBjCn964uIJZhAbF65XfvMpQK23qqsZayKhEo-OR2xdrmSS3BJrOQonp2FHvRjNZXN16QDdZ_2ByyTctf2DpuT_D54_4X4QI-SBRvW9c32dZiLUk72Y2MSZS4LkzqmYtguWR56OJhUxu3rncY-EQF_5tmjPaTV3Qom0igYoU0NeK5cRY346cTQoyJaoNAc0';
const PLAZA_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBdz1aBOtvPBCdA81kaECz-2r-mjXJ4FX9m_tcIc-h9C495leqgb-UcmNIkq1hd5E02nzgJXP8lhf_TwnxUm48sg0wGqU9gqzJtcWKYMCeVkzsEyDaOvDDxxug-y-fAeKZ0eNO3cs5uj5mWtV0tTmGOvAdKnW5KtvofrG2vSHpo4vXFBaRUjNxMPY7yOWD40VP91x56JPzUPZQIB5-1-8pEwAsvjd584md68mKEF5xARHDUxLeua_i4nf59YeFvgRjchR83cTMplHQ';

const benefits = [
  { icon: 'precision_manufacturing', title: 'Precizie', value: '±1mm',   desc: 'Toleranțe de milimetru la fiecare îmbinare și nivel.' },
  { icon: 'verified_user',           title: 'Garanție', value: '10 ani', desc: 'Materiale certificate cu performanță demonstrată pe termen lung.' },
  { icon: 'architecture',            title: 'Arhitectural', value: '100%', desc: 'Fiecare proiect respectă viziunea arhitecturală în totalitate.' },
  { icon: 'compress',                title: 'Rezistență', value: '>60MPa', desc: 'Compresiune testată lot cu lot în laborator acreditat.' },
];



export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO — Exaggerated Minimalism: oversized type, cinematic image,
          bottom-anchored content, extreme negative space
         ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full flex flex-col justify-end overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        {/* Background image + overlays */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            src={HERO_BG}
            alt="Pavaj arhitectural de înaltă clasă"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Content — pushed to bottom with huge padding */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-[1920px] mx-auto w-full px-8 md:px-16 pb-20 md:pb-28"
        >

          {/* Oversized display heading — Cinzel for luxury/architecture */}
          <motion.h1
            variants={fadeUp}
            className="leading-[0.88] mb-8 uppercase"
            style={{
              fontFamily: "'Cinzel', 'Bodoni Moda', serif",
              fontSize: 'clamp(2.8rem, 8vw, 9rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: '#fff',
            }}
          >
            Turnăm<br />
            Rezistență<span style={{ color: '#E05A00' }}>.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body-bold text-body-bold text-neutral-400 font-normal max-w-lg mb-10 leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)' }}
          >
            Soluții de piatră inginerești pentru spații care cer precizie absolută și durabilitate fără compromis.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/cerere-oferta"
              className="site-cta inline-flex items-center justify-center text-pure-white px-10 py-4 font-button-label text-button-label uppercase tracking-widest transition-all duration-300"
            >
              Solicită ofertă
              <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
            </Link>
            <Link
              to="/proiecte"
              className="ghost-cta inline-flex items-center justify-center text-pure-white px-10 py-4 font-button-label text-button-label uppercase tracking-widest transition-all duration-300 border border-white/20 hover:border-white/60"
            >
              Explorează proiecte
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        >
          <div className="w-px h-8 bg-white/30" />
          <span className="material-symbols-outlined text-white/40 text-sm animate-bounce">south</span>
        </motion.div>
      </section>



      {/* ══════════════════════════════════════════════════════════════════
          PHILOSOPHY — Editorial side-by-side with directional reveals
         ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-32 md:py-40 px-8 md:px-16 bg-absolute-black">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text — slides from left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="order-2 lg:order-1"
          >
            <motion.p variants={fadeRight} className="font-micro-label text-micro-label text-neutral-500 uppercase tracking-[0.2em] mb-6">
              Filozofia noastră
            </motion.p>
            <motion.h2
              variants={fadeRight}
              className="mb-8 leading-[1.05]"
              style={{
                fontFamily: "'Cinzel', 'Bodoni Moda', serif",
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#fff',
              }}
            >
              Precizie inginerească în fiecare piatră.
            </motion.h2>
            <motion.p variants={fadeRight} className="font-body-bold text-body-bold text-neutral-400 font-normal mb-10 leading-relaxed max-w-lg">
              Abordăm pavajul nu ca pe o simplă suprafață, ci ca pe o componentă arhitecturală critică. Fiecare placă, fiecare îmbinare, fiecare finisaj este calculat la toleranțe exacte.
            </motion.p>

            {/* Spec grid */}
            <motion.div variants={fadeRight} className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-neutral-800 pt-8 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex flex-col gap-1">
                  <p className="font-micro-label text-micro-label text-neutral-500 uppercase tracking-[0.2em]">{b.title}</p>
                  <p
                    className="text-pure-white"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: '1.3rem', fontWeight: 600 }}
                  >
                    {b.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeRight}>
              <Link
                to="/despre-noi"
                className="inline-flex items-center gap-2 text-pure-white font-button-label text-button-label uppercase tracking-widest hover:text-ferrari-red transition-colors border-b border-neutral-600 hover:border-ferrari-red pb-1"
              >
                Descoperă procesul nostru
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image — slides from right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeLeft}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                src={DETAIL_IMG}
                alt="Detaliu precizie pavaj"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
            {/* Floating accent badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 hidden lg:block"
            >
              <div className="w-32 h-32 flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #E05A00, #C24D00)' }}>
                <p className="text-pure-white text-center font-micro-label text-micro-label uppercase tracking-[0.15em] leading-loose">
                  Precizie<br />Definită
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          BENEFITS — Full-bleed cards with icons + descriptions
         ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-absolute-black py-28 px-8 md:px-16 border-t border-neutral-800/60">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
          >
            <motion.div variants={fadeUp}>
              <p className="font-micro-label text-micro-label text-neutral-500 uppercase tracking-[0.2em] mb-3">
                De ce PAVCRAFT
              </p>
              <h2
                style={{
                  fontFamily: "'Cinzel', 'Bodoni Moda', serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#fff',
                }}
              >
                Standardul nostru.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                to="/certificate-calitate"
                className="inline-flex items-center gap-2 text-neutral-400 font-button-label text-button-label uppercase tracking-widest hover:text-pure-white transition-colors"
              >
                Certificări
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800/60"
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="bg-absolute-black p-8 md:p-10 flex flex-col gap-5 group cursor-default"
              >
                <span className="material-symbols-outlined text-ferrari-red text-2xl group-hover:scale-110 transition-transform duration-300 origin-left">
                  {b.icon}
                </span>
                <h4 className="font-ui-heading text-ui-heading text-pure-white">{b.title}</h4>
                <p className="font-body-bold text-body-bold text-neutral-500 font-normal text-sm leading-relaxed">{b.desc}</p>
                <div className="mt-auto pt-4 border-t border-neutral-800/60">
                  <span
                    className="text-ferrari-red"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', fontWeight: 600 }}
                  >
                    {b.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PRODUCT HIGHLIGHTS — Stagger grid with Projects-style header
         ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-absolute-black py-28 px-8 md:px-16 border-t border-neutral-800/60">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
          >
            <motion.div variants={fadeUp}>
              <p className="font-micro-label text-micro-label text-neutral-500 uppercase tracking-[0.2em] mb-3">
                Colecții
              </p>
              <h2
                style={{
                  fontFamily: "'Cinzel', 'Bodoni Moda', serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#fff',
                }}
              >
                Seria Arhitecturală.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                to="/produse"
                className="inline-flex items-center gap-2 text-neutral-400 font-button-label text-button-label uppercase tracking-widest hover:text-pure-white transition-colors"
              >
                Toate produsele
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 justify-items-center"
          >
            {featured.map((p) => (
              <motion.div key={p.id} variants={scaleIn}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PORTFOLIO PREVIEW — Cinematic, bottom-anchored, oversized type
         ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full flex items-end overflow-hidden"
        style={{ minHeight: '70vh' }}
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            src={PLAZA_IMG}
            alt="Piața Metropolitană — proiect de referință"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative z-10 max-w-[1920px] mx-auto w-full px-8 md:px-16 pb-20 md:pb-28"
        >
          <motion.p variants={fadeUp} className="font-micro-label text-micro-label text-neutral-400 uppercase tracking-[0.2em] mb-4">
            Proiect de referință
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mb-6 max-w-3xl leading-[0.95]"
            style={{
              fontFamily: "'Cinzel', 'Bodoni Moda', serif",
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#fff',
            }}
          >
            Piața Metropolitană
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-neutral-400 font-normal max-w-xl mb-8 leading-relaxed">
            Peste 2.400 m² de gresie cuarțitică pozată cu precizie milimetrică. Cel mai ambițios proiect comercial din portofoliul nostru.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/proiecte"
              className="ghost-cta inline-flex items-center gap-2 text-pure-white px-10 py-4 font-button-label text-button-label uppercase tracking-widest transition-all duration-300 border border-white/20 hover:border-white/60"
            >
              Explorează portofoliul
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
