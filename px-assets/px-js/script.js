document.addEventListener('DOMContentLoaded', async function () {
  try {
    loadNavFoot();
    animation();
    setupHeroBackground();
    setupBackgroundImages();
    introAnim();
    secAnim();
    sec3Anim();
    cloneCarouselItems();
    masonryJS();
  } catch (error) {
    console.error('Error during DOMContentLoaded:', error);
  }
});
