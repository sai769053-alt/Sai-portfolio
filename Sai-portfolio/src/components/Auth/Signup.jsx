import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError("Please fill all fields.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Enter a valid email.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.email === form.email)) {
      setError("Email already registered. Please login.");
      return;
    }
    users.push({ ...form, id: Date.now() });
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("user", JSON.stringify({ username: form.username, email: form.email }));
    localStorage.setItem("token", "fake-jwt-" + Date.now());
    navigate("/portfolio");
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Create account</h2>
        {error && <div className="error">{error}</div>}
        <label>
          Username
          <input name="username" value={form.username} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Password
          <input name="password" type="password" value={form.password} onChange={handleChange} />
        </label>
        <button type="submit">Sign up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
