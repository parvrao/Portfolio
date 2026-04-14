import { skills } from '../data/projects';

function SkillBar({ name, level, note }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{name}</span>
          {note && <span style={{ fontSize: 11, color: 'var(--text3)', marginLeft: 10 }}>{note}</span>}
        </div>
        <span style={{ fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-display)' }}>{'★'.repeat(level)}{'☆'.repeat(5 - level)}</span>
      </div>
      <div style={{ height: 3, background: 'var(--border)', borderRadius: 0, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${(level / 5) * 100}%`, background: 'var(--accent)', borderRadius: 0, transition: 'width 0.8s ease' }} />
      </div>
    </div>
  );
}

function SkillGroup({ title, items, color }) {
  return (
    <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: 32 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: color, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 16, height: 1, background: color, display: 'inline-block' }} />
        {title}
      </div>
      {items.map(s => <SkillBar key={s.name} {...s} />)}
    </div>
  );
}

export default function Skills() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <section style={{ padding: '80px 0 48px', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-eyebrow">Capabilities</div>
          <h1 className="section-title">Skills Matrix</h1>
          <p style={{ marginTop: 16, fontSize: 16, color: 'var(--text2)', maxWidth: 560 }}>
            Functional depth across analytics, supply chain operations, and strategy. Ratings reflect honest self-assessment against job description requirements.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-gap) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 2, marginBottom: 64 }}>
            <SkillGroup title="Analytics & Tools" items={skills.analytics} color="var(--accent)" />
            <SkillGroup title="Supply Chain & Operations" items={skills.supplyChain} color="var(--accent)" />
            <SkillGroup title="Strategy & Consulting" items={skills.strategy} color="var(--accent)" />
          </div>

          {/* Approach section */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 64 }}>
            <div className="section-eyebrow">Working Style</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 2, marginTop: 32 }}>
              {[
                { icon: '🔬', title: 'Hypothesis-first', body: 'Every analysis starts with a falsifiable hypothesis, not an open-ended explore.' },
                { icon: '📐', title: 'MECE structured', body: 'Findings organized in mutually exclusive, collectively exhaustive frameworks before any slide is built.' },
                { icon: '📣', title: 'Pyramid principle', body: 'Recommendations lead, evidence follows. Busy stakeholders get the answer first.' },
                { icon: '⚙️', title: 'Automate the repetitive', body: 'Python pipelines replace manual data cleaning. Time saved is time for higher-order thinking.' },
              ].map(w => (
                <div key={w.title} style={{ padding: 28, background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{w.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{w.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
