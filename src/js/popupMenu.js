//ПОПАП МЕНЮ

const popupButtons = document.querySelectorAll('.btn-burger');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupButtons.length > 0) {

    for (let i = 0; i < popupButtons.length; i++) {
        const popupButton = popupButtons[i];
        popupButton.addEventListener('click', function(e) {
            const popupName = popupButton.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault;
        });
    }

}

const popupCloseIcon = document.querySelectorAll('.popup-menu__close');

if (popupCloseIcon.length > 0) {

    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function(e) {
            popupClose(el.closest('.popup-menu'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {

    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup-menu.open');

        if (popupActive) {
            popupClose(popupActive, false);
        } //else {
        //     bodyLock();
        // }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function(e) {
            
            if (!e.target.closest('.popup-menu__container')) {
                popupClose(e.target.closest('.popup-menu'));
            }
        });
    }

}

function popupClose(popupActive, doUnlock = true) {

    if (unlock) {
        popupActive.classList.remove('open');

        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {

        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout( function() {
        unlock = true;
    },  timeout);
}

function bodyUnLock() {
    setTimeout(function () {

        if (lockPadding.length > 0) {

            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
           }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    },  timeout);
}

document.addEventListener('keydown', function(env) {

    if (env.keyCode === 27) {
        const popupActive = document.querySelector('.popup-menu.open');
        popupClose(popupActive);
    }
});

//ПОПАП КОЛБЭК

