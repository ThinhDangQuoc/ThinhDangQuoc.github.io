/**
 * Flagship Projects Controller
 * Populated directly from Thinh Dang Quoc's technical projects portfolio.
 */
(function() {
  'use strict';

  const projectsData = [
    {
      id: 'multimodal-video-retrieval',
      category: 'multimodal',
      title: 'Multimodal Video Retrieval System',
      badge: 'Flagship System • Sep — Dec 2025',
      description: 'End-to-end AI retrieval pipeline for text, image, audio, and video processing 10,000+ multimedia items using OpenCLIP embeddings and Milvus vector indices.',
      tags: ['Multimodal AI', 'OpenCLIP', 'Milvus Vector DB', 'FastAPI', 'Docker', 'OpenCV'],
      github: 'https://github.com/ThinhDangQuoc/multimodal-video-retrieval-system',
      demo: '#',
      overview: {
        problem: 'Cross-modal semantic search across high-volume video and audio archives requires bridging the modality gap while handling high concurrency with low retrieval latency.',
        solution: 'Built automated embedding and similarity search pipelines using OpenCLIP joint latent representations and Milvus vector indexing, deployed via containerized FastAPI microservices.',
        results: 'Successfully indexed 10,000+ multimedia assets and achieved ~150ms average query latency under 50 concurrent requests in benchmark load testing.'
      },
      diagram: {
        nodes: [
          { id: 'n1', title: 'Multimodal Input', sub: 'Text / Audio / Video', specs: '10,000+ Item Scale', latency: '10ms' },
          { id: 'n2', title: 'OpenCLIP Encoder', sub: 'Vision-Language Net', specs: 'Joint 512-d Latent', latency: '45ms' },
          { id: 'n3', title: 'Milvus Vector DB', sub: 'HNSW Indexing', specs: 'Similarity Search', latency: '25ms' },
          { id: 'n4', title: 'FastAPI Service', sub: 'Async Worker Queue', specs: '50 Concurrent Conns', latency: '35ms' },
          { id: 'n5', title: 'Retrieved Output', sub: 'Ranked Video Segments', specs: 'Avg Latency ~150ms', latency: '15ms' }
        ]
      },
      techStack: [
        { name: 'OpenCLIP', role: 'Vision-Language Multimodal Embedding' },
        { name: 'Milvus', role: 'High-Dimensional Vector Search Engine' },
        { name: 'FastAPI', role: 'Low-Latency Asynchronous Serving' },
        { name: 'Docker', role: 'Containerized Service Deployment' },
        { name: 'OpenCV', role: 'Video Frame Processing & Extraction' }
      ]
    },
    {
      id: 'rl-automated-trading',
      category: 'rl',
      title: 'Automated Stock Trading Using Deep Reinforcement Learning',
      badge: 'Reinforcement Learning • Mar — May 2026',
      description: 'Formulated a 91-dim continuous OpenAI Gym environment and trained Actor-Critic agents with Turbulence Index risk circuit breakers on the HOSE stock exchange.',
      tags: ['Reinforcement Learning', 'Gymnasium', 'DDPG', 'PPO', 'A2C', 'Turbulence Index', 'Python'],
      github: 'https://github.com/ThinhDangQuoc',
      demo: '#',
      overview: {
        problem: 'Algorithmic trading in emerging markets requires handling non-stationary dynamics, strict settlement lags (T+3), ±7% price collars, and transaction fee frictions.',
        solution: 'Designed a custom MDP Gym environment with 91-dim state space and 15-dim continuous action space. Trained DDPG, PPO, and A2C agents with quarterly rolling windows and a Turbulence Index volatility circuit breaker.',
        results: 'In out-of-sample backtesting (2021–2025), DDPG achieved +49.66% cumulative return (11.77% annualized), a 0.6432 Sharpe ratio, and reduced maximum drawdown to -16.57%.'
      },
      diagram: {
        nodes: [
          { id: 'r1', title: 'Market State', sub: 'Cash + 15 Stocks + Ind.', specs: '91-Dim State Space', latency: '2ms' },
          { id: 'r2', title: 'Actor-Critic Agent', sub: 'DDPG / PPO / A2C', specs: 'Quarterly Windows', latency: '12ms' },
          { id: 'r3', title: 'Risk Breaker', sub: 'Turbulence Index', specs: 'Volatility Circuit', latency: '4ms' },
          { id: 'r4', title: 'Execution Engine', sub: 'HOSE T+3 & Collar Rules', specs: '15-Dim Action Space', latency: '3ms' },
          { id: 'r5', title: 'Portfolio Return', sub: 'Out-of-Sample Test', specs: '49.66% Cumulative', latency: '< 1ms' }
        ]
      },
      benchmark: {
        rlScore: '+49.66% Cumulative Return (DDPG)',
        evoScore: '0.6432 Sharpe Ratio (-16.57% Max DD)',
        rlSteps: 'Annualized: 11.77%',
        evoSteps: 'Out-of-sample: 2021 — 2025'
      },
      techStack: [
        { name: 'OpenAI Gym', role: 'Custom 91-Dim Financial Environment' },
        { name: 'DDPG / PPO / A2C', role: 'Actor-Critic Deep Policy Gradient' },
        { name: 'Pandas & NumPy', role: 'Market Data & Feature Engineering' },
        { name: 'Matplotlib & Seaborn', role: 'Financial & Drawdown Visualizations' }
      ]
    },
    {
      id: 'skin-cancer-convnextv2',
      category: 'multimodal',
      title: 'Skin Cancer Detection: ConvNeXtV2 + Focal Self-Attention',
      badge: 'Medical AI • Mar — May 2026',
      description: 'Hybrid deep learning architecture combining ConvNeXtV2 local feature representations with Focal Self-Attention global context modeling for 8 skin lesion categories.',
      tags: ['Computer Vision', 'ConvNeXtV2', 'Focal Self-Attention', 'PyTorch', 'ISIC 2019', 'NVIDIA T4'],
      github: 'https://github.com/ThinhDangQuoc',
      demo: '#',
      overview: {
        problem: 'Dermatological lesion classification suffers from extreme class imbalance across 8 categories and subtle inter-class visual boundaries.',
        solution: 'Built a hybrid model pairing ConvNeXtV2 for fine local visual details and Focal Self-Attention for long-range global context. Trained on 25,331 images from ISIC 2019 with CutMix, MixUp, and Elastic Deformation.',
        results: 'Trained on NVIDIA Tesla T4 GPU for 40 epochs; stabilized loss convergence curves and systematically mapped class balance performance across all 8 diagnostic categories.'
      },
      diagram: {
        nodes: [
          { id: 'c1', title: 'Dermoscopy Input', sub: 'ISIC 2019 Dataset', specs: '25,331 Medical Images', latency: '5ms' },
          { id: 'c2', title: 'Augmentation', sub: 'CutMix + MixUp', specs: 'Elastic Deformation', latency: '15ms' },
          { id: 'c3', title: 'ConvNeXtV2', sub: 'Local Feature Extractor', specs: 'Hierarchical CNN', latency: '28ms' },
          { id: 'c4', title: 'Focal Attention', sub: 'Global Context Modeler', specs: 'Multi-scale Attention', latency: '22ms' },
          { id: 'c5', title: 'Classification', sub: '8 Lesion Categories', specs: 'Melanoma, BCC, AK, etc', latency: '4ms' }
        ]
      },
      techStack: [
        { name: 'PyTorch', role: 'Hybrid Deep Learning Modeling' },
        { name: 'ConvNeXtV2', role: 'Modern Local Convolutional Backbone' },
        { name: 'Focal Self-Attention', role: 'Fine-Grained Global Context' },
        { name: 'NVIDIA Tesla T4', role: '16GB VRAM GPU Acceleration' }
      ]
    },
    {
      id: 'sentiment-roberta',
      category: 'nlp',
      title: 'Sentiment Analysis with Fine-Tuned RoBERTa',
      badge: 'NLP & Transformers • Apr — Jun 2025',
      description: 'Fine-tuned Transformer NLP pipeline on 20,000+ labeled samples, achieving an 87% weighted F1-score with containerized FastAPI deployment.',
      tags: ['NLP', 'RoBERTa', 'Hugging Face', 'Transformers', 'FastAPI', 'Docker'],
      github: 'https://github.com/ThinhDangQuoc',
      demo: '#',
      overview: {
        problem: 'Accurately categorizing multi-class sentiment in noisy user texts while overcoming class label skew and latency overhead of large models.',
        solution: 'Fine-tuned RoBERTa with custom tokenization and learning rate schedules. Built automated preprocessing and dataset balancing pipelines with containerized FastAPI serving.',
        results: 'Achieved ~87% weighted F1-score (+6% improvement over baseline estimators) with sub-35ms inference response times.'
      },
      diagram: {
        nodes: [
          { id: 'l1', title: 'Text Stream', sub: 'User Inputs', specs: '20,000+ Samples', latency: '2ms' },
          { id: 'l2', title: 'Tokenizer', sub: 'RoBERTa BPE', specs: 'Max Seq Length 256', latency: '6ms' },
          { id: 'l3', title: 'Transformer', sub: 'Fine-Tuned RoBERTa', specs: '12 Layers / 768 Hidden', latency: '24ms' },
          { id: 'l4', title: 'FastAPI API', sub: 'Docker Microservice', specs: 'Async REST Endpoint', latency: '5ms' },
          { id: 'l5', title: 'Sentiment Class', sub: 'Weighted F1: 87%', specs: 'Positive/Neutral/Neg', latency: '< 2ms' }
        ]
      },
      techStack: [
        { name: 'Hugging Face Transformers', role: 'RoBERTa Model Architecture' },
        { name: 'PyTorch', role: 'Training & Parameter Optimization' },
        { name: 'Scikit-learn', role: 'Evaluation Metrics & Baselines' },
        { name: 'FastAPI & Docker', role: 'API Serving & Containerization' }
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
            <p style="color: var(--text-secondary); font-size: 0.95rem; max-width: 740px;">${p.description}</p>
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
                <span class="diagram-badge">End-to-End Validation</span>
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
                  <span>Configuration: ${p.diagram.nodes[0].specs}</span>
                  <span>Latency Budget: ${p.diagram.nodes[0].latency}</span>
                </div>
              </div>

              ${p.benchmark ? `
                <div class="benchmark-chart">
                  <div class="chart-bar-item">
                    <span class="chart-label">Cumulative Return:</span>
                    <div class="chart-track"><div class="chart-fill rl"></div></div>
                    <span class="chart-val">${p.benchmark.rlScore}</span>
                  </div>
                  <div class="chart-bar-item">
                    <span class="chart-label">Risk Profile:</span>
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
                <span>Configuration: ${nodeData.specs}</span>
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
