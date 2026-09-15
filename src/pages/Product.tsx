import { useEffect } from "react";
import {
  ArrowUpRight,
  Database,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Search,
  Network,
  CheckCircle2,
  Layers,
  FileText,
  Cpu,
  Activity,
  ExternalLink,
  ChevronRight,
  FlaskConical,
  Atom,
  Plane,
  Scale,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionLabel } from "../components/SectionLabel";
import { NetworkVisual } from "../components/NetworkVisual";
import { AtlasInteractiveWorkspace } from "../components/AtlasInteractiveWorkspace";
import { AtlasTechStack } from "../components/AtlasTechStack";

const productPillars = [
  {
    icon: Search,
    no: "01",
    title: "Intelligent Discovery & Semantic Intent",
    tagline: "Move beyond rigid keyword matches to conceptual understanding.",
    description:
      "Search across vast scientific literature repositories, internal experimental trials, and multi-format research records by high-level semantic intent. Atlas understands the physics, chemistry, and engineering context behind your questions, retrieving the exact passages you need in milliseconds.",
    benefits: [
      "Semantic intent retrieval over naive keyword searches",
      "Dense vector indexing across unstructured documents",
      "Instant cross-disciplinary relevance matching",
    ],
  },
  {
    icon: ShieldCheck,
    no: "02",
    title: "Evidence Review & 1:1 Citation Guarantee",
    tagline: "Zero tolerance for hallucination in high-stakes decisions.",
    description:
      "Every synthesized insight, summary bullet, and technical deduction is accompanied by an immutable 1:1 link to its source document, down to the exact paragraph and figure. Researchers can verify underlying facts in a single click with complete auditability.",
    benefits: [
      "Sub-passage level provenance and source tracing",
      "Auditable citation ledger for regulatory submissions",
      "Context-preserving passage highlights",
    ],
  },
  {
    icon: Sparkles,
    no: "03",
    title: "Automated Synthesis & Research Records",
    tagline: "Condense weeks of dense documentation into actionable briefs.",
    description:
      "Fine-tuned domain models read hundreds of scientific papers and internal lab notes to synthesize multi-document findings, highlight conflicting experimental data, and draft structured research records ready for team collaboration.",
    benefits: [
      "Automated technical briefs with contextual references",
      "Discrepancy and anomaly detection across trials",
      "Living research records updated with new data",
    ],
  },
  {
    icon: Network,
    no: "04",
    title: "Related Knowledge & Citation Graphing",
    tagline: "Expose hidden connections across siloed research teams.",
    description:
      "Map citation networks, research topics, and author groups into a navigable, high-performance graph. Uncover latent synergies between concurrent research projects and prevent duplicative experimental spending.",
    benefits: [
      "Interactive topic clusters and citation trees",
      "Discovery of adjacent research and prior art",
      "Cross-team knowledge reuse across enterprise units",
    ],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Ingest Multi-Format Payloads",
    desc: "Rapidly ingest research papers, PDFs, patents, LaTeX formulations, and raw experimental notes at GPU speed without manual formatting.",
    icon: Database,
  },
  {
    step: "02",
    title: "Dense GPU Indexing & Neural Reranking",
    desc: "Transform complex technical literature into dense semantic vectors and neural rerank candidates with sub-passage granularity.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Interactive Knowledge Graphing",
    desc: "Model inter-document citation networks and topic relationships as a dynamic graph to reveal hidden cross-project breakthroughs.",
    icon: Network,
  },
  {
    step: "04",
    title: "Verified Synthesis & Action",
    desc: "Generate executive technical briefs and living research records with guaranteed 1:1 citations and continuous team sync.",
    icon: Sparkles,
  },
];

const domains = [
  {
    icon: Atom,
    title: "Materials Science & Energy",
    desc: "Accelerate cathode chemistry, solid-state electrolyte development, and polymer stability testing with connected literature synthesis.",
  },
  {
    icon: FlaskConical,
    title: "Biopharma & Therapeutics",
    desc: "Analyze target binding assays, clinical trial literature, and patent disclosures with rigorous 1:1 evidence traceability.",
  },
  {
    icon: Plane,
    title: "Aerospace & Advanced Engineering",
    desc: "Synthesize metallurgical reports, CFD validation trials, and composite fatigue data across distributed engineering programs.",
  },
  {
    icon: Scale,
    title: "Patent Strategy & Prior Art",
    desc: "Rapidly uncover prior-art citations and map competitive patent claims across global databases in sub-second queries.",
  },
];

