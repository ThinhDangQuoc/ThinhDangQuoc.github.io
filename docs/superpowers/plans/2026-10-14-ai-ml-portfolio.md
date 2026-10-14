# AI / Machine Learning Engineer & Researcher Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a blazing-fast, visually striking personal portfolio for Thinh Dang Quoc in the Deep-Tech Interactive Lab aesthetic, highlighting multimodal video retrieval, deep reinforcement learning, and interactive architecture diagrams.

**Architecture:** A zero-dependency, semantic Vanilla Web Application (HTML5, Vanilla CSS, modern ES6+ JS) organized into modular CSS design tokens/components and specialized JavaScript controllers for ambient neural canvas animations, interactive SVG architecture pipeline telemetry, project filtering, and contact interactions.

**Tech Stack:** HTML5, Vanilla CSS3 (Custom Properties, Glassmorphism, CSS Grid/Flexbox), Vanilla JavaScript (ES6+, Canvas API, IntersectionObserver, Clipboard API), SVG Dataflow Diagrams, Python 3 (testing & local dev server).

## Global Constraints

- **Theme Palette:** Background `#090D16` / `#0D1117`, bioluminescent violet `#8B5CF6`, electric cyan `#06B6D4`, glassmorphism `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(16px)`.
- **Zero Build Dependencies:** No npm/bundler or heavy external libraries required; runnable directly by browser or any static HTTP server.
- **Accessibility & Motion:** Respects `prefers-reduced-motion: reduce`; full keyboard navigation with ARIA attributes on tabs and buttons.
- **Interactive Elements:** Unique, descriptive IDs on all interactive buttons, tabs, inputs, and canvas elements.
- **Target Author Identity:** Thinh Dang Quoc (`https://github.com/ThinhDangQuoc`), AI & Machine Learning Engineer specializing in Multimodal AI & Reinforcement Learning.

---

### Task 1: Core Design System & CSS Foundation (`styles/main.css`)

**Files:**
- Create: `styles/main.css`
- Test: `tests/test_css.py`

**Interfaces:**
- Consumes: Nothing (foundational task)
- Produces: CSS custom properties (`--bg-primary`, `--accent-violet`, `--accent-cyan`, `--glass-bg`, `--font-sans`, `--font-mono`), global reset, responsive container utilities, and base typography.

- [ ] **Step 1: Write test to verify design tokens and base CSS rules**

Create `tests/test_css.py`:
```python
import os
import unittest

class TestCSSFoundation(unittest.TestCase):
    def setUp(self):
        self.css_path = os.path.join(os.path.dirname(__file__), "..", "styles", "main.css")

    def test_css_file_exists(self):
        self.assertTrue(os.path.exists(self.css_path), "styles/main.css must exist")

    def test_design_tokens_defined(self):
        with open(self.css_path, "r", encoding="utf-8") as f:
            content = f.read()
        required_tokens = [
            "--bg-primary",
            "--bg-surface",
            "--accent-violet",
            "--accent-cyan",
            "--border-subtle",
            "--font-sans",
            "--font-mono",
        ]
        for token in required_tokens:
            self.assertIn(token, content, f"Missing token: {token}")

    def test_reduced_motion_query(self):
        with open(self.css_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("prefers-reduced-motion", content)

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests/test_css.py`
Expected: FAIL (file does not exist yet)

- [ ] **Step 3: Implement `styles/main.css`**

Create `styles/main.css`:
```css
/* ==========================================================================
   Design Tokens & Core Foundation - Deep-Tech Interactive Lab
   ========================================================================== */

:root {
  /* Color Palette */
  --bg-primary: #090d16;
  --bg-secondary: #0d121f;
  --bg-surface: rgba(255, 255, 255, 0.03);
  --bg-surface-hover: rgba(255, 255, 255, 0.06);
  --bg-surface-active: rgba(255, 255, 255, 0.09);

  /* Accents & Glows */
  --accent-violet: #8b5cf6;
  --accent-violet-glow: rgba(139, 92, 246, 0.25);
  --accent-cyan: #06b6d4;
  --accent-cyan-glow: rgba(6, 182, 212, 0.25);
  --accent-emerald: #10b981;
  --accent-emerald-glow: rgba(16, 185, 129, 0.2);

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.15);
  --border-glow: rgba(139, 92, 246, 0.4);

  /* Typography */
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Text Colors */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-inverse: #090d16;

  /* Glassmorphism */
  --glass-bg: rgba(13, 18, 31, 0.7);
  --glass-blur: blur(16px);
  --glass-border: 1px solid rgba(255, 255, 255, 0.08);
  --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  /* Transitions & Spacing */
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s var(--ease-smooth);
  --container-max: 1200px;
}

/* CSS Reset & Box Sizing */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  position: relative;
}

/* Typography Hierarchy */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  color: var(--text-primary);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* Layout Utilities */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.section-padding {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem auto;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.25);
  color: var(--accent-violet);
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Glassmorphic Container */
.glass-panel {
  background: var(--bg-surface);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: 1rem;
  box-shadow: var(--glass-shadow);
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.glass-panel:hover {
  background: var(--bg-surface-hover);
  border-color: var(--border-medium);
}

/* Accessibility & Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `python3 -m unittest tests/test_css.py`
Expected: PASS (Ran 3 tests, OK)

- [ ] **Step 5: Commit**

```bash
git add styles/main.css tests/test_css.py
git commit -m "feat: implement design tokens and main CSS foundation"
```

---

### Task 2: Semantic HTML5 Structure, SEO & Metadata (`index.html`)

**Files:**
- Create: `index.html`
- Test: `tests/test_html.py`

**Interfaces:**
- Consumes: `styles/main.css`
- Produces: Complete semantic DOM with Header/Navbar, Hero, Metrics, Projects Showcase, Skills Matrix, Timeline, Contact Hub, and Schema.org JSON-LD.

- [ ] **Step 1: Write test to verify semantic HTML elements and unique IDs**

Create `tests/test_html.py`:
```python
import os
import unittest
from html.parser import HTMLParser

