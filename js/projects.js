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
