async function loadNav() {
  try {
    const n = await fetch('px-assets/px-comp/nav/');
    if (!n.ok) throw Error('Nav File Not Found');

    const nCon = await n.text();
    const h = document.getElementById('px-header');
    if (!h) throw Error('Header Container Not Found');

    h.innerHTML = nCon;

    scrollNav();
    window.addEventListener('scroll', scrollNav);
  } catch (err) {
    console.error('Error loading Component:', err);
  }
}

loadNav();

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
