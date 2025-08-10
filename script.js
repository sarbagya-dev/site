/* Small, dependency-free JS */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Responsive nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('navmenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.toggleAttribute('data-open');
  });
}

// Simple consent banner logic (placeholder)
const consent = document.getElementById('consent');
const CONSENT_KEY = 'sd-consent';
try {
  const saved = localStorage.getItem(CONSENT_KEY);
  if (!saved) consent && (consent.hidden = false);
} catch {}
consent?.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === 'accept') {
    try { localStorage.setItem(CONSENT_KEY, 'accepted'); } catch {}
  } else {
    try { localStorage.setItem(CONSENT_KEY, 'declined'); } catch {}
  }
  consent.hidden = true;
});

// Case studies (minimal JSON -> DOM)
const CASES = [
  {
    title: "GDPR & Accessibility Compliance — SaaS",
    blurb: "OneTrust-driven consent with WAI-ARIA upgrades and zero analytics attrition.",
    kpis: ["WCAG AA", "100% analytics under consent", "Audit passed"],
  },
  {
    title: "Core Web Vitals Boost — E‑commerce PDP",
    blurb: "LCP cut from ~4s → 1.3s via lazy loading, bundle splits, and rendering tweaks.",
    kpis: ["Lighthouse 95+", "LCP 1.3s", "Higher conversions"],
  },
  {
    title: "SEO & Rich Results — PDP",
    blurb: "Schema.org, SSR strategy & cleanup for React-based PDPs to increase CTR.",
    kpis: ["+35% CTR", "Better indexing", "Stable rankings"],
  },
  {
    title: "Full Frontend Upgrade",
    blurb: "React microfrontends with design system, telemetry, and CI/CD baked in.",
    kpis: ["Faster releases", "Observability", "A11y & SEO by default"],
  }
];

const grid = document.getElementById('work-grid');
if (grid) {
  CASES.forEach(c => {
    const el = document.createElement('article');
    el.className = 'work';
    el.innerHTML = \`
      <h3>\${c.title}</h3>
      <p class="meta">\${c.blurb}</p>
      <div class="kpis">
        \${c.kpis.map(k => '<span class="kpi">'+k+'</span>').join('')}
      </div>
    \`;
    grid.appendChild(el);
  });
}
