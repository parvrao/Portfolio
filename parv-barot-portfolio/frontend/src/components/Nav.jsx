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
    { to: '/',         label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about',    label: 'About' },
    { to: '/skills',   label: 'Skills' },
    { to: '/contact',  label: 'Contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 'var(--nav-h)',
        background: scrolled ? 'rgba(224,229,236,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 12px rgba(163,177,198,0.35)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 40px',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo — neumorphic raised square */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: 'var(--accent)',
              boxShadow: '3px 3px 8px #b0b7c0, -2px -2px 5px #ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: '#ffffff' }}>PB</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>
              Parv Barot
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600,
                letterSpacing: '0.04em', textTransform: 'uppercase',
                color: location.pathname === l.to ? 'var(--accent)' : 'var(--text2)',
                transition: 'color 0.2s', textDecoration: 'none',
              }}
                onMouseEnter={e => { if (location.pathname !== l.to) e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={e => { if (location.pathname !== l.to) e.currentTarget.style.color = 'var(--text2)'; }}
              >{l.label}</Link>
            ))}

            {/* Resume button — neumorphic pill */}
            <a
              href="https://drive.google.com/file/d/1bP8ei6Vkwk3cxsNYWKNC_OMuUBTsy9Tc/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '8px 20px',
                background: 'var(--bg2)', color: 'var(--accent)',
                borderRadius: 50, border: 'none',
                boxShadow: 'var(--neu-flat-sm)',
                textDecoration: 'none',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 5px #b0b7c0, -1px -1px 3px #ffffff'; e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--neu-flat-sm)'; e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.color = 'var(--accent)'; }}
            >Resume</a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 8, color: 'var(--text)',
            boxShadow: 'var(--neu-flat-xs)', borderRadius: 10,
            background: 'var(--bg2)',
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
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 36,
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800,
              color: location.pathname === l.to ? 'var(--accent)' : 'var(--text)',
              textDecoration: 'none',
            }}>{l.label}</Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1bP8ei6Vkwk3cxsNYWKNC_OMuUBTsy9Tc/view?usp=sharing"
            target="_blank" rel="noreferrer"
            style={{
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
              padding: '12px 28px', background: 'var(--accent)', color: '#fff',
              borderRadius: 50, textDecoration: 'none',
            }}
          >View Resume ↗</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
