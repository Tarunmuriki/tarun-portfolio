import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Layers3, Sparkles, GraduationCap, BriefcaseBusiness,
  ExternalLink, MapPin
} from "lucide-react";
import { experiences, projects, skillGroups } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"], ["Work", "#work"], ["Skills", "#skills"],
    ["Experience", "#experience"], ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Tarun home">
          <span className="brand-mark">T<span>.</span></span>
          <span>tarun<span className="brand-muted">.dev</span></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <div className="availability"><span className="availability-dot" /> Open to opportunities</div>
            <p className="hero-kicker">HELLO, I'M TARUN <span>✳</span></p>
            <h1>Building digital<br /><span className="gradient-text">experiences</span><br />with purpose.</h1>
            <p className="hero-description">
              Frontend-focused developer interested in thoughtful UI, useful products,
              and AI-powered experiences. I enjoy turning ideas into interfaces people love to use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="mailto:murikitharun@gmail.com">Get in touch <Mail size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Tarunmuriki" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/muriki-tarun-b760592bb/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <span><MapPin size={16} /> India</span>
            </div>
          </motion.div>

          <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="hero-glow" />
            <div className="profile-frame">
              <img src="/profile.jpg" alt="Tarun portrait" className="profile-image" />
              <div className="profile-badge"><span className="live-dot" /> Available for collaboration</div>
            </div>
            <div className="floating-chip chip-react"><span>⚛</span> React</div>
            <div className="floating-chip chip-design"><Sparkles size={15} /> UI / UX</div>
            <div className="floating-chip chip-code"><Code2 size={15} /> Clean code</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Developer by craft. Product thinker by curiosity." />
          <div className="about-grid">
            <motion.div className="about-main glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="card-icon"><Sparkles size={20} /></span>
              <h3>I care about the details that make a product feel effortless.</h3>
              <p>
                I'm a final-year Computer Science Engineering student specializing in AI & ML
                at Parul University. My work spans web application development, AI-powered
                projects, databases, and software testing.
              </p>
              <p>
                I'm especially interested in frontend engineering, responsive interfaces,
                usability, and the connection between design decisions and real user needs.
              </p>
              <div className="about-tags"><span>Curious learner</span><span>Problem solver</span><span>Team collaborator</span></div>
            </motion.div>
            <div className="about-side">
              <div className="stat-card glass-card">
                <GraduationCap size={21} />
                <strong> B.Tech CSE</strong>
                <span>AI & Machine Learning</span>
                <small>Parul University · 2023–Present</small>
              </div>
              <div className="stat-card glass-card">
                <Layers3 size={21} />
                <strong>Product-minded</strong>
                <span>From idea to interface</span>
                <small>Web · AI · User experience</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap work-section" id="work">
          <SectionHeading eyebrow="SELECTED PROJECTS" title="Things I've helped bring to life." note="A selection of projects exploring AI, learning, and useful digital experiences." />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article className={`project-card ${project.accent}`} key={project.name}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="project-visual">
                  <div className="visual-top"><span>{project.category}</span><span>{project.number}</span></div>
                  <div className="visual-window">
                    <div className="window-bar"><span /><span /><span /></div>
                    {project.name === "CareerMap" ? (
                      <div className="mock-landing mock-careermap">
                        <div className="mock-topbar">
                          <span className="mock-brand">CareerMap</span>
                          <div className="mock-nav">
                            <span>HOW IT WORKS</span>
                            <span>DAILY GAME</span>
                            <span>TEAM</span>
                          </div>
                          <div className="mock-actions"><button>Log In</button><button className="primary">Get Started</button></div>
                        </div>
                        <div className="mock-badge">NEXT-GEN AI CAREER INTELLIGENCE PLATFORM</div>
                        <h4>Architect Your<br /><span>Professional</span><br />Evolution.</h4>
                        <p>Build your career roadmap...</p>
                        <div className="mock-cta-row"><button className="primary">Get Started</button><button>Explore interactive demo</button></div>
                      </div>
                    ) : project.name === "Lexicon" ? (
                      <div className="mock-chat">
                        <div className="mock-chat-top">LEXICON AI ASSISTANT</div>
                        <div className="chat-bubble user-bubble">Summarize this chapter</div>
                        <div className="chat-bubble answer-bubble">Here are the key concepts from your document...</div>
                        <div className="chat-input">Ask anything about your material <span>↗</span></div>
                      </div>
                    ) : (
                      <div className="mock-landing mock-nexuslearn">
                        <div className="mock-topbar">
                          <span className="mock-brand">NexusLearn</span>
                          <div className="mock-nav">
                            <span>Features</span>
                            <span>Pricing</span>
                          </div>
                          <div className="mock-actions"><button>Login</button><button className="primary">Get Started</button></div>
                        </div>
                        <div className="mock-badge">Next-Gen AI Learning Platform</div>
                        <h4>Master the Future<br /><span>with AI-Powered</span><br />Education.</h4>
                        <p>NexusLearn combines cutting-edge AI tutoring...</p>
                        <div className="mock-cta-row"><button className="primary">Start Learning Now</button></div>
                      </div>
                    )}
                  </div>
                  <div className="visual-orb" />
                </div>
                <div className="project-info">
                  <div className="project-title-row"><h3>{project.name}</h3><span>{project.category}</span></div>
                  <p className="project-description">{project.description}</p>
                  <p className="project-details">{project.details}</p>
                  <div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <ExternalLink size={15} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Tools I use to turn ideas into reality." note="A growing toolkit across frontend, programming, backend, and AI." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.div className="skill-card glass-card" key={group.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-pills">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <SectionHeading eyebrow="WHERE I'VE LEARNED" title="Experience that keeps me growing." />
          <div className="timeline">
            {experiences.map((item, index) => (
              <motion.div className="timeline-item" key={item.role}
                initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.12 }}>
                <div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
                <div className="timeline-content glass-card">
                  <div className="timeline-head"><div><h3>{item.role}</h3><span>{item.company}</span></div><time>{item.date}</time></div>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-wrap highlights-section">
          <SectionHeading eyebrow="MILESTONES" title="A few things worth celebrating." />
          <div className="highlights-grid">
            <div className="highlight-card glass-card"><span className="highlight-symbol">↗</span><div><small>RESEARCH PUBLICATION</small><h3>CareerMap Research Paper</h3><p>Published in the International Journal of Computer Science Engineering Techniques (IJCSE).</p><a href="https://www.ijcsejournal.org/careermap-comparative-ai-framework-resume-parsing-skill-gap-analysis/" target="_blank" rel="noreferrer">Read publication <ArrowUpRight size={14} /></a></div></div>
            <div className="highlight-card glass-card"><span className="highlight-symbol">✳</span><div><small>HACKATHON</small><h3>Parul Environment Hackathon 2026</h3><p>Contributed to BioRoute, an AI-powered agricultural waste-to-energy solution.</p></div></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-decoration">✳</div>
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let's make something<br /><span className="gradient-text">meaningful.</span></h2>
            <p>I'm interested in frontend engineering, product-focused teams, and opportunities to keep learning.</p>
            <a className="button button-primary" href="mailto:murikitharun@gmail.com">Say hello <ArrowUpRight size={17} /></a>
            <div className="contact-links">
              <a href="mailto:murikitharun@gmail.com"><Mail size={16} /> Email</a>
              <a href="https://github.com/Tarunmuriki" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a href="https://www.linkedin.com/in/muriki-tarun-b760592bb/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">T<span>.</span></span><span>tarun<span className="brand-muted">.dev</span></span></a>
        <span>Designed & built with curiosity by Tarun.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
