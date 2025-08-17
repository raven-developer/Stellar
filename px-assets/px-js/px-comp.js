async function loadNavFoot() {
  try {
    const n = await fetch('px-assets/px-comp/nav/');
    const f = await fetch('px-assets/px-comp/footer/');
    const c = await fetch('px-assets/px-comp/copyright/');
    if (!n.ok) throw Error('Nav File Not Found');
    if (!f.ok) throw Error('Footer File Not Found');
    if (!c.ok) throw Error('Copyright File Not Found');

    const nCon = await n.text();
    const fCon = await f.text();
    const cCon = await c.text();

    const hId = document.getElementById('px-header');
    const fId = document.getElementById('px-footer');
    const cId = document.getElementById('px-copyright');
    if (!hId) throw Error('Header Container Not Found');
    if (!fId) throw Error('Footer Container Not Found');
    if (!cId) throw Error('Copyright Container Not Found');

    hId.innerHTML = nCon;
    fId.innerHTML = fCon;
    cId.innerHTML = cCon;

    scrollNav();
    window.addEventListener('scroll', scrollNav);
  } catch (err) {
    console.error('Error loading Component:', err);
  }
}

loadNavFoot();

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
