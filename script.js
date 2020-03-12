const MENU = document.getElementById('menu');
const CAROUSEL_LEFT = document.getElementById('chev_left');
const CAROUSEL_RIGHT = document.getElementById('chev_right');
const CAROUSEL = document.getElementById('carousel');
const BACKGROUND_CAROUSEL = document.getElementById('phone-section-color');
const HIDDEN_SLIDE_LEFT = document.getElementById('left_slide');
const HIDDEN_SLIDE_RIGHT = document.getElementById('right_slide');
const HIDDEN_SLIDE_CENTER = document.getElementById('center_slide');
const PHONE_VERTICAL = document.getElementById('phone_vert');
const PHONE_HORIZONTAL = document.getElementById('phone_hor');
const OFF_PHONE_VERTICAL = document.getElementById('off_vertical');
const OFF_PHONE_HORIZONTAL = document.getElementById('off_horizontal');

//menu-navigation:

MENU.addEventListener('click', (event) => {
    let itemsMenu = MENU.querySelectorAll('a');
    let target = event.target;
    itemsMenu.forEach(function(elem) {
        elem.classList.remove('menu_active')
    });
    itemsMenu.forEach(function(elem) {
        if (elem === target) {
            elem.classList.add('menu_active');
        }
    });
});

//carousel:

let clicksChevs = 0;
let transformValue = 0;
CAROUSEL_LEFT.addEventListener('click', function carouselTranslate() {
    if (clicksChevs >= 1) {
        transformValue = 0;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#F06C64`;
        HIDDEN_SLIDE_LEFT.style.opacity = '0';
        HIDDEN_SLIDE_CENTER.style.opacity = '1';
        clicksChevs = 0;
    }
    else {
        transformValue += 1241;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#648BF0`;
        HIDDEN_SLIDE_LEFT.style.opacity = '1';
        HIDDEN_SLIDE_CENTER.style.opacity = '0';
        clicksChevs++;
    }
});

CAROUSEL_RIGHT.addEventListener('click', function carouselTranslate() {
    if (clicksChevs >= 1) {
        transformValue = 0;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#F06C64`;
        HIDDEN_SLIDE_RIGHT.style.opacity = '0';
        HIDDEN_SLIDE_CENTER.style.opacity = '1';
        clicksChevs = 0;
    }
    else {
        transformValue -= 1241;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#648BF0`;
        HIDDEN_SLIDE_RIGHT.style.opacity = '1';
        HIDDEN_SLIDE_CENTER.style.opacity = '0';
        clicksChevs++;
    }
});

console.log(transformValue);


//turn off screen phones

let clickPhonesVert = 0;

PHONE_VERTICAL.addEventListener('click', (event) => {
    let target = event.target;
    if (clickPhonesVert === 0) {
        OFF_PHONE_VERTICAL.style.opacity = '1';
        clickPhonesVert++;
    }
    else {
        OFF_PHONE_VERTICAL.style.opacity = '0';
        clickPhonesVert = 0;
    }
});

let clickPhonesHor = 0;

PHONE_HORIZONTAL.addEventListener('click', (event) => {
    if (clickPhonesHor === 0) {
        OFF_PHONE_HORIZONTAL.style.opacity = '1';
        clickPhonesHor++
    }
    else {
        OFF_PHONE_HORIZONTAL.style.opacity = '0';
        clickPhonesHor = 0;
    }
});







