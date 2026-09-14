import { Quote, Star } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';

const testimonials = [
  { quote: 'We used to spend too much time retracing where information came from. Lorvane gives us a much clearer way to organize our research, connect evidence, and return to findings when a new project comes up. It feels like our research finally has a memory.', name: 'Dr. Maya Chen', role: 'R&D Research Lead', org: 'Advanced Materials Lab', initials: 'MC' },
  { quote: 'The biggest difference for our team is continuity. A finding from one project can become useful somewhere completely different months later. Lorvane helps us keep those connections visible instead of letting valuable knowledge disappear into old folders.', name: 'Daniel Morgan', role: 'Head of Technical Research', org: 'Novateq Energy', initials: 'DM' },
  { quote: 'Our work involves a constant flow of papers, technical sources, internal findings, and market information. Lorvane gives us a structured place to bring everything together and makes it much easier to move from information to something we can actually use.', name: 'Elena Rodriguez', role: 'Enterprise Knowledge Manager', org: 'TerraSense', initials: 'ER' },
];

function Testimonials() { return <section className="section testimonials" id="testimonials"><div className="container"><div className="section-intro"><div><SectionLabel>INSIGHTS FROM THE RESEARCH FLOOR</SectionLabel><h2>Perspectives from teams working with <em>complex information.</em></h2></div><p>Perspectives from teams working with complex information, evidence, and discovery.</p></div><div className="testimonial-grid">{testimonials.map(({ quote, name, role, org, initials }) => <Reveal className="testimonial-card" key={name}><div className="testimonial-stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} />)}</div><p className="testimonial-quote"><Quote size={17} />{quote}</p><div className="testimonial-person"><span className="testimonial-avatar">{initials}</span><div><strong>{name}</strong><small>{role} &middot; {org}</small></div></div></Reveal>)}</div></div></section>; }
export { Testimonials };
