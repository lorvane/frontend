import { GitBranch } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';

function Workflow() { const steps = [['01', 'Collect', 'Add research records, documents, references, notes, and knowledge sources.'], ['02', 'Organize', 'Structure information by projects, topics, research areas, and records.'], ['03', 'Discover', 'Search across knowledge and retrieve the information that matters.'], ['04', 'Review', 'Inspect evidence, save findings, and track research activity.']]; return <section className="section workflow" id="how-it-works"><div className="container"><div className="section-intro dark-intro"><div><SectionLabel>HOW IT WORKS</SectionLabel><h2>From research input to <em>actionable knowledge.</em></h2></div><p>A clear operating rhythm for teams working with complex, high-value information.</p></div><div className="workflow-grid">{steps.map(([num, title, text]) => <Reveal className="workflow-card" key={num}><span>{num}</span><div className="workflow-icon"><GitBranch size={20} /></div><h3>{title}</h3><p>{text}</p><div className="workflow-line" /></Reveal>)}</div></div></section>; }
export { Workflow };
