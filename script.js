const MENU = document.getElementById('menu');
const CAROUSEL_LEFT = document.getElementById('chev_left');
const CAROUSEL_RIGHT = document.getElementById('chev_right');
const CAROUSEL = document.getElementById('carousel');
const BACKGROUND_CAROUSEL = document.getElementById('phone-section-color');
const HIDDEN_SLIDE_LEFT = document.getElementById('left_slide');
const HIDDEN_SLIDE_RIGHT = document.getElementById('right_slide');
const HIDDEN_SLIDE_CENTER = document.getElementById('center_slide');

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
        HIDDEN_SLIDE_LEFT.style.opacity = '0';
        HIDDEN_SLIDE_CENTER.style.opacity = '1';
        clicks = 0;
    }
    else {
        transformValue += 1241;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#648BF0`;
        HIDDEN_SLIDE_LEFT.style.opacity = '1';
        HIDDEN_SLIDE_CENTER.style.opacity = '0';
        clicks++;
    }
});

CAROUSEL_RIGHT.addEventListener('click', function carouselTranslate() {
    if (clicks >= 1) {
        transformValue = 0;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#F06C64`;
        HIDDEN_SLIDE_RIGHT.style.opacity = '0';
        HIDDEN_SLIDE_CENTER.style.opacity = '1';
        clicks = 0;
    }
    else {
        transformValue -= 1241;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#648BF0`;
        HIDDEN_SLIDE_RIGHT.style.opacity = '1';
        HIDDEN_SLIDE_CENTER.style.opacity = '0';
        clicks++;
    }
});

console.log(transformValue);









