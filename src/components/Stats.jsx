export default function Stats() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container grid gap-5 md:grid-cols-4">
        <div className="rounded-xl bg-white/15 p-6 text-center">
          <h2 className="text-3xl font-bold">1 lakh+</h2>
          <p>Happy Patients</p>
        </div>
        <div className="rounded-xl bg-white/15 p-6 text-center">
          <h2 className="text-3xl font-bold">10000+</h2>
          <p>Successful Surgeries</p>
        </div>
        <div className="rounded-xl bg-white/15 p-6 text-center">
          <h2 className="text-3xl font-bold">4.4/5</h2>
          <p>Rating on Google</p>
        </div>
        <div className="rounded-xl bg-white/15 p-6 text-center">
          <h2 className="text-3xl font-bold">500+</h2>
          <p>Experienced Experts</p>
        </div>
      </div>
    </section>
  );
}