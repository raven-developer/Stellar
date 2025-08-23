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
    { el: els.h1s1CntTop, 
      init: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 800
    },
    // prettier-ignore
    { el: els.h1s1CntH, 
      init: 'translateY(0) translateX(0) scale3d(1.2, 1.2, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 500 
    },
    // prettier-ignore
    { el: els.h1s1CntT, 
      init: 'translateY(0) translateX(0) scale3d(1.2, 1.2, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 600 
    },
    // prettier-ignore
    { el: els.h1s1Btn, 
      init: 'translateY(0) translateX(0) scale3d(1.2, 1.2, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 700 
    },
    // prettier-ignore
    { el: els.h1s1Bg, 
      init: 'translateY(-50%) translateX(0) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 0 
    },
  ];

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
      delay: 600 
    },
    // prettier-ignore
    { elImg: hIms.blImg,
      init: 'translateY(0) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1.1, 1.1, 1)',
      opacity: 0,
      delay: 700 
    },
    // prettier-ignore
    { elImg: hIms.phImg,
      init: 'translateY(20%) translateX(-50%) scale3d(1.1, 1.1, 1)',
      final: 'translateY(0) translateX(-50%) scale3d(1, 1, 1)',
      opacity: 0,
      delay:  600
    },
    // prettier-ignore
    { elImg: hIms.trImg,
      init: 'translateY(0) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1.1, 1.1, 1)',
      opacity: 0,
      delay: 600 
    },
    // prettier-ignore
    { elImg: hIms.brImg,
      init: 'translateY(0) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 700 
    },
  ];

  function init() {
    imgItems.forEach(({ elImg, init, opacity }) => {
      elImg.style.cssText += `
        opacity: ${opacity};
        transform: ${init};
        transition: none; /* snap back on reset */
      `;
    });

    items.forEach(({ el, init, opacity }) => {
      el.style.cssText += `
        opacity: ${opacity};
        transform: ${init};
        transform-style: preserve-3d;
        transition: none; /* snap back on reset */
      `;
    });
  }

  function play() {
    items.forEach(({ el, final, delay }) => {
      el.style.cssText += `
        opacity: 1;
        transform: ${final};
        transform-style: preserve-3d;
        transition: transform 1s cubic-bezier(0.19,1,0.22,1), opacity 1s cubic-bezier(0.19,1,0.22,1);
        transition-delay: ${delay}ms;
      `;
    });

    imgItems.forEach(({ elImg, final, delay }) => {
      elImg.style.cssText += `
        opacity: 1;
        transform: ${final};
        transition: transform 1s cubic-bezier(0.19,1,0.22,1), opacity 1s cubic-bezier(0.19,1,0.22,1);
        transition-delay: ${delay}ms;
      `;
    });
  }

  // set initial state once
  init();

  const iObserv = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          play();
        }
      });
    },
    { root: null, threshold: 0 } // <- important for "immediate when scrolled out"
  );

  iObserv.observe(els.h1s1);
}

function secAnim() {
  const elements = {
    h1s2: document.querySelector('.px-section-id-h1s2'),
    h1s2CntH: document.querySelector('.px-section-id-h1s2 .px-section__heading'),
    h1s2CntT: document.querySelector('.px-section-id-h1s2 .px-section__par'),
    h1s2Carsl: document.querySelector('.px-section-id-h1s2 .px-carousel'),
    h1s2Btn: document.querySelector('.px-section-id-h1s2 .px-button-wrapper'),
  };

  for (const [key, element] of Object.entries(elements)) {
    if (!element) throw Error(`${key} not found`);
  }

  const element_el = [
    // prettier-ignore
    { el: elements.h1s2CntH, 
      init: 'translateY(40px) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 100
    },
    // prettier-ignore
    { el: elements.h1s2CntT, 
      init: 'translateY(40px) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 200 
    },
    // prettier-ignore
    { el: elements.h1s2Carsl, 
      init: 'translateY(40px) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 0 
    },
    // prettier-ignore
    { el: elements.h1s2Btn, 
      init: 'translateY(40px) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 100 
    },
  ];

  function init() {
    element_el.forEach(({ el, init, opacity }) => {
      el.style.cssText = `
        opacity: ${opacity};
        transform: ${init};
        transform-style: preserve-3d;
        transition: none;
      `;
    });
  }

  function final() {
    element_el.forEach(({ el, final, delay }) => {
      el.style.cssText = `
        opacity: 1;
        transform: ${final};
        transform-style: preserve-3d;
        transition-delay: ${delay}ms;
      `;
      el.classList.add('cubic__01');
    });
  }
  init();

  const iObserve = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          final();
        }
      });
    },
    { root: null, threshold: [0, 0.8, 1] }
  );

  iObserve.observe(elements.h1s2CntH);
}

