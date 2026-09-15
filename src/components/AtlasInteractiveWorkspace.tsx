import { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Network, 
  Zap, 
  CheckCircle2, 
  FileText, 
  ExternalLink, 
  ChevronRight, 
  Layers, 
  Database, 
  ShieldCheck, 
  Clock, 
  Share2, 
  Tag,
  BookOpen
} from 'lucide-react';
import { SectionLabel } from './SectionLabel';

interface SampleResult {
  title: string;
  sourceDoc: string;
  citationId: string;
  published: string;
  confidence: number;
  highlightedText: string;
  tags: string[];
  findings: string;
}

const sampleQueries: { query: string; category: string; results: SampleResult[] }[] = [
  {
    query: 'Thermal stability and degradation kinetics in high-nickel cathode formulations',
    category: 'Materials Science',
    results: [
      {
        title: 'Microstructural phase transitions in LiNi0.9Co0.05Mn0.05O2 under elevated cycling temperatures',
        sourceDoc: 'Journal of Power Sources, Vol 512, Iss 4',
        citationId: 'REF-2026-NMC90-P44',
        published: 'August 2026',
        confidence: 99.2,
        highlightedText:
          'Differential scanning calorimetry confirms exothermic onset begins at 214°C for uncoated particles, whereas atomic layer deposition of 3nm Al2O3 elevates thermal runaway thresholds by +38.5°C without compromising specific discharge capacity (218 mAh/g at 0.1C).',
        tags: ['Cathode Chemistry', 'Thermal Runaway', 'ALD Coating'],
        findings: 'Verified 3nm Al2O3 protective layer mitigates surface oxygen release at high delithiation states.',
      },
      {
        title: 'Electrolyte interfacial reactions at 4.4V cut-off potentials in pouch-cell configurations',
        sourceDoc: 'Internal R&D Whitepaper #E-409',
        citationId: 'LAB-REC-8821',
        published: 'June 2026',
        confidence: 96.8,
        highlightedText:
          'Fluorinated cyclic carbonate additives (FEC, 5 wt%) demonstrate a 42% decrease in transition metal dissolution into the anode SEI layer over 1,000 deep discharge cycles at 45°C ambient temperature.',
        tags: ['SEI Stabilization', 'FEC Additive', 'Metal Dissolution'],
        findings: 'SEI passivation layer remains intact under continuous elevated temperature stress testing.',
      },
    ],
  },
  {
    query: 'Cross-project synthesis on solid-state electrolyte interface impedance',
    category: 'Solid-State Batteries',
    results: [
      {
        title: 'Grain boundary resistance in garnet-type Li7La3Zr2O12 solid electrolytes',
        sourceDoc: 'Applied Physics Letters & R&D Memo #G-102',
        citationId: 'REF-LLZO-992',
        published: 'July 2026',
        confidence: 98.4,
        highlightedText:
          'Sub-micron grain boundary densification achieved via rapid pulse sintering at 1050°C for 8 minutes reduces total area-specific resistance (ASR) from 142 Ω·cm² down to 18.3 Ω·cm² at room temperature.',
        tags: ['Solid Electrolyte', 'LLZO Garnet', 'Interfacial Impedance'],
        findings: 'Pulsed sintering yields 7.7x reduction in boundary impedance compared to conventional sintering.',
      },
    ],
  },
];

