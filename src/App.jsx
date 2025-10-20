import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app-root">
      <div className="container">
        <Header />
        <main className="main-grid">
          <section className="content">
            <About />
            <Experience />
            <Projects />
            <Education />
          </section>
          <aside className="sidebar">
            <Skills />
            <Contact />
          </aside>
        </main>
      </div>
      <footer className="footer">© {new Date().getFullYear()} Abemelek Negusu Lemma — Built with React</footer>
    </div>
  )
}
