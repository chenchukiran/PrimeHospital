import { useEffect, useState } from 'react';

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem('token');
      if (!token) return setMessage('Please login first.');

      const res = await fetch('http://localhost:5000/api/appointments/user', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) return setMessage('Failed to load appointments');

      const data = await res.json();
      setAppointments(data);
    };
    load();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <section className="section">
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      {message && <p>{message}</p>}
      <ul>
        {appointments.map((a) => (
          <li key={a._id}>
            Doctor: {a.doctor?.name || 'N/A'}, Date: {new Date(a.date).toLocaleString()}, Slot: {a.slot}, Status: {a.status}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Dashboard;
