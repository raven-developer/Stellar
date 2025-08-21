import * as comp from 'px-assets/px-js/px-comp.js';

document.addEventListener('DOMContentLoaded', async function () {
  try {
    comp.loadNavFoot();
    setupHeroBackground();
    setupBackgroundImages();
    cloneCarouselItems();
    masonryJS();
    introAnim();
  } catch (error) {
    console.error('Error during DOMContentLoaded:', error);
  }
});
