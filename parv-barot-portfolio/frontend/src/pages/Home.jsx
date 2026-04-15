import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

function HeroStat({ value, label }) {
  return (
    <div style={{
      textAlign: 'center', padding: '20px 24px',
      borderRadius: 20,
      boxShadow: 'var(--neu-flat-sm)',
      background: 'var(--bg2)',
      minWidth: 90,
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,36px)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 6, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <style>{`
        @media (max-width: 600px) {
          .hero-name  { font-size: 13vw !important; }
          .hero-tags  { flex-wrap: wrap !important; }
          .status-pill { display: none !important; }
          .hero-para  { font-size: 15px !important; max-width: 100% !important; }
          .hero-btns  { flex-direction: column !important; }
          .hero-btns a { width: 100% !important; text-align: center !important; box-sizing: border-box !important; }
          .hero-stats { gap: 12px !important; }
          .proj-grid  { grid-template-columns: 1fr !important; }
          .cta-wrap   { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 400px) { .hero-name { font-size: 11vw !important; } }
        .btn-primary:hover  { opacity: 0.88 !important; }
        .btn-secondary:hover { box-shadow: var(--neu-hover) !important; }
      `}</style>

      {/* ── Hero ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 'var(--nav-h)' }}>

        {/* Dot grid background */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, #b8bec7 1px, transparent 1px)',
          backgroundSize: '28px 28px', opacity: 0.45,
        }} />

        {/* Quirky floating blobs — neumorphic raised shapes */}
        <div style={{
          position: 'absolute', top: '14%', right: '7%', width: 200, height: 200, zIndex: 0, pointerEvents: 'none',
          borderRadius: '62% 38% 72% 28% / 44% 56% 44% 56%',
          boxShadow: 'var(--neu-elevated)', background: 'var(--bg2)',
          animation: 'float 6s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '18%', right: '16%', width: 110, height: 110, zIndex: 0, pointerEvents: 'none',
          borderRadius: '38% 62% 48% 52% / 58% 42% 58% 42%',
          boxShadow: 'var(--neu-flat)', background: 'var(--bg2)',
          animation: 'float 8s ease-in-out infinite 2s',
        }} />
        <div style={{
          position: 'absolute', top: '52%', right: '4%', width: 64, height: 64, zIndex: 0, pointerEvents: 'none',
          borderRadius: '50%',
          boxShadow: 'var(--neu-flat-sm)', background: 'var(--bg2)',
          animation: 'float 5s ease-in-out infinite 1s',
        }} />
        {/* Small spinning square — the "quirky" touch */}
        <div style={{
          position: 'absolute', top: '28%', right: '22%', width: 32, height: 32, zIndex: 0, pointerEvents: 'none',
          borderRadius: 8,
          boxShadow: 'var(--neu-flat-xs)', background: 'var(--bg2)',
          animation: 'spin-slow 12s linear infinite',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 40, paddingBottom: 60, width: '100%' }}>
          <div style={{ maxWidth: 780 }}>

            {/* Tags */}
            <div className="hero-tags" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, flexWrap: 'wrap', animation: 'fadeUp 0.6s ease forwards' }}>
              <span className="tag tag-accent" style={{ fontFamily: 'var(--font-display)' }}>MBA Candidate · UCR · 2026</span>
              <span className="tag" style={{ fontFamily: 'var(--font-display)' }}>STEM Designated</span>
              <span className="status-pill" style={{
                display: 'flex', alignItems: 'center', gap: 7, fontSize: 12,
                color: 'var(--text3)', padding: '6px 14px',
                borderRadius: 50, boxShadow: 'var(--neu-flat-xs)', background: 'var(--bg2)',
                fontFamily: 'var(--font-body)',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2d6a4f', display: 'inline-block', flexShrink: 0 }} />
                Open to Summer 2026 Roles
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-name" style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 7vw, 86px)',
              lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--text)',
              animation: 'fadeUp 0.6s 0.1s ease both', wordBreak: 'break-word',
            }}>
              Parv<br />
              <span style={{ color: 'var(--text3)' }}>Hitendrakumar</span><br />
              Barot
              <span style={{ color: 'var(--accent)', animation: 'blink 1.2s infinite' }}>.</span>
            </h1>

            {/* Para */}
            <p className="hero-para" style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'var(--text2)',
              maxWidth: 520, lineHeight: 1.7, marginTop: 28, fontWeight: 400,
              animation: 'fadeUp 0.6s 0.2s ease both',
            }}>
              Business analyst, supply chain strategist, and consulting-track MBA. I turn messy datasets into decisions that move the needle — with Python, SQL, and a hypothesis-driven approach that consulting firms actually use.
            </p>

            {/* Buttons */}
            <div className="hero-btns" style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.3s ease both' }}>
              <Link className="btn-primary" to="/projects" style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px 32px',
                background: 'var(--accent)', color: '#ffffff',
                borderRadius: 'var(--radius)',
                boxShadow: '4px 4px 12px #b0b7c0, -2px -2px 6px #ffffff',
                border: 'none', textDecoration: 'none', display: 'inline-block',
                transition: 'opacity 0.2s',
              }}>View Projects</Link>
              <a className="btn-secondary" href="mailto:pbaro003@ucr.edu" style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px 32px',
                background: 'var(--bg2)', color: 'var(--text)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--neu-flat-sm)',
                border: 'none', textDecoration: 'none', display: 'inline-block',
                transition: 'box-shadow 0.2s',
              }}>Get in Touch</a>
            </div>

            {/* Stats — each is a raised neumorphic pill */}
            <div className="hero-stats" style={{
              display: 'flex', gap: 16, marginTop: 48,
              animation: 'fadeUp 0.6s 0.4s ease both',
              flexWrap: 'wrap',
            }}>
              <HeroStat value="3.7"  label="GPA (STEM MBA)" />
              <HeroStat value="#1"   label="of 78 startups" />
              <HeroStat value="40+"  label="students mentored" />
              <HeroStat value="7"    label="portfolio projects" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee — inset well ── */}
      <div style={{
        overflow: 'hidden', padding: '16px 0',
        boxShadow: 'inset 3px 3px 8px #b8bec7, inset -3px -3px 8px #ffffff',
        background: 'var(--bg2)',
      }}>
        <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', width: 'max-content' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ display: 'flex', gap: 40, paddingRight: 40, whiteSpace: 'nowrap' }}>
              {['Python', 'SQL', 'Tableau', 'Supply Chain', 'S&OP', 'Demand Forecasting', 'Business Analytics', 'Consulting', 'SHAP', 'Power BI', 'A/B Testing', 'Financial Modeling'].map(s => (
                <span key={s} style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)' }}>{s}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Projects ── */}
      <section style={{ padding: 'var(--section-gap) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-eyebrow">Selected Work</div>
              <h2 className="section-title">{projects.length} Projects.<br />Seven Industries.</h2>
            </div>
            <Link to="/projects" style={{
              fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)',
              padding: '8px 18px', borderRadius: 50, boxShadow: 'var(--neu-flat-xs)',
              background: 'var(--bg2)', textDecoration: 'none',
              transition: 'box-shadow 0.2s',
            }}>View All →</Link>
          </div>

          <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {projects.map((p) => (
              <Link key={p.id} to={`/projects/${p.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="hover-card" style={{
                  background: 'var(--bg2)', padding: 28,
                  borderRadius: 24, boxShadow: 'var(--neu-flat)',
                  cursor: 'pointer', height: '100%',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 800, color: 'var(--text3)', lineHeight: 1, opacity: 0.3 }}>{p.number}</span>
                    <span className="tag">{p.industry}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 20 }}>{p.subtitle}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(163,177,198,0.3)' }}>
                    <div>
                      <div style={{ fontSize: 20, fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)' }}>{p.heroStat}</div>
                      <div style={{ fontSize: 11, color: 'var(--text3)', maxWidth: 160, lineHeight: 1.3 }}>{p.heroLabel}</div>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700,
                      color: 'var(--accent)', letterSpacing: '0.05em',
                      padding: '6px 12px', borderRadius: 50, boxShadow: 'var(--neu-flat-xs)',
                      background: 'var(--bg2)',
                    }}>View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="cta-wrap" style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 24, padding: '48px 40px',
            borderRadius: 28, boxShadow: 'var(--neu-pressed)',
            background: 'var(--bg2)',
          }}>
            <div>
              <div className="section-eyebrow">Available for Roles</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3vw,32px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2 }}>
                Business Analyst · Supply Chain · Consulting
              </h2>
              <p style={{ color: 'var(--text2)', marginTop: 10, fontSize: 14 }}>Graduating June 2026. Open to full-time roles and internships.</p>
            </div>
            <a href="mailto:pbaro003@ucr.edu" style={{
              fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '14px 32px', background: 'var(--accent)', color: '#ffffff',
              borderRadius: 'var(--radius)',
              boxShadow: '4px 4px 12px #b0b7c0, -2px -2px 6px #ffffff',
              border: 'none', whiteSpace: 'nowrap', textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}>Reach Out →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
