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
const PORTFOLIO_FILTER = document.getElementById('filter_buttons');
const IMAGES_BLOCK = document.getElementById('images_block');
const BUTTON_POPUP = document.getElementById('button_submit');
const BUTTON_CLOSE_POPUP = document.getElementById('button_submit_close');

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



//turn off screen phones

let clickPhonesVert = 0;

PHONE_VERTICAL.addEventListener('click', () => {
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


//Portfolio switch buttons:

window.onload = function () {
    PORTFOLIO_FILTER.addEventListener('click', (event) => {
        let itemsFilter = PORTFOLIO_FILTER.querySelectorAll('button');

        let target = event.target;
        itemsFilter.forEach((elem) => {
            elem.classList.remove('active_button')
        });
        itemsFilter.forEach(function(elem) {
            const images = IMAGES_BLOCK.querySelectorAll('.content-block__image');
            if (elem === target) {
                elem.classList.add('active_button');
                mixPictures(images)
            }

        });
    });

    const mixPictures = (images) => {
        images.forEach((elem) => {
            IMAGES_BLOCK.insertAdjacentElement('afterbegin', elem)
        })
    };
};

//Border images after click:

IMAGES_BLOCK.addEventListener('click', (event) => {
    let target = event.target;
    let images = IMAGES_BLOCK.querySelectorAll('img');
    images.forEach(elem => {
        elem.style.outline = 'none';
    });
    images.forEach(function(elem) {
        if (elem === target) {
            elem.style.outline = '5px solid #F06C64';
        }
    });
});

//Get a quote form submit:

const formSubmit = () => {
    let subject = document.getElementById('subject').value.toString();
    let describe = document.getElementById('describe').value.toString();
    console.log(describe);
    let messageSubject = document.getElementById('message_subject');
    let messageDescribe = document.getElementById('message_describe');
    if (subject === 'Singolo' && describe === '') {
        openPopup();
        messageSubject.innerHTML = 'Тема: Singolo';
        messageDescribe.innerHTML = 'Без описания';
    }
    else if (subject === '' && describe === '') {
        openPopup();
        messageSubject.innerHTML = 'Без темы';
        messageDescribe.innerHTML = 'Без описания';
    }
    else if (describe === 'Portfolio project' && subject === '') {
        openPopup();
        messageSubject.innerHTML = 'Без темы';
        messageDescribe.innerHTML = 'Описание: Portfolio project';
    }
    else if (describe === 'Portfolio project' && subject === 'Singolo') {
        openPopup();
        messageSubject.innerHTML = 'Тема: Singolo';
        messageDescribe.innerHTML = 'Описание: Portfolio project';
    }
};


const openPopup = () => {
    let blackout = document.getElementById('popup_blackout');
    let popup = document.getElementById('popup');
    blackout.style.display = 'block';
    popup.style.display = 'block';
};

const closePopup = () => {
    let popup = document.getElementById('popup');
    let blackout = document.getElementById('popup_blackout');
    clearInputs();
    blackout.style.display = 'none';
    popup.style.display = 'none';
};

const clearInputs = () => {
    let form = document.getElementById('form');
    let inputs = form.querySelectorAll('input');
    let textAreas = form.querySelectorAll('textarea');
    inputs.forEach(elem => elem.value = '');
    textAreas.forEach(elem => elem.value = '');
};

BUTTON_POPUP.addEventListener('click', formSubmit);

BUTTON_CLOSE_POPUP.addEventListener('click', closePopup);




