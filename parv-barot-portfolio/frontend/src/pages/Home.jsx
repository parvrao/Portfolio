import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const colorMap = {
  green: { tag: 'tag-green', hex: '#c8f060' },
  blue: { tag: 'tag-blue', hex: '#60a8f0' },
  amber: { tag: 'tag-amber', hex: '#f0b860' },
  coral: { tag: 'tag-coral', hex: '#f07060' },
  purple: { tag: 'tag-purple', hex: '#a060f0' },
};

function HeroStat({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 4, maxWidth: 100, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 'var(--nav-h)' }}>
        {/* Bg grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px', opacity: 0.3,
        }} />
        {/* Accent blob */}
        <div style={{
          position: 'absolute', top: '20%', right: '-10%', width: 600, height: 600,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,240,96,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 860 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, animation: 'fadeUp 0.6s ease forwards' }}>
              <span className="tag tag-green">MBA Candidate · UCR · 2026</span>
              <span className="tag tag-blue">STEM Designated</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text3)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-glow 2s infinite', display: 'inline-block' }} />
                Open to Summer 2026 Roles
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 0.95,
              letterSpacing: '-0.03em', color: 'var(--text)',
              animation: 'fadeUp 0.6s 0.1s ease both',
            }}>
              Parv<br />
              <span style={{ color: 'var(--text3)' }}>Hitendrakumar</span><br />
              Barot
              <span style={{ color: 'var(--accent)', animation: 'blink 1.2s infinite' }}>.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text2)', maxWidth: 560,
              lineHeight: 1.6, marginTop: 32, fontWeight: 300,
              animation: 'fadeUp 0.6s 0.2s ease both',
            }}>
              Business analyst, supply chain strategist, and consulting-track MBA. I turn messy datasets into decisions that move the needle — with Python, SQL, and a hypothesis-driven approach that consulting firms actually use.
            </p>

            <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.3s ease both' }}>
              <Link to="/projects" style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px 28px', background: 'var(--accent)', color: '#0a0a0a',
                borderRadius: 'var(--radius)', border: '1px solid var(--accent)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.target.style.background = 'var(--accent2)'; e.target.style.borderColor = 'var(--accent2)'; }}
                onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.borderColor = 'var(--accent)'; }}
              >View Projects</Link>
              <a href="mailto:pbaro003@ucr.edu" style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px 28px', background: 'transparent', color: 'var(--text)',
                borderRadius: 'var(--radius)', border: '1px solid var(--border2)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.target.style.borderColor = 'var(--text)'; }}
                onMouseLeave={e => { e.target.style.borderColor = 'var(--border2)'; }}
              >Get in Touch</a>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: 48, marginTop: 64, paddingTop: 48,
              borderTop: '1px solid var(--border)',
              animation: 'fadeUp 0.6s 0.4s ease both',
              flexWrap: 'wrap',
            }}>
              <HeroStat value="3.7" label="GPA (STEM MBA)" />
              <HeroStat value="#1" label="of 78 startups — Innovation Sprint" />
              <HeroStat value="40+" label="MBA students mentored" />
              <HeroStat value="5" label="end-to-end portfolio projects" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '14px 0', background: 'var(--bg2)' }}>
        <div style={{ display: 'flex', animation: 'marquee 20s linear infinite', width: 'max-content' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ display: 'flex', gap: 48, paddingRight: 48, whiteSpace: 'nowrap' }}>
              {['Python', 'SQL', 'Tableau', 'Supply Chain', 'S&OP', 'Demand Forecasting', 'Business Analytics', 'Consulting Frameworks', 'SHAP', 'Power BI', 'A/B Testing', 'Financial Modeling'].map(s => (
                <span key={s} style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text3)' }}>{s}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <section style={{ padding: 'var(--section-gap) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="section-eyebrow">Selected Work</div>
              <h2 className="section-title">Five Projects.<br />Five Industries.</h2>
            </div>
            <Link to="/projects" style={{
              fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)',
              display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}
            >View All →</Link>
          </div>

          {/* Project grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 2 }}>
            {projects.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <Link key={p.id} to={`/projects/${p.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{
                    background: 'var(--bg2)', padding: 32, height: '100%',
                    border: '1px solid var(--border)', transition: 'all 0.25s',
                    cursor: 'pointer', position: 'relative', overflow: 'hidden',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = c.hex + '50'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 800, color: 'var(--border2)', lineHeight: 1 }}>{p.number}</span>
                      <span className={`tag ${c.tag}`}>{p.industry}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 12, lineHeight: 1.3 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 24 }}>{p.subtitle}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                      <div>
                        <div style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 800, color: c.hex }}>{p.heroStat}</div>
                        <div style={{ fontSize: 11, color: 'var(--text3)', maxWidth: 160, lineHeight: 1.3 }}>{p.heroLabel}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        {p.tools.slice(0, 3).map(t => (
                          <span key={t} style={{ fontSize: 10, padding: '2px 7px', border: '1px solid var(--border2)', borderRadius: 2, color: 'var(--text3)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div className="section-eyebrow">Available for Roles</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2 }}>
              Business Analyst · Supply Chain · Consulting
            </h2>
            <p style={{ color: 'var(--text2)', marginTop: 12, fontSize: 15 }}>Graduating June 2026. Open to full-time roles and internships.</p>
          </div>
          <a href="mailto:pbaro003@ucr.edu" style={{
            fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '16px 32px', background: 'var(--accent)', color: '#0a0a0a',
            borderRadius: 'var(--radius)', border: '1px solid var(--accent)',
            whiteSpace: 'nowrap', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--accent2)'}
            onMouseLeave={e => e.target.style.background = 'var(--accent)'}
          >Reach Out →</a>
        </div>
      </section>
    </div>
  );
}
