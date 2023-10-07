/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/burger.js
// BURGER MENU //

const burger = document.querySelector('.header-mob__burger'),
  mobMenu = document.querySelector('.header-mob__menu');
burger.addEventListener('click', e => {
  e.preventDefault();
  mobMenu.classList.toggle('active');
  burger.classList.toggle('active');
});
;// CONCATENATED MODULE: ./src/js/modules/slider.js
const slider = new Swiper('.slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
;// CONCATENATED MODULE: ./src/js/index.js


/******/ })()
;