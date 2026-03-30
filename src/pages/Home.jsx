import { useState } from "react";
import Hero from "../components/Hero";
import Centres from "../components/Centres";
import Stats from "../components/Stats";
import Infrastructure from "../components/Infrastructure";

const whyChooseUs = [
  "1 lakh+ Happy Patients",
  "Experienced Pool of Experts",
  "5 days free Follow-ups",
  "One-stop for all medical issues",
  "End-to-end treatment plan",
  "Emergency Care",
  "Comprehensive Care & Treatment",
  "Post Surgical Rehabilitation Programme",
  "At Home care services"
];

const doctors = [
  
  
  { name: 'Dr. Sharma', spec: 'Cardiologist ⚕️', qualifications: 'MBBS, MD Cardiology' },
  { name: 'Dr. Reddy', spec: 'Neurologist ⚕️', qualifications: 'MBBS, MD Neurology' },
  { name: 'Dr. Khan', spec: 'Orthopedic ⚕️', qualifications: 'MBBS, MS Orthopedics' },
  { name: 'Dr. Gupta', spec: 'Dermatologist ⚕️', qualifications: 'MBBS, MD Dermatology' },
  { name: 'Dr. Mehta', spec: 'Gynecologist ⚕️', qualifications: 'MBBS, MD Gynecology' },
  { name: 'Dr. Ali', spec: 'General Physician ⚕️', qualifications: 'MBBS, MD General Medicine' },
  { name: 'Dr. Singh', spec: 'ENT Specialist ⚕️', qualifications: 'MBBS, MS ENT' },
  { name: 'Dr. Rao', spec: 'Gastroenterologist ⚕️', qualifications: 'MBBS, MD Gastroenterology' },
  { name: 'Dr. Das', spec: 'Pulmonologist ⚕️', qualifications: 'MBBS, MD Pulmonology' },
  { name: 'Dr. Kiran', spec: 'Dentist 🦷', qualifications: 'BDS, MDS' },
  { name: 'Dr. John Doe', spec: 'Cardiologist ⚕️', qualifications: 'MBBS, MD Cardiology' },
  { name: 'Dr. Patel', spec: 'Pediatrician 👶⚕️', qualifications: 'MBBS, MD Pediatrics' }

];

const testimonials = [
  {
    name: "Vijay Singh",
    review: "I was suffering from type 2 diabetes for over 3 years. The doctors at Prime Hospitals guided me through effective treatment and lifestyle changes. My sugar levels are now under control!",
    rating: 5
  },
  {
    name: "Karishma Justy",
    review: "Dr. Jane Smith offered an insulin-free treatment for my Type 2 diabetes. The results were remarkable and I have been diabetic-free ever since.",
    rating: 5
  },
  {
    name: "Adharsh Krishna",
    review: "Dr. Alex Johnson was able to find the root cause of my breathing issue quickly. With accurate treatment, I recovered fully. Highly recommend!",
    rating: 5
  }
];

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, perhaps send to backend or show message
    setMessage("Consultation request submitted!");
    setName("");
    setPhone("");
  };

  return (
    <>
      
      
        <Hero style={{ height: "500px" }} />
      <Centres />
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-6">Why Prime Hospitals?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item} className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-6">Our Expert Doctors & Surgeons</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.qualifications}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-6">Patient Testimonies</h2>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Stats />
      <Infrastructure />
    </>
  );
}