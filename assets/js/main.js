const bottles = [...document.querySelectorAll('.bottle')];
const bottleNames = document.querySelectorAll('.bottle-names>span');
const phoneMediaQuery = window.matchMedia('(min-width: 640px)');

function bottleNameListener(e) {
    if (e.matches) {
        bottles.forEach(bottle => {
            bottle.addEventListener('mouseover', () => {
                bottleNames[bottles.indexOf(bottle)].setAttribute('style', 'opacity: 1;');
            });
            bottle.addEventListener('mouseout', () => {
                bottleNames[bottles.indexOf(bottle)].setAttribute('style', 'opacity: 0;');
            });
        });
    } else {
        bottleNames[0].style.opacity = '1';
    }
}

phoneMediaQuery.addListener(bottleNameListener);