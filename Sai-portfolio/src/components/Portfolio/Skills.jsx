import React from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Node.js", level: 70 },
];

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-name">{s.name}</div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${s.level}%` }} />
            </div>
            <div className="skill-level">{s.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}
