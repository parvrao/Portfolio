import { Link } from 'react-router-dom';
import { projects } from '../data/projects';



function HeroStat({ value, label }) {
  return (
    <div style={{ textAlign: 'center', minWidth: 80 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,44px)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <style>{`
        @media (max-width: 600px) {
          .hero-name { font-size: 13vw !important; }
          .hero-tags { flex-wrap: wrap !important; }
          .hero-tags .status-pill { display: none !important; }
          .hero-para { font-size: 15px !important; max-width: 100% !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a, .hero-buttons div { width: 100% !important; text-align: center !important; box-sizing: border-box !important; }
          .hero-stats { gap: 20px !important; justify-content: space-between !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .cta-section { flex-direction: column !important; align-items: flex-start !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .project-detail-hero { flex-direction: column !important; }
          .project-sidebar { min-width: unset !important; width: 100% !important; }
        }
        @media (max-width: 400px) {
          .hero-name { font-size: 11vw !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 'var(--nav-h)' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px', opacity: 0.3,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 40, paddingBottom: 60, width: '100%' }}>
          <div style={{ maxWidth: 860 }}>

            {/* Tags row */}
            <div className="hero-tags" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap', animation: 'fadeUp 0.6s ease forwards' }}>
              <span className="tag tag-accent">MBA Candidate · UCR · 2026</span>
              <span className="tag">STEM Designated</span>
              <span className="status-pill" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text3)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                Open to Summer 2026 Roles
              </span>
            </div>

            {/* Name — clamp fixes overflow on all screen sizes */}
            <h1 className="hero-name" style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 7vw, 88px)',
              lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--text)',
              animation: 'fadeUp 0.6s 0.1s ease both', wordBreak: 'break-word',
            }}>
              Parv<br />
              <span style={{ color: 'var(--text3)' }}>Hitendrakumar</span><br />
              Barot
              <span style={{ color: 'var(--accent)', animation: 'blink 1.2s infinite' }}>.</span>
            </h1>

            {/* Paragraph */}
            <p className="hero-para" style={{
              fontSize: 'clamp(15px, 2vw, 20px)', color: 'var(--text2)',
              maxWidth: 560, lineHeight: 1.6, marginTop: 28, fontWeight: 300,
              animation: 'fadeUp 0.6s 0.2s ease both',
            }}>
              Business analyst, supply chain strategist, and consulting-track MBA. I turn messy datasets into decisions that move the needle — with Python, SQL, and a hypothesis-driven approach that consulting firms actually use.
            </p>

            {/* Buttons */}
            <div className="hero-buttons" style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.3s ease both' }}>
              <Link to="/projects" style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px 28px', background: 'var(--accent)', color: '#ffffff',
                borderRadius: 'var(--radius)', border: '1px solid var(--accent)',
                transition: 'all 0.2s', textDecoration: 'none', display: 'block',
              }}>View Projects</Link>
              <a href="mailto:pbaro003@ucr.edu" style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px 28px', background: 'transparent', color: 'var(--text)',
                borderRadius: 'var(--radius)', border: '1px solid var(--border2)',
                transition: 'all 0.2s', textDecoration: 'none', display: 'block',
              }}>Get in Touch</a>
            </div>

            {/* Stats */}
            <div className="hero-stats" style={{
              display: 'flex', gap: 32, marginTop: 48, paddingTop: 40,
              borderTop: '1px solid var(--border)',
              animation: 'fadeUp 0.6s 0.4s ease both',
              flexWrap: 'wrap', justifyContent: 'flex-start',
            }}>
              <HeroStat value="3.7" label="GPA (STEM MBA)" />
              <HeroStat value="#1" label="of 78 startups" />
              <HeroStat value="40+" label="students mentored" />
              <HeroStat value="7" label="portfolio projects" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '14px 0', background: 'var(--bg2)' }}>
        <div style={{ display: 'flex', animation: 'marquee 20s linear infinite', width: 'max-content' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ display: 'flex', gap: 40, paddingRight: 40, whiteSpace: 'nowrap' }}>
              {['Python', 'SQL', 'Tableau', 'Supply Chain', 'S&OP', 'Demand Forecasting', 'Business Analytics', 'Consulting', 'SHAP', 'Power BI', 'A/B Testing', 'Financial Modeling'].map(s => (
                <span key={s} style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text3)' }}>{s}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <section style={{ padding: 'var(--section-gap) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-eyebrow">Selected Work</div>
              <h2 className="section-title">{projects.length} Projects.<br />Seven Industries.</h2>
            </div>
            <Link to="/projects" style={{
              fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)',
              display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s', textDecoration: 'none',
            }}>View All →</Link>
          </div>

          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 1, background: 'var(--border2)' }}>
            {projects.map((p) => {
              return (
                <Link key={p.id} to={`/projects/${p.id}`} className="hover-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{
                    background: 'var(--bg2)', padding: 24, height: '100%',
                    border: '1px solid var(--border2)', borderRadius: 0,
                    cursor: 'pointer',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{p.number}</span>
                      <span className="tag">{p.industry}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 20 }}>{p.subtitle}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                      <div>
                        <div style={{ fontSize: 20, fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)' }}>{p.heroStat}</div>
                        <div style={{ fontSize: 11, color: 'var(--text3)', maxWidth: 160, lineHeight: 1.3 }}>{p.heroLabel}</div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.05em' }}>View →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container cta-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="section-eyebrow">Available for Roles</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3vw,34px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2 }}>
              Business Analyst · Supply Chain · Consulting
            </h2>
            <p style={{ color: 'var(--text2)', marginTop: 10, fontSize: 14 }}>Graduating June 2026. Open to full-time roles and internships.</p>
          </div>
          <a href="mailto:pbaro003@ucr.edu" style={{
            fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '14px 28px', background: 'var(--accent)', color: '#ffffff',
            borderRadius: 'var(--radius)', border: '1px solid var(--accent)',
            whiteSpace: 'nowrap', transition: 'background 0.2s', textDecoration: 'none',
          }}>Reach Out →</a>
        </div>
      </section>
    </div>
  );
}
