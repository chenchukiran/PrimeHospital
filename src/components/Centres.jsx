const centres = [
  
]
export default function Centres() {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <h2 className="text-3xl font-bold text-secondary mb-6">36+ Departments Treat All Kind of Emergencies</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {centres.map((centre) => (
            <div key={centre.name} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm hover:shadow-md">
              <img src={centre.image} alt={centre.name} className="mb-4 h-32 w-full rounded-lg object-cover" />
              <h3 className="font-semibold">{centre.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}