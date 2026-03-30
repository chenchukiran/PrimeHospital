const facilities = [
  "MRI Scan",
  "CT Scan",
  "ICU",
  "Operation Theatre",
  "Ventilator",
  "Cath Lab"
];

export default function Infrastructure() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-secondary mb-6">Our Infrastructure</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div key={facility} className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm hover:shadow-md">{facility}</div>
          ))}
        </div>
      </div>
    </section>
  );
}