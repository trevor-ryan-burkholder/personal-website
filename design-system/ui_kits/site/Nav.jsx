// Top nav: brand lockup + link row + primary CTA.
const navStyles = {
  wrap: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 0',
    borderBottom: '1px solid var(--rule)',
  },
  brand: { display: 'flex', alignItems: 'center', gap: 12 },
  word: { fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 17, letterSpacing: '-0.01em' },
  links: { display: 'flex', alignItems: 'center', gap: 28 },
  link: { fontSize: 14, color: 'var(--ink-2)', transition: 'color var(--t-fast)' },
};

function Nav() {
  return (
    <nav className="container" style={navStyles.wrap}>
      <a href="#top" style={navStyles.brand}>
        <Logo size={36} variant="badge" />
        <span style={navStyles.word}>Trevor Burkholder</span>
      </a>
      <div style={navStyles.links}>
        <a href="#services" style={navStyles.link} className="nav-link">Services</a>
        <a href="#work" style={navStyles.link} className="nav-link">Work</a>
        <a href="#about" style={navStyles.link} className="nav-link">About</a>
        <a href="#book" className="btn-primary btn-primary--sm">Book a call</a>
      </div>
    </nav>
  );
}

window.Nav = Nav;
