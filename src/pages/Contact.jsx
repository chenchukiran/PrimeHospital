import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    alert(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );


    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section className="bg-white py-16">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-6">
            For appointment help, patient support, and emergencies, we are
            available 24/7.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>📍 195, Indira Nagar, Bangalore, India</li>
            <li>📞 080 42800900</li>
            <li>📞 +91 9845012345</li>
            <li>🕒 24/7 Availability</li>
            <li>✉️ support@primehospital.com</li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >
          <div className="grid gap-4">
            <input
              className="rounded-md border border-slate-300 p-3"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="rounded-md border border-slate-300 p-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="rounded-md border border-slate-300 p-3"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              className="rounded-md border border-slate-300 p-3"
              rows="5"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-3 font-semibold text-white hover:bg-teal-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}