export function AtlasInteractiveWorkspace() {
  const [activeTab, setActiveTab] = useState<'discovery' | 'synthesis' | 'graph' | 'workspace'>('discovery');
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);
  const [graphActiveNode, setGraphActiveNode] = useState('NMC-90');

  const currentQueryData = sampleQueries[activeQueryIndex];
  const activeResult = currentQueryData.results[selectedResultIndex] || currentQueryData.results[0];

  return (
    <section className="section atlas-workspace-section" id="workspace-experience">
      <div className="container">
        <div className="atlas-workspace-intro">
          <div>
            <SectionLabel>HANDS-ON PRODUCT WORKSPACE</SectionLabel>
            <h2>
              Experience the <em>Lorvane Atlas</em> Discovery Environment.
            </h2>
          </div>
          <p>
            Explore how research teams interact with semantic retrieval, source-traceable synthesis, and dynamic knowledge networks in one cohesive interface.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="atlas-nav-tabs">
          <button
            className={`atlas-tab-btn ${activeTab === 'discovery' ? 'active' : ''}`}
            onClick={() => setActiveTab('discovery')}
          >
            <Search size={16} />
            <span>Intelligent Discovery &amp; Evidence</span>
            <small>NeMo Retriever</small>
          </button>
          <button
            className={`atlas-tab-btn ${activeTab === 'synthesis' ? 'active' : ''}`}
            onClick={() => setActiveTab('synthesis')}
          >
            <Sparkles size={16} />
            <span>Automated Synthesis &amp; Records</span>
            <small>NeMo Framework</small>
          </button>
          <button
            className={`atlas-tab-btn ${activeTab === 'graph' ? 'active' : ''}`}
            onClick={() => setActiveTab('graph')}
          >
            <Network size={16} />
            <span>Related Knowledge Graph</span>
            <small>RAPIDS cuGraph</small>
          </button>
          <button
            className={`atlas-tab-btn ${activeTab === 'workspace' ? 'active' : ''}`}
            onClick={() => setActiveTab('workspace')}
          >
            <Zap size={16} />
            <span>Telemetry &amp; Scalability</span>
            <small>NVIDIA NIM</small>
          </button>
        </div>

        {/* Tab 1: Discovery & Evidence */}
        {activeTab === 'discovery' && (
          <div className="atlas-cockpit-frame">
            <div className="atlas-cockpit-bar">
              <div className="atlas-bar-left">
                <span className="atlas-dot dot-red" />
                <span className="atlas-dot dot-yellow" />
                <span className="atlas-dot dot-green" />
                <span className="atlas-window-title">Lorvane Atlas — Intelligent Discovery Console</span>
              </div>
              <div className="atlas-bar-right">
                <span className="atlas-badge-live">1:1 CITATION GUARANTEE</span>
                <span className="atlas-badge-dim">LATENCY: 238ms</span>
              </div>
            </div>

            <div className="atlas-cockpit-body">
              {/* Search query input simulation */}
              <div className="atlas-search-shell">
                <div className="atlas-input-row">
                  <Search className="atlas-search-icon" size={18} />
                  <input
                    type="text"
                    value={currentQueryData.query}
                    readOnly
                    className="atlas-search-input"
                  />
                  <div className="atlas-search-chips">
                    {sampleQueries.map((item, idx) => (
                      <button
                        key={item.category}
                        className={`atlas-chip-btn ${activeQueryIndex === idx ? 'selected' : ''}`}
                        onClick={() => {
                          setActiveQueryIndex(idx);
                          setSelectedResultIndex(0);
                        }}
                      >
                        {item.category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="atlas-discovery-grid">
                {/* Result list */}
                <div className="atlas-results-column">
                  <div className="atlas-column-heading">
                    <span>SEMANTICALLY MATCHED PASSAGES</span>
                    <small>{currentQueryData.results.length} EVIDENCE RECORDS FOUND</small>
                  </div>

                  {currentQueryData.results.map((res, idx) => (
                    <div
                      key={res.citationId}
                      className={`atlas-result-card ${selectedResultIndex === idx ? 'active' : ''}`}
                      onClick={() => setSelectedResultIndex(idx)}
                    >
                      <div className="atlas-card-meta">
                        <span className="atlas-source-tag">{res.sourceDoc}</span>
                        <span className="atlas-score-tag">{res.confidence}% Confidence</span>
                      </div>
                      <h4>{res.title}</h4>
                      <p className="atlas-snippet">"{res.highlightedText}"</p>
                      <div className="atlas-card-footer">
                        <span className="atlas-cite-id">
                          <Tag size={12} /> {res.citationId}
                        </span>
                        <span className="atlas-date">{res.published}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 1:1 Verified Evidence Review Panel */}
                <div className="atlas-evidence-inspector">
                  <div className="atlas-column-heading">
                    <span>VERIFIED 1:1 SOURCE ATTRIBUTION</span>
                    <span className="atlas-verify-pill">
                      <CheckCircle2 size={13} /> CITATION VERIFIED
                    </span>
                  </div>

                  <div className="atlas-evidence-card">
                    <div className="atlas-doc-header">
                      <div className="atlas-doc-icon">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h5>{activeResult.sourceDoc}</h5>
                        <small>Citation ID: {activeResult.citationId} • Published: {activeResult.published}</small>
                      </div>
                    </div>

                    <div className="atlas-passage-callout">
                      <div className="atlas-passage-label">EXTRACTED EVIDENCE PASSAGE</div>
                      <blockquote className="atlas-passage-text">
                        "{activeResult.highlightedText}"
                      </blockquote>
                      <div className="atlas-passage-note">
                        Ground truth confirmed via GPU dense vector embedding &amp; neural cross-attention reranking.
                      </div>
                    </div>

                    <div className="atlas-synthesis-insight">
                      <strong>Automated Synthesis Insight:</strong>
                      <p>{activeResult.findings}</p>
                    </div>

                    <div className="atlas-tags-row">
                      {activeResult.tags.map(tag => (
                        <span key={tag} className="atlas-pill-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="atlas-action-strip">
                      <a 
                        href="https://app.lorvane.net" 
                        target="_blank" 
                        rel="noreferrer"
                        className="button button-primary"
                        style={{ fontSize: '11px', padding: '10px 16px' }}
                      >
                        Inspect in Workspace <ExternalLink size={14} />
                      </a>
                      <span className="atlas-sync-note">
                        <Clock size={13} /> Synced across 4 active project teams
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Automated Synthesis & Records */}
        {activeTab === 'synthesis' && (
          <div className="atlas-cockpit-frame">
            <div className="atlas-cockpit-bar">
              <div className="atlas-bar-left">
                <span className="atlas-dot dot-red" />
                <span className="atlas-dot dot-yellow" />
                <span className="atlas-dot dot-green" />
                <span className="atlas-window-title">Lorvane Atlas — Research Records &amp; Contextual Synthesis</span>
              </div>
              <div className="atlas-bar-right">
                <span className="atlas-badge-live">NVIDIA NeMo Fine-Tuned LLM</span>
                <span className="atlas-badge-dim">ZERO CONTEXT DEGRADATION</span>
              </div>
            </div>

            <div className="atlas-synthesis-layout">
              <div className="atlas-synthesis-sidebar">
                <small className="atlas-sidebar-title">RESEARCH RECORDS VAULT</small>
                <div className="atlas-record-item active">
                  <BookOpen size={16} />
                  <div>
                    <strong>Cathode Degradation Kinetics</strong>
                    <small>18 papers • 4 lab records synthesized</small>
                  </div>
                </div>
                <div className="atlas-record-item">
                  <Layers size={16} />
                  <div>
                    <strong>LLZO Solid Electrolyte Synthesis</strong>
                    <small>9 journal publications • 2 patents</small>
                  </div>
                </div>
                <div className="atlas-record-item">
                  <Database size={16} />
                  <div>
                    <strong>High-Voltage Electrolyte Additives</strong>
                    <small>24 internal experiment runs</small>
                  </div>
                </div>
                <div className="atlas-synthesis-meta-box">
                  <ShieldCheck size={16} />
                  <div>
                    <strong>Enterprise Data Boundary</strong>
                    <p>Proprietary laboratory notes never leave tenant perimeter; models strictly customized locally.</p>
                  </div>
                </div>
              </div>

              <div className="atlas-synthesis-canvas">
                <div className="atlas-canvas-head">
                  <div>
                    <span className="atlas-canvas-badge">EXECUTIVE TECHNICAL BRIEF</span>
                    <h3>High-Nickel NMC-90 Degradation &amp; Surface Passivation Strategies</h3>
                  </div>
                  <div className="atlas-canvas-actions">
                    <span className="atlas-pill-tag">
                      <Share2 size={12} /> Share With Team
                    </span>
                    <span className="atlas-pill-tag">PDF / Markdown</span>
                  </div>
                </div>

                <div className="atlas-canvas-content">
                  <div className="atlas-brief-section">
                    <h4>1. Executive Summary &amp; Consensus</h4>
                    <p>
                      Across 18 analyzed research records, a direct correlation is established between high cut-off voltages (&gt;4.3V) and mechanical microcracking along primary NMC-90 crystallites. Oxygen evolution triggers aggressive transition metal migration into the carbonate electrolyte.
                    </p>
                  </div>

                  <div className="atlas-brief-section">
                    <h4>2. Cross-Project Synthesis &amp; Mitigation Evidence</h4>
                    <div className="atlas-evidence-table">
                      <div className="atlas-table-row head">
                        <span>MITIGATION PATHWAY</span>
                        <span>OBSERVED BENEFIT</span>
                        <span>PROVENANCE / CITATION</span>
                        <span>CONFIDENCE</span>
                      </div>
                      <div className="atlas-table-row">
                        <span>ALD 3nm Al2O3 Coating</span>
                        <span>+38.5°C thermal onset elevation; prevents phase inversion</span>
                        <span className="cite-link">REF-2026-NMC90-P44</span>
                        <span className="score">99.2%</span>
                      </div>
                      <div className="atlas-table-row">
                        <span>5 wt% FEC Fluorinated Additive</span>
                        <span>42% reduction in transition metal dissolution at SEI</span>
                        <span className="cite-link">LAB-REC-8821</span>
                        <span className="score">96.8%</span>
                      </div>
                      <div className="atlas-table-row">
                        <span>Concentrated Sulfide Interlayer</span>
                        <span>Suppresses localized dendrite nucleation at 5 mA/cm²</span>
                        <span className="cite-link">PAT-US-2026-0041</span>
                        <span className="score">95.1%</span>
                      </div>
                    </div>
                  </div>

                  <div className="atlas-brief-section">
                    <h4>3. Recommended Next Experiment Steps</h4>
                    <ul className="atlas-bullet-list">
                      <li>Combine 3nm Al2O3 ALD coating with 5 wt% FEC in multi-layer 5Ah pouch cell prototype.</li>
                      <li>Run in-situ XRD during thermal ramp to 250°C to validate suppression of rocksalt phase transitions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Related Knowledge Graph */}
        {activeTab === 'graph' && (
          <div className="atlas-cockpit-frame">
            <div className="atlas-cockpit-bar">
              <div className="atlas-bar-left">
                <span className="atlas-dot dot-red" />
                <span className="atlas-dot dot-yellow" />
                <span className="atlas-dot dot-green" />
                <span className="atlas-window-title">Lorvane Atlas — Dynamic Citation &amp; Topic Network (NVIDIA cuGraph)</span>
              </div>
              <div className="atlas-bar-right">
                <span className="atlas-badge-live">GPU-ACCELERATED GRAPHING</span>
                <span className="atlas-badge-dim">2,418 CONNECTED EDGES</span>
              </div>
            </div>

            <div className="atlas-graph-cockpit">
              <div className="atlas-graph-canvas">
                <div className="atlas-graph-bg-grid" />
                <svg className="atlas-graph-svg" viewBox="0 0 700 420">
                  {/* Connection lines */}
                  <line x1="350" y1="210" x2="160" y2="100" stroke="#3d8bff" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3,3" />
                  <line x1="350" y1="210" x2="540" y2="90" stroke="#3d8bff" strokeWidth="2" strokeOpacity="0.7" />
                  <line x1="350" y1="210" x2="140" y2="310" stroke="#3d8bff" strokeWidth="1.5" strokeOpacity="0.5" />
                  <line x1="350" y1="210" x2="550" y2="310" stroke="#3d8bff" strokeWidth="2" strokeOpacity="0.8" />
                  <line x1="540" y1="90" x2="550" y2="310" stroke="#71aaff" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="160" y1="100" x2="140" y2="310" stroke="#71aaff" strokeWidth="1" strokeOpacity="0.3" />

                  {/* Center Node */}
                  <circle cx="350" cy="210" r="54" fill="#0b2940" stroke="#3d8bff" strokeWidth="2" />
                  <circle cx="350" cy="210" r="66" fill="none" stroke="#71aaff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4,4" />

                  {/* Satellite nodes */}
                  <circle cx="160" cy="100" r="38" fill="#071a2b" stroke="#68a8ff" strokeWidth="1.5" />
                  <circle cx="540" cy="90" r="42" fill="#071a2b" stroke="#3d8bff" strokeWidth="2" />
                  <circle cx="140" cy="310" r="36" fill="#071a2b" stroke="#529bff" strokeWidth="1.5" />
                  <circle cx="550" cy="310" r="44" fill="#071a2b" stroke="#71aaff" strokeWidth="2" />
                </svg>

                {/* HTML Overlays for nodes */}
                <div 
                  className={`atlas-node-badge center-badge ${graphActiveNode === 'NMC-90' ? 'active' : ''}`}
                  onClick={() => setGraphActiveNode('NMC-90')}
                  style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <small>CENTRAL ENTITY</small>
                  <strong>NMC-90 Cathode</strong>
                  <span>142 Citations</span>
                </div>

                <div 
                  className={`atlas-node-badge sat-badge ${graphActiveNode === 'ALD' ? 'active' : ''}`}
                  onClick={() => setGraphActiveNode('ALD')}
                  style={{ left: '23%', top: '24%' }}
                >
                  <small>TOPIC CLUSTER</small>
                  <strong>ALD Al2O3 Coating</strong>
                  <span>28 Papers</span>
                </div>

                <div 
                  className={`atlas-node-badge sat-badge ${graphActiveNode === 'FEC' ? 'active' : ''}`}
                  onClick={() => setGraphActiveNode('FEC')}
                  style={{ right: '23%', top: '21%' }}
                >
                  <small>RELATED MOLECULE</small>
                  <strong>FEC Fluorinated Additive</strong>
                  <span>46 Records</span>
                </div>

                <div 
                  className={`atlas-node-badge sat-badge ${graphActiveNode === 'SEI' ? 'active' : ''}`}
                  onClick={() => setGraphActiveNode('SEI')}
                  style={{ left: '20%', bottom: '26%' }}
                >
                  <small>MECHANISM</small>
                  <strong>SEI Passivation</strong>
                  <span>89 Citations</span>
                </div>

                <div 
                  className={`atlas-node-badge sat-badge ${graphActiveNode === 'LLZO' ? 'active' : ''}`}
                  onClick={() => setGraphActiveNode('LLZO')}
                  style={{ right: '21%', bottom: '26%' }}
                >
                  <small>CROSS-PROJECT LINK</small>
                  <strong>LLZO Solid Interfaces</strong>
                  <span>34 Records</span>
                </div>
              </div>

              {/* Sidebar node inspector */}
              <div className="atlas-graph-inspector">
                <div className="atlas-column-heading">
                  <span>GRAPH NODE INSPECTOR</span>
                  <small>RAPIDS cuGraph ACCELERATED</small>
                </div>

                <div className="atlas-inspector-body">
                  <div className="atlas-inspect-head">
                    <Network size={20} />
                    <div>
                      <h4>Active Node: {graphActiveNode}</h4>
                      <small>Clustering Co-occurrence Score: 0.942</small>
                    </div>
                  </div>

                  <p className="atlas-inspect-desc">
                    cuGraph models research entities, author clusters, patent claims, and scientific citations as high-dimensional graph embeddings. Uncovers indirect cross-project relationships that standard keyword search engines miss.
                  </p>

                  <div className="atlas-inspect-stats">
                    <div>
                      <small>DEGREE CENTRALITY</small>
                      <strong>0.884</strong>
                    </div>
                    <div>
                      <small>CO-CITATION DEPTH</small>
                      <strong>4 Tiers</strong>
                    </div>
                    <div>
                      <small>COMMUNITY ID</small>
                      <strong>#Cluster-9B</strong>
                    </div>
                  </div>

                  <div className="atlas-inspect-links">
                    <span className="atlas-inspect-title">DETECTED LATENT CONNECTIONS:</span>
                    <div className="atlas-inspect-item">
                      <span>• Shared phase transition kinetics with Solid-State Project #4</span>
                      <ChevronRight size={14} />
                    </div>
                    <div className="atlas-inspect-item">
                      <span>• Overlapping patent prior-art citations in US2026/0411</span>
                      <ChevronRight size={14} />
                    </div>
                    <div className="atlas-inspect-item">
                      <span>• Lab notebook cross-reference from Battery Cell Lab B</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Telemetry & Ingestion */}
        {activeTab === 'workspace' && (
          <div className="atlas-cockpit-frame">
            <div className="atlas-cockpit-bar">
              <div className="atlas-bar-left">
                <span className="atlas-dot dot-red" />
                <span className="atlas-dot dot-yellow" />
                <span className="atlas-dot dot-green" />
                <span className="atlas-window-title">Lorvane Atlas — Distributed Enterprise Microservices (NVIDIA NIM)</span>
              </div>
              <div className="atlas-bar-right">
                <span className="atlas-badge-live">STATUS: HEALTHY</span>
                <span className="atlas-badge-dim">CONCURRENCY: 320 R&amp;D USERS</span>
              </div>
            </div>

            <div className="atlas-telemetry-grid">
              <div className="atlas-telemetry-card">
                <div className="atlas-telem-top">
                  <small>QUERY LATENCY (P95)</small>
                  <Zap size={16} />
                </div>
                <strong>342 ms</strong>
                <div className="atlas-telem-bar">
                  <div className="atlas-telem-fill" style={{ width: '38%' }} />
                </div>
                <span>Sub-second SLA powered by hardware-optimized NIM containers</span>
              </div>

              <div className="atlas-telemetry-card">
                <div className="atlas-telem-top">
                  <small>INGESTION ACCELERATION</small>
                  <Database size={16} />
                </div>
                <strong>10.4x Speedup</strong>
                <div className="atlas-telem-bar">
                  <div className="atlas-telem-fill" style={{ width: '88%' }} />
                </div>
                <span>RAPIDS cuDF multi-format metadata restructuring</span>
              </div>

              <div className="atlas-telemetry-card">
                <div className="atlas-telem-top">
                  <small>CITATION VERIFICATION</small>
                  <CheckCircle2 size={16} />
                </div>
                <strong>100.0%</strong>
                <div className="atlas-telem-bar">
                  <div className="atlas-telem-fill" style={{ width: '100%' }} />
                </div>
                <span>Guaranteed 1:1 ground-truth passage attribution</span>
              </div>

              <div className="atlas-telemetry-card">
                <div className="atlas-telem-top">
                  <small>TENANT SECURITY</small>
                  <ShieldCheck size={16} />
                </div>
                <strong>Air-Gapped Ready</strong>
                <div className="atlas-telem-bar">
                  <div className="atlas-telem-fill" style={{ width: '100%' }} />
                </div>
                <span>Zero model training on proprietary enterprise queries</span>
              </div>
            </div>

            <div className="atlas-telemetry-bottom">
              <div className="atlas-telemetry-info">
                <h4>Standardized Enterprise Deployment</h4>
                <p>
                  Deploy Lorvane Atlas inside your secure VPC, on-premises DGX / HGX clusters, or hybrid cloud environments. Pre-configured Helm charts and containerized NIM microservices deliver enterprise high availability out of the box.
                </p>
              </div>
              <div className="atlas-telemetry-cta">
                <a 
                  href="https://app.lorvane.net" 
                  target="_blank" 
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Launch Live Workspace <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
