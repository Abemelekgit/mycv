import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setZoom(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleDownload = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/resume.pdf')
      if (!res.ok) {
        alert('Resume not found. Please add `resume.pdf` to the project `public/` folder.')
        return
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      // suggest a filename
      a.download = 'Abemelek_Negusu_Resume.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Error downloading resume:', err)
      alert('Could not download resume. Ensure `public/resume.pdf` exists and the dev server is running.')
    }
  }

  return (
    <motion.header className="header" initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
      <div className="profile">
        <motion.div className="avatar-wrapper" whileHover={{scale:1.03}} transition={{type:'spring', stiffness:200}}>
          {/* Place your photo at public/avatar.jpg */}
            <motion.picture whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 260 }}>
              <source srcSet="/avatar.webp" type="image/webp" />
              <img src="/avatar.jpg" alt="Abemelek Negusu Lemma" className="avatar" onClick={() => setZoom(true)} style={{cursor:'zoom-in'}}/>
            </motion.picture>
        </motion.div>
        <div className="meta">
          <h1>
            Abemelek Negusu Lemma <span className="muted" aria-label="age">• 22 years old</span>
          </h1>
          <p className="subtitle">Full-Stack Developer — Targeting Frontend (React) roles • BSc Computer Science (expected Feb 2026) • Engineering Graduate</p>
          <div className="ctas print-hide">
            <a className="btn" href="/resume.pdf" onClick={handleDownload}>Download Resume</a>
            <button className="btn ghost" onClick={() => window.print()}>Save as PDF</button>
            <a className="btn ghost" href="#contact">Contact</a>
          </div>
        </div>
      </div>
      {/* Zoom lightbox */}
      {zoom && (
        <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setZoom(false)}>
          <motion.div className="lightbox-inner" initial={{scale:0.9}} animate={{scale:1}} transition={{type:'spring',stiffness:200}} onClick={(e)=>e.stopPropagation()}>
            <picture>
              <source srcSet="/avatar.webp" type="image/webp" />
              <img src="/avatar.jpg" alt="Abemelek — zoom" className="lightbox-img" />
            </picture>
            <button className="lightbox-close" onClick={() => setZoom(false)}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  )
}
