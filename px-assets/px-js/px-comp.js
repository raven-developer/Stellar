async function loadHome() {
  try {
    let n = await fetch('px-assets/px-comp/nav/');
    if (!n.ok) throw Error('Nav File Not Found');
    let nCon = await n.text(),
      h = document.getElementById('px-header');
    if (!h) throw Error('Header Container Not Found');
    h.innerHTML = nCon;
  } catch (n) {
    console.error('Error loading Component:', n);
  }
}

loadHome();
