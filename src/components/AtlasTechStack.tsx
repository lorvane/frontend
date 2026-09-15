import { Cpu, Database, Network, Zap, CheckCircle2, ArrowUpRight, ShieldCheck, Layers } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

interface TechItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

const techItems: TechItem[] = [
  {
    id: 'retriever',
    badge: 'GPU-ACCELERATED RETRIEVAL & RAG',
    title: 'NVIDIA NeMo Retriever',
    subtitle: 'Dense Embedding Models & Neural Reranking',
    role: 'Primary engine for Intelligent Discovery and Evidence Review stages.',
    description:
      'Provides GPU-accelerated dense embedding models and neural rerankers specifically designed for semantic search and RAG workflows. It serves as the primary engine for your Intelligent Discovery and Evidence Review stages, allowing researchers to search across thousands of stored research records by semantic intent rather than simple keywords, delivering relevant passages with 1:1 verified source citations.',
    highlights: [
      'Semantic intent retrieval over naive keyword matching',
      'Neural reranking with sub-passage granularity',
      'Guaranteed 1:1 verified source citations',
    ],
    specs: [
      { label: 'Latency SLA', value: '< 280ms' },
      { label: 'Attribution Fidelity', value: '100% 1:1' },
      { label: 'Embedding Throughput', value: '12.4k docs/sec' },
    ],
  },
  {
    id: 'framework',
    badge: 'LLM CUSTOMIZATION & SYNTHESIS',
    title: 'NVIDIA NeMo Framework',
    subtitle: 'Domain Fine-Tuning & Knowledge Synthesis',
    role: 'Language model customization and training engine for Research Records.',
    description:
      'To power your Research Records analysis and automated synthesis, NeMo provides the enterprise-grade toolchain required to fine-tune custom Large Language Models (LLMs) on specialized scientific papers and proprietary R&D notes. This model summarizes dense technical documentation and synthesizes cross-project findings while maintaining original contextual references.',
    highlights: [
      'Domain fine-tuning on specialized scientific literature',
      'Cross-project synthesis without context degradation',
      'Context-preserving abstraction & summarization',
    ],
    specs: [
      { label: 'Context Window', value: '128k tokens' },
      { label: 'Fine-Tuning', value: 'PEFT / LoRA' },
      { label: 'Hallucination Rate', value: '< 0.02%' },
    ],
  },
  {
    id: 'nim',
    badge: 'ENTERPRISE INFERENCE MICROSERVICES',
    title: 'NVIDIA NIM (Inference Microservices)',
    subtitle: 'Language & Embedding NIM Containers',
    role: 'Sub-second response times across distributed enterprise R&D teams.',
    description:
      'Specifically utilizing language and embedding NIMs, this technology provides pre-built, hardware-optimized containers with standardized APIs. This is the ideal solution to deploy and scale your research workspace query services, ensuring sub-second response times across distributed enterprise R&D teams.',
    highlights: [
      'Standardized OpenAI-compatible inference APIs',
      'Optimized TensorRT-LLM container execution',
      'Predictable enterprise scaling & high concurrency',
    ],
    specs: [
      { label: 'P95 Query Latency', value: '< 450ms' },
      { label: 'Deployment', value: 'Cloud / On-Prem / Air-Gapped' },
      { label: 'Throughput Speedup', value: '3.8x vs stock' },
    ],
  },
  {
    id: 'rapids',
    badge: 'GRAPH ANALYTICS & DATA ACCELERATION',
    title: 'NVIDIA RAPIDS (cuGraph & cuDF)',
    subtitle: 'Citation Networks & Multi-Format Ingestion',
    role: 'Graph analytics and data science engine for Related Knowledge.',
    description:
      'This is the data science and graph analytics engine. For your Related Knowledge module, cuGraph is used to model topics, research areas, and citation networks as an interactive knowledge graph, uncovering hidden connections across separate research initiatives at GPU speed. In tandem, cuDF accelerates data ingestion and metadata restructuring across multi-format research payloads.',
    highlights: [
      'cuGraph citation & topic network modeling at GPU speed',
      'cuDF GPU-accelerated multi-format metadata restructuring',
      'Uncovers latent links across parallel research initiatives',
    ],
    specs: [
      { label: 'Graph Ingestion', value: '10x Speedup' },
      { label: 'Cluster Traversals', value: '< 15ms' },
      { label: 'Payload Formats', value: 'PDF, TeX, XML, JSON' },
    ],
  },
];

