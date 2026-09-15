import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import heroBg from '../assets/37001170f9ce30d295f12162cef56047.jpg';
import { SectionLabel } from './SectionLabel';

function Hero() {
  return <section className="hero"><div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="container hero-grid"><div className="hero-copy"><SectionLabel>AI RESEARCH &amp; KNOWLEDGE DISCOVERY</SectionLabel><h1>Turn Research Into <em>Knowledge</em> You Can Use.</h1><p>Lorvane gives R&amp;D and enterprise teams one structured place to collect research, organize evidence, discover relevant information, and connect findings across projects.</p><p className="hero-sub">Research faster. Understand deeper. Build on what you already know.</p><div className="hero-actions"><Link to="/product" className="button button-primary">Explore Lorvane Atlas <ArrowUpRight size={16} /></Link><a href="#how-it-works" className="button button-quiet">See How It Works <span>↗</span></a></div></div></div></section>;
}
export { Hero };
