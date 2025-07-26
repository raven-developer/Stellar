document.addEventListener('DOMContentLoaded', async function () {
  try {
    const pageData = document.body.getAttribute('data-page');
    const path = window.location.pathname;

    // Initial load logic
    if (pageData === 'home' || path === '/home/' || path === '/home/index.html') {
      await loadHome();
    }

    // Attach event to nav link AFTER DOM is ready
    const navHome = document.querySelector('.nav-home');
    if (navHome) {
      navHome.addEventListener('click', async (e) => {
        e.preventDefault();
        history.pushState(null, '', '/home/');
        await loadHome();
      });
    }
  } catch (error) {
    console.error('Error loading components:', error);
  }

  try {
    const heroSection = document.querySelector('.px-section--hero');
    const heroBg = document.querySelector('.px-background--hero');

    if (!heroSection) {
      throw new Error('Hero Section');
    } else {
      if (!heroBg) {
        throw new Error('Hero Background Section');
      } else {
        heroBg.style.backgroundImage = 'url("px-uploads/image/background.jpg")';
        heroBg.style.backgroundRepeat = 'no-repeat';
        heroBg.style.backgroundPosition = 'center';
        heroBg.style.backgroundSize = 'cover';
      }
    }
  } catch (error) {
    console.error('Component Not Found: ', error);
  }

  try {
    const bgImageTop = document.querySelector('.px-background--top');
    const bgImageBtm = document.querySelector('.px-background--btm');

    if (!bgImageTop || !bgImageBtm) {
      throw new Error('Section Found');
    } else {
      bgImageTop.style.backgroundImage = 'url("px-uploads/image/background-top.png")';

      bgImageBtm.style.backgroundImage = 'url("px-uploads/image/background-bottom.png")';
    }
  } catch (error) {
    console.error('Component Not Found: ', error);
  }

  try {
    const carousel = document.getElementById('px-carousel-wrapper');
    const items = Array.from(carousel.children);

    // Clone and append each item
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });
  } catch (error) {}
});

// Popstate listener handles back/forward browser buttons
window.addEventListener('popstate', async () => {
  const path = window.location.pathname;
  if (path === '/home/' || path === '/home') {
    await loadHome();
  }
});
