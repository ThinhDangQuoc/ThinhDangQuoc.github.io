# Design Specification: AI / Machine Learning Engineer & Researcher Portfolio

* **Date:** 2026-10-14
* **Author:** Thinh Dang Quoc & AI Assistant
* **Target Audience:** AI/ML Hiring Managers, Research Scientists, Technical Leads, Academic Collaborators
* **Status:** Approved / Ready for Implementation Planning

---

## 1. Executive Summary & Goals

The objective is to design and build a high-performance, visually stunning personal portfolio for **Thinh Dang Quoc**, an AI / Machine Learning Engineer & Researcher specializing in **Multimodal AI, Video-Language Retrieval, and Deep Reinforcement Learning**.

The portfolio adopts the **Deep-Tech Interactive Lab** aesthetic (inspired by top AI research organizations like DeepMind and OpenAI), balancing cutting-edge visual polish with technical rigor. Unlike typical static resume sites, this portfolio emphasizes **interactive project inspection**, including **interactive architecture pipeline flowcharts**, technical metrics, and code integration.

### Core Goals:
1. **Highlight Technical Depth:** Showcase complex systems through interactive dataflow diagrams (e.g., multimodal feature extraction, vector indexing, RL policy training).
2. **Immediate Visual Impact:** Deliver a sleek, futuristic dark-mode theme with glassmorphism, glowing bioluminescent violet/cyan accents, and an ambient neural particle background.
3. **Blazing Fast & Zero-Dependency:** Built entirely with semantic HTML5, modern Vanilla CSS, and modular ES6+ JavaScript—requiring zero build tools, loading in `<100ms`, and deployable instantly on GitHub Pages.
4. **Accessible & Responsive:** Flawlessly responsive across mobile, tablet, and ultra-wide displays with full keyboard navigation and `prefers-reduced-motion` compliance.

---

## 2. Information Architecture & Navigation

The portfolio is structured as a high-density, single-page application with smooth section targeting and dynamic URL hash updates:

```
[ Navigation Bar: Monogram Logo | Status Badge | Section Links | CV Download ]
                                    │
                                    ▼
[ Hero Section: Neural Particle Canvas | Badge | Headline | Stats Strip | CTAs ]
                                    │
                                    ▼
[ Flagship Projects: Multimodal Video Retrieval | RL vs Evolutionary | Inference ]
  └─ Tab 1: System Overview (Problem, Solution, Metrics)
  └─ Tab 2: Interactive Architecture Pipeline (Live SVG Nodes + Hover Telemetry)
  └─ Tab 3: Tech Stack & Repositories (GitHub, Demos, Docs)
                                    │
                                    ▼
[ Technical Competencies: Categorized Matrix + Interactive Project Highlighting ]
                                    │
                                    ▼
[ Experience & Research Timeline: Chronological Milestones + Publications ]
                                    │
                                    ▼
[ Contact Hub: 1-Click Copy Email | Verified Socials | Direct Inquiry Form ]
```

### 2.1 Navigation Bar
* **Monogram / Identity:** `TQ` brand badge with an active glowing pulse dot and label: `"Available for ML & Research Roles"`.
* **Nav Links:** Smooth scroll anchors for `#projects`, `#skills`, `#timeline`, `#contact`.
* **Action CTA:** Distinctive glassmorphic `"Download Resume (PDF)"` button with hover gradient illumination.
* **Mobile Menu:** Accessible hamburger toggle with slide-in glass drawer for viewports `< 768px`.

### 2.2 Hero Section
* **Ambient Canvas:** Background HTML5 canvas rendering a dynamic particle/constellation field symbolizing latent embedding space and neural connections.
  * Adaptive framerate: Clamped to 60fps via `requestAnimationFrame`.
  * Interaction: Subtly repels and attracts nodes relative to mouse coordinates.
  * Battery/Performance friendly: Automatically pauses when scrolled out of view (`IntersectionObserver`) or when `prefers-reduced-motion` is active.
* **Status Pill:** Glowing indicator: `"AI & Machine Learning Engineer | Multimodal AI & RL"`.
* **Headline:** `"Engineering Intelligent Systems from Research to Scalable Deployment"`.
* **Subheading:** Concise technical summary focusing on cross-modal video retrieval, sample-efficient reinforcement learning, and high-throughput vector systems.
* **Key Stats Strip:** Glass metric cards:
  * `Multimodal Systems` (Cross-Modal Video & Text Alignment)
  * `Reinforcement Learning` (Policy Optimization & Adaptive Planning)
  * `Latency & Scale` (Sub-50ms Vector Retrieval & Optimized Pipelines)
* **Call to Actions:**
  * Primary: `"Explore Projects"` (smooth scroll to showcase).
  * Secondary: `"GitHub Profile"` (`https://github.com/ThinhDangQuoc`).
  * Tertiary: `"Contact Me"` (smooth scroll to contact).

