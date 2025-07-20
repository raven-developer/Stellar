document.addEventListener('DOMContentLoaded', async function () {
  const pageData = document.body.getAttribute('data-page');
  try {
    if (pageData === 'home') {
      await loadHome();
    }
  } catch (error) {
    console.error('Error loading components:', error);
  }
});