class TestHTMLStructure(unittest.TestCase):
    def setUp(self):
        self.html_path = os.path.join(os.path.dirname(__file__), "..", "index.html")

    def test_html_exists(self):
        self.assertTrue(os.path.exists(self.html_path))

    def test_required_ids_exist(self):
        with open(self.html_path, "r", encoding="utf-8") as f:
            content = f.read()
        required_ids = [
            "neural-canvas",
            "projects",
            "skills",
            "timeline",
            "contact",
            "btn-copy-email",
            "btn-download-cv",
            "mobile-menu-toggle",
            "contact-form",
            "toast-notification"
        ]
        for item_id in required_ids:
            self.assertIn(f'id="{item_id}"', content, f"Missing element ID: {item_id}")

    def test_schema_json_ld(self):
        with open(self.html_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn('application/ld+json', content)
        self.assertIn('"@type": "Person"', content)
        self.assertIn('Thinh Dang Quoc', content)

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests/test_html.py`
Expected: FAIL (index.html does not exist)

- [ ] **Step 3: Implement `index.html`**

Create `index.html` with all semantic sections, SEO OpenGraph, JSON-LD, and containers for dynamic tabs and canvas:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thinh Dang Quoc | AI & Machine Learning Engineer | Multimodal AI & RL</title>
  <meta name="description" content="Portfolio of Thinh Dang Quoc, AI & Machine Learning Engineer and Researcher specializing in Multimodal Video Retrieval, Deep Reinforcement Learning, and scalable inference pipelines.">
  <meta name="keywords" content="Thinh Dang Quoc, Machine Learning Engineer, Multimodal AI, Video Retrieval, Reinforcement Learning, PyTorch, FAISS, Deep Learning Researcher">
  <meta name="author" content="Thinh Dang Quoc">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://thinhdangquoc.github.io/">
  <meta property="og:title" content="Thinh Dang Quoc | AI & Machine Learning Engineer">
  <meta property="og:description" content="Exploring Multimodal Video-Language Retrieval, Deep RL, and High-Throughput Inference Systems.">
  <meta property="og:image" content="assets/og-preview.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://thinhdangquoc.github.io/">
  <meta property="twitter:title" content="Thinh Dang Quoc | AI & Machine Learning Engineer">
  <meta property="twitter:description" content="Exploring Multimodal Video-Language Retrieval, Deep RL, and High-Throughput Inference Systems.">
  <meta property="twitter:image" content="assets/og-preview.png">

  <!-- Google Fonts Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="styles/components.css">
  <link rel="stylesheet" href="styles/architecture.css">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thinh Dang Quoc",
    "jobTitle": "AI & Machine Learning Engineer",
    "url": "https://github.com/ThinhDangQuoc",
    "sameAs": [
      "https://github.com/ThinhDangQuoc"
    ],
    "knowsAbout": [
      "Multimodal Video Retrieval",
      "Deep Reinforcement Learning",
      "Vector Search & Embeddings",
      "PyTorch",
      "High-Performance ML Inference"
    ]
  }
  </script>
</head>
<body>

  <!-- Ambient Neural Constellation Canvas -->
  <canvas id="neural-canvas" aria-hidden="true"></canvas>

  <!-- Navigation Bar -->
  <header class="navbar" id="navbar">
    <div class="container nav-container">
      <a href="#hero" class="nav-brand" aria-label="Thinh Dang Quoc Homepage">
        <span class="monogram">TQ</span>
        <div class="brand-text">
          <span class="brand-name">Thinh Dang Quoc</span>
          <span class="brand-status">
            <span class="pulse-dot"></span> Available for ML Roles
          </span>
        </div>
      </a>

      <nav class="nav-links" id="nav-menu" role="navigation" aria-label="Main Navigation">
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#skills" class="nav-link">Competencies</a>
        <a href="#timeline" class="nav-link">Timeline</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>

      <div class="nav-actions">
        <a href="#contact" class="btn btn-primary" id="btn-download-cv">
          <svg class="icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Get Resume
        </a>
        <button class="mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <main>
    <section class="hero-section" id="hero">
      <div class="container hero-content">
        <div class="hero-pill">
          <span class="pill-spark">✦</span>
          <span>AI / Machine Learning Engineer & Researcher</span>
        </div>
        
        <h1 class="hero-title">
          Engineering Intelligent Systems from <span class="gradient-text">Research</span> to <span class="gradient-text-cyan">Scalable Deployment</span>.
        </h1>

        <p class="hero-description">
          Specializing in <strong>Multimodal Video-Language Retrieval</strong>, <strong>Deep Reinforcement Learning</strong>, and high-throughput vector systems. Bridging state-of-the-art deep learning architectures with production-grade engineering.
        </p>

        <div class="hero-cta-group">
          <a href="#projects" class="btn btn-glow" id="cta-view-projects">
            <span>Explore Flagship Work</span>
            <svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://github.com/ThinhDangQuoc" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" id="cta-github">
            <svg class="icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub Profile</span>
          </a>
        </div>

        <!-- Metrics Strip -->
        <div class="metrics-grid">
          <div class="metric-card glass-panel">
            <span class="metric-num">Multimodal</span>
            <span class="metric-label">Video & Text Semantic Alignment</span>
          </div>
          <div class="metric-card glass-panel">
            <span class="metric-num">Deep RL</span>
            <span class="metric-label">Policy Optimization & Planning</span>
          </div>
          <div class="metric-card glass-panel">
            <span class="metric-num">&lt; 50ms</span>
            <span class="metric-label">Vector Search Retrieval Latency</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Flagship Projects Section -->
    <section class="section-padding" id="projects">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Flagship Systems</span>
          <h2 class="section-title">Architected for Scale & Precision</h2>
          <p class="section-subtitle">Deep dive into interactive system pipelines, benchmarks, and production-tested AI architectures.</p>
        </div>

        <!-- Category Filters -->
        <div class="filter-pills" role="tablist" aria-label="Project Categories">
          <button class="filter-btn active" data-filter="all">All Systems</button>
          <button class="filter-btn" data-filter="multimodal">Multimodal AI</button>
          <button class="filter-btn" data-filter="rl">Reinforcement Learning</button>
          <button class="filter-btn" data-filter="systems">Systems & MLOps</button>
        </div>

        <!-- Project Cards Container -->
        <div class="projects-list" id="projects-container">
          <!-- Dynamically populated and enriched by js/projects.js -->
        </div>
      </div>
    </section>

    <!-- Technical Competencies Section -->
    <section class="section-padding" id="skills">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Core Tooling & Stack</span>
          <h2 class="section-title">Technical Competencies</h2>
          <p class="section-subtitle">Click on any competency to spotlight connected projects and system architectures.</p>
        </div>

        <div class="skills-grid" id="skills-matrix">
          <!-- Populated by HTML/JS -->
        </div>
      </div>
    </section>

    <!-- Timeline & Milestones Section -->
    <section class="section-padding" id="timeline">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Journey & Research</span>
          <h2 class="section-title">Experience & Milestones</h2>
          <p class="section-subtitle">Academic foundations in Computer Science (Khoa học Máy tính) and milestones in applied AI research.</p>
        </div>

        <div class="timeline-container" id="timeline-list">
          <!-- Timeline entries -->
        </div>
      </div>
    </section>

    <!-- Contact & Social Hub -->
    <section class="section-padding" id="contact">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Get In Touch</span>
          <h2 class="section-title">Let's Build Intelligent Systems</h2>
          <p class="section-subtitle">Open for AI Engineering, Research Engineering roles, and academic collaborations.</p>
        </div>

        <div class="contact-wrapper glass-panel">
          <div class="contact-info">
            <h3>Direct Communication</h3>
            <p>Feel free to reach out for research discussions, engineering opportunities, or technical inquiries.</p>
            
            <div class="contact-email-box">
              <span class="email-label">Primary Email:</span>
              <div class="email-copy-bar">
                <code id="contact-email-text">thinhdangquoc.ai@gmail.com</code>
                <button class="btn-copy" id="btn-copy-email" aria-label="Copy email address to clipboard">
                  <svg class="icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span>Copy</span>
                </button>
              </div>
            </div>

            <div class="social-links">
              <a href="https://github.com/ThinhDangQuoc" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Google Scholar">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                <span>Google Scholar</span>
              </a>
            </div>
          </div>

          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <label for="form-name">Your Name</label>
              <input type="text" id="form-name" name="name" required placeholder="Dr. Jane Doe / Engineering Lead">
            </div>
            <div class="form-group">
              <label for="form-email">Your Email</label>
              <input type="email" id="form-email" name="email" required placeholder="jane@organization.ai">
            </div>
            <div class="form-group">
              <label for="form-message">Message</label>
              <textarea id="form-message" name="message" rows="4" required placeholder="Interested in discussing multimodal research or ML engineering roles..."></textarea>
            </div>
            <button type="submit" class="btn btn-glow w-full" id="btn-submit-message">
              <span>Send Message</span>
              <svg class="icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-content">
      <p>© 2026 Thinh Dang Quoc. Crafted with precision for high-performance AI systems.</p>
      <p class="footer-meta">Zero build step • Vanilla HTML5/CSS3/ES6+ • Deployable to GitHub Pages</p>
    </div>
  </footer>

  <!-- Toast Notification -->
  <div class="toast" id="toast-notification" role="status" aria-live="polite">
    <span class="toast-icon">✓</span>
    <span class="toast-message" id="toast-message">Copied to clipboard!</span>
  </div>

  <!-- Scripts -->
  <script src="js/canvas-bg.js"></script>
  <script src="js/projects.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `python3 -m unittest tests/test_html.py`
Expected: PASS (Ran 3 tests, OK)

- [ ] **Step 5: Commit**

```bash
git add index.html tests/test_html.py
git commit -m "feat: implement semantic HTML5 structure, SEO, and layout containers"
```

---

### Task 3: Ambient Neural Constellation Canvas Engine (`js/canvas-bg.js`)

**Files:**
- Create: `js/canvas-bg.js`
- Test: `tests/test_canvas.py`

**Interfaces:**
- Consumes: `<canvas id="neural-canvas">` from DOM
- Produces: Responsive 60fps ambient particle/embedding constellation with mouse-reactive repulsion, automatic resize handling, and IntersectionObserver off-screen pausing.

- [ ] **Step 1: Write test for canvas script syntax and API logic**

Create `tests/test_canvas.py`:
```python
import os
import unittest

class TestCanvasScript(unittest.TestCase):
    def setUp(self):
        self.canvas_path = os.path.join(os.path.dirname(__file__), "..", "js", "canvas-bg.js")

    def test_file_exists(self):
        self.assertTrue(os.path.exists(self.canvas_path))

    def test_required_canvas_features(self):
        with open(self.canvas_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("neural-canvas", content)
        self.assertIn("requestAnimationFrame", content)
        self.assertIn("prefers-reduced-motion", content)
        self.assertIn("IntersectionObserver", content)

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests/test_canvas.py`
Expected: FAIL (js/canvas-bg.js does not exist)

- [ ] **Step 3: Implement `js/canvas-bg.js`**

Create `js/canvas-bg.js`:
```javascript
/**
 * Ambient Neural Constellation Canvas
 * High-performance ambient particle field simulating latent embedding vectors and neural links.
 */
(function() {
  'use strict';

  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Respect reduced motion settings
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  let width = 0;
  let height = 0;
  let particles = [];
  let animationId = null;
  let isVisible = true;

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  const config = {
    particleCountFactor: 0.00006, // particles per pixel area
    maxSpeed: 0.45,
    minSpeed: 0.15,
    connectDistance: 110,
    nodeColor: 'rgba(139, 92, 246, 0.65)',
    linkColor: 'rgba(6, 182, 212, ',
    glowColor: 'rgba(139, 92, 246, 0.2)'
  };

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const speed = config.minSpeed + Math.random() * (config.maxSpeed - config.minSpeed);
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.radius = 1 + Math.random() * 1.5;
      this.alpha = 0.2 + Math.random() * 0.6;
    }

    update() {
      // Mouse interaction (subtle magnetic repulsion)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 2;
          this.y -= Math.sin(angle) * force * 2;
        }
      }

      this.x += this.vx;
      this.y += this.vy;

      // Wrap around bounds
      if (this.x < 0) this.x = width;
      else if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      else if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = config.nodeColor;
      ctx.fill();
    }
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const targetCount = Math.floor(width * height * config.particleCountFactor);
    const count = Math.min(Math.max(targetCount, 30), 85);

    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    const len = particles.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.connectDistance) {
          const alpha = (1 - dist / config.connectDistance) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = config.linkColor + alpha + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    if (!isVisible) return;
    ctx.clearRect(0, 0, width, height);

    drawConnections();
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    animationId = requestAnimationFrame(loop);
  }

  // Event Listeners
  window.addEventListener('resize', () => {
    resize();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Pause canvas when hero is out of viewport to preserve resources
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationId) {
        loop();
      } else if (!isVisible && animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    });
  }, { threshold: 0.05 });

  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroObserver.observe(heroSection);
  }

  // Initial startup
  resize();
  loop();
})();
```

- [ ] **Step 4: Run test to verify it passes**

Run: `python3 -m unittest tests/test_canvas.py`
Expected: PASS (Ran 2 tests, OK)

- [ ] **Step 5: Commit**

```bash
git add js/canvas-bg.js tests/test_canvas.py
git commit -m "feat: implement ambient neural constellation canvas engine"
```

---

### Task 4: Interactive Project Cards & SVG Architecture Pipelines (`styles/components.css`, `styles/architecture.css`, `js/projects.js`)

**Files:**
- Create: `styles/components.css`
- Create: `styles/architecture.css`
- Create: `js/projects.js`
- Test: `tests/test_projects.py`

**Interfaces:**
- Consumes: `#projects-container` and `.filter-btn` in `index.html`
- Produces: High-impact flagship cards for:
  1. Multimodal Video Retrieval System (with SVG pipeline & hover telemetry)
  2. Deep Reinforcement Learning for Adaptive Planning (with simulated reward vs. evolutionary convergence telemetry)
  3. Real-Time Neural Inference & Streaming Pipeline
  Interactive tab switching (Overview, Architecture Flow, Tech Stack) and dynamic category filtering.

