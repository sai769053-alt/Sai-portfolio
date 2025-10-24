import React from "react";

const projects = [
  { id: 1, title: "Project One", desc: "A small React app", link: "#" },
  { id: 2, title: "Project Two", desc: "Design + code", link: "#" },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.id}>
            <div className="project-image">Image</div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
