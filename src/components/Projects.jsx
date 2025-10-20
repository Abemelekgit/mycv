import React from 'react'
import { motion } from 'framer-motion'

// NOTE: I made a reasonable assumption for the repository name (cpu-online-course).
// If the actual repo has a different name, update the `repo` value below or replace the link.
const projects = [
  {
    title: 'CPU Online Course',
    description: 'College online course platform for computer science students.',
    link: 'https://github.com/Abemelekgit/cpu_online_course',
    tags: ['React', 'Node', 'Tailwind']
  }
]

export default function Projects(){
  const container = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
  }
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="card" id="projects">
      <h2>Selected Projects</h2>
      <motion.div className="projects-grid" variants={container} initial="hidden" animate="show">
        {projects.map(p => (
          <motion.article key={p.title} className="project" variants={item} whileHover={{scale:1.02}} transition={{duration:0.18}}>
            <h3>{p.title}</h3>
            <p className="muted">{p.description}</p>
            <p className="muted"><strong>Tech:</strong> {p.tags}</p>
            <p>
              <a className="btn ghost" href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
            </p>
          </motion.article>
        ))}
      </motion.div>
      <p className="muted">More projects are in progress — upload their details or repo links and they'll appear here.</p>
    </section>
  )
}
