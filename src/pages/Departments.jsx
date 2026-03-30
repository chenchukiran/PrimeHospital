const departments = [
  {
    name: 'General Medicine',
    description: 'Fever, infections, chronic illness management and routine adult check-ups.',
    color: 'bg-cyan-100 text-cyan-700',
    icon: '🩺'
  },
  {
    name: 'Cardiology',
    description: 'Heart disease, hypertension, ECG, 2D Echo, and preventive cardiac care.',
    color: 'bg-red-100 text-red-700',
    icon: '❤️'
  },
  {
    name: 'Orthopaedics',
    description: 'Bone fractures, joint pain, arthritis, sports injuries, and spine conditions.',
    color: 'bg-violet-100 text-violet-700',
    icon: '🦴'
  },
  {
    name: 'Paediatrics',
    description: 'Child health, developmental milestones, vaccinations, and paediatric illnesses.',
    color: 'bg-amber-100 text-amber-700',
    icon: '👶'
  },
  {
    name: 'Gynaecology',
    description: 'Women reproductive health, prenatal care, PCOS, and menstrual disorders.',
    color: 'bg-pink-100 text-pink-700',
    icon: '🌸'
  },
  {
    name: 'Diabetology',
    description: 'Type 1 & 2 diabetes management, HbA1c monitoring, and lifestyle guidance.',
    color: 'bg-green-100 text-green-700',
    icon: '🍎'
  },
  {
    name: 'Ophthalmology',
    description: 'Eye exams, vision correction, cataract screening, and diabetic retinopathy checks.',
    color: 'bg-sky-100 text-sky-700',
    icon: '👁️'
  },
  {
    name: 'ENT',
    description: 'Ear, nose and throat disorders including sinusitis, hearing loss, and tonsillitis.',
    color: 'bg-orange-100 text-orange-700',
    icon: '👂'
  },
  {
    name: 'Pulmonology',
    description: 'Asthma, COPD, sleep apnea, bronchitis, and lung function testing.',
    color: 'bg-teal-100 text-teal-700',
    icon: '🫁'
  },
  {
    name: 'Gastroenterology',
    description: 'Acidity, IBS, liver disorders, endoscopy consultations, and digestive health.',
    color: 'bg-purple-100 text-purple-700',
    icon: '🔬'
  }
];

export default function Departments() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-secondary mb-6">Our Departments</h1>
        <p className="text-gray-600 mb-8">Comprehensive specialty care with expert teams and dedicated services.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept) => (
            <article key={dept.name} className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg bg-white`}>
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${dept.color}`}>
                <span className="text-2xl">{dept.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">{dept.name}</h3>
              <p className="text-gray-600 mb-4">{dept.description}</p>
              <a href="/book" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                Book now <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
