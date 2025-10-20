import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const handleDownload = async (e) => {
    e.preventDefault()
    try {
      // try HEAD first to avoid downloading the file twice
      const res = await fetch('/resume.pdf', { method: 'HEAD' })
      if (res.ok) {
        const win = window.open('/resume.pdf', '_blank')
        if (!win) alert('The PDF opened in a new tab — your browser may have blocked popups.')
      } else {
        alert('Resume file not found. Please add `resume.pdf` to the project `public/` folder.')
      }
    } catch (err) {
      console.error('Error fetching resume:', err)
      alert('Could not fetch resume. Make sure `public/resume.pdf` exists and the dev server is running.')
    }
  }

  return (
    <motion.header className="header" initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
      <div className="profile">
        <motion.div className="avatar-wrapper" whileHover={{scale:1.03}} transition={{type:'spring', stiffness:200}}>
          {/* Place your photo at public/avatar.jpg */}
          <img src="/avatar.jpg" alt="Abemelek Negusu Lemma" className="avatar" />
        </motion.div>
        <div className="meta">
          <h1>Abemelek Negusu Lemma</h1>
          <p className="subtitle">Full-Stack Developer — Targeting Frontend (React) roles • BSc Computer Science (expected Feb 2026) • Engineering Graduate</p>
          <div className="ctas print-hide">
            <a className="btn" href="/resume.pdf" onClick={handleDownload}>Download Resume</a>
            <button className="btn ghost" onClick={() => window.print()}>Save as PDF</button>
            <a className="btn ghost" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
