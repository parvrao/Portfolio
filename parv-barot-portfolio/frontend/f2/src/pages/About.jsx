import { experience } from '../data/projects';

export default function About() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-eyebrow">About</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 32 }}>
                Analyst at heart.<br />
                <span style={{ color: 'var(--text3)' }}>Strategist</span> by training.
              </h1>
              <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 20 }}>
                I'm Parv — an MBA candidate at UC Riverside (Class of 2026, STEM Designated) with a background in marketing analytics, supply chain data work, and consulting-style problem solving. My work sits at the intersection of rigorous quantitative analysis and stakeholder-ready storytelling.
              </p>
              <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 20 }}>
                I came into the MBA with hands-on internship experience at Aveyo Solar and the California Air Resources Board — building Python pipelines, designing A/B tests, and delivering executive-level dashboards. The MBA has added the strategic frameworks to go with the technical toolkit.
              </p>
              <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8 }}>
                Outside of work, I serve as a Teaching Assistant and mentor to 40+ MBA students, and placed 1st among 78 competing startups in the Trembo Innovation Sprint — repositioning a brand from a niche segment to a premium household platform with a projected $272M Year 3 SOM.
              </p>
            </div>
            <div>
              {/* UCR Card */}
              <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 0, padding: 28, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>University of California, Riverside</div>
                    <div style={{ fontSize: 13, color: 'var(--text2)' }}>Master of Business Administration · STEM Designated</div>
                  </div>
                  <span className="tag tag-accent">Expected Jun 2026</span>
                </div>
                <div style={{ display: 'flex', gap: 24 }}>
                  <div><div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--accent)' }}>3.7</div><div style={{ fontSize: 11, color: 'var(--text3)' }}>GPA</div></div>
                  <div><div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--accent)' }}>40+</div><div style={{ fontSize: 11, color: 'var(--text3)' }}>Students Mentored</div></div>
                  <div><div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--accent)'}}>#1</div><div style={{ fontSize: 11, color: 'var(--text3)' }}>Innovation Sprint</div></div>
                </div>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 8, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Relevant Coursework</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {['Business Analytics', 'Supply Chain Mgmt', 'Financial Modeling', 'Marketing Strategy', 'Operations Strategy', 'Change Management'].map(c => (
                      <span key={c} style={{ fontSize: 10, padding: '3px 8px', border: '1px solid var(--border)', borderRadius: 0, color: 'var(--text3)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BBA Card */}
              <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 0, padding: 28, marginBottom: 16 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>S.V. Institute of Management, India</div>
                  <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 8 }}>Bachelor of Business Administration · May 2024</div>
                  <div style={{ fontSize: 12, color: 'var(--text3)' }}>Financial Accounting · Business Economics · Business Statistics · Marketing Management</div>
                </div>
              </div>

              {/* Cert */}
              <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 0, padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 8, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Certifications</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Creating Innovative Business Models</div>
                <div style={{ fontSize: 12, color: 'var(--text2)' }}>University System of Maryland (edX) · Dec 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: 'var(--section-gap) 0' }}>
        <div className="container">
          <div className="section-eyebrow">Experience</div>
          <h2 className="section-title" style={{ marginBottom: 56 }}>Where I've Worked</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {experience.map((e, i) => (
              <div key={i} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: 40 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>{e.role}</h3>
                    <div style={{ fontSize: 15, color: 'var(--text2)' }}>{e.company} · {e.location}</div>
                  </div>
                  <span className="tag tag-accent">{e.period}</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {e.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: 'var(--text2)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
