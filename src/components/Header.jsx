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

  // Vite serves files in `public/` from the base URL. Use BASE_URL so the image
  // resolves correctly when the site is deployed under a subpath.
  const baseUrl = (import.meta && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/'

  const handleDownload = async (e) => {
    e.preventDefault()
    // Fallback: open a printable resume window so the user can Save as PDF from the print dialog.
    const resumeHtml = `
      <html>
        <head>
          <title>Abemelek Negusu Lemma — Resume</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <style>
            body{font-family:Inter, Arial, sans-serif;color:#111;padding:24px}
            h1{margin:0 0 6px 0}
            p.muted{color:#555}
            .section{margin-top:18px}
            ul{margin:6px 0 0 18px}
          </style>
        </head>
        <body>
          <div style="display:flex;gap:16px;align-items:center">
            <img src="${baseUrl}avatar.jpg" alt="Abemelek" style="width:110px;height:110px;border-radius:999px;object-fit:cover;border:1px solid #ddd" />
            <div>
              <h1>Abemelek Negusu Lemma</h1>
              <p class="muted">22 years old • Email: abemelek.negusu@aastustudent.edu.et • Phone: +251 951 106 508 • Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div class="section">
            <h2>Profile</h2>
            <p>Lifelong tech enthusiast finishing a BSc in Computer Science (expected Feb 2026). Passionate about building polished, user-focused frontend experiences and reliable full-stack systems. Strong fundamentals in data structures and algorithms, collaborative team player, and experience delivering customer-focused solutions. Actively seeking remote opportunities and open to remote or hybrid roles where I can contribute to distributed teams.</p>
          </div>
          <div class="section">
            <h2>Experience</h2>
            <p><strong>IT Consultant (Intern)</strong> — Addis Ababa Land Holding Registration and Information Agency (2 months)</p>
            <ul>
              <li>Assisted with IT tasks and contributed to internal tools and process improvements.</li>
            </ul>
          </div>
          <div class="section">
            <h2>Projects</h2>
            <p><strong>CPU Online Course</strong> — College online course platform (React, Node, Tailwind)</p>
            <p><strong>Blood Donation Management System</strong> — Full-stack hospital system (React, Node, PostgreSQL)</p>
          </div>
          <div class="section">
            <h2>Education</h2>
            <p>Engineering Degree — Addis Ababa Science and Technology University</p>
            <p>BSc Computer Science (in progress) — CPU College (Expected: Mid-February 2026)</p>
          </div>
          <div class="section">
            <h2>Skills</h2>
            <p>JavaScript, React, Next.js, Node.js, Tailwind CSS, PostgreSQL, HTML/CSS, Git</p>
          </div>
          <script>
            // Auto-open print dialog so user can save as PDF
            window.onload = function(){ setTimeout(()=>{ window.print() }, 300) }
          </script>
        </body>
      </html>
    `

    const w = window.open('', '_blank')
    if (!w) {
      alert('Please allow popups to download the resume (the site opens a new window to print/save as PDF).')
      return
    }
    w.document.open()
    w.document.write(resumeHtml)
    w.document.close()
  }

  return (
    <motion.header className="header" initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
      <div className="profile">
        <motion.div className="avatar-wrapper" whileHover={{scale:1.03}} transition={{type:'spring', stiffness:200}}>
          {/* Place your photo at public/avatar.jpg */}
            <motion.picture whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 260 }}>
              <source srcSet={`${baseUrl}avatar.webp`} type="image/webp" />
              <img src={`${baseUrl}avatar.jpg`} alt="Abemelek Negusu Lemma" className="avatar" onClick={() => setZoom(true)} style={{cursor:'zoom-in'}}/>
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
              <source srcSet={`${baseUrl}avatar.webp`} type="image/webp" />
              <img src={`${baseUrl}avatar.jpg`} alt="Abemelek — zoom" className="lightbox-img" />
            </picture>
            <button className="lightbox-close" onClick={() => setZoom(false)}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  )
}
