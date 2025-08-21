document.addEventListener('DOMContentLoaded', async function () {
  try {
    loadNavFoot();
    setupHeroBackground();
    setupBackgroundImages();
    cloneCarouselItems();
    masonryJS();
    introAnim();
  } catch (error) {
    console.error('Error during DOMContentLoaded:', error);
  }
});
