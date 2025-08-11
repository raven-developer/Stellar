document.addEventListener('DOMContentLoaded', async function () {
  try {
    masonryJS();
    setupHeroBackground();
    setupBackgroundImages();
    cloneCarouselItems();
    loadNav();
  } catch (error) {
    console.error('Error during DOMContentLoaded:', error);
  }
});
