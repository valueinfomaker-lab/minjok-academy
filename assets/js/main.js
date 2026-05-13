/* ============================================================
   민족 어학원 — main.js
   - 공통 헤더/푸터 fetch include
   - 모바일 메뉴 토글
   - 헤더 스크롤 그림자
   - 플로팅 CTA fade-in
   - 상담 폼 데모 처리
   ============================================================ */

(function () {
  'use strict';

  /* ----- 0. Base prefix detection -----
     Locally (python -m http.server) the site lives at "/", so REPO_PREFIX is "".
     On GitHub Pages it lives at "/<repo>/...", so we capture "/<repo>".
     This lets us keep absolute paths ("/about.html", "/assets/...") in markup
     while still working under the GitHub Pages sub-path. */
  const REPO_PREFIX = (() => {
    const m = location.pathname.match(/^(\/[^./]+)(?=\/)/);
    return m ? m[1] : '';
  })();

  function rewriteAbs(path) {
    if (!path || path.startsWith('//') || path.startsWith('http')) return path;
    if (!path.startsWith('/')) return path;
    if (REPO_PREFIX && path.startsWith(REPO_PREFIX + '/')) return path;
    return REPO_PREFIX + path;
  }

  function applyPrefix(root) {
    if (!REPO_PREFIX) return;
    root.querySelectorAll('a[href^="/"], img[src^="/"]').forEach((el) => {
      const isImg = el.tagName === 'IMG';
      const attr = isImg ? 'src' : 'href';
      const val = el.getAttribute(attr);
      el.setAttribute(attr, rewriteAbs(val));
    });
  }

  /* ----- 1. Partial includes (header / footer) ----- */
  async function includePartials() {
    const targets = document.querySelectorAll('[data-include]');
    await Promise.all(
      Array.from(targets).map(async (el) => {
        const src = el.getAttribute('data-include');
        try {
          const res = await fetch(src);
          if (!res.ok) throw new Error('Failed: ' + src);
          el.innerHTML = await res.text();
          applyPrefix(el);
        } catch (err) {
          el.innerHTML = '<!-- include failed: ' + src + ' -->';
          console.error(err);
        }
      })
    );
  }

  /* ----- 2. After includes: bind interactions ----- */
  function bindHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 4);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function bindMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    const close = document.getElementById('mobileMenuClose');
    if (!toggle || !menu) return;

    const open = () => {
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', open);
    close && close.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
    });
  }

  function bindFloatingCta() {
    const cta = document.getElementById('floatingCta');
    if (!cta) return;
    const onScroll = () => {
      cta.classList.toggle('is-visible', window.scrollY > 200);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----- 3. Contact form (demo handler) ----- */
  function bindContactForm() {
    const form = document.getElementById('consultForm');
    if (!form) return;
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!status) return;
      status.textContent = '신청이 접수되었습니다. 영업일 기준 24시간 내 연락드리겠습니다.';
      status.classList.add('is-visible');
      form.reset();
      setTimeout(() => status.classList.remove('is-visible'), 6000);
    });
  }

  /* ----- 4. Init ----- */
  document.addEventListener('DOMContentLoaded', async () => {
    applyPrefix(document.body);
    await includePartials();
    bindHeader();
    bindMobileMenu();
    bindFloatingCta();
    bindContactForm();
  });
})();