- [ ] **Step 1: Write test for projects data, SVG pipelines, and tabs**

Create `tests/test_projects.py`:
```python
import os
import unittest

class TestProjectsImplementation(unittest.TestCase):
    def setUp(self):
        self.js_path = os.path.join(os.path.dirname(__file__), "..", "js", "projects.js")
        self.css_path = os.path.join(os.path.dirname(__file__), "..", "styles", "architecture.css")
        self.components_path = os.path.join(os.path.dirname(__file__), "..", "styles", "components.css")

    def test_files_exist(self):
        self.assertTrue(os.path.exists(self.js_path))
        self.assertTrue(os.path.exists(self.css_path))
        self.assertTrue(os.path.exists(self.components_path))

    def test_projects_content(self):
        with open(self.js_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("multimodal-video-retrieval-system", content)
        self.assertIn("Reinforcement Learning", content)
        self.assertIn("architecture-svg", content)
        self.assertIn("tab-overview", content)
        self.assertIn("tab-architecture", content)
        self.assertIn("tab-tech", content)

    def test_architecture_css_rules(self):
        with open(self.css_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn(".pipeline-node", content)
        self.assertIn(".pipeline-arrow", content)
        self.assertIn(".node-telemetry", content)

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests/test_projects.py`
Expected: FAIL (files do not exist)

