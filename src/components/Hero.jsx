export default function Hero() {
  return (
    <section
      className="relative main-img overflow-hidden py-24 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl font-black md:text-6xl">
          Prime Hospitals
        </h1>

        <p className="mt-4 text-lg md:text-2xl">
          Trusted healthcare, Modern treatments, Compassionate care.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    href="/book"
    className="rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-white hover:text-primary"
  >
    Book Appointment
  </a>

  <a
    href="/departments"
    className="rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-white hover:text-primary"
  >
    Our Departments
  </a>

  <a
    href="/doctors"
    className="rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-white hover:text-primary"
  >
    Meet Doctors
  </a>
</div>
      </div>
    </section>
  );
}