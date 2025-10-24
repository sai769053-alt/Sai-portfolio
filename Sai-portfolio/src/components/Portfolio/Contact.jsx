import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }
    setStatus("Message sent (demo). Thank you!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {status && <div className="status">{status}</div>}
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>
        <button type="submit">Send message</button>
      </form>
    </section>
  );
}
