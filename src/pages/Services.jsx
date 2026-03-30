const services = [
  "Emergency Care",
  "ICU",
  "Lab Services",
  "Pharmacy",
  "Ambulance",
  "Surgery"
];

export default function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((s, i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </section>
  );
}