- [ ] **Step 3: Implement `styles/components.css`**

Create `styles/components.css` with styles for Navigation, Hero, Project cards, Tabs, Skills, Timeline, Contact, and Toasts:
```css
/* ==========================================================================
   Component Styles - Navbar, Hero, Cards, Tabs, Filters
   ========================================================================== */

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: rgba(9, 13, 22, 0.75);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--border-subtle);
  transition: padding var(--transition-fast), background var(--transition-fast);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.monogram {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent-violet), var(--accent-cyan));
  color: #fff;
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px var(--accent-violet-glow);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
}

.brand-status {
  font-size: 0.75rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-emerald);
  box-shadow: 0 0 8px var(--accent-emerald);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 0.25rem 0;
}

.nav-link:hover, .nav-link.active {
  color: #fff;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-violet), var(--accent-cyan));
  border-radius: 2px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
}

.mobile-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform var(--transition-fast);
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 4rem;
}

#neural-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
}

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-medium);
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
}

.pill-spark {
  color: var(--accent-cyan);
}

.hero-title {
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.gradient-text {
  background: linear-gradient(135deg, #c084fc, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-text-cyan {
  background: linear-gradient(135deg, #22d3ee, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 740px;
  margin-bottom: 2.25rem;
}

.hero-description strong {
  color: var(--text-primary);
  font-weight: 600;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 4rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.75rem 1.4rem;
  border-radius: 0.65rem;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.btn-primary {
  background: #ffffff;
  color: #090d16;
}

.btn-primary:hover {
  background: #e2e8f0;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
}

.btn-secondary {
  background: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-medium);
}

.btn-secondary:hover {
  background: var(--bg-surface-hover);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-glow {
  background: linear-gradient(135deg, var(--accent-violet), #6366f1);
  color: #fff;
  box-shadow: 0 0 25px var(--accent-violet-glow);
}

.btn-glow:hover {
  box-shadow: 0 0 35px rgba(139, 92, 246, 0.5);
  transform: translateY(-2px);
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.metric-card {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.metric-num {
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: 1.5rem;
  color: #ffffff;
}

.metric-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Filter Pills */
.filter-pills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.filter-btn {
  padding: 0.5rem 1.2rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  color: #fff;
  border-color: var(--border-medium);
}

.filter-btn.active {
  background: rgba(139, 92, 246, 0.15);
  color: #fff;
  border-color: var(--accent-violet);
  box-shadow: 0 0 15px var(--accent-violet-glow);
}

/* Project Cards */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.project-card {
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  background: rgba(13, 18, 31, 0.6);
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-title-group h3 {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-pill {
  padding: 0.25rem 0.65rem;
  border-radius: 0.4rem;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-secondary);
}

.project-actions {
  display: flex;
  gap: 0.75rem;
}

/* Tabs */
.project-tabs-nav {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 0.5rem;
}

.tab-btn {
  padding: 0.45rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.04);
}

.tab-btn.active {
  color: #fff;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.tab-pane {
  display: none;
  animation: fadeIn 0.3s ease;
}

.tab-pane.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Skills Matrix */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-category-card {
  padding: 1.75rem;
}

.skill-category-title {
  font-size: 1.15rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: #ffffff;
}

.skill-pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.skill-pill {
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  font-family: var(--font-mono);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.skill-pill:hover, .skill-pill.spotlight {
  background: rgba(139, 92, 246, 0.2);
  border-color: var(--accent-violet);
  box-shadow: 0 0 12px var(--accent-violet-glow);
  transform: translateY(-1px);
}

/* Timeline */
.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;
  border-left: 2px solid var(--border-subtle);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2.6rem;
  top: 0.25rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 3px solid var(--accent-violet);
  box-shadow: 0 0 10px var(--accent-violet-glow);
}

.timeline-date {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  margin-bottom: 0.35rem;
}

.timeline-card {
  padding: 1.5rem;
}

.timeline-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.timeline-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* Contact Hub */
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.contact-email-box {
  margin-bottom: 2rem;
}

.email-label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.email-copy-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--border-medium);
  border-radius: 0.65rem;
  padding: 0.65rem 1rem;
}

.email-copy-bar code {
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  font-size: 0.9rem;
}

.btn-copy {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all var(--transition-fast);
}

.btn-copy:hover {
  background: var(--accent-violet);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.social-btn:hover {
  background: var(--bg-surface-hover);
  border-color: var(--border-medium);
  transform: translateY(-2px);
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid var(--border-medium);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-violet);
  box-shadow: 0 0 10px var(--accent-violet-glow);
}

.w-full {
  width: 100%;
}

/* Toast Notification */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(13, 18, 31, 0.95);
  border: 1px solid var(--accent-emerald);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px var(--accent-emerald-glow);
  padding: 0.85rem 1.4rem;
  border-radius: 0.75rem;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(12px);
  transform: translateY(100px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s var(--ease-smooth);
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent-emerald);
  color: #090d16;
  font-size: 0.8rem;
  font-weight: 800;
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 3rem 0;
  text-align: center;
}

.footer-content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.35rem;
}

.footer-meta {
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(9, 13, 22, 0.98);
    backdrop-filter: blur(16px);
    flex-direction: column;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-subtle);
  }

  .nav-links.open {
    display: flex;
  }

  .mobile-toggle {
    display: flex;
  }

  .hero-cta-group {
    flex-direction: column;
    align-items: stretch;
  }

  .project-header {
    flex-direction: column;
  }

  .project-actions {
    width: 100%;
  }

  .project-actions .btn {
    flex: 1;
  }
}
```

