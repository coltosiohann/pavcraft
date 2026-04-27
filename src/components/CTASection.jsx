import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function CTASection({
  label = 'Acționează acum',
  title = 'Gata să începem proiectul tău?',
  subtitle = 'Echipa noastră tehnică este pregătită să analizeze specificațiile și să livreze o estimare completă în 48 de ore.',
  cta = 'Solicită ofertă',
  ctaTo = '/cerere-oferta',
}) {
  return (
    <section className="premium-cta w-full py-24 px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="premium-cta-inner max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
      >
        <motion.span variants={fadeUp} className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest">
          {label}
        </motion.span>
        <motion.h2 variants={fadeUp} className="premium-heading text-3xl md:text-5xl font-bold text-pure-white font-card-heading leading-tight">
          {title}
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-neutral-400 font-normal leading-relaxed max-w-xl">
          {subtitle}
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            to={ctaTo}
            className="site-cta inline-flex items-center justify-center text-pure-white px-10 py-4 font-button-label text-button-label uppercase tracking-widest transition-colors duration-300"
          >
            {cta}
            <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
