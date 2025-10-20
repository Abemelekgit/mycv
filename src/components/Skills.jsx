import React from 'react'

const skills = [
  {name: 'JavaScript', level: 'Advanced'},
  {name: 'React', level: 'Advanced'},
  {name: 'Next.js', level: 'Intermediate'},
  {name: 'Tailwind CSS', level: 'Intermediate'},
  {name: 'PostgreSQL', level: 'Intermediate'},
  {name: 'HTML/CSS', level: 'Advanced'},
  {name: 'Git', level: 'Advanced'},
  {name: 'Data Structures & Algorithms', level: 'Intermediate'}
]

export default function Skills(){
  return (
    <section className="card" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(s => (
          <div key={s.name} className="skill"><strong>{s.name}</strong> — <span className="muted">{s.level}</span></div>
        ))}
      </div>
    </section>
  )
}
