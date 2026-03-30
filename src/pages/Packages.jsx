import React from "react";

const packages = [
  { title: 'General Health Checkup', price: '₹1,499', features: ['Blood tests', 'ECG', 'Doctor consultation'] },
  { title: 'Executive Checkup', price: '₹3,999', features: ['Advanced tests', 'Nutrition plan', 'Follow-up'] },
  { title: 'Family Wellness', price: '₹5,999', features: ['Up to 4 persons', 'Lifestyle counselling', 'Specialist reports'] }
];

export default function Packages() {

  // Function called when button is clicked
  const bookPackage = (pkg) => {
    console.log("Booking package:", pkg.title);
    alert(`You booked: ${pkg.title} for ${pkg.price}`);
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-secondary mb-6">Packages</h1>
        <p className="text-gray-600 mb-8">Choose the care package that’s right for your family.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary">{pkg.title}</h2>
              <p className="text-xl font-bold text-secondary mt-2 mb-4">{pkg.price}</p>
              <ul className="mb-5 space-y-2 text-sm text-gray-600">
                {pkg.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <button
                onClick={() => bookPackage(pkg)}
                className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-teal-700"
              >
                Book now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}