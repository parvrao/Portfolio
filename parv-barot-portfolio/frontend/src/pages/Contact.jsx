export default function Contact() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <section style={{ padding: '80px 0 64px', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-eyebrow">Contact</div>
          <h1 className="section-title" style={{ marginBottom: 20 }}>Let's Talk</h1>
          <p style={{ fontSize: 17, color: 'var(--text2)', maxWidth: 520, lineHeight: 1.7 }}>
            I'm actively recruiting for full-time roles in Business Analytics, Supply Chain, and Consulting — graduating June 2026. Coffee chat, recruiter call, or case discussion welcome.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-gap) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Email', value: 'pbaro003@ucr.edu', href: 'mailto:pbaro003@ucr.edu', color: 'var(--accent)' },
                  { label: 'LinkedIn', value: 'linkedin.com/in/parvbarot', href: 'https://linkedin.com/in/parvbarot', color: 'var(--blue)' },
                  { label: 'GitHub', value: 'github.com/parvbarot', href: 'https://github.com/parvbarot', color: 'var(--amber)' },
                  { label: 'Location', value: 'Riverside, CA — open to relocation', href: null, color: 'var(--coral)' },
                  { label: 'Phone', value: '(929) 247-0593', href: 'tel:9292470593', color: 'var(--purple)' },
                ].map(c => (
                  <div key={c.label} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '20px 24px', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</div>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ fontSize: 14, color: c.color, transition: 'opacity 0.2s' }}
                          onMouseEnter={e => e.target.style.opacity = '0.7'}
                          onMouseLeave={e => e.target.style.opacity = '1'}
                        >{c.value}</a>
                      ) : (
                        <div style={{ fontSize: 14, color: 'var(--text2)' }}>{c.value}</div>
                      )}
                    </div>
                    {c.href && <span style={{ color: c.color, fontSize: 16 }}>↗</span>}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: 40 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 24 }}>What I'm Looking For</div>
              {[
                { role: 'Business Analyst', desc: 'Data-driven decision support, KPI reporting, cross-functional stakeholder work', color: 'var(--accent)' },
                { role: 'Supply Chain Analyst', desc: 'Demand planning, inventory optimization, S&OP, logistics performance', color: 'var(--blue)' },
                { role: 'Strategy / Management Consultant', desc: 'Hypothesis-driven problem solving, client deliverables, transformation roadmaps', color: 'var(--amber)' },
              ].map(r => (
                <div key={r.role} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--border)', lastChild: { borderBottom: 'none' } }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: r.color, marginBottom: 6 }}>{r.role}</div>
                  <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{r.desc}</div>
                </div>
              ))}
              <a href="/Parv_Barot_Resume.pdf" target="_blank" style={{
                display: 'block', textAlign: 'center', marginTop: 8,
                fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '14px 24px', background: 'var(--accent)', color: '#0a0a0a',
                borderRadius: 'var(--radius)', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.target.style.background = 'var(--accent2)'}
                onMouseLeave={e => e.target.style.background = 'var(--accent)'}
              >View Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
