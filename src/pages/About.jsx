import { motion } from 'motion/react';
import CTASection from '../components/CTASection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const values = [
  {
    icon: 'precision_manufacturing',
    title: 'Precizie',
    desc: 'Fiecare proiect este executat la toleranțe de milimetru. Nu există "aproape suficient" în dicționarul nostru — există doar perfect sau nefinalizat.',
  },
  {
    icon: 'handshake',
    title: 'Integritate',
    desc: 'Prețuri transparente, termene respectate, comunicare deschisă. Clientul nostru știe întotdeauna exact unde se află proiectul său.',
  },
  {
    icon: 'eco',
    title: 'Durabilitate',
    desc: 'Materialele pe care le folosim sunt selectate nu doar pentru performanță imediată, ci pentru a rezista deceniilor fără degradare.',
  },
];

const timeline = [
  { year: '2008', event: 'Fondarea PAVCRAFT în București cu o echipă de 5 specialiști.' },
  { year: '2012', event: 'Prima colaborare cu un proiect rezidențial de peste 1.000 m².' },
  { year: '2016', event: 'Obținerea certificărilor europene EN 1338 și ISO 9001.' },
  { year: '2019', event: 'Extinderea capacității de producție și deschiderea atelierului de Granit.' },
  { year: '2022', event: 'Depășirea pragului de 500 de proiecte finalizate.' },
  { year: '2024', event: 'Lansarea seriei PAVCRAFT Premium cu 6 colecții noi.' },
];

const team = [
  { name: 'Alexandru Ionescu', role: 'Director General', initials: 'AI' },
  { name: 'Maria Constantin',  role: 'Arhitect Șef',      initials: 'MC' },
  { name: 'Radu Popa',         role: 'Inginer Structuri',  initials: 'RP' },
  { name: 'Elena Gheorghe',    role: 'Manager Proiecte',   initials: 'EG' },
];

export default function About() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="w-full bg-absolute-black pt-40 pb-24 px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-[1920px] mx-auto"
        >
          <motion.p variants={fadeUp} className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-6">
            Despre noi
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tighter text-pure-white uppercase leading-none max-w-4xl">
            Construim<br />
            <span className="text-ferrari-red">de la fundație.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-neutral-400 font-normal max-w-2xl mt-8 leading-relaxed">
            Din 2008, PAVCRAFT a transformat suprafețe brute în opere de inginerie de precizie. Fiecare proiect este o declarație despre ce înseamnă să faci lucrurile cum trebuie.
          </motion.p>
        </motion.div>
      </section>

      {/* ── History / Timeline (White) ────────────────────────────── */}
      <section className="w-full bg-pure-white py-32 px-8">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-6">
              Istoricul nostru
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl font-bold text-absolute-black font-card-heading leading-tight mb-8">
              Șaisprezece ani de precizie.
            </motion.h3>
            <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-dark-surface font-normal leading-relaxed mb-6">
              PAVCRAFT a pornit dintr-o convingere simplă: România merită pavaj de calitate europeană, executat cu știința și disciplina unui atelier elvețian. Am crescut pas cu pas, refuzând să sacrificăm standardele pentru volum.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-mid-gray font-normal leading-relaxed">
              Astăzi, cu peste 500 de proiecte finalizate și certificări europene, suntem brandul de referință în pavajul rezidențial și comercial de înaltă clasă din România.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col gap-0"
          >
            {timeline.map((item, idx) => (
              <motion.div key={item.year} variants={fadeUp} className="flex gap-8 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-ferrari-red shrink-0 mt-1" />
                  {idx < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border-gray mt-2" />
                  )}
                </div>
                <div>
                  <p className="font-label-upper text-label-upper text-ferrari-red uppercase tracking-widest mb-1">
                    {item.year}
                  </p>
                  <p className="font-body-bold text-body-bold text-near-black font-normal leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values (Dark) ─────────────────────────────────────────── */}
      <section className="w-full bg-near-black py-32 px-8">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-4">
              Valorile noastre
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-pure-white font-card-heading">
              Trei principii. Nicio excepție.
            </motion.h3>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="flex flex-col gap-6 p-10 border border-neutral-800">
                <span className="material-symbols-outlined text-ferrari-red text-4xl">{v.icon}</span>
                <h4 className="font-section-title text-section-title text-pure-white">{v.title}</h4>
                <p className="font-body-bold text-body-bold text-neutral-400 font-normal leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team Carousel (White) ───────────────────────────────────── */}
      <section className="w-full bg-pure-white py-32 overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-4">
              Echipa
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-absolute-black font-card-heading">
              Oamenii din spatele preciziei.
            </motion.h3>
          </motion.div>
        </div>

        {/* Carousel track */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-24 md:w-48 z-10" style={{ background: 'linear-gradient(to right, #F4F2EA, transparent)' }} />
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-24 md:w-48 z-10" style={{ background: 'linear-gradient(to left, #F4F2EA, transparent)' }} />

          <motion.div
            className="flex gap-16 w-max py-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {/* Duplicate the team array for seamless looping */}
            {[...team, ...team, ...team, ...team].map((member, idx) => (
              <div
                key={`${member.name}-${idx}`}
                className="flex flex-col items-center gap-4 text-center shrink-0 w-48"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-24 h-24 rounded-full bg-near-black flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl font-black text-pure-white tracking-tight">
                    {member.initials}
                  </span>
                </motion.div>
                <div>
                  <h4 className="font-ui-heading text-ui-heading text-absolute-black">{member.name}</h4>
                  <p className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-[1920px] mx-auto px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mt-12"
          >
            + 40 de specialiști în producție și instalare
          </motion.p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
