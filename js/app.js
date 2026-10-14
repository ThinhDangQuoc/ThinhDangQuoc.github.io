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
