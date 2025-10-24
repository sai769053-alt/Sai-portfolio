import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === form.email);
    if (!user || user.password !== form.password) {
      setError("Invalid credentials");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ username: user.username, email: user.email }));
    localStorage.setItem("token", "fake-jwt-" + Date.now());
    navigate("/portfolio");
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Welcome back</h2>
        {error && <div className="error">{error}</div>}
        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Password
          <input name="password" type="password" value={form.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
        <p>
          New? <Link to="/signup">Create account</Link>
        </p>
      </form>
    </div>
  );
}
