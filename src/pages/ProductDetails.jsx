import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { getProductById } from '../data/products';
import CTASection from '../components/CTASection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-8">
        <span className="material-symbols-outlined text-ferrari-red text-6xl">search_off</span>
        <h1 className="font-section-title text-section-title text-pure-white text-center">
          Produsul nu a fost găsit
        </h1>
        <p className="text-neutral-400 text-center">ID-ul "{id}" nu există în catalog.</p>
        <Link to="/produse" className="bg-ferrari-red text-white px-8 py-3 uppercase font-manrope text-sm tracking-widest hover:bg-dark-red-hover transition-colors">
          Înapoi la catalog
        </Link>
      </div>
    );
  }

  const specs = [
    { label: 'Seria',             value: product.series },
    { label: 'Colecție',          value: product.collection },
    { label: 'Dimensiuni',        value: product.dimensions },
    { label: 'Finisaj',           value: product.finish },
    { label: 'Greutate',          value: product.weight },
    { label: 'Clasă rezistență',  value: product.resistanceClass },
  ];

  return (
    <>
      {/* ── Breadcrumb ─────────────────────────────────────────────── */}
      <div className="pt-28 pb-4 px-8 max-w-[1920px] mx-auto border-b border-neutral-900">
        <div className="flex items-center gap-2 font-label-upper text-label-upper text-mid-gray uppercase tracking-widest">
          <button onClick={() => navigate(-1)} className="hover:text-white transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Catalog
          </button>
          <span>/</span>
          <span className="text-pure-white">{product.name}</span>
        </div>
      </div>

      {/* ── Product Hero ──────────────────────────────────────────── */}
      <section className="w-full bg-absolute-black py-16 px-8">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="aspect-[4/3] bg-surface-container overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp}>
              <span className="font-micro-label text-micro-label text-ferrari-red uppercase tracking-widest block mb-3">
                Serie {product.series} — {product.collection} Collection
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-pure-white uppercase leading-none mb-6">
                {product.name}
              </h1>
              <p className="font-body-bold text-body-bold text-neutral-400 font-normal leading-relaxed">
                {product.description}
              </p>
            </motion.div>

            {/* Specs table */}
            <motion.div variants={fadeUp} className="border-t border-neutral-800">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between items-center py-4 border-b border-neutral-900">
                  <span className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest">
                    {s.label}
                  </span>
                  <span className="font-ui-heading text-ui-heading text-pure-white">
                    {s.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Applications */}
            {product.applications && (
              <motion.div variants={fadeUp}>
                <h3 className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-4">
                  Aplicații recomandate
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="bg-surface-container-high text-neutral-300 font-label-upper text-label-upper uppercase tracking-widest px-3 py-1.5"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/cerere-oferta"
                className="flex-1 flex items-center justify-center gap-2 bg-ferrari-red text-pure-white border border-ferrari-red px-8 py-4 font-button-label text-button-label uppercase tracking-widest hover:bg-dark-red-hover transition-colors"
              >
                Solicită ofertă
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                to="/catalog-pdf"
                className="flex-1 flex items-center justify-center gap-2 bg-transparent text-pure-white border border-pure-white px-8 py-4 font-button-label text-button-label uppercase tracking-widest hover:bg-pure-white hover:text-absolute-black transition-colors"
              >
                Descarcă catalog
                <span className="material-symbols-outlined text-sm">download</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
