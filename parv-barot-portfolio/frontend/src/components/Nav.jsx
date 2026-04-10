import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 'var(--nav-h)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 4,
              background: 'var(--accent)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: '#0a0a0a' }}>PB</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>
              Parv Barot
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop">
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600,
                letterSpacing: '0.04em', textTransform: 'uppercase',
                color: location.pathname === l.to ? 'var(--accent)' : 'var(--text2)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => { if (location.pathname !== l.to) e.target.style.color = 'var(--text)'; }}
                onMouseLeave={e => { if (location.pathname !== l.to) e.target.style.color = 'var(--text2)'; }}
              >{l.label}</Link>
            ))}
            <a href="/Parv_Barot_Resume.pdf" target="_blank" style={{
              fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '8px 16px', border: '1px solid var(--accent)',
              color: 'var(--accent)', borderRadius: 'var(--radius)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#0a0a0a'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
            >Resume</a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 8, color: 'var(--text)',
          }} className="nav-mobile">
            <div style={{ width: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ height: 2, background: 'currentColor', borderRadius: 1, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ height: 2, background: 'currentColor', borderRadius: 1, transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
              <span style={{ height: 2, background: 'currentColor', borderRadius: 1, transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'var(--bg)', paddingTop: 'var(--nav-h)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800,
              color: location.pathname === l.to ? 'var(--accent)' : 'var(--text)',
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
