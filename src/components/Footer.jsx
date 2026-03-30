export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">Prime Hospitals</h3>
          <p className="mt-2 text-sm text-slate-200">Delivering world-class healthcare with advanced diagnostics, expert doctors, and compassionate service.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-200">
            <li><a href="/" className="hover:text-teal-200">Home</a></li>
            <li><a href="/about" className="hover:text-teal-200">About</a></li>
            <li><a href="/departments" className="hover:text-teal-200">Departments</a></li>
            <li><a href="/packages" className="hover:text-teal-200">Packages</a></li>
            <li><a href="/contact" className="hover:text-teal-200">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Info</h3>
          <p className="mt-2 text-sm text-slate-200">📍 195, Indira Nagar, Bangalore, India</p>
          <p className="mt-1 text-sm text-slate-200">📞 +91 9845012345</p>
          <p className="mt-1 text-sm text-slate-200">✉️ contact@primehospitals.com</p>
          <p className="mt-1 text-sm text-slate-200">⏱️ 24/7 Availability</p>
        </div>
      </div>
    </footer>
  );
}