function sec3Anim() {
  const elements = {
    h1s3: document.querySelector('.px-section-id-h1s3'),
    h1s3Head: document.querySelector('.px-section-id-h1s3 .px-section__heading'),
    h1s3TopL: document.querySelector('.px-section-id-h1s3 .px-section__topl'),
    h1s3Par: document.querySelector('.px-section-id-h1s3 p.px-section__par'),
    h1s3List: document.querySelector('.px-section-id-h1s3 .px-icon-list-wrapper'),
    h1s3Btn: document.querySelector('.px-section-id-h1s3 .px-button-wrapper'),
    h1s3Img4644: document.querySelector('.px-section-id-h1s3 .img-4644'),
    h1s3Img4642: document.querySelector('.px-section-id-h1s3 .img-4642'),
    h1s3Img4643: document.querySelector('.px-section-id-h1s3 .img-4643'),
    h1s3Circle: document.querySelector('.px-section-id-h1s3 .px-circle-bg'),
  };

  for (const [key, element] of Object.entries(elements)) {
    if (!element) throw Error(`${key} not found`);
  }

  const sec_content = [
    // prettier-ignore
    {
      el: elements.h1s3TopL,
      init: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 300
    },
    // prettier-ignore
    {
      el: elements.h1s3Head,
      init: 'translateY(0) translateX(-40px) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 0,
    },
    // prettier-ignore
    {
      el: elements.h1s3Par,
      init: 'translateY(0) translateX(-40px) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 50,
    },
    // prettier-ignore
    {
      el: elements.h1s3List,
      init: 'translateY(0) translateX(-40px) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 100
    },
    // prettier-ignore
    {
      el: elements.h1s3Btn,
      init: 'translateY(0) translateX(-40px) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 150,
    },
  ];

  const sec_images = [
    // prettier-ignore
    {
      el: elements.h1s3Img4644,
      init: 'translateY(20%) translateX(0) scale3d(0.8, 0.8, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 200
    },
    // prettier-ignore
    {
      el: elements.h1s3Img4642,
      init: 'translateY(0) translateX(20%) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 100,
    },
    // prettier-ignore
    {
      el: elements.h1s3Img4643,
      init: 'translateY(0) translateX(-20%) scale3d(1, 1, 1)',
      final: 'translateY(0) translateX(0) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 150,
    },
    // prettier-ignore
    {
      el: elements.h1s3Circle,
      init: 'translate(-50%, -30%) scale3d(0.8, 0.8, 1)',
      final: 'translate(-50%, -50%) scale3d(1, 1, 1)',
      opacity: 0,
      delay: 0,
    },
  ];

  function init() {
    sec_content.forEach(({ el, init, opacity }) => {
      el.classList.remove('cubic__01');
      el.style.cssText = `
        opacity: ${opacity};
        transform: ${init};
        transform-style: preserve-3d;
        transition: none;
      `;
    });

    sec_images.forEach(({ el, init, opacity }) => {
      el.classList.remove('cubic__img');
      el.style.cssText = `
        opacity: ${opacity};
        transform: ${init};
        transform-style: preserve-3d;
        transition: none;
      `;
    });
  }

  function final() {
    sec_content.forEach(({ el, final, delay }) => {
      el.classList.add('cubic__01');
      el.style.cssText = `
        opacity: 1;
        transform: ${final};
        transform-style: preserve-3d;
        transition-delay: ${delay}ms;
      `;
    });

    sec_images.forEach(({ el, final, delay }) => {
      el.classList.add('cubic__img');
      el.style.cssText = `
        opacity: 1;
        transform: ${final};
        transform-style: preserve-3d;
        transition-delay: ${delay}ms;
      `;
    });
  }

  init();

  const iObserv = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          final();
        }
      });
    },
    { root: null, threshold: [0, 0.8, 1] }
  );

  iObserv.observe(elements.h1s3List);
}
