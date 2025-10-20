import React from 'react'
import { motion } from 'framer-motion'

// NOTE: I made a reasonable assumption for the repository name (cpu-online-course).
// If the actual repo has a different name, update the `repo` value below or replace the link.
const projects = [
  {
    title: 'CPU Online Course',
    description: 'An online computer science course platform built for my college. Contains course materials, video lectures, and quizzes to help students learn core CS topics.',
    tech: 'React, Node.js, PostgreSQL',
    // updated repo path provided by you
    repo: 'https://github.com/Abemelek2/cpu_online_courses',
    fallback: 'https://github.com/Abemelek2'
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
            <p className="muted"><strong>Tech:</strong> {p.tech}</p>
            <p>
              <a className="btn ghost" href={p.repo} target="_blank" rel="noreferrer">View on GitHub</a>
              {/* fallback link to profile */}
              <a className="btn" href={p.fallback} target="_blank" rel="noreferrer" style={{marginLeft:8}}>Profile</a>
            </p>
          </motion.article>
        ))}
      </motion.div>
      <p className="muted">More projects are in progress — upload their details or repo links and they'll appear here.</p>
    </section>
  )
}
