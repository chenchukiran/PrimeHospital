import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (password !== "1234") {
        alert(" Password must be 1234");
      } else {
     
        localStorage.setItem("token", "dummy-token");

        alert(`✅ Login Successful!\nWelcome ${email}`);
      }


      setEmail("");
      setPassword("");
      setLoading(false);
    }, 800); 
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue
        </p>

        <form onSubmit={onSubmit} className="space-y-5">

          <input
            type="email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary"
            placeholder="Enter password (1234)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary py-3 text-white font-semibold hover:bg-teal-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </section>
  );
}

export default Login;