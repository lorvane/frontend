import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { NetworkVisual } from './NetworkVisual';

function CTA() { return <section className="final-cta"><div className="container cta-inner"><div><SectionLabel>TURN WHAT YOU KNOW INTO WHAT'S NEXT</SectionLabel><h2>Build a research environment your team can <em>actually use.</em></h2><p>Your next breakthrough may not require more information. It may require a better way to connect the information you already have. With Lorvane, you can bring research, evidence, documents, findings, and institutional knowledge into one intelligent workspace.</p><div className="hero-actions"><Link to="/product" className="button button-primary">Build a research environment your team can actually use <ArrowUpRight size={16} /></Link><a href="mailto:support@lorvane.net" className="button button-quiet light">Contact Lorvane <ArrowUpRight size={16} /></a></div></div><div className="cta-visual"><NetworkVisual compact /></div></div></section>; }
export { CTA };
