const bottles = [...document.querySelectorAll('.bottle')];
const bottleNames = document.querySelectorAll('.bottle-names>span');

bottles.forEach(bottle => {
  bottle.addEventListener('mouseover', () => {
    bottleNames[bottles.indexOf(bottle)].setAttribute('style', 'opacity: 1;');
  });
  bottle.addEventListener('mouseout', () => {
    bottleNames[bottles.indexOf(bottle)].setAttribute('style', 'opacity: 0;');
  });
});