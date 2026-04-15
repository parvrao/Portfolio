import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const tracks = ['All', 'Supply Chain', 'Business Analyst', 'Consulting'];
  const visible = filter === 'All' ? projects : projects.filter(p => p.tracks.includes(filter));

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <section style={{ padding: '80px 0 48px' }}>
        <div className="container">
          <div className="section-eyebrow">Portfolio</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h1 className="section-title">All Projects</h1>
            {/* Filter buttons — neumorphic pill toggles */}
            <div className="filter-bar" style={{ display: 'flex', gap: 8 }}>
              {tracks.map(t => (
                <button key={t} onClick={() => setFilter(t)} style={{
                  fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '9px 18px', borderRadius: 50, cursor: 'pointer', border: 'none',
                  transition: 'all 0.2s',
                  background: filter === t ? 'var(--accent)' : 'var(--bg2)',
                  color: filter === t ? '#ffffff' : 'var(--text3)',
                  boxShadow: filter === t
                    ? '2px 2px 6px #b0b7c0, -1px -1px 4px #ffffff'
                    : 'var(--neu-flat-xs)',
                }}>{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 var(--section-gap)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {visible.map(p => (
              <Link key={p.id} to={`/projects/${p.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="hover-card" style={{
                  background: 'var(--bg2)', padding: 32,
                  borderRadius: 24, boxShadow: 'var(--neu-flat)',
                  cursor: 'pointer', height: '100%',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: 'var(--text3)', lineHeight: 1, opacity: 0.3 }}>{p.number}</span>
                    <span className="tag">{p.industry}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h2>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 20 }}>{p.subtitle}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                    {p.tracks.map(t => (
                      <span key={t} style={{
                        fontSize: 10, padding: '4px 10px',
                        borderRadius: 50, color: 'var(--text3)',
                        fontFamily: 'var(--font-body)', letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        boxShadow: 'var(--neu-flat-xs)', background: 'var(--bg2)',
                      }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ paddingTop: 16, borderTop: '1px solid rgba(163,177,198,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: 20, fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)' }}>{p.heroStat}</span>
                      <div style={{ fontSize: 11, color: 'var(--text3)', maxWidth: 160, lineHeight: 1.3, marginTop: 2 }}>{p.heroLabel}</div>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700,
                      letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)',
                      padding: '6px 14px', borderRadius: 50, boxShadow: 'var(--neu-flat-xs)',
                      background: 'var(--bg2)',
                    }}>View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
