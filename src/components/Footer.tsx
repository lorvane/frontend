import { Link } from 'react-router-dom';

function Footer() {
  return <footer><div className="container"><div className="footer-grid">
    <div>
      <Link to="/" className="brand light-brand"><span className="brand-mark"><span /><span /><span /></span><span>LORVANE</span></Link>
      <p>Research intelligence. Organized knowledge. Discoverable evidence.</p>
    </div>
    <div>
      <small>EXPLORE</small>
      <a href="#features">Features</a>
      <a href="#about">About</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </div>
    <div>
      <small>PLATFORM</small>
      <Link to="/product">Product</Link>
      <a href="#how-it-works">How it works</a>
      <a href="#contact">Contact</a>
    </div>
    <div>
      <small>FIND US</small>
      <div className="footer-map">
        <iframe title="Lorvane Sri Lanka" src="https://maps.google.com/maps?q=24%20Rheinland%20Place%2C%2003%2C%20Colombo%2C%20Sri%20Lanka&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <iframe title="Lorvane USA" src="https://maps.google.com/maps?q=32854%20US%20Highway%2069%20N%2C%20Jacksonville%2C%20TX%2075766%2C%20United%20States&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <span>© 2026 Lorvane. All rights reserved.</span>
    <span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link> · support@lorvane.net</span>
  </div>
</div></footer>;
}

export { Footer };