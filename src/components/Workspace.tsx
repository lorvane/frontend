import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';

const charts = [
  { line: 'M0 95 C40 80 48 88 75 62 S115 86 145 60 S190 50 215 64 S260 20 295 44 S345 25 400 8', fill: 'M0 95 C40 80 48 88 75 62 S115 86 145 60 S190 50 215 64 S260 20 295 44 S345 25 400 8 L400 110 L0 110 Z' },
  { line: 'M0 86 C38 78 50 92 76 72 S112 60 146 68 S194 44 220 56 S262 26 296 40 S348 18 400 10', fill: 'M0 86 C38 78 50 92 76 72 S112 60 146 68 S194 44 220 56 S262 26 296 40 S348 18 400 10 L400 110 L0 110 Z' },
  { line: 'M0 92 C44 84 52 76 82 76 S118 62 152 54 S196 56 222 44 S260 36 298 32 S348 20 400 16', fill: 'M0 92 C44 84 52 76 82 76 S118 62 152 54 S196 56 222 44 S260 36 298 32 S348 20 400 16 L400 110 L0 110 Z' },
];

const donuts = [[46, 32, 22], [38, 41, 21], [52, 27, 21]];
const labels = ['Peer papers', 'Internal notes', 'White papers'];
const C = 99.9;

const barsArr = [
  [55, 70, 45, 80, 62, 90, 74],
  [60, 50, 85, 40, 75, 68, 92],
  [48, 72, 64, 88, 52, 76, 66],
];

const feeds = [
  '2 new sources connected to "Battery CATHODES"',
  'Evidence review completed for "NMC-811"',
  '3 records linked from Materials Library',
  'New finding saved to "Thermal stability"',
];

function Workspace() {
  const [records, setRecords] = useState(1284);
  const [findings, setFindings] = useState(342);
  const [chart, setChart] = useState(0);
  const [donut, setDonut] = useState(0);
  const [bar, setBar] = useState(0);
  const [feed, setFeed] = useState(feeds[0]);
  useEffect(() => {
    const id = setInterval(() => {
      setRecords(v => v + Math.round(Math.random() * 4));
      setFindings(v => v + Math.round(Math.random() * 2));
      setChart(c => (c + 1) % charts.length);
      setDonut(d => (d + 1) % donuts.length);
      setBar(b => (b + 1) % barsArr.length);
      setFeed(f => feeds[(feeds.indexOf(f) + 1) % feeds.length]);
    }, 2400);
    return () => clearInterval(id);
  }, []);
  let cum = 0;
  const arcs = donuts[donut].map((pct, i) => {
    const full = (pct / 100) * C;
    const len = Math.max(full - 1.2, 0.4);
    const offset = -cum;
    cum += full;
    return { dash: `${len.toFixed(2)} ${(C - len).toFixed(2)}`, offset: `${offset.toFixed(2)}`, label: labels[i], pct };
  });
  const topPct = Math.max(...donuts[donut]);
  const bars = barsArr[bar];
  return <section className="section workspace"><div className="container"><div className="workspace-grid">
    <Reveal className="workspace-preview">
      <div className="preview-bar"><span className="mini-logo">L</span><span>Research Workspace</span><span className="live-pill"><i />LIVE</span><span className="preview-dots">•••</span></div>
      <div className="workspace-body">
        <div className="preview-main">
          <div className="preview-heading"><div><small>OVERVIEW</small><h3>Good morning, team.</h3></div><span className="circle-avatar">R</span></div>
          <div className="metric-row">
            <div><small>RESEARCH RECORDS</small><motion.strong key={records} initial={{ opacity: .35 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>{records.toLocaleString()}</motion.strong></div>
            <div><small>SAVED FINDINGS</small><motion.strong key={findings} initial={{ opacity: .35 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>{findings.toLocaleString()}</motion.strong></div>
          </div>
          <div className="charts-row">
            <div className="chart-card"><div className="chart-title"><span>Research activity</span><small>Last 30 days</small></div>
              <svg viewBox="0 0 400 110" preserveAspectRatio="none">
                <motion.path className="chart-fill" animate={{ d: charts[chart].fill }} transition={{ duration: 1.3, ease: 'easeInOut' }} initial={false} />
                <motion.path animate={{ d: charts[chart].line }} transition={{ duration: 1.3, ease: 'easeInOut' }} initial={false} />
              </svg>
              <div className="chart-title stacked"><span>Sources added</span><small>This week</small></div>
              <div className="bar-chart">{bars.map((v, i) => <motion.div key={`${bar}-${i}`} className="bar" initial={{ height: 0 }} animate={{ height: `${v}%` }} transition={{ duration: .6, ease: 'easeOut', delay: i * .05 }} />)}</div>
            </div>
            <div className="chart-card pie-card"><div className="chart-title"><span>Sources by type</span><small>Live</small></div>
              <div className="donut-wrap">
                <svg viewBox="0 0 42 42" className="donut">
                  <circle cx="21" cy="21" r="15.9" className="donut-track" />
                  {arcs.map((seg, i) => <motion.circle key={i} cx="21" cy="21" r="15.9" className={`donut-seg c${i}`} initial={{ strokeDasharray: '0 99.9', strokeDashoffset: seg.offset }} animate={{ strokeDasharray: seg.dash, strokeDashoffset: seg.offset }} transition={{ duration: .8, ease: 'easeOut', delay: i * .1 }} />)}
                </svg>
                <div className="donut-center"><strong>{topPct}%</strong></div>
              </div>
              <div className="donut-legend">{arcs.map((seg, i) => <span key={i}><i className={`c${i}`} />{seg.label}<b>{seg.pct}%</b></span>)}</div>
            </div>
          </div>
          <div className="related-card"><div><small>RELATED KNOWLEDGE</small><strong>8 records connected</strong></div><div className="related-orbits"><span /><span /><span /></div></div>
          <div className="live-feed"><span className="live-dot" /><AnimatePresence mode="wait"><motion.span key={feed} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}>{feed}</motion.span></AnimatePresence></div>
        </div>
      </div>
    </Reveal>
    <Reveal className="workspace-copy">
      <SectionLabel>CENTRALIZED RESEARCH</SectionLabel>
      <h2>Everything your team needs to understand what it <em>already knows.</em></h2>
      <p>Fragmented papers, notes, references, and internal sources become a connected research environment — ready to search, review, and reuse.</p>
      <Link to="/product" className="text-link">Explore workspace <ArrowUpRight size={14} /></Link>
      <div className="workspace-image"><img src="https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" alt="Researchers collaborating on shared research" /><div className="workspace-image-overlay"><span className="live-dot" />Live research workspace</div></div>
    </Reveal>
  </div></div></section>;
}

export { Workspace };