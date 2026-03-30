const doctors = [
  { name: 'Dr. Sharma', spec: 'Cardiologist' },
  { name: 'Dr. Reddy', spec: 'Neurologist' },
  { name: 'Dr. Khan', spec: 'Orthopedic' },
  { name: 'Dr. Gupta', spec: 'Dermatologist' },
  { name: 'Dr. Mehta', spec: 'Gynecologist' },
  { name: 'Dr. Ali', spec: 'General Physician' },
  { name: 'Dr. Singh', spec: 'ENT Specialist' },
  { name: 'Dr. Rao', spec: 'Gastroenterologist' },
  { name: 'Dr. Das', spec: 'Pulmonologist' },
  { name: 'Dr. Kiran', spec: 'dentist' },
  { name: 'Dr. John Doe', spec: 'Md Cardiologist' },
  { name: 'Dr. Patel', spec: 'Pediatrician' }
];

export default function Doctors() {

  const handleBookAppointment = (doctor) => {
    alert(`Booking appointment with ${doctor.name} (${doctor.spec})`);
    
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-secondary mb-6">Our Doctors</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-800">
                {doctor.name}
              </h3>
              <p className="text-gray-600">{doctor.spec}</p>

              <button
                onClick={() => handleBookAppointment(doctor)}
                className="mt-4 rounded-md bg-primary px-4 py-2 text-white hover:bg-teal-700"
              >
                Book Appointment
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}