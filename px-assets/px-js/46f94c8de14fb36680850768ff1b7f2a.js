async function loadHome() {
  try {
    let e = await fetch('home/');
    if (!e.ok) throw Error('Home Content Not Found');
    let o = await e.text(),
      t = document.getElementById('px-main__home');
    if (!t) throw Error('Home Container Not Found');
    t.innerHTML = o;
  } catch (n) {
    console.error('Error loading home content:', n);
  }
}
function masonryJS() {
  let e = document.querySelector('.px-testimonial-wrapper');
  if (!e) {
    console.error('Grid element not found!');
    return;
  }
  imagesLoaded(e, () => {
    new Masonry(e, { itemSelector: '.px-card--testimonial', columnWidth: '.px-card--width', percentPosition: !0, gutter: 20, containerStyle: null });
  });
}
async function handleInitialPageLoad() {
  let e = document.body.getAttribute('data-page'),
    o = window.location.pathname;
  ('home' === e || '/home/' === o || '/home/index.html' === o) && (await loadHome(), masonryJS());
}
async function setupNavigationEvents() {
  let e = document.querySelector('.nav-home');
  e &&
    e.addEventListener('click', async (e) => {
      e.preventDefault(), history.pushState(null, '', '/home/'), await loadHome(), masonryJS();
    });
}
function setupHeroBackground() {
  let e = document.querySelector('.px-section--hero'),
    o = document.querySelector('.px-background--hero');
  if (!e) {
    console.error('Component Not Found: Hero Section');
    return;
  }
  if (!o) {
    console.error('Component Not Found: Hero Background');
    return;
  }
  Object.assign(o.style, { backgroundImage: 'url("px-uploads/image/background.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' });
}
function setupBackgroundImages() {
  let e = document.querySelectorAll('.px-background--top'),
    o = document.querySelectorAll('.px-background--btm');
  if (!e.length || !o.length) {
    console.error('Component Not Found: Top or Bottom Background');
    return;
  }
  e.forEach((e) => {
    (e.style.backgroundImage = 'url("px-uploads/image/background-top.png")'), (e.style.opacity = '0.8');
  }),
    o.forEach((e) => {
      (e.style.backgroundImage = 'url("px-uploads/image/background-bottom.png")'), (e.style.opacity = '0.8');
    });
}
function cloneCarouselItems() {
  let e = document.getElementById('px-carousel-wrapper');
  if (!e) return;
  let o = Array.from(e.children);
  o.forEach((o) => {
    let t = o.cloneNode(!0);
    e.appendChild(t);
  });
}

function introAnim() {
  const els = {
    navSec: document.querySelector('.px-section.px-nav'),
    h1s1: document.querySelector('.px-section-id-h1s1'),
    h1s1Bg: document.querySelector('.px-section-id-h1s1 .px-background--hero'),
    h1s1CntTop: document.querySelector('.px-section-id-h1s1 .px-section__topl'),
    h1s1CntH: document.querySelector('.px-section-id-h1s1 .px-section__title'),
    h1s1CntT: document.querySelector('.px-section-id-h1s1 .px-section__par'),
    h1s1Btn: document.querySelector('.px-section-id-h1s1 .px-button-wrapper'),
    h1s1Img: document.querySelector('.px-section-id-h1s1 .px-hero-image-wrapper'),
  };

  for (const [key, el] of Object.entries(els)) {
    if (!el) throw Error(`${key} not found`);
  }

  const items = [
    // prettier-ignore
    { el: els.navSec,
      init: 'translateY(-100%) translateX(-50%) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(-50%) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 400 
    },
    // prettier-ignore
    { el: els.h1s1CntTop, 
      init: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 300
    },
    // prettier-ignore
    { el: els.h1s1CntH, 
      init: 'translateY(0) translateX(0) scale3d(1.2, 1.2, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 0 
    },
    // prettier-ignore
    { el: els.h1s1CntT, 
      init: 'translateY(0) translateX(0) scale3d(1.2, 1.2, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 100 
    },
    // prettier-ignore
    { el: els.h1s1Btn, 
      init: 'translateY(0) translateX(0) scale3d(1.2, 1.2, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 200 
    },
  ];

  items.forEach(({ el, init, opacity }) => {
    el.style.cssText = `
      opacity: ${opacity};
      transform: ${init};
      transform-style: preserve-3d;
    `;
  });

  const hIms = {
    tlImg: document.querySelector('.px-hero--img.px-hero__tl-img'),
    blImg: document.querySelector('.px-hero--img.px-hero__bl-img'),
    phImg: document.querySelector('.px-hero--img.px-hero__phone-img'),
    trImg: document.querySelector('.px-hero--img.px-hero__tr-img'),
    brImg: document.querySelector('.px-hero--img.px-hero__br-img'),
  };

  for (const [key, hIm] of Object.entries(hIms)) {
    if (!hIm) throw Error(`${key} not found`);
  }

  const imgItems = [
    // prettier-ignore
    { elImg: hIms.tlImg,
      init: 'translateY(0) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 100 
    },
    // prettier-ignore
    { elImg: hIms.blImg,
      init: 'translateY(0) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1.1, 1.1, 1)',
      opacity: 0,
      delay: 200 
    },
    // prettier-ignore
    { elImg: hIms.phImg,
      init: 'translateY(20%) translateX(-50%) scale3d(1.1, 1.1, 1)',
      final: 'translateY(0) translateX(-50%) scale3d(1, 1, 1)',
      opacity: 0,
      delay:  100
    },
    // prettier-ignore
    { elImg: hIms.trImg,
      init: 'translateY(0) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1.1, 1.1, 1)',
      opacity: 0,
      delay: 100 
    },
    // prettier-ignore
    { elImg: hIms.brImg,
      init: 'translateY(0) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 200 
    },
  ];

  imgItems.forEach(({ elImg, init, opacity }) => {
    elImg.style.cssText = `
      opacity: ${opacity};
      transform: ${init};
    `;
  });

  const iObserv = new IntersectionObserver(
    (ents, obs) => {
      ents.forEach((ent) => {
        if (ent.isIntersecting) {
          items.forEach(({ el, final, delay }) => {
            el.classList.add('cubic__01');
            el.style.cssText = `
              opacity: 1;
              transform: ${final};
              transition-delay: ${delay}ms;
            `;
          });

          imgItems.forEach(({ elImg, final, delay }) => {
            elImg.classList.add('cubic__02');
            elImg.style.cssText = `
              opacity: 1;
              transform: ${final};
              transition-delay: ${delay}ms;
            `;
          });
        }
      });
    },
    { threshold: 0 }
  );

  iObserv.observe(els.h1s1);
}
