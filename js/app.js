/**
 * Main Application Controller
 * Handles Skills matrix, Experience Timeline, Clipboard copy toast,
 * Smooth scroll navigation, and Contact Form using verified CV profile.
 */
(function() {
  'use strict';

  // 1. Technical Competencies Matrix from CV
  const skillsData = [
    {
      category: 'Deep Learning & Computer Vision',
      icon: '👁️',
      skills: ['PyTorch', 'ConvNeXtV2', 'Focal Self-Attention', 'OpenCLIP', 'OpenCV', 'Scikit-learn', 'Medical Imaging (ISIC 2019)']
    },
    {
      category: 'Generative AI & Agent Workflows',
      icon: '🤖',
      skills: ['LLMs & Prompting', 'RAG Pipelines', 'AI Voice Agents (STT/TTS)', 'Tool Calling', 'Milvus (Vector DB)', 'Embeddings']
    },
    {
      category: 'Reinforcement Learning',
      icon: '🧠',
      skills: ['Deep RL (PPO, DDPG, A2C)', 'Actor-Critic Policies', 'Custom Gym Envs', 'MDP Formulation', 'Turbulence Index']
    },
    {
      category: 'Backend, Cloud & MLOps',
      icon: '⚡',
      skills: ['FastAPI', 'Docker', 'Linux / Shell Scripting', 'Git & CI/CD', 'Redis', 'AWS']
    },
    {
      category: 'Languages & Data Engineering',
      icon: '💻',
      skills: ['Python', 'C++', 'SQL', 'JavaScript / TypeScript', 'PostgreSQL / MySQL', 'Pandas / NumPy']
    }
  ];

  // 2. Timeline Milestones & Education from CV
  const timelineData = [
    {
      date: 'Jan 2026 — Jul 2026',
      title: 'Intern AI Engineer',
      subtitle: 'VOS Advisory',
      description: 'Designed and developed data processing workflows and AI Voice Agent pipelines integrating STT, LLM, RAG, tool calling, and TTS for real-time conversational AI applications. Built and delivered backend microservices and APIs using Python, SQL, Docker, Linux, and Git to support scalable AI agent deployment.'
    },
    {
      date: 'Jul 2023 — Oct 2026 (expected)',
      title: 'Bachelor of Computer Science',
      subtitle: 'University of Information Technology (UIT)',
      description: 'Specializing in Artificial Intelligence, Deep Learning, and Computer Vision. Outstanding academic performance with a cumulative GPA of 8.4 / 10. Practical research projects in multimodal retrieval, reinforcement learning, and medical diagnostics.'
    },
    {
      date: 'Certifications & Honors',
      title: 'NVIDIA Certified & Language Proficiency',
      subtitle: 'Professional Credentials',
      description: '• NVIDIA Certified: Applications of AI for Anomaly Detection\n• VSTEP B2 (Equivalent to IELTS 6.0 English Proficiency)\n• Extensive experience collaborating with foreign team members in agile sprint environments.'
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
            if (tag.textContent.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(tag.textContent.toLowerCase())) {
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
          <p style="white-space: pre-line;">${item.description}</p>
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

      const mailtoUrl = `mailto:dangquocthinh2005@gmail.com?subject=${encodeURIComponent('AI Engineering Inquiry from ' + name)}&body=${encodeURIComponent('Sender: ' + name + ' (' + email + ')\n\nMessage:\n' + message)}`;
      window.location.href = mailtoUrl;

      showToast('Opening email client...');
      contactForm.reset();
    });
  }

  // Initialize
  renderSkills();
  renderTimeline();
})();
