async function loadNavFoot() {
  const n = await fetch('px-assets/px-comp/nav/');
  const f = await fetch('px-assets/px-comp/footer/');
  const c = await fetch('px-assets/px-comp/copyright/');
  try {
    if (!n.ok) throw Error('Nav File Not Found');
    const nCon = await n.text();
    const hId = document.getElementById('px-header');

    if (!hId) throw Error('Header Container Not Found');
    hId.innerHTML = nCon;

    if (!f.ok) throw Error('Footer File Not Found');
    const fCon = await f.text();
    const fId = document.getElementById('px-footer');

    if (!fId) throw Error('Footer Container Not Found');
    fId.innerHTML = fCon;

    if (!c.ok) throw Error('Copyright File Not Found');
    const cCon = await c.text();
    const cId = document.getElementById('px-copyright');

    if (!cId) throw Error('Copyright Container Not Found');
    cId.innerHTML = cCon;
    socialMedia();
    scrollNav();
    window.addEventListener('scroll', scrollNav);
  } catch (err) {
    console.error('Error loading Component:', err);
  }
}

function setNavState(isSticky) {
  const nv = document.querySelector('.px-section--nav .px-container');
  if (!nv) return;

  if (isSticky) {
    nv.classList.replace('px-container--nav-full', 'px-container--nav');
    nv.classList.add('px-sticky');
  } else {
    nv.classList.replace('px-container--nav', 'px-container--nav-full');
    nv.classList.remove('px-sticky');
  }
}

function scrollNav() {
  setNavState(window.scrollY >= 80);
}

async function socialMedia() {
  const icJS = await fetch('px-assets/px-js/social-media.json');
  const stJS = await icJS.json();

  const smMap = {
    'px-icon__fb': 'fb',
    'px-icon__tw': 'tw',
    'px-icon__ig': 'ig',
  };

  for (const [id, key] of Object.entries(smMap)) {
    const smList = document.getElementById(id);
    if (smList && stJS[key]) {
      smList.innerHTML = `
        <a href="${stJS[key].url}" target="_blank" aria-label="${key}" class="px-copyright__icon">
          ${stJS[key].svg}
        </a>
      `;
    }
  }
}

function animation() {
  const bdy = document.body;
  if (!bdy) throw Error('Body Container Not Found');

  const hId = document.getElementById('px-header');
  if (!hId) throw Error('Header Container Not Found');

  function init() {
    hId.classList.remove('cubic__03');
    hId.style.opacity = '0';
    hId.style.transform = 'translateY(-100%) translateX(-50%)';
    hId.style.transformStyle = 'preserve-3d';
  }
  function final() {
    hId.classList.add('cubic__03');
    hId.style.opacity = '1';
    hId.style.transform = 'translateY(0) translateX(-50%)';
    hId.style.transformStyle = 'preserve-3d';
    hId.style.transitionDelay = '300ms';
  }

  init();

  const iObserve = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]; // only one target
      if (entry.isIntersecting) {
        final();
      }
    },
    { root: null, threshold: [0, 1] }
  );

  iObserve.observe(bdy);
}
