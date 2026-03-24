/* ============================================
   花見川 福祉用具レンタル
   メインJavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- ハンバーガーメニュー ---
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
    // ナビリンクをタップしたら閉じる
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  // --- スクロール時ヘッダーに影を追加 ---
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,.18)'
        : '0 2px 12px rgba(0,0,0,.10)';
    }, { passive: true });
  }

  // --- スムーズスクロール（アンカーリンク） ---
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const url  = new URL(link.href, location.href);
      const hash = url.hash;
      // 同一ページ内アンカーのみ処理
      if (url.pathname === location.pathname && hash) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const offset = 72; // ヘッダー高さ分のオフセット
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // --- カードのフェードインアニメーション ---
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .category-card, .info-card, .flow-step').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .4s ease, transform .4s ease';
    observer.observe(el);
  });

  // --- 現在のページをナビでアクティブ表示（動的補正） ---
  const path = location.pathname;
  document.querySelectorAll('.main-nav a').forEach(a => {
    const aPath = new URL(a.href, location.href).pathname;
    if (aPath === path) {
      a.classList.add('active');
    } else {
      // index への「ホーム」だけ完全一致
      if (aPath.endsWith('index.html') && (path === '/' || path.endsWith('index.html'))) {
        a.classList.add('active');
      }
    }
  });

  // --- テーブルにスクロールヒント（スマホ向け） ---
  document.querySelectorAll('.table-wrap').forEach(wrap => {
    if (wrap.scrollWidth > wrap.clientWidth) {
      const hint = document.createElement('p');
      hint.textContent = '← 横にスクロールできます →';
      hint.style.cssText = 'text-align:center;font-size:.75rem;color:#999;margin-top:6px;';
      wrap.insertAdjacentElement('afterend', hint);
    }
  });

});
