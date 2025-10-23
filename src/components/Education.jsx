import React from 'react'

export default function Education(){
  return (
    <section className="card" id="education">
      <h2>Education</h2>
      <ul className="timeline">
        <li>
          <div className="time">Engineering — Completed</div>
          <div className="body">
            <h3>Engineering Degree</h3>
            <p className="muted">Addis Ababa Science and Technology University</p>
          </div>
        </li>
        <li>
          <div className="time">Computer Science — In Progress</div>
          <div className="body">
            <h3>BSc Computer Science</h3>
            <p className="muted">CPU College — Expected: Mid-February 2026</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
