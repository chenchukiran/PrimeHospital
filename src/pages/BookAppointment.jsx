import { useState } from "react";

export default function BookAppointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("Cardiology");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show alert with form details
    alert(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDepartment: ${department}\nDate: ${date}`
    );

    // Clear form after clicking OK
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setDepartment("Cardiology");
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-secondary mb-4">
          Book Appointment
        </h1>
        <p className="text-gray-600 mb-6">
          Fill out the form and our staff will contact you within 30 minutes.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-md border border-slate-300 px-4 py-3"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="w-full rounded-md border border-slate-300 px-4 py-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="w-full rounded-md border border-slate-300 px-4 py-3"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <select
              className="w-full rounded-md border border-slate-300 p-3"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Oncology</option>
              <option>Pediatrics</option>
            </select>

            <input
              className="w-full rounded-md border border-slate-300 px-4 py-3"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full rounded-md bg-primary px-4 py-3 font-semibold text-white hover:bg-teal-700"
            type="submit"
          >
            Submit
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-secondary">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}