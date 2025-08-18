document.addEventListener('DOMContentLoaded', async function () {
  try {
    masonryJS();
    setupHeroBackground();
    setupBackgroundImages();
    cloneCarouselItems();
    loadNavFoot();
  } catch (error) {
    console.error('Error during DOMContentLoaded:', error);
  }
});
