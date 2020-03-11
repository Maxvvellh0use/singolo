const MENU = document.getElementById('menu');
const CAROUSEL_LEFT = document.getElementById('chev_left');
const CAROUSEL_RIGHT = document.getElementById('chev_right');
const CAROUSEL = document.getElementById('carousel');
const BACKGROUND_CAROUSEL = document.getElementById('phone-section-color');

MENU.addEventListener('click', (event) => {
    let itemsMenu = MENU.querySelectorAll('a');
    let targ = event.target;
    itemsMenu.forEach(elem => elem.classList.remove('menu_active'));
    targ.classList.add('menu_active');
});

let clicks = 0;
let transformValue = 0;
CAROUSEL_LEFT.addEventListener('click', function carouselTranslate() {
    if (clicks >= 1) {
        transformValue = 0;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#F06C64`;
        clicks = 0;
    }
    else {
        transformValue += 1241;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#648BF0`;
        clicks++;
    }
});

CAROUSEL_RIGHT.addEventListener('click', function carouselTranslate() {
    if (clicks >= 1) {
        transformValue = 0;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#F06C64`;
        clicks = 0;
    }
    else {
        transformValue -= 1241;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#648BF0`;
        clicks++;
    }
});

console.log(transformValue);









