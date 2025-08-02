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
