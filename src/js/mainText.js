/* ОБРАБОТЧИК СОБЫТИЯ ТЕКСТА ДЛЯ 320ПХ*/
let openButton = document.querySelector('.main__btn-show320');
let textButton = document.querySelector('.main__read-text');
let svgAnimation = document.querySelector('.main__svg-arrows');
let hideText = document.querySelector('.main__text-hide320');
let check= false;

openButton.addEventListener('click', function() {
    if (!check) {
        textButton.textContent = 'Скрыть';
        svgAnimation.classList.add('main__svg-arrows--hide');
        hideText.classList.add('main__text-open320');
        check = true;
    } else {
        textButton.textContent = 'Читать далее';
        svgAnimation.classList.remove('main__svg-arrows--hide');
        hideText.classList.remove('main__text-open320');
        check = false;
    }

})

/* ОБРАБОТЧИК СОБЫТИЯ ТЕКСТА ДЛЯ 768ПХ*/
let openButton768 = document.querySelector('.main__btn-show768');
let textButton768 = document.querySelector('.main__read-text768');
let svgAnimation768 = document.querySelector('.main__svg-arrows768');
let hideText768 = document.querySelector('.main__text-hide768');
let check768= false;

openButton768.addEventListener('click', function() {
    if (!check768) {
        textButton768.textContent = 'Скрыть';
        svgAnimation768.classList.add('main__svg-arrows--hide768');
        hideText768.classList.add('main__text-open768');
        check768 = true;
    } else {
        textButton768.textContent = 'Читать далее';
        svgAnimation768.classList.remove('main__svg-arrows--hide768');
        hideText768.classList.remove('main__text-open768');
        check768 = false;
    }


})
/* ОБРАБОТЧИК СОБЫТИЯ ТЕКСТА ДЛЯ 1440ПХ*/
let openButton1440 = document.querySelector('.main__btn-show1440');
let textButton1440 = document.querySelector('.main__read-text1440');
let svgAnimation1440 = document.querySelector('.main__svg-arrows1440');
let hideText1440 = document.querySelector('.main__text-hide1440');
let check1440= false;

openButton1440.addEventListener('click', function() {
    if (!check1440) {
        textButton1440.textContent = 'Скрыть';
        svgAnimation1440.classList.add('main__svg-arrows--hide1440');
        hideText1440.classList.add('main__text-show1440');
        check1440 = true;
    } else {
        textButton1440.textContent = 'Читать далее';
        svgAnimation1440.classList.remove('main__svg-arrows--hide1440');
        hideText1440.classList.remove('main__text-show1440');
        check1440 = false;
    }

})

/* ОБРАБОТЧИК ДЛЯ ПЕРВОГО СЛАЙДА */

let openButtonSlideOne768 = document.querySelector('.main__slider-btn--slider1');
let textButtomSlideOne768 = document.querySelector('.main__slider-textOpen--slider1');
let svgButtonSlideOne768 = document.querySelector('.main__slider-svgArrows--slider1');
let hideSlidersSlideOne768 = document.querySelectorAll('.slide1-hide768');
let checkSlideOne768 = false;

openButtonSlideOne768.addEventListener('click', function() {
    if (!checkSlideOne768) {
        textButtomSlideOne768.textContent = 'Скрыть';
        svgButtonSlideOne768.classList.add('main__slider-svgArrows--slider1-rotate768');
        

        for (let i = 0; i < hideSlidersSlideOne768.length; i++) {
            hideSlidersSlideOne768[i].classList.remove('slide1-hide768');
            hideSlidersSlideOne768[i].classList.add('slide1-open768');
        }
         checkSlideOne768 = true;
    } else {
        textButtomSlideOne768.textContent = 'Показать все';
        svgButtonSlideOne768.classList.remove('main__slider-svgArrows--slider1-rotate768');  
        
        for (let i = 0; i < hideSlidersSlideOne768.length; i++) {
            hideSlidersSlideOne768[i].classList.add('slide1-hide768');
            hideSlidersSlideOne768[i].classList.remove('slide1-open768');
        }
         checkSlideOne768 = false;
    }

})

//ОБРАБОТЧИК ВТОРОГО СЛАЙДА

let openButtonSlideTwo768 = document.querySelector('.main__slider-btn--slider2');
let textButtomSlideTwo768 = document.querySelector('.main__slider-textOpen--slider2');
let svgButtonSlideTwo768 = document.querySelector('.main__slider-svgArrows--slider2');
let hideSlidersSlideTwo768 = document.querySelectorAll('.slide2-hide768');
let checkSlideTwo768 = false;

openButtonSlideTwo768.addEventListener('click', function() {
    if (!checkSlideTwo768) {
        textButtomSlideTwo768.textContent = 'Скрыть';
        svgButtonSlideTwo768.classList.add('main__slider-svgArrows--slider2-rotate768');
        

        for (let i = 0; i < hideSlidersSlideOne768.length; i++) {
            hideSlidersSlideTwo768[i].classList.remove('slide2-hide768');
            hideSlidersSlideTwo768[i].classList.add('slide2-open768');
        }
         checkSlideTwo768 = true;
    } else {
        textButtomSlideTwo768.textContent = 'Показать все';
        svgButtonSlideTwo768.classList.remove('main__slider-svgArrows--slider2-rotate768');  
        
        for (let i = 0; i < hideSlidersSlideTwo768.length; i++) {
            hideSlidersSlideTwo768[i].classList.add('slide2-hide768');
            hideSlidersSlideTwo768[i].classList.remove('slide2-open768');
        }
         checkSlideTwo768 = false;
    }

})