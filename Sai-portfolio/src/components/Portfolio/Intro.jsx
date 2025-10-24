import React from "react";

export default function Intro() {
  const user = JSON.parse(localStorage.getItem("user")) || { username: "Your Name" };
  return (
    <section className="intro">
      <div className="intro-left">
        <h1>{user.username}</h1>
        <h3>Frontend Developer • ReactJS</h3>
        <p>Design-focused developer building beautiful, accessible web apps.</p>
        <div className="intro-links">
          <a href="#" target="_blank" rel="noreferrer">Resume</a>
          <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="intro-right">
        <div className="avatar-placeholder">Photo</div>
      </div>
    </section>
  );
}
