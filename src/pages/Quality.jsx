import { motion } from 'motion/react';
import CTASection from '../components/CTASection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const certificates = [
  {
    code: 'EN 1338',
    title: 'Pavele de beton',
    body: 'Standard european pentru pavele de beton pentru uz pietonal și rutier — stabilitate dimensională, rezistență la îngheț-dezgheț și abraziune.',
    year: '2016',
    file: '#',
  },
  {
    code: 'EN 1339',
    title: 'Plăci de beton',
    body: 'Cerințe și metode de testare pentru plăci de beton prefabricate utilizate în lucrări de pavaj exterior.',
    year: '2016',
    file: '#',
  },
  {
    code: 'ISO 9001:2015',
    title: 'Sistem de management al calității',
    body: 'Certificare internațională care atestă că toate procesele noastre — de la selecția materiei prime la instalare finală — respectă standardele de calitate globale.',
    year: '2016',
    file: '#',
  },
  {
    code: 'CE Marking',
    title: 'Marcaj CE',
    body: 'Conformitate cu Directiva Produse de Construcție (CPR) a Uniunii Europene, obligatorie pentru toate produsele destinate pieței europene.',
    year: '2018',
    file: '#',
  },
];

const guarantees = [
  { icon: 'verified_user',           title: '10 ani garanție structurală',    desc: 'Toate produsele noastre sunt garantate pentru integritate structurală pe o perioadă de 10 ani de la instalare.' },
  { icon: 'water_drop',              title: 'Rezistență la îngheț clasă F4',  desc: 'Testele noastre depășesc cerințele minime EN — materialele noastre suportă peste 150 cicluri îngheț-dezgheț fără degradare.' },
  { icon: 'compress',                title: 'Rezistență la compresiune >60MPa', desc: 'Fiecare lot de producție este testat în laborator acreditat pentru a confirma rezistența la compresiune.' },
  { icon: 'science',                 title: 'Testare lot cu lot',              desc: 'Nu livrăm niciun produs fără buletin de analiză emis de laboratorul nostru intern certificat ISO 17025.' },
];

export default function Quality() {
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
            Calitate & Certificări
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tighter text-pure-white uppercase leading-none max-w-4xl">
            Standarde care<br />
            <span className="text-ferrari-red">nu negociază.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-neutral-400 font-normal max-w-2xl mt-8 leading-relaxed">
            Fiecare produs PAVCRAFT este certificat conform standardelor europene și internaționale. Documentele sunt disponibile pentru descărcare — transparența face parte din calitate.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Certificates Grid (White) ──────────────────────────────── */}
      <section className="w-full bg-pure-white py-32 px-8">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16"
          >
            <motion.h2 variants={fadeUp} className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-4">
              Documente certificate
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-absolute-black font-card-heading">
              Certificări obținute
            </motion.h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {certificates.map((cert) => (
              <motion.div key={cert.code} variants={fadeUp} className="border border-border-gray p-10 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-micro-label text-micro-label text-ferrari-red uppercase tracking-widest block mb-2">
                      {cert.code} — {cert.year}
                    </span>
                    <h4 className="font-ui-heading text-ui-heading text-absolute-black text-xl">
                      {cert.title}
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-ferrari-red text-3xl shrink-0">
                    workspace_premium
                  </span>
                </div>
                <p className="font-body-bold text-body-bold text-dark-surface font-normal leading-relaxed text-sm">
                  {cert.body}
                </p>
                <a
                  href={cert.file}
                  download
                  className="inline-flex items-center gap-2 text-absolute-black font-label-upper text-label-upper uppercase tracking-widest hover:text-ferrari-red transition-colors border-b border-absolute-black hover:border-ferrari-red pb-1 self-start"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Descarcă certificatul
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Quality Guarantees (Dark) ──────────────────────────────── */}
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
              Garanțiile noastre
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-pure-white font-card-heading">
              Performanță măsurabilă.
            </motion.h3>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {guarantees.map((g) => (
              <motion.div key={g.title} variants={fadeUp} className="flex gap-6 p-8 border border-neutral-800">
                <span className="material-symbols-outlined text-ferrari-red text-3xl shrink-0 mt-1">
                  {g.icon}
                </span>
                <div>
                  <h4 className="font-ui-heading text-ui-heading text-pure-white mb-3">{g.title}</h4>
                  <p className="font-body-bold text-body-bold text-neutral-400 font-normal text-sm leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ai nevoie de documentație tehnică?"
        subtitle="Echipa noastră poate furniza specificații tehnice complete, fișe de produs și rapoarte de testare pentru orice produs din catalog."
      />
    </>
  );
}
