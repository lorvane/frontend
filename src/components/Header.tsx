import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function Header({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  const home = location.pathname === '/';
  const nav = ['Features', 'About', 'Pricing', 'FAQ', 'Contact'];
  return <header className={`site-header ${scrolled || solid ? 'scrolled' : ''}`}><div className="nav-inner">
    <Link to="/" className="brand"><span className="brand-mark"><span /><span /><span /></span><span>LORVANE</span></Link>
    <nav className={`main-nav ${open ? 'open' : ''}`}>
      {nav.map(item => <a key={item} href={home ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
      <Link to="/product" className="nav-product" onClick={() => setOpen(false)}>Lorvane Atlas <ArrowUpRight size={15} /></Link>
    </nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
  </div></header>;
}
export { Header };