---

## 3. Flagship Projects & Interactive Architecture Pipelines

The portfolio centers around high-impact, expandable project cards with interactive multi-tab inspectors.

### 3.1 Project 1: Multimodal Video Retrieval System
* **Context & Repo:** GitHub: `https://github.com/ThinhDangQuoc/multimodal-video-retrieval-system`
* **Tags:** `Multimodal AI`, `Video-Language`, `Vector Search`, `PyTorch`, `Milvus / FAISS`
* **Tab 1: System Overview:**
  * **Problem:** Searching unannotated, hours-long video streams by natural language descriptions suffers from severe modality gap, temporal misalignment, and slow retrieval speeds.
  * **Solution:** Dual-encoder architecture utilizing vision-language backbones with temporal pooling, cross-modal attention, and multi-stage reranking.
  * **Metrics & Results:** Sub-50ms query latency, high Recall@5 / Recall@10 on benchmark video retrieval datasets.
* **Tab 2: Interactive Architecture Pipeline (SVG + DOM):**
  * Dataflow path:
    1. `[Text Query / Video Input]` $\rightarrow$
    2. `[Temporal Frame Sampler & Feature Extractor]` $\rightarrow$
    3. `[Cross-Modal Embedding Projector (512-d / 768-d)]` $\rightarrow$
    4. `[High-Dimensional Vector Index (FAISS/Milvus HNSW)]` $\rightarrow$
    5. `[Cross-Attention Neural Reranker]` $\rightarrow$
    6. `[Ranked Video Timestamp Clips]`
  * **Interactive Micro-Behavior:** Hovering any node in the SVG diagram activates glowing connector traces and displays a telemetry tooltip with layer details (e.g., input shapes, latency budget, loss function used).
* **Tab 3: Tech Stack & Links:**
  * Tech Badges: `PyTorch`, `Hugging Face`, `FAISS`, `FastAPI`, `Docker`, `OpenCV`.
  * Action Links: `View GitHub Repository`, `Architecture Docs`, `Live Demo Demo`.

### 3.2 Project 2: Deep Reinforcement Learning for Adaptive Planning
* **Tags:** `Reinforcement Learning`, `Policy Optimization`, `PPO/SAC`, `Evolutionary Algorithms`
* **Tab 1: System Overview:**
  * **Problem:** Traditional evolutionary search algorithms suffer from exponential sample complexity and slow convergence in complex, continuous state spaces.
  * **Solution:** Formulation of planning as a Markov Decision Process (MDP) using deep Actor-Critic architectures with reward shaping and entropy regularization.
  * **Metrics & Results:** Significant reduction in training steps and faster convergence to Pareto-optimal decision frontiers compared to genetic/evolutionary baselines.
* **Tab 2: Interactive Architecture Pipeline:**
  * Dataflow path:
    1. `[State Observation / Environment]` $\rightarrow$
    2. `[Actor Network (Policy) & Critic Network (Value)]` $\rightarrow$
    3. `[Generalized Advantage Estimation (GAE)]` $\rightarrow$
    4. `[PPO Clipped Surrogate Objective]` $\rightarrow$
    5. `[Action Execution & State Transition]`
  * **Interactive Micro-Behavior:** Toggle switch displaying simulated convergence comparison curve between Evolutionary Strategy vs. Deep RL.
* **Tab 3: Tech Stack & Links:**
  * Tech Badges: `PyTorch`, `Gymnasium`, `NumPy`, `WandB`, `Python`.
  * Action Links: `View Repository`, `Benchmark Report`.

### 3.3 Project 3: Real-Time Neural Inference & Streaming Pipeline
* **Tags:** `MLOps`, `TensorRT / ONNX`, `Low-Latency Inference`, `Microservices`
* **Tab 1: System Overview:**
  * End-to-end inference server with dynamic batching, FP16/INT8 quantization, and concurrent asynchronous worker pools for real-time video/text processing.
* **Tab 2: Interactive Architecture Pipeline:**
  * Dynamic batching $\rightarrow$ Quantized Engine $\rightarrow$ Async IPC Queue $\rightarrow$ Streaming Output.
* **Tab 3: Tech Stack & Links:**
  * Tech Badges: `TensorRT`, `ONNX Runtime`, `Triton`, `FastAPI`, `Redis`.

---

## 4. Technical Competencies Matrix

Competencies are displayed as categorized high-density capability matrices with interactive project cross-referencing:

1. **Deep Learning & Modeling:**
   * `PyTorch`, `Transformers`, `TorchVision`, `Gymnasium`, `Stable-Baselines3`, `Scikit-Learn`, `JAX/NumPy`.
