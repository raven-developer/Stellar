async function loadHome() {
  try {
    const homeContent = await fetch('home/');
    const homeHTML = await homeContent.text();
    const homeContainer = document.getElementById('px-main__home');

    if (!homeContent.ok) {
      throw new Error('Home Content Not Found');
    } else {
      //console.log('Home Content Found');
    }

    if (!homeContainer) {
      throw new Error('Home > Main Container Not Found');
    } else {
      //console.log('Home Container Found');
    }

    homeContainer.innerHTML = homeHTML;
  } catch (error) {
    console.error('Error on Loading Content: ', error);
  }
}