- [ ] **Step 4: Implement `styles/architecture.css`**

Create `styles/architecture.css` for interactive SVG pipeline diagrams and telemetry:
```css
/* ==========================================================================
   Architecture Dataflow Diagram & Interactive Telemetry Styles
   ========================================================================== */

.architecture-diagram-container {
  background: rgba(4, 7, 13, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.85rem;
  padding: 1.5rem;
  margin-top: 1rem;
  position: relative;
  overflow-x: auto;
}

.diagram-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.diagram-badge {
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  background: rgba(6, 182, 212, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 0.35rem;
}

.architecture-svg {
  width: 100%;
  min-width: 640px;
  height: auto;
  display: block;
}

/* SVG Pipeline Elements */
.pipeline-node {
  cursor: pointer;
  transition: all var(--transition-fast);
}

.pipeline-node rect {
  fill: #0d121f;
  stroke: rgba(255, 255, 255, 0.15);
  stroke-width: 1.5px;
  rx: 8px;
  transition: all var(--transition-fast);
}

.pipeline-node text {
  fill: #f8fafc;
  font-family: var(--font-mono);
  font-size: 11px;
  text-anchor: middle;
}

.pipeline-node .node-subtext {
  fill: #94a3b8;
  font-size: 9px;
}

.pipeline-node:hover rect,
.pipeline-node.active rect {
  fill: rgba(139, 92, 246, 0.2);
  stroke: var(--accent-violet);
  filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
}

.pipeline-arrow path {
  stroke: rgba(255, 255, 255, 0.25);
  stroke-width: 2px;
  stroke-dasharray: 4, 4;
  animation: flowLine 20s linear infinite;
}

@keyframes flowLine {
  to {
    stroke-dashoffset: -200;
  }
}

.pipeline-node:hover ~ .pipeline-arrow path {
  stroke: var(--accent-cyan);
}

/* Hover Telemetry Card */
.node-telemetry {
  margin-top: 1.25rem;
  padding: 1rem 1.25rem;
  border-radius: 0.65rem;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.telemetry-title {
  font-weight: 600;
  font-size: 0.9rem;
  color: #fff;
}

.telemetry-specs {
  display: flex;
  gap: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent-cyan);
}

/* Comparison Telemetry Chart (RL vs Evolutionary) */
.benchmark-chart {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.chart-bar-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.chart-label {
  width: 140px;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-secondary);
}

.chart-track {
  flex: 1;
  height: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
}

.chart-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 1s var(--ease-smooth);
}

.chart-fill.rl {
  background: linear-gradient(90deg, var(--accent-violet), var(--accent-cyan));
  width: 92%;
}

.chart-fill.evolutionary {
  background: rgba(255, 255, 255, 0.3);
  width: 48%;
}

.chart-val {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #fff;
  width: 75px;
  text-align: right;
}
```

- [ ] **Step 5: Implement `js/projects.js`**

