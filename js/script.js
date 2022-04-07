let $menuBtn = document.querySelector('.header__menu-button'),
    $nav = document.querySelector('.nav'),
    $menuCross = document.querySelector('.nav__cross'),
    $body = document.querySelector('body');

let flagMenu = false;

    $menuBtn.addEventListener('click', e => {
        flagMenu = true;       
    },true);

    $nav.addEventListener('click', e => {
        flagMenu = true;       
    },true);
    
    $menuCross.addEventListener('click', e => {
        flagMenu = false;       
    }, true);

    $body.addEventListener('click', event => {
    
        if(flagMenu == false) {
            $nav.classList.remove('nav__active');
        } else {
            $nav.classList.add('nav__active');
        }
        flagMenu = false;
    
    }, false );