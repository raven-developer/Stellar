document.addEventListener('DOMContentLoaded', async function () {
  try {
    loadNavFoot();
    setupHeroBackground();
    setupBackgroundImages();
    cloneCarouselItems();
    masonryJS();
    introAnim();
    secAnim();
    sec3Anim();
  } catch (error) {
    console.error('Error during DOMContentLoaded:', error);
  }
});
