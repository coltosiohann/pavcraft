import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { products, categories, categoryLabels } from '../data/products';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Products() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all' ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* ── Page Header ───────────────────────────────────────────── */}
      <section className="pt-36 pb-12 px-8 border-b border-neutral-800 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-4">
              Produse
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-section-title text-section-title text-pure-white uppercase">
              Catalog de produse
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-silver-gray font-normal max-w-2xl mt-4">
              Descoperă colecția noastră de piatră arhitecturală de înaltă performanță, inginerită pentru precizie și durabilitate.
            </motion.p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 shrink-0"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-label-upper text-label-upper uppercase pb-1 transition-colors ${
                  active === cat
                    ? 'text-pure-white border-b-2 border-pure-white'
                    : 'text-silver-gray border-b-2 border-transparent hover:text-pure-white hover:border-pure-white'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Product Grid ──────────────────────────────────────────── */}
      <section className="max-w-[1920px] mx-auto px-8 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-neutral-400 py-20">Niciun produs în această categorie.</p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center"
            >
              {filtered.map((product) => (
                <motion.div key={product.id} variants={fadeUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <button className="px-10 py-4 font-button-label text-button-label text-pure-white bg-transparent border border-pure-white hover:bg-pure-white hover:text-absolute-black transition-colors duration-300 uppercase tracking-widest">
            Încarcă mai multe
          </button>
        </motion.div>
      </section>

      <CTASection
        title="Ai nevoie de o recomandare de produs?"
        subtitle="Specialiștii noștri tehnici pot analiza cerințele proiectului tău și pot recomanda cele mai potrivite materiale."
      />
    </>
  );
}
