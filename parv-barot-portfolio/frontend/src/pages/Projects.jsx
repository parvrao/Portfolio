import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const colorMap = {
  green: { tag: 'tag-green', hex: '#c8f060' },
  blue: { tag: 'tag-blue', hex: '#60a8f0' },
  amber: { tag: 'tag-amber', hex: '#f0b860' },
  coral: { tag: 'tag-coral', hex: '#f07060' },
  purple: { tag: 'tag-purple', hex: '#a060f0' },
};

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
            <div style={{ display: 'flex', gap: 8 }}>
              {tracks.map(t => (
                <button key={t} onClick={() => setFilter(t)} style={{
                  fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '8px 16px', borderRadius: 2, cursor: 'pointer',
                  border: '1px solid', transition: 'all 0.2s',
                  background: filter === t ? 'var(--accent)' : 'transparent',
                  color: filter === t ? '#0a0a0a' : 'var(--text3)',
                  borderColor: filter === t ? 'var(--accent)' : 'var(--border)',
                }}>{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 var(--section-gap)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 2 }}>
            {visible.map(p => {
              const c = colorMap[p.color];
              return (
                <Link key={p.id} to={`/projects/${p.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{
                    background: 'var(--bg2)', padding: 32, height: '100%',
                    border: '1px solid var(--border)', transition: 'all 0.25s', cursor: 'pointer',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = c.hex + '60'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: 'var(--border2)', lineHeight: 1 }}>{p.number}</span>
                      <span className={`tag ${c.tag}`}>{p.industry}</span>
                    </div>

                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h2>
                    <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 20 }}>{p.subtitle}</p>

                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                      {p.tracks.map(t => (
                        <span key={t} style={{ fontSize: 10, padding: '3px 8px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 2, color: 'var(--text3)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t}</span>
                      ))}
                    </div>

                    <div style={{ paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontSize: 20, fontFamily: 'var(--font-display)', fontWeight: 800, color: c.hex }}>{p.heroStat}</span>
                        <div style={{ fontSize: 11, color: 'var(--text3)', maxWidth: 160, lineHeight: 1.3, marginTop: 2 }}>{p.heroLabel}</div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.hex }}>View Case Study →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
