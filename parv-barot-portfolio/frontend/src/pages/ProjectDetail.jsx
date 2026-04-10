import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';

const colorMap = {
  green:  { tag: 'tag-green',  hex: '#3a7d44', dim: 'rgba(58,125,68,0.08)'   },
  blue:   { tag: 'tag-blue',   hex: '#2e5fa3', dim: 'rgba(46,95,163,0.08)'   },
  amber:  { tag: 'tag-amber',  hex: '#b5651d', dim: 'rgba(181,101,29,0.08)'  },
  coral:  { tag: 'tag-coral',  hex: '#c0392b', dim: 'rgba(192,57,43,0.08)'   },
  purple: { tag: 'tag-purple', hex: '#6c3483', dim: 'rgba(108,52,131,0.08)'  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const p = projects.find(x => x.id === id);
  if (!p) return <Navigate to="/projects" replace />;

  const c = colorMap[p.color];
  const idx = projects.findIndex(x => x.id === id);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Hero */}
      <section style={{ padding: '80px 0 64px', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div className="container">
          <Link to="/projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 12, fontFamily: 'var(--font-display)', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--text3)', marginBottom: 40, transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
          >← All Projects</Link>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
            <div style={{ flex: '1 1 600px' }}>
              <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 800, color: 'var(--border)', lineHeight: 1 }}>{p.number}</span>
                {p.isLive && (
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontSize: 11, fontFamily: 'var(--font-display)', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--accent)', padding: '4px 10px',
                    border: '1px solid rgba(200,240,96,0.3)', borderRadius: 2,
                    background: 'rgba(200,240,96,0.06)',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-glow 2s infinite', display: 'inline-block' }} />
                    Live Product
                  </span>
                )}
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3.5vw,42px)',
                fontWeight: 800, color: 'var(--text)', lineHeight: 1.15,
                letterSpacing: '-0.02em', marginBottom: 16
              }}>{p.title}</h1>
              <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.6, maxWidth: 600 }}>{p.subtitle}</p>
            </div>

            {/* Sidebar card */}
            <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 8, padding: 24, minWidth: 220 }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Industry</div>
                <span className={`tag ${c.tag}`}>{p.industry}</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 6, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Role Tracks</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tracks.map(t => (
                    <span key={t} style={{ fontSize: 10, padding: '3px 8px', border: '1px solid var(--border)', borderRadius: 2, color: 'var(--text3)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 6, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tools</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tools.map(t => (
                    <span key={t} style={{ fontSize: 10, padding: '3px 8px', background: c.dim, border: `1px solid ${c.hex}30`, borderRadius: 2, color: c.hex, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 4, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {p.isLive ? 'Live URL' : 'Dataset'}
                </div>
                <a href={p.isLive ? p.liveLink : p.datasetLink} target="_blank" rel="noreferrer"
                  style={{ fontSize: 12, color: c.hex, textDecoration: 'underline', textDecorationColor: c.hex + '50', lineHeight: 1.4, display: 'block' }}>
                  {p.isLive ? p.liveLink.replace('https://', '') : p.dataset} ↗
                </a>
              </div>
            </div>
          </div>

          {/* Key metric */}
          <div style={{
            background: c.dim, border: `1px solid ${c.hex}25`, borderRadius: 8,
            padding: '24px 32px', display: 'inline-flex', alignItems: 'center', gap: 24
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 800, color: c.hex, lineHeight: 1 }}>{p.heroStat}</div>
            <div>
              <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{p.heroLabel}</div>
              <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 2 }}>Key result</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container" style={{ padding: '80px 40px' }}>
        <div style={{ maxWidth: 800 }}>

          {/* Overview */}
          <div style={{ marginBottom: 64 }}>
            <div className="section-eyebrow">Overview</div>
            <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.8 }}>{p.overview}</p>
          </div>

          {/* Problem */}
          <div style={{ marginBottom: 64, background: 'var(--bg2)', border: '1px solid var(--border)', borderLeft: `3px solid ${c.hex}`, padding: 32, borderRadius: '0 8px 8px 0' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.hex, marginBottom: 12 }}>The Problem</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--text)', marginBottom: 16, lineHeight: 1.3 }}>{p.problem.title}</h2>
            <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8 }}>{p.problem.body}</p>
          </div>

          {/* Objective */}
          <div style={{ marginBottom: 64 }}>
            <div className="section-eyebrow">Objective</div>
            <p style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.8 }}>{p.objective}</p>
          </div>

          {/* Methodology */}
          <div style={{ marginBottom: 64 }}>
            <div className="section-eyebrow">Methodology</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {p.methodology.map(m => (
                <div key={m.step} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0, width: 40, height: 40, borderRadius: '50%',
                    background: c.dim, border: `1px solid ${c.hex}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 800, color: c.hex, letterSpacing: '0.05em'
                  }}>{m.step}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{m.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div style={{ marginBottom: 64 }}>
            <div className="section-eyebrow">Key Results</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
              {p.results.map(r => (
                <div key={r.metric} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: '20px 16px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: c.hex, lineHeight: 1, marginBottom: 4 }}>{r.value}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text)', marginBottom: 4 }}>{r.metric}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)', lineHeight: 1.4 }}>{r.context}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key learning */}
          <div style={{ marginBottom: 64, background: `linear-gradient(135deg, ${c.dim}, transparent)`, border: `1px solid ${c.hex}20`, borderRadius: 8, padding: 32 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.hex, marginBottom: 12 }}>Key Learning</div>
            <p style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.8, fontStyle: 'italic' }}>"{p.keyLearning}"</p>
          </div>

          {/* Files / Links */}
          <div style={{ marginBottom: 64 }}>
            <div className="section-eyebrow">{p.isLive ? 'Links' : 'Project Files'}</div>

            {!p.isLive && (
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
                {p.files.map(f => (
                  <div key={f} style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px',
                    background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                    fontSize: 12, color: 'var(--text2)', fontFamily: 'var(--font-display)'
                  }}>
                    <span style={{ fontSize: 14 }}>
                      {f.endsWith('.ipynb') ? '📓' : f.endsWith('.sql') ? '🗄️' : f.endsWith('.pptx') ? '📊' : f.endsWith('.xlsx') ? '📈' : '📁'}
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href={p.githubLink} target="_blank" rel="noreferrer" style={{
                fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px',
                background: 'transparent', color: 'var(--text)', border: '1px solid var(--border2)',
                borderRadius: 'var(--radius)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.target.style.borderColor = 'var(--text)'}
                onMouseLeave={e => e.target.style.borderColor = 'var(--border2)'}
              >GitHub Repo ↗</a>
              {p.excelLink && (
  <a href={p.excelLink} target="_blank" rel="noreferrer" style={{
    fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
    letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px',
    background: 'transparent', color: c.hex, border: `1px solid ${c.hex}`,
    borderRadius: 'var(--radius)', transition: 'all 0.2s',
  }}
    onMouseEnter={e => { e.target.style.background = c.hex; e.target.style.color = '#fff'; }}
    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = c.hex; }}
  >↗ View Excel Analysis</a>
)}

              {p.isLive ? (
                <a href={p.liveLink} target="_blank" rel="noreferrer" style={{
                  fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px',
                  background: c.dim, color: c.hex, border: `1px solid ${c.hex}40`,
                  borderRadius: 'var(--radius)', transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.hex, display: 'inline-block' }} />
                  View Live Site ↗
                </a>
              ) : (
                <a href={p.tableauLink} target="_blank" rel="noreferrer" style={{
                  fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px',
                  background: c.dim, color: c.hex, border: `1px solid ${c.hex}40`,
                  borderRadius: 'var(--radius)', transition: 'all 0.2s',
                }}>Tableau Dashboard ↗</a>
              )}
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {prev ? (
            <Link to={`/projects/${prev.id}`} style={{ padding: 24, background: 'var(--bg2)',boxShadow: 'var(--neu-shadow)', border: 'none', borderRadius: 4, display: 'block', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
            >
              <div style={{ fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>← Previous</div>
              <div style={{ fontSize: 14, fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)' }}>{prev.title}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/projects/${next.id}`} style={{ padding: 24, background: 'var(--bg2)',boxShadow: 'var(--neu-shadow)', border: 'none', borderRadius: 4, display: 'block', textAlign: 'right', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
            >
              <div style={{ fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Next →</div>
              <div style={{ fontSize: 14, fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)' }}>{next.title}</div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
