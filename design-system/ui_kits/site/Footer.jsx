// Footer — paper, hairline, four links.
const footerStyles = {
  section: {
    padding: '40px 0',
    background: 'var(--paper)',
    borderTop: '1px solid var(--rule)',
  },
  row: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    flexWrap: 'wrap', gap: 16,
  },
  left: { fontSize: 13, color: 'var(--mute)' },
  links: { display: 'flex', gap: 24, fontSize: 13 },
  link: { color: 'var(--ink-2)', transition: 'color var(--t-fast)' },
};

function Footer() {
  return (
    <footer style={footerStyles.section}>
      <div className="container" style={footerStyles.row}>
        <div style={footerStyles.left}>© 2026 Trevor Burkholder · Cleveland, OH</div>
        <div style={footerStyles.links}>
          <a href="mailto:tburk83@gmail.com" style={footerStyles.link}>tburk83@gmail.com</a>
          <a href="https://www.linkedin.com/in/trevorburkholder/" target="_blank" rel="noopener" style={footerStyles.link}>LinkedIn</a>
          <a href="#" style={footerStyles.link}>GitHub</a>
          <a href="#" style={footerStyles.link}>Upwork</a>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