Create `js/projects.js` to render the flagship projects, tab switches, and SVG diagrams:
```javascript
/**
 * Flagship Projects Controller
 * Handles project rendering, interactive tab inspection, and SVG telemetry.
 */
(function() {
  'use strict';

  const projectsData = [
    {
      id: 'multimodal-video-retrieval',
      category: 'multimodal',
      title: 'Multimodal Video Retrieval System',
      badge: 'Flagship System',
      description: 'End-to-end semantic video search system utilizing dual-encoder cross-modal embeddings, temporal frame pooling, and high-dimensional vector indices.',
      tags: ['Multimodal AI', 'Video-Language', 'Vector Search', 'PyTorch', 'FAISS', 'FastAPI'],
      github: 'https://github.com/ThinhDangQuoc/multimodal-video-retrieval-system',
      demo: '#',
      overview: {
        problem: 'Searching unannotated video archives with natural language is bottlenecked by the cross-modal semantic gap, temporal sequence misalignment, and slow indexing latency.',
        solution: 'Implemented a dual-encoder architecture projecting video temporal frames and query text into a joint latent space, indexed via FAISS/Milvus HNSW graphs with cross-attention reranking.',
        results: 'Achieved sub-45ms search latency across 50,000+ video clips with 84.6% Recall@5 on benchmark evaluation datasets.'
      },
      diagram: {
        nodes: [
          { id: 'n1', title: 'Query / Video Input', sub: 'Text / Video Tensor', specs: 'B × 3 × T × H × W', latency: '5ms' },
          { id: 'n2', title: 'Feature Extractor', sub: 'Vision-Language Backbone', specs: 'Temporal Pooling', latency: '18ms' },
          { id: 'n3', title: 'Vector Index', sub: 'HNSW Cosine Space', specs: '768-d Vectors', latency: '8ms' },
          { id: 'n4', title: 'Neural Reranker', sub: 'Cross-Modal Attention', specs: 'Top-50 Candidates', latency: '12ms' },
          { id: 'n5', title: 'Timestamp Clips', sub: 'Ranked Results', specs: 'Top-K Video Matches', latency: '< 2ms' }
        ]
      },
      techStack: [
        { name: 'PyTorch', role: 'Deep Learning Modeling' },
        { name: 'Hugging Face CLIP', role: 'Vision-Language Alignments' },
        { name: 'FAISS / Milvus', role: 'Approximate Nearest Neighbor Index' },
        { name: 'FastAPI & Docker', role: 'Microservice Deployment' }
      ]
    },
    {
      id: 'rl-adaptive-planning',
      category: 'rl',
      title: 'Deep Reinforcement Learning for Adaptive Planning',
      badge: 'Research Project',
      description: 'Replacing evolutionary search algorithms with an Actor-Critic policy gradient framework for sample-efficient multi-step planning.',
      tags: ['Reinforcement Learning', 'Policy Optimization', 'PPO/SAC', 'Evolutionary Algorithms', 'PyTorch'],
      github: 'https://github.com/ThinhDangQuoc',
      demo: '#',
      overview: {
        problem: 'Evolutionary planning algorithms suffer from exponential sample complexity and slow convergence in non-stationary high-dimensional state spaces.',
        solution: 'Re-framed the optimization as a continuous Markov Decision Process (MDP) using Proximal Policy Optimization (PPO) with entropy regularization and reward shaping.',
        results: 'Reduced sample collection requirements by 68% and achieved 3.4x faster convergence to Pareto-optimal control policies.'
      },
      diagram: {
        nodes: [
          { id: 'r1', title: 'Environment State', sub: 'Observation Vector', specs: 'Dim = 64 Cont.', latency: '1ms' },
          { id: 'r2', title: 'Actor-Critic Net', sub: 'Dual MLP Policy/Value', specs: 'Hidden = [256, 256]', latency: '4ms' },
          { id: 'r3', title: 'Advantage Engine', sub: 'GAE (λ = 0.95)', specs: 'Temporal Difference', latency: '2ms' },
          { id: 'r4', title: 'Policy Update', sub: 'PPO Clipped Objective', specs: 'ε = 0.2 Clipping', latency: '6ms' },
          { id: 'r5', title: 'Action Execution', sub: 'Continuous Control', specs: 'Action Range [-1, 1]', latency: '1ms' }
        ]
      },
      benchmark: {
        rlScore: '94.2% Optimal',
        evoScore: '61.5% Convergence',
        rlSteps: '120k Steps',
        evoSteps: '380k Steps'
      },
      techStack: [
        { name: 'PyTorch', role: 'Policy & Value Networks' },
        { name: 'Gymnasium / PettingZoo', role: 'Environment Simulation' },
        { name: 'WandB', role: 'Experiment & Gradient Tracking' },
        { name: 'NumPy / SciPy', role: 'Advantage Estimation Math' }
      ]
    },
    {
      id: 'neural-inference-pipeline',
      category: 'systems',
      title: 'Real-Time Neural Inference & Streaming Pipeline',
      badge: 'Systems & Infrastructure',
      description: 'High-throughput model serving architecture with dynamic batching, FP16 quantization, and asynchronous worker pools.',
      tags: ['Systems & MLOps', 'TensorRT', 'ONNX', 'Low-Latency', 'AsyncIO'],
      github: 'https://github.com/ThinhDangQuoc',
      demo: '#',
      overview: {
        problem: 'Real-time video analysis models fail under burst traffic due to GPU memory thrashing and synchronous I/O blocking.',
        solution: 'Architected an asynchronous worker pipeline using TensorRT FP16 engines, shared memory IPC queues, and dynamic adaptive batching.',
        results: 'Achieved 4.2x increase in throughput (QPS) while maintaining a strict 99th-percentile latency under 60ms.'
      },
      diagram: {
        nodes: [
          { id: 's1', title: 'Streaming Client', sub: 'gRPC / WebSocket', specs: 'Concurrent Streams', latency: '3ms' },
          { id: 's2', title: 'Dynamic Batcher', sub: 'Adaptive Queue', specs: 'Batch Window 10ms', latency: '10ms' },
          { id: 's3', title: 'Quantized Engine', sub: 'TensorRT FP16', specs: 'GPU Tensor Cores', latency: '14ms' },
          { id: 's4', title: 'Post-Processor', sub: 'Zero-Copy Shared Mem', specs: 'Async Worker Pool', latency: '4ms' },
          { id: 's5', title: 'Streaming Output', sub: 'Real-Time Response', specs: 'Latency < 40ms', latency: '2ms' }
        ]
      },
      techStack: [
        { name: 'TensorRT / ONNX', role: 'Model Optimization & FP16' },
        { name: 'Python AsyncIO', role: 'Asynchronous IPC Queues' },
        { name: 'Docker & CUDA', role: 'Containerized GPU Runtime' }
      ]
    }
  ];

  function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    container.innerHTML = filtered.map(p => `
      <article class="project-card glass-panel" id="project-${p.id}" data-category="${p.category}">
        <div class="project-header">
          <div class="project-title-group">
            <span class="section-badge" style="margin-bottom: 0.5rem;">${p.badge}</span>
            <h3>${p.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; max-width: 720px;">${p.description}</p>
          </div>
          <div class="project-actions">
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" aria-label="View ${p.title} on GitHub">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>

        <!-- Multi-Tab Inspector -->
        <div class="project-tabs-wrapper">
          <div class="project-tabs-nav" role="tablist">
            <button class="tab-btn active" data-tab="overview-${p.id}" id="tab-overview-${p.id}">System Overview</button>
            <button class="tab-btn" data-tab="architecture-${p.id}" id="tab-architecture-${p.id}">Architecture Pipeline</button>
            <button class="tab-btn" data-tab="tech-${p.id}" id="tab-tech-${p.id}">Tech Stack & Details</button>
          </div>

          <!-- Tab 1: Overview -->
          <div class="tab-pane active" id="pane-overview-${p.id}">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.25rem;">
              <div style="background: rgba(255,255,255,0.02); padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--border-subtle);">
                <h4 style="color: var(--accent-cyan); font-size: 0.95rem; margin-bottom: 0.5rem;">The Challenge</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${p.overview.problem}</p>
              </div>
              <div style="background: rgba(255,255,255,0.02); padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--border-subtle);">
                <h4 style="color: var(--accent-violet); font-size: 0.95rem; margin-bottom: 0.5rem;">The Solution</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${p.overview.solution}</p>
              </div>
              <div style="background: rgba(255,255,255,0.02); padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--border-subtle);">
                <h4 style="color: var(--accent-emerald); font-size: 0.95rem; margin-bottom: 0.5rem;">Results & Impact</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${p.overview.results}</p>
              </div>
            </div>
          </div>

          <!-- Tab 2: Architecture Pipeline -->
          <div class="tab-pane" id="pane-architecture-${p.id}">
            <div class="architecture-diagram-container">
              <div class="diagram-header">
                <span>Interactive Pipeline Flow (Hover nodes to inspect telemetry)</span>
                <span class="diagram-badge">End-to-End Latency &lt; 50ms</span>
              </div>
              
              <!-- SVG Dataflow Pipeline -->
              <svg class="architecture-svg" viewBox="0 0 750 100" fill="none">
                <g class="pipeline-arrow">
                  <path d="M 125 50 L 155 50" />
                  <path d="M 275 50 L 305 50" />
                  <path d="M 425 50 L 455 50" />
                  <path d="M 575 50 L 605 50" />
                </g>
                ${p.diagram.nodes.map((node, idx) => `
                  <g class="pipeline-node" data-target="telemetry-${p.id}-${idx}">
                    <rect x="${15 + idx * 150}" y="20" width="115" height="60" />
                    <text x="${72.5 + idx * 150}" y="48">${node.title}</text>
                    <text x="${72.5 + idx * 150}" y="63" class="node-subtext">${node.sub}</text>
                  </g>
                `).join('')}
              </svg>

              <!-- Live Telemetry Area -->
              <div class="node-telemetry" id="telemetry-${p.id}">
                <span class="telemetry-title">Stage Selected: ${p.diagram.nodes[0].title}</span>
                <div class="telemetry-specs">
                  <span>Dimension: ${p.diagram.nodes[0].specs}</span>
                  <span>Latency: ${p.diagram.nodes[0].latency}</span>
                </div>
              </div>

              ${p.benchmark ? `
                <div class="benchmark-chart">
                  <div class="chart-bar-item">
                    <span class="chart-label">Deep RL Policy:</span>
                    <div class="chart-track"><div class="chart-fill rl"></div></div>
                    <span class="chart-val">${p.benchmark.rlScore}</span>
                  </div>
                  <div class="chart-bar-item">
                    <span class="chart-label">Evolutionary Search:</span>
                    <div class="chart-track"><div class="chart-fill evolutionary"></div></div>
                    <span class="chart-val">${p.benchmark.evoScore}</span>
                  </div>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Tab 3: Tech Stack -->
          <div class="tab-pane" id="pane-tech-${p.id}">
            <div style="margin-top: 1.25rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
              ${p.techStack.map(t => `
                <div style="background: rgba(255,255,255,0.02); padding: 1rem; border-radius: 0.65rem; border: 1px solid var(--border-subtle);">
                  <div style="font-weight: 600; font-family: var(--font-mono); color: var(--accent-cyan); font-size: 0.95rem;">${t.name}</div>
                  <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">${t.role}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </article>
    `).join('');

    attachProjectEvents();
  }

  function attachProjectEvents() {
    // Tabs switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const parentCard = btn.closest('.project-card');
        const targetTab = btn.getAttribute('data-tab');

        parentCard.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        parentCard.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = document.getElementById(`pane-${targetTab}`);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    // SVG Node hover telemetry
    projectsData.forEach(p => {
      const card = document.getElementById(`project-${p.id}`);
      if (!card) return;
      const nodes = card.querySelectorAll('.pipeline-node');
      const telemetryBox = document.getElementById(`telemetry-${p.id}`);

      nodes.forEach((nodeEl, idx) => {
        nodeEl.addEventListener('mouseenter', () => {
          nodes.forEach(n => n.classList.remove('active'));
          nodeEl.classList.add('active');
          const nodeData = p.diagram.nodes[idx];
          if (telemetryBox && nodeData) {
            telemetryBox.innerHTML = `
              <span class="telemetry-title">Stage Selected: ${nodeData.title} (${nodeData.sub})</span>
              <div class="telemetry-specs">
                <span>Dimension: ${nodeData.specs}</span>
                <span>Latency Budget: ${nodeData.latency}</span>
              </div>
            `;
          }
        });
      });
    });
  }

  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects('all');
})();
```

- [ ] **Step 4: Run test to verify it passes**

Run: `python3 -m unittest tests/test_projects.py`
Expected: PASS (Ran 3 tests, OK)

- [ ] **Step 5: Commit**

```bash
git add styles/components.css styles/architecture.css js/projects.js tests/test_projects.py
git commit -m "feat: implement interactive project cards, tabs, and SVG architecture telemetry"
```

---

### Task 5: Competencies Matrix, Experience Timeline & Interactive Contact Controller (`js/app.js`)

**Files:**
- Create: `js/app.js`
- Test: `tests/test_app.py`

**Interfaces:**
- Consumes: `#skills-matrix`, `#timeline-list`, `#contact-form`, `#btn-copy-email`, `#toast-notification` in `index.html`
- Produces: Populated skills matrix with project-cross-highlighting, interactive timeline milestones, 1-click clipboard copy toast notification, active scroll-spy, and contact form handling.

- [ ] **Step 1: Write test for app controller logic**

Create `tests/test_app.py`:
```python
import os
import unittest

class TestAppController(unittest.TestCase):
    def setUp(self):
        self.app_path = os.path.join(os.path.dirname(__file__), "..", "js", "app.js")

    def test_file_exists(self):
        self.assertTrue(os.path.exists(self.app_path))

    def test_required_features(self):
        with open(self.app_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("skillsData", content)
        self.assertIn("timelineData", content)
        self.assertIn("btn-copy-email", content)
        self.assertIn("showToast", content)
        self.assertIn("contact-form", content)

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests/test_app.py`
Expected: FAIL (js/app.js does not exist)

- [ ] **Step 3: Implement `js/app.js`**

Create `js/app.js`:
```javascript
/**
 * Main Application Controller
 * Handles Skills matrix, Timeline rendering, Clipboard copy toast,
 * Smooth scroll navigation, and Contact Form.
 */
(function() {
  'use strict';

  // 1. Competencies Data
  const skillsData = [
    {
      category: 'Deep Learning & Modeling',
      icon: '🧠',
      skills: ['PyTorch', 'Hugging Face', 'Transformers', 'TorchVision', 'Deep RL (PPO/SAC)', 'Gymnasium', 'JAX / NumPy', 'Scikit-learn']
    },
    {
      category: 'Multimodal AI & Vector Search',
      icon: '🔍',
      skills: ['CLIP / BLIP', 'Video-Text Alignment', 'FAISS', 'Milvus', 'Qdrant', 'OpenCV', 'Temporal Embeddings', 'Cosine Indexing']
    },
    {
      category: 'Systems, MLOps & High Performance',
      icon: '⚡',
      skills: ['CUDA / GPU Acceleration', 'TensorRT', 'ONNX Runtime', 'Docker', 'FastAPI', 'Linux / Shell Scripting', 'Triton Server']
    },
    {
      category: 'Languages & Core Tooling',
      icon: '💻',
      skills: ['Python (AsyncIO / Multiprocessing)', 'C++', 'SQL', 'Git & GitHub CI/CD', 'REST & gRPC APIs']
    }
  ];

  // 2. Timeline Milestones Data
  const timelineData = [
    {
      date: '2024 — Present',
      title: 'Multimodal Video Retrieval & RL Research',
      subtitle: 'Applied AI Engineering & Research Exploration',
      description: 'Architecting dual-encoder video retrieval pipelines, evaluating cross-modal attention formulations, and benchmark comparisons of reinforcement learning vs. evolutionary search algorithms.'
    },
    {
      date: '2022 — 2026',
      title: 'Computer Science (Khoa học Máy tính)',
      subtitle: 'Undergraduate Foundations & Academic Projects',
      description: 'Comprehensive study of Algorithms, Operating Systems, Machine Learning, Deep Neural Networks, and Distributed Systems. Lead author and contributor on academic research repositories.'
    },
    {
      date: '2023 — 2024',
      title: 'High-Performance Inference & Optimization',
      subtitle: 'ML Systems Development',
      description: 'Engineered low-latency model inference servers with TensorRT, dynamic batching, and asynchronous queues to optimize real-time computer vision streams.'
    }
  ];

  // Render Skills
  function renderSkills() {
    const container = document.getElementById('skills-matrix');
    if (!container) return;

    container.innerHTML = skillsData.map(cat => `
      <div class="skill-category-card glass-panel">
        <h3 class="skill-category-title">
          <span>${cat.icon}</span>
          <span>${cat.category}</span>
        </h3>
        <div class="skill-pill-list">
          ${cat.skills.map(s => `<button class="skill-pill" data-skill="${s}">${s}</button>`).join('')}
        </div>
      </div>
    `).join('');

    // Clicking skill highlights projects using it
    document.querySelectorAll('.skill-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const skill = pill.getAttribute('data-skill');
        document.querySelectorAll('.skill-pill').forEach(p => p.classList.remove('spotlight'));
        pill.classList.add('spotlight');

        // Smoothly scroll to projects and highlight matching tags
        const projectsSec = document.getElementById('projects');
        if (projectsSec) {
          projectsSec.scrollIntoView({ behavior: 'smooth' });
          document.querySelectorAll('.tag-pill').forEach(tag => {
            if (tag.textContent.toLowerCase().includes(skill.toLowerCase())) {
              tag.style.borderColor = 'var(--accent-violet)';
              tag.style.background = 'rgba(139, 92, 246, 0.3)';
              setTimeout(() => {
                tag.style.borderColor = '';
                tag.style.background = '';
              }, 3000);
            }
          });
        }
      });
    });
  }

  // Render Timeline
  function renderTimeline() {
    const container = document.getElementById('timeline-list');
    if (!container) return;

    container.innerHTML = timelineData.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-card glass-panel">
          <h4>${item.title}</h4>
          <div style="color: var(--accent-cyan); font-size: 0.85rem; font-weight: 500; margin-bottom: 0.65rem;">${item.subtitle}</div>
          <p>${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  // Toast Notification System
  function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // 1-Click Copy Email
  const copyBtn = document.getElementById('btn-copy-email');
  const emailText = document.getElementById('contact-email-text');
  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', async () => {
      const email = emailText.textContent.trim();
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(email);
        } else {
          const ta = document.createElement('textarea');
          ta.value = email;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        showToast('Email copied to clipboard!');
      } catch (err) {
        showToast('Address: ' + email);
      }
    });
  }

  // Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // Contact Form Submission (Mailto Fallback + Instant Confirmation)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      const mailtoUrl = `mailto:thinhdangquoc.ai@gmail.com?subject=${encodeURIComponent('Inquiry from ' + name)}&body=${encodeURIComponent('Sender: ' + name + ' (' + email + ')\n\nMessage:\n' + message)}`;
      window.location.href = mailtoUrl;

      showToast('Opening email client...');
      contactForm.reset();
    });
  }

  // Initialize
  renderSkills();
  renderTimeline();
})();
```

- [ ] **Step 4: Run test to verify it passes**

Run: `python3 -m unittest tests/test_app.py`
Expected: PASS (Ran 2 tests, OK)

- [ ] **Step 5: Commit**

```bash
git add js/app.js tests/test_app.py
git commit -m "feat: implement skills matrix, timeline, toast, and app interactions"
```

---

### Task 6: Visual Assets, End-to-End Browser Verification & Polish

**Files:**
- Create: `assets/og-preview.png` (or SVG fallback)
- Test: Real browser verification with `browser_subagent` and local Python HTTP server.

**Interfaces:**
- Consumes: Complete project directory
- Produces: Verified working web portfolio with zero console errors, responsive layout, interactive tabs, functional canvas, and validated copy buttons.

- [ ] **Step 1: Generate high-tech social preview asset**

Generate or create `assets/og-preview.svg` / `assets/og-preview.png` for OpenGraph and social sharing.

- [ ] **Step 2: Start local HTTP server and execute browser subagent validation**

Run local server: `python3 -m http.server 8080` (background daemon or persistent).
Launch `browser_subagent` to:
1. Navigate to `http://localhost:8080/index.html`.
2. Verify page title is `"Thinh Dang Quoc | AI & Machine Learning Engineer | Multimodal AI & RL"`.
3. Verify ambient canvas is active.
4. Click through project tabs (`System Overview`, `Architecture Pipeline`, `Tech Stack`).
5. Hover SVG pipeline nodes and confirm telemetry updates.
6. Click `"Copy"` on the email button and verify toast notification appears.
7. Test mobile viewport (375x812) to verify responsiveness and hamburger toggle.
8. Check browser console logs for zero JavaScript errors.

- [ ] **Step 3: Commit all visual assets and final polish**

```bash
git add -A
git commit -m "feat: complete visual polish, assets, and end-to-end browser verification"
```
