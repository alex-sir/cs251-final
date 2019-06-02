const openSlide = document.querySelector('.open-slide>a');
const closeBtn = document.querySelector('.btn-close');
const hamburger = document.querySelector('#hamburger-menu');
const cart = document.querySelector('#cart2');
const aesop = document.querySelector('.aesop-logo>h1>a');

openSlide.addEventListener('click', () => {
  openSlideMenu();
});

closeBtn.addEventListener('click', () => {
  closeSideMenu();
});

const openSlideMenu = () => {
  hamburger.setAttribute('style', 'height: 100vh; width: 100%;');
  cart.setAttribute('style', 'color: var(--color-dark); position: fixed;');
  aesop.setAttribute('style', 'color: var(--color-dark);');
}

const transformSlide = () => {
  // openSlide
}

const closeSideMenu = () => {
  hamburger.setAttribute('style', 'height: 0;')
  cart.setAttribute('style', 'color: var(--color-light); position: static;');
  aesop.setAttribute('style', 'color: var(--color-light);');
}