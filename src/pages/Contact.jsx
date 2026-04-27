import { useState } from 'react';
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

const projectTypes = [
  { value: '',             label: 'Selectează tipul proiectului' },
  { value: 'residential',  label: 'Rezidențial — curte / alee / terasă' },
  { value: 'commercial',   label: 'Comercial — parcare / spații publice' },
  { value: 'industrial',   label: 'Industrial — hale / platforme logistice' },
  { value: 'landscape',    label: 'Amenajare peisagistică' },
  { value: 'other',        label: 'Altul' },
];

const contactDetails = [
  { icon: 'location_on',  label: 'Sediu',      value: 'Str. Industriilor 42, Sector 6, București, 060044' },
  { icon: 'phone',        label: 'Telefon',    value: '+40 700 000 000' },
  { icon: 'mail',         label: 'Email',      value: 'contact@pavcraft.ro' },
  { icon: 'schedule',     label: 'Program',    value: 'Lun–Vin: 08:00–17:00' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', projectType: '', area: '', notes: '', file: null,
  });
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setForm((prev) => ({ ...prev, file: e.target.files[0] }));
      setFileName(e.target.files[0]?.name ?? '');
    } else {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="w-full bg-absolute-black pt-40 pb-16 px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
        >
          <motion.div variants={fadeUp}>
            <p className="font-label-upper text-label-upper text-mid-gray uppercase tracking-widest mb-6">
              Contact
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-pure-white uppercase leading-none max-w-4xl">
              Inițializează<br />
              <span className="text-ferrari-red">estimarea ta.</span>
            </h1>
          </motion.div>
          <motion.p variants={fadeUp} className="font-body-bold text-body-bold text-neutral-400 font-normal leading-relaxed lg:max-w-md">
            Completează formularul de mai jos. Toate câmpurile marcate cu * sunt obligatorii. Veți primi o evaluare tehnică gratuită în 48 de ore.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <section className="w-full bg-absolute-black py-20 px-8">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="lg:col-span-2"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start gap-6 py-16"
              >
                <span className="material-symbols-outlined text-ferrari-red text-5xl">check_circle</span>
                <h3 className="font-section-title text-section-title text-pure-white">
                  Mesaj trimis!
                </h3>
                <p className="font-body-bold text-body-bold text-neutral-400 font-normal leading-relaxed">
                  Vă mulțumim pentru mesaj. Echipa noastră vă va contacta în cel mult 48 de ore lucrătoare.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', projectType: '', area: '', notes: '', file: null }); setFileName(''); }}
                  className="font-label-upper text-label-upper text-ferrari-red uppercase tracking-widest border-b border-ferrari-red pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Trimite altă cerere
                </button>
              </motion.div>
            ) : (
              <motion.form variants={fadeUp} onSubmit={handleSubmit} className="flex flex-col gap-10">

                {/* ── Date de contact ──────────────────────────── */}
                <div>
                  <h2 className="font-section-title text-section-title text-pure-white mb-8 border-b border-neutral-800 pb-4">
                    Date de contact
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="sm:col-span-2">
                      <label className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest block mb-2">
                        Nume și prenume *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alexandru Ionescu"
                        className="w-full bg-transparent border border-neutral-700 text-pure-white font-body-bold text-body-bold px-4 py-3.5 focus:outline-none focus:border-ferrari-red transition-colors placeholder-neutral-600"
                      />
                    </div>
                    <div>
                      <label className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest block mb-2">
                        Număr de contact *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+40 7XX XXX XXX"
                        className="w-full bg-transparent border border-neutral-700 text-pure-white font-body-bold text-body-bold px-4 py-3.5 focus:outline-none focus:border-ferrari-red transition-colors placeholder-neutral-600"
                      />
                    </div>
                    <div>
                      <label className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest block mb-2">
                        Adresă email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@exemplu.ro"
                        className="w-full bg-transparent border border-neutral-700 text-pure-white font-body-bold text-body-bold px-4 py-3.5 focus:outline-none focus:border-ferrari-red transition-colors placeholder-neutral-600"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Detalii proiect ─────────────────────────── */}
                <div>
                  <h2 className="font-section-title text-section-title text-pure-white mb-8 border-b border-neutral-800 pb-4">
                    Detalii proiect
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="sm:col-span-2">
                      <label className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest block mb-2">
                        Clasificare proiect *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full bg-near-black border border-neutral-700 text-pure-white font-body-bold text-body-bold px-4 py-3.5 focus:outline-none focus:border-ferrari-red transition-colors appearance-none cursor-pointer"
                      >
                        {projectTypes.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest block mb-2">
                        Suprafață estimată (m²) *
                      </label>
                      <input
                        type="number"
                        name="area"
                        required
                        min="1"
                        value={form.area}
                        onChange={handleChange}
                        placeholder="ex: 250"
                        className="w-full bg-transparent border border-neutral-700 text-pure-white font-body-bold text-body-bold px-4 py-3.5 focus:outline-none focus:border-ferrari-red transition-colors placeholder-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest block mb-2">
                        Documentație șantier (opțional)
                      </label>
                      <label className="flex items-center gap-3 w-full border border-dashed border-neutral-700 hover:border-ferrari-red transition-colors px-4 py-3.5 cursor-pointer">
                        <span className="material-symbols-outlined text-mid-gray text-xl">upload_file</span>
                        <span className="font-body-bold text-body-bold text-neutral-500 truncate text-sm">
                          {fileName || 'Planuri, fotografii, documente (max 20 MB)'}
                        </span>
                        <input
                          type="file"
                          name="file"
                          accept=".pdf,.jpg,.jpeg,.png,.dwg,.zip"
                          onChange={handleChange}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest block mb-2">
                        Observații suplimentare
                      </label>
                      <textarea
                        name="notes"
                        rows={5}
                        value={form.notes}
                        onChange={handleChange}
                        placeholder="Cerințe specifice de material, termen dorit, condiții de acces etc."
                        className="w-full bg-transparent border border-neutral-700 text-pure-white font-body-bold text-body-bold px-4 py-3.5 focus:outline-none focus:border-ferrari-red transition-colors placeholder-neutral-600 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Submit ──────────────────────────────────── */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-ferrari-red text-pure-white border border-ferrari-red px-12 py-5 font-button-label text-button-label uppercase tracking-widest hover:bg-dark-red-hover hover:border-dark-red-hover transition-colors duration-300 text-base"
                  >
                    Inițializează estimarea
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <p className="mt-4 font-micro-label text-micro-label text-neutral-600 uppercase tracking-widest">
                    Răspuns în 48 de ore lucrătoare · Evaluare gratuită
                  </p>
                </div>
              </motion.form>
            )}
          </motion.div>

          {/* Sidebar — Steps + Contact details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="border border-neutral-800 p-8">
              <h3 className="font-ui-heading text-ui-heading text-pure-white mb-6 border-l-2 border-ferrari-red pl-4">
                Ce urmează?
              </h3>
              <ol className="flex flex-col gap-5">
                {[
                  'Trimiteți formularul cu detaliile proiectului.',
                  'Echipa noastră analizează cerința în 48h.',
                  'Primiți o evaluare tehnică și o estimare de cost.',
                  'Programăm o vizită de șantier (opțional).',
                  'Semnăm contractul și începem execuția.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="shrink-0 w-6 h-6 rounded-full border border-ferrari-red flex items-center justify-center font-black text-ferrari-red text-xs">
                      {i + 1}
                    </span>
                    <p className="font-body-bold text-body-bold text-neutral-400 font-normal text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div variants={fadeUp} className="border border-neutral-800 p-8">
              <p className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest mb-3">
                Preferi telefonic?
              </p>
              <p className="font-ui-heading text-ui-heading text-pure-white text-xl mb-1">
                +40 700 000 000
              </p>
              <p className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest">
                Lun–Vin · 08:00–17:00
              </p>
            </motion.div>

            {/* Contact details */}
            <motion.div variants={fadeUp} className="border border-neutral-800 p-8">
              <h3 className="font-ui-heading text-ui-heading text-pure-white mb-6 border-l-2 border-ferrari-red pl-4">
                Date de contact
              </h3>
              <div className="flex flex-col gap-5">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-ferrari-red text-xl shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="font-body-bold text-body-bold text-pure-white font-normal">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Preferați o consultație directă?"
        subtitle="Sunați-ne la +40 700 000 000 sau completați formularul de cerere de ofertă pentru un răspuns tehnic detaliat."
      />
    </>
  );
}
