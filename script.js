const MENU = document.getElementById('menu');
const CAROUSEL_LEFT = document.getElementById('chev_left');
const CAROUSEL_RIGHT = document.getElementById('chev_right');
const CAROUSEL = document.getElementById('carousel');
const BACKGROUND_CAROUSEL = document.getElementById('phone-section-color');
const HIDDEN_SLIDE_LEFT = document.getElementById('left_slide');
const HIDDEN_SLIDE_RIGHT = document.getElementById('right_slide');
const HIDDEN_SLIDE_CENTER = document.getElementById('center_slide');
const PHONE_VERTICAL = document.getElementById('phone_vert_block');
const PHONE_HORIZONTAL = document.getElementById('phone_hor_block');
const OFF_PHONE_VERTICAL = document.getElementById('off_vertical');
const OFF_PHONE_HORIZONTAL = document.getElementById('off_horizontal');
const PORTFOLIO_FILTER = document.getElementById('filter_buttons');
const IMAGES_BLOCK = document.getElementById('images_block');
const BUTTON_CLOSE_POPUP = document.getElementById('button_submit_close');
const FORM = document.getElementById('form');
const HAMBURGER = document.getElementById('hamburger');
const HAMBURGER_NAV = document.getElementById('hamburger_menu');
const HAMBURGER_LIST = document.getElementById('hamburger_list');
const TITLE_SINGOLO = document.getElementById('title_singolo');

//menu-navigation:


// MENU.addEventListener('click', (event) => {
//     let itemsMenu = MENU.querySelectorAll('a');
//     let target = event.target;
//     itemsMenu.forEach(function(elem) {
//         elem.classList.remove('menu_active')
//     });
//     itemsMenu.forEach(function(elem) {
//         if (elem === target) {
//             elem.classList.add('menu_active');
//         }
//     });
// });


const onScroll = () => {
    const cursorPos = window.scrollY;
    document.querySelectorAll('#home, #services, #portfolio, #about, #contact').forEach(elem => {
        let idElem = elem.getAttribute('id');
        let itemsMenu = MENU.querySelectorAll('a');
        if (elem.offsetTop <= cursorPos && elem.offsetTop + elem.offsetHeight > cursorPos) {
            itemsMenu.forEach(function(a) {
                a.classList.remove('menu_active');
                if (idElem === a.getAttribute('href').substring(1)){
                    a.classList.add('menu_active');
                }
            });
        }
    });
};

document.addEventListener('scroll', onScroll);





//slider:

let clicksChevs = 0;
let transformValue = 0;
let windowWidth = HIDDEN_SLIDE_CENTER.offsetWidth;

window.addEventListener('resize', () => {
    let newWindowWidth = HIDDEN_SLIDE_CENTER.offsetWidth;
    CAROUSEL.style.transform = `translateX(${-newWindowWidth + windowWidth}px)`;
    BACKGROUND_CAROUSEL.style.backgroundColor = `#F06C64`;
    HIDDEN_SLIDE_CENTER.style.opacity = '1';
    windowWidth = HIDDEN_SLIDE_CENTER.offsetWidth;
});

console.log(windowWidth);
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
        transformValue += windowWidth + 15;
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
        transformValue -= windowWidth + 40;
        CAROUSEL.style.transform =`translateX(${transformValue}px)`;
        BACKGROUND_CAROUSEL.style.backgroundColor = `#648BF0`;
        HIDDEN_SLIDE_RIGHT.style.opacity = '1';
        HIDDEN_SLIDE_CENTER.style.opacity = '0';
        clicksChevs++;
    }
});



//turn off screen phones

let clickPhonesVert = 0;


PHONE_VERTICAL.addEventListener('click', (event) => {
    let divPhonesVert = PHONE_VERTICAL.querySelectorAll('div, img');
    let target = event.target;
    divPhonesVert.forEach(elem => {
        if (target === elem) {
            if (clickPhonesVert === 0) {
                OFF_PHONE_VERTICAL.style.opacity = '1';
                clickPhonesVert++;
            }
            else {
                OFF_PHONE_VERTICAL.style.opacity = '0';
                clickPhonesVert = 0;
            }
        }
    })
});

let clickPhonesHor = 0;

PHONE_HORIZONTAL.addEventListener('click', (event) => {
    let divPhonesHor= PHONE_HORIZONTAL.querySelectorAll('div, img');
    console.log(divPhonesHor);
    let target = event.target;
    divPhonesHor.forEach(elem => {
        if (target === elem) {
            if (clickPhonesHor === 0) {
                OFF_PHONE_HORIZONTAL.style.opacity = '1';
                clickPhonesHor++
            }
            else {
                OFF_PHONE_HORIZONTAL.style.opacity = '0';
                clickPhonesHor = 0;
            }
        }
    })
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

// Get a quote form submit:

const openPopup = () => {
    let blackout = document.getElementById('popup_blackout');
    let popup = document.getElementById('popup');
    blackout.style.display = 'block';
    popup.style.display = 'block';
};

const closePopup = () => {
    let popup = document.getElementById('popup');
    let blackout = document.getElementById('popup_blackout');
    FORM.reset();
    blackout.style.display = 'none';
    popup.style.display = 'none';
};

FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    if (FORM.checkValidity()) {
        let subject = document.getElementById('subject').value.toString();
        let describe = document.getElementById('describe').value.toString();
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
    }
});

BUTTON_CLOSE_POPUP.addEventListener('click', closePopup);


//hamburger:
console.log(HAMBURGER);
let clicksHamburger = 0;
const openHamburgerMenu = async function() {
    let blackout = document.getElementById('popup_blackout');
    if (clicksHamburger === 0) {
        let promise = new Promise(() => {
            setTimeout(() => HAMBURGER_NAV.style.display = 'block', 100)
        });
        setTimeout(() => {
            HAMBURGER_NAV.style.transform = 'translateX(0vw)';
            HAMBURGER_LIST.style.transform = 'translateX(0vw)';
        }, 200);
        blackout.style.display = 'block';
        HAMBURGER.style.transform = 'rotate(90deg)';
        clicksHamburger++;
        await promise;
    }
    else {
        setTimeout(() => HAMBURGER_NAV.style.display = 'none', 600);
        HAMBURGER_NAV.style.transform = 'translateX(-75vw)';
        HAMBURGER_LIST.style.transform = 'translateX(-75vw)';
        HAMBURGER.style.transform = 'rotate(0deg)';
        blackout.style.display = 'none';
        clicksHamburger = 0;
    }
};

HAMBURGER.addEventListener('click', openHamburgerMenu);





