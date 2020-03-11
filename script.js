const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    let itemsMenu = MENU.querySelectorAll('a');
    let targ = event.target;
    itemsMenu.forEach(elem => elem.classList.remove('menu_active'));
    targ.classList.add('menu_active');
});