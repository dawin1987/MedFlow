/* ══════════════════════════════════════════════
   KURADOC — NAVBAR JS (compartido)
   ══════════════════════════════════════════════ */

(function () {
  // Inyectar HTML del navbar en #kd-navbar-mount si existe
  const CURRENT = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'info.html',           label: 'Información' },
    { href: 'caracteristicas.html',label: 'Características' },
    { href: 'faq.html',            label: 'Preguntas frecuentes' },
    { href: 'costos.html',         label: 'Costos' },
    { href: 'contactos.html',      label: 'Contacto' },
  ];

  function navHTML() {
    const liItems = links.map(l =>
      `<li><a href="${l.href}" class="${CURRENT === l.href ? 'active' : ''}">${l.label}</a></li>`
    ).join('');
    const mobItems = links.map(l =>
      `<a href="${l.href}" class="${CURRENT === l.href ? 'active' : ''}">${l.label}</a>`
    ).join('');

    return `
      <a href="index.html" class="kd-logo">
         <img src="img/logoInicio.png" alt="KuraDoc" class="kd-logo-img" style="width: auto; height: 50px;">
              </a>
      <div class="kd-nav-spacer"></div>
      <ul class="kd-nav-links">${liItems}</ul>
      <div class="kd-nav-cta">
        <a href="index.html" class="kd-btn-outline">Iniciar sesión</a>
        <a href="index.html#registro" class="kd-btn-filled">Registrarse →</a>
      </div>
      <button class="kd-hamburger" id="kd-ham" aria-label="Menú" onclick="kdToggleMobile()">
        <span></span><span></span><span></span>
      </button>
    `;
  }

  function mobileMenuHTML() {
    const mobItems = links.map(l =>
      `<a href="${l.href}">${l.label}</a>`
    ).join('');
    return `
      ${mobItems}
      <div class="kd-mob-divider"></div>
      <a href="index.html" class="kd-btn-outline">Iniciar sesión</a>
      <a href="index.html#registro" class="kd-btn-filled">Registrarse →</a>
    `;
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Mount navbar
    const mount = document.getElementById('kd-navbar');
    if (mount) mount.innerHTML = navHTML();

    // Mobile menu
    const mob = document.getElementById('kd-mobile-menu');
    if (mob) mob.innerHTML = mobileMenuHTML();

    // Scroll effect
    window.addEventListener('scroll', function () {
      const nav = document.getElementById('kd-navbar');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
      });
    });
  });

  window.kdToggleMobile = function () {
    const ham = document.getElementById('kd-ham');
    const mob = document.getElementById('kd-mobile-menu');
    if (ham && mob) {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
    }
  };
})();