export function Product() {
  useEffect(() => {
    document.title =
      "Lorvane Atlas — Enterprise AI Research & Knowledge Discovery Platform";
  }, []);

  return (
    <>
      <Header solid />

      {/* 1. Atlas Hero Section */}
      <section className="product-hero atlas-hero atlas-hero-centered">
        <div className="container">
          <div className="atlas-hero-content">
            <div className="atlas-hero-top-badge">
              <span className="live-dot" />
              <span>LORVANE ATLAS // AI RESEARCH ENGINE</span>
            </div>

            <h1>
              The Intelligent Discovery Engine for <em>High-Stakes R&amp;D.</em>
            </h1>

            <p>
              Lorvane Atlas bridges disparate scientific literature, internal
              laboratory records, and ongoing hypotheses into one
              interconnected, evidence-traceable research environment. Search by
              semantic intent, review verified citations, and synthesize
              breakthrough insights with complete provenance.
            </p>

            <div className="hero-actions">
              {/* Primary CTA: Links directly to live product */}
              <a
                href="https://app.lorvane.net"
                target="_blank"
                rel="noreferrer"
                className="button button-primary atlas-primary-cta"
                id="hero-launch-atlas"
              >
                <span>Launch Lorvane Atlas</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#workspace-experience"
                className="button button-quiet light"
              >
                Explore Product Experience <span>↓</span>
              </a>
            </div>

            {/* Scannable stack ribbon */}
            <div className="atlas-hero-tech-ribbon">
              <span className="atlas-ribbon-label">
                ACCELERATED BY NVIDIA AI ENTERPRISE
              </span>
              <div className="atlas-ribbon-tags">
                <span>NeMo Retriever</span>
                <i>•</i>
                <span>NeMo Framework</span>
                <i>•</i>
                <span>NVIDIA NIM</span>
                <i>•</i>
                <span>RAPIDS cuGraph</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hands-On Interactive Workspace Showcase */}
      <AtlasInteractiveWorkspace />

      {/* 3. Core Product Pillars */}
      <section className="section atlas-pillars-section" id="capabilities">
        <div className="container">
          <div className="section-intro">
            <div>
              <SectionLabel>PRODUCT CAPABILITIES</SectionLabel>
              <h2>
                Purpose-built for <em>scientific rigor</em> and discovery speed.
              </h2>
            </div>
            <p>
              Generic search tools and hallucinating chatbots fail in
              mission-critical R&amp;D. Lorvane Atlas was engineered from the
              ground up for strict evidence verification, multi-format
              synthesis, and cross-project knowledge reuse.
            </p>
          </div>

          <div className="atlas-pillars-grid">
            {productPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div className="atlas-pillar-card" key={pillar.no}>
                  <div className="atlas-pillar-top">
                    <span className="atlas-pillar-no">{pillar.no}</span>
                    <div className="atlas-pillar-icon-box">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3>{pillar.title}</h3>
                  <div className="atlas-pillar-tagline">{pillar.tagline}</div>
                  <p>{pillar.description}</p>

                  <div className="atlas-pillar-benefits">
                    {pillar.benefits.map((b) => (
                      <div key={b} className="atlas-benefit-line">
                        <CheckCircle2 size={14} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://app.lorvane.net"
                    target="_blank"
                    rel="noreferrer"
                    className="atlas-card-learn-link"
                  >
                    Experience in Atlas <ArrowUpRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Enterprise R&D Workflow (From Ingestion to Breakthrough) */}
      <section className="section atlas-workflow-section" id="workflow">
        <div className="container">
          <div className="atlas-workflow-head">
            <div>
              <SectionLabel>THE RESEARCH JOURNEY</SectionLabel>
              <h2>
                How unstructured data transforms into{" "}
                <em>actionable intelligence.</em>
              </h2>
            </div>
            <p>
              Follow how multi-format scientific documentation moves through the
              Lorvane Atlas intelligence pipeline to accelerate time-to-insight.
            </p>
          </div>

          <div className="atlas-flow-cards">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div className="atlas-flow-card" key={step.step}>
                  <div className="atlas-flow-step-num">{step.step}</div>
                  <div className="atlas-flow-icon">
                    <Icon size={22} />
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  {idx < workflowSteps.length - 1 && (
                    <div className="atlas-flow-connector">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Scannable Technical Stack (NVIDIA AI SDK Foundation) */}
      <AtlasTechStack />

      {/* 6. Built for High-Stakes Research Domains & Enterprise Security */}
      <section className="section atlas-domains-section" id="domains">
        <div className="container">
          <div className="section-intro">
            <div>
              <SectionLabel>SPECIALIZED DOMAINS</SectionLabel>
              <h2>
                Tailored for teams where <em>accuracy is non-negotiable.</em>
              </h2>
            </div>
            <p>
              Whether synthesizing complex electrochemical trials or auditing
              patent infringement claims, Lorvane Atlas adapts to specialized
              enterprise vernacular.
            </p>
          </div>

          <div className="atlas-domain-grid">
            {domains.map((d) => {
              const Icon = d.icon;
              return (
                <div className="atlas-domain-card" key={d.title}>
                  <div className="atlas-domain-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{d.title}</h4>
                  <p>{d.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Security & Governance Callout */}
          <div className="atlas-security-box">
            <div className="atlas-security-left">
              <ShieldCheck size={28} />
              <div>
                <h3>Enterprise-Grade Privacy &amp; Data Sovereignty</h3>
                <p>
                  Your proprietary experimental data, research records, and
                  queries are never used to train public LLMs. Lorvane Atlas
                  supports dedicated tenant isolation, SOC2 readiness, and
                  air-gapped on-premises deployments.
                </p>
              </div>
            </div>
            <div className="atlas-security-badges">
              <div className="atlas-sec-pill">
                <LockKeyhole size={14} /> Zero Data Retention
              </div>
              <div className="atlas-sec-pill">
                <Layers size={14} /> Granular RBAC Permissions
              </div>
              <div className="atlas-sec-pill">
                <Activity size={14} /> Full Audit Trail
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Conversion CTA Section */}
      <section className="final-cta atlas-final-cta">
        <div className="container cta-inner">
          <div>
            <SectionLabel>TRANSFORM YOUR R&amp;D INTELLIGENCE</SectionLabel>
            <h2>
              Ready to give your researchers the <em>Atlas advantage?</em>
            </h2>
            <p>
              Stop losing discoveries in buried PDF archives and fragmented
              notes. Unify your team's knowledge into one structured,
              evidence-traceable intelligence platform.
            </p>

            <div className="hero-actions">
              <a
                href="https://app.lorvane.net"
                target="_blank"
                rel="noreferrer"
                className="button button-primary atlas-primary-cta"
                id="cta-launch-atlas"
              >
                <span>Launch Lorvane Atlas</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="mailto:support@lorvane.net"
                className="button button-quiet light"
              >
                Request Enterprise Briefing <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="cta-visual">
            <NetworkVisual compact />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Product;
