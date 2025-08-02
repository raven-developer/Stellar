document.addEventListener('DOMContentLoaded', async function () {
  try {
    masonryJS();
    setupHeroBackground();
    setupBackgroundImages();
    cloneCarouselItems();
  } catch (error) {
    console.error('Error during DOMContentLoaded:', error);
  }
});
