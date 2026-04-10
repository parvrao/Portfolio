import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 0', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--text)', marginBottom: 4 }}>
            Parv Barot
          </div>
          <div style={{ fontSize: 13, color: 'var(--text3)' }}>
            MBA Candidate · UCR · Class of 2026
          </div>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/parvbarot' },
            { label: 'GitHub', href: 'https://github.com/parvbarot' },
            { label: 'pbaro003@ucr.edu', href: 'mailto:pbaro003@ucr.edu' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
              fontSize: 13, color: 'var(--text3)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text3)'}
            >{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
