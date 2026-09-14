import { motion } from 'framer-motion';
import { BookOpen, FileText, Network, Search, Sparkles } from 'lucide-react';

function NetworkVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`network-visual ${compact ? 'compact' : ''}`}>
    <div className="network-grid" />
    <svg className="network-lines" viewBox="0 0 640 500" preserveAspectRatio="none"><path d="M90 120L250 190L420 100L570 180M250 190L330 350L530 330M90 120L130 370L330 350L420 100M420 100L530 330" /><path d="M90 120L570 180M130 370L530 330" /></svg>
    <motion.div className="data-point p1" animate={{ x: [0, 80, 0], y: [0, 25, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} />
    <motion.div className="data-point p2" animate={{ x: [0, -60, 0], y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} />
    <div className="node node-a"><FileText size={18} /><span>Research<br />records</span></div>
    <div className="node node-b"><Network size={20} /><span>Knowledge<br />graph</span></div>
    <div className="node node-c"><Search size={19} /><span>Semantic<br />search</span></div>
    <div className="node node-d"><BookOpen size={18} /><span>Evidence<br />review</span></div>
    <div className="core-node"><span className="core-ring" /><Sparkles size={22} /><strong>LO</strong><small>Research intelligence</small></div>
    <div className="visual-query"><Search size={14} /><span>materials used in high-temperature battery systems</span><span className="query-kicker">42 results</span></div>
    {!compact && <div className="visual-caption"><span>LIVE KNOWLEDGE MAP</span><span>01 — 04</span></div>}
  </div>;
}
export { NetworkVisual };
