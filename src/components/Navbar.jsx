import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-primary/95 px-4 py-3 shadow-lg backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wQrNSR9b3tmqET7lwcsup9mpDtq-PNMqew&s"
  alt="Prime Hospital Logo"
  className="h-14 w-14 rounded-full bg-white p-1"
/>
          <span className="text-14xl font-bold">Prime Hospitals</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-m text-white md:text-base">
          <Link to="/" className="hover:text-teal-200 " >Home</Link>
          <Link to="/about" className="hover:text-teal-200">About</Link>
          <Link to="/departments" className="hover:text-teal-200">Departments</Link>
          <Link to="/packages" className="hover:text-teal-200">Packages</Link>
          <Link to="/doctors" className="hover:text-teal-200">Doctors</Link>
          <Link to="/contact" className="hover:text-teal-200">Contact</Link>
          <Link to="/login" className="rounded-md bg-white/10 px-3 py-1 hover:bg-white/20">Login</Link>
        </div>
      </div>
    </nav>
  );
}