2. **Multimodal AI & Vector Search:**
   * `CLIP / BLIP`, `Vector Embeddings`, `FAISS`, `Milvus`, `Qdrant`, `OpenCV`, `FFmpeg`.
3. **Systems & MLOps:**
   * `CUDA / GPU Acceleration`, `TensorRT / ONNX`, `Docker`, `FastAPI`, `Triton Inference Server`, `Linux / Bash`.
4. **Languages & Core Tooling:**
   * `Python (AsyncIO / Multiprocessing)`, `C++`, `SQL`, `Git & GitHub Actions`.

**Interactive Cross-Referencing:**
Clicking any skill badge (e.g., `FAISS` or `PyTorch`) instantly highlights the projects that utilize that technology and scrolls smoothly to the showcase.

---

## 5. Experience & Research Milestones Timeline

A sleek vertical glowing timeline with glowing micro-nodes:
* **Academic Background:** Degree in Computer Science (Khoa học Máy tính) with focus on Artificial Intelligence, Algorithms, and Deep Learning.
* **Research Milestones:** Development and benchmarking of Multimodal Video Retrieval Systems and Reinforcement Learning decision architectures.
* **Engineering Milestones:** Building scalable ML inference pipelines, open-source repositories, and performance optimizations.

---

## 6. Contact Hub & Professional Footprint

* **1-Click Copy Email:**
  * Displays email address with a copy icon.
  * Clicking triggers clipboard write and shows an animated glass toast: `"Copied to clipboard!"`.
* **Direct Professional Links:**
  * GitHub: `https://github.com/ThinhDangQuoc`
  * LinkedIn profile link
  * Google Scholar / ResearchGate link
* **Resume Download:**
  * Direct action with format and last-updated badge (`PDF • Oct 2026`).
* **Contact Inquiry Form:**
  * Inputs: Name, Email, Subject, Message.
  * Client-side validation with instant visual feedback and a pre-formatted `mailto:` trigger fallback.

---

## 7. Technical Implementation Details

### 7.1 Directory & File Layout
```
/home/thinh/.gemini/antigravity-ide/scratch/portfolio/
├── index.html                  # Semantic structure, meta tags, schema.org JSON-LD
├── styles/
│   ├── main.css                # Design system tokens, reset, typography, global layout
│   ├── components.css          # Hero, glassmorphic cards, timeline, skills, toast
│   └── architecture.css        # Interactive SVG pipeline flowcharts & node animations
├── js/
│   ├── app.js                  # Main controller: scroll spy, mobile menu, toast, form
│   ├── canvas-bg.js            # Ambient neural constellation particle animation
│   └── projects.js             # Project tab inspector, interactive SVG telemetry, filters
└── assets/
    ├── icons/                  # High-quality SVG icons (GitHub, LinkedIn, Scholar, etc.)
    └── diagrams/               # Architecture pipeline vector definitions
```

### 7.2 Design Tokens (Vanilla CSS)
* **Colors:**
  * `--bg-primary`: `#090D16`
  * `--bg-surface`: `rgba(255, 255, 255, 0.03)`
  * `--bg-surface-hover`: `rgba(255, 255, 255, 0.06)`
  * `--border-subtle`: `rgba(255, 255, 255, 0.08)`
  * `--border-glow`: `rgba(139, 92, 246, 0.4)`
  * `--accent-violet`: `#8B5CF6`
  * `--accent-cyan`: `#06B6D4`
  * `--accent-emerald`: `#10B981`
  * `--text-primary`: `#F8FAFC`
  * `--text-secondary`: `#94A3B8`
  * `--text-muted`: `#64748B`
* **Typography:**
  * Display: `'Plus Jakarta Sans', system-ui, sans-serif`
  * Body: `'Inter', system-ui, sans-serif`
  * Code/Mono: `'JetBrains Mono', 'Fira Code', monospace`

### 7.3 SEO & Accessibility
* Title tag: `Thinh Dang Quoc | AI & Machine Learning Engineer | Multimodal AI & RL`
* OpenGraph & Twitter Card metadata.
* Schema.org `Person` JSON-LD definition.
* Full keyboard tab navigation and ARIA attributes for tab panels.
* Respects `prefers-reduced-motion`.

---

## 8. Verification & Success Criteria

1. **Visual WOW Factor:** Clean, modern deep-tech dark aesthetics with crisp glowing accents and glassmorphism.
2. **Interactive Pipeline Validation:** Clicking between tabs (Overview, Architecture, Tech Stack) transitions smoothly without page jump or layout shift.
3. **Responsive Testing:** Layout renders seamlessly across mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px+).
4. **Copy & Link Actions:** Email 1-click copy works with visible toast, and GitHub links navigate to `https://github.com/ThinhDangQuoc`.
5. **Zero Console Errors:** Clean JavaScript execution with no unhandled exceptions.