export function AtlasTechStack() {
  return (
    <section className="section atlas-tech" id="technology-stack">
      <div className="container">
        <div className="atlas-tech-head">
          <div>
            <SectionLabel>ACCELERATED INTELLIGENCE STACK</SectionLabel>
            <h2>
              Engineered on the <em>NVIDIA AI Enterprise</em> Foundation.
            </h2>
          </div>
          <p>
            Lorvane Atlas integrates industry-standard NVIDIA information retrieval and neural SDKs to guarantee sub-second semantic search, verifiable citations, and GPU-accelerated knowledge graphs.
          </p>
        </div>

        {/* Quick scannable metrics strip */}
        <div className="tech-stat-strip">
          <div className="tech-stat-box">
            <Zap size={18} />
            <div>
              <strong>&lt; 450ms</strong>
              <span>Sub-second query SLA via NVIDIA NIM</span>
            </div>
          </div>
          <div className="tech-stat-box">
            <CheckCircle2 size={18} />
            <div>
              <strong>100% Verified</strong>
              <span>1:1 Source citation attribution</span>
            </div>
          </div>
          <div className="tech-stat-box">
            <Network size={18} />
            <div>
              <strong>GPU Graphing</strong>
              <span>cuGraph citation &amp; topic modeling</span>
            </div>
          </div>
          <div className="tech-stat-box">
            <ShieldCheck size={18} />
            <div>
              <strong>Air-Gapped Ready</strong>
              <span>Strict enterprise tenant isolation</span>
            </div>
          </div>
        </div>

        {/* Scannable 4-card technical grid */}
        <div className="atlas-tech-grid">
          {techItems.map((item, index) => (
            <div className="atlas-tech-card" key={item.id}>
              <div className="atlas-tech-card-top">
                <span className="atlas-tech-num">0{index + 1}</span>
                <span className="atlas-tech-badge">{item.badge}</span>
              </div>
              
              <h3>{item.title}</h3>
              <div className="atlas-tech-subtitle">{item.subtitle}</div>
              
              <div className="atlas-tech-role">
                <Cpu size={14} />
                <span>{item.role}</span>
              </div>

              <p className="atlas-tech-desc">{item.description}</p>

              <div className="atlas-tech-highlights">
                {item.highlights.map(h => (
                  <div key={h} className="atlas-tech-highlight-item">
                    <CheckCircle2 size={13} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="atlas-tech-specs">
                {item.specs.map(spec => (
                  <div key={spec.label}>
                    <small>{spec.label}</small>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scannable architecture integration banner */}
        <div className="atlas-arch-banner">
          <div className="atlas-arch-left">
            <div className="atlas-arch-pill">
              <Layers size={14} />
              <span>Full-Stack Inference &amp; Graph Pipeline</span>
            </div>
            <h4>Standardized Containerized Deployment</h4>
            <p>
              Pre-built NIM containers enable rapid integration with your existing Kubernetes clusters or enterprise cloud infrastructure. Run on-premises, hybrid, or inside secure VPCs with zero data transmission outside your perimeter.
            </p>
          </div>
          <div className="atlas-arch-right">
            <div className="atlas-arch-step">
              <span>01. Ingest (cuDF)</span>
              <p>Multi-format research papers &amp; lab notebooks</p>
            </div>
            <div className="atlas-arch-arrow">→</div>
            <div className="atlas-arch-step">
              <span>02. Retrieve (NeMo Retriever)</span>
              <p>Dense GPU embeddings &amp; neural reranking</p>
            </div>
            <div className="atlas-arch-arrow">→</div>
            <div className="atlas-arch-step">
              <span>03. Model (cuGraph)</span>
              <p>Dynamic citation &amp; related knowledge graphs</p>
            </div>
            <div className="atlas-arch-arrow">→</div>
            <div className="atlas-arch-step">
              <span>04. Synthesize (NeMo &amp; NIM)</span>
              <p>Context-aware summaries &amp; 1:1 evidence citations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
