
//Карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("myMap", {
    center: [55.758468, 37.601088],
    zoom: 13,
    controls: []
  },
  {
    suppressMapOpenBlock: true
  });

  myMap.behaviors.disable('scrollZoom');


  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/mape.png',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -40]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

//tooltip

tippy('[data-tippy-content]');

//Меню

document.querySelectorAll('.menu__link').forEach(function (dropdawn) {
  dropdawn.querySelector('.menu__link-item').addEventListener('click', function () {
    dropdawn.querySelector('.menu__item').classList.toggle('js--off');
    dropdawn.querySelector('.menu__item').classList.toggle('js--active--flex');
    dropdawn.querySelector('.menu__link-item').classList.toggle('menu__link-item--active');
    dropdawn.querySelector('.menu__icon-left').classList.toggle('menu__icon-left--active');
    dropdawn.querySelector('.menu__icon-right').classList.toggle('menu__icon-right--active');
  });

  dropdawn.querySelectorAll('.menu__item-style').forEach(function (e) {
    e.addEventListener('click', function () {
      dropdawn.querySelector('.menu__item').classList.remove('js--active--flex');
      dropdawn.querySelector('.menu__item').classList.add('js--off');
      dropdawn.querySelector('.menu__link-item').classList.remove('menu__link-item--active');
      dropdawn.querySelector('.menu__icon-left').classList.remove('menu__icon-left--active');
      dropdawn.querySelector('.menu__icon-right').classList.remove('menu__icon-right--active');
    });
  });
});

document.querySelectorAll(".menu__item").forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
});

//Поиск

document.querySelector('.search__btn').addEventListener('click', function (e) {
  document.querySelector('.search').classList.toggle('search--js');
});

document.querySelector('.search__close').addEventListener('click', function () {
  document.querySelector('.search').classList.toggle('search--js');
});


//Селектор галереи

document.querySelector('.select__wrapper-btn').addEventListener('click', function () {
  document.querySelector('.select__list').classList.toggle('js--active--flex');
  document.querySelector('.select__list').classList.toggle('js--off');
  document.querySelector('.select__icon').classList.toggle('select__icon--js--active');
  document.querySelector('.select__icon').classList.toggle('select__icon--js--off');
});

document.querySelectorAll('.select__list-item').forEach(function (element) {
  element.addEventListener('click', function () {
    document.querySelector('.select__top').innerText = this.innerText;
    document.querySelector('.select__list').classList.toggle('js--active--flex');
    document.querySelector('.select__list').classList.toggle('js--off');
    document.querySelector('.select__icon').classList.toggle('select__icon--js--active');
    document.querySelector('.select__icon').classList.toggle('select__icon--js--off');
  });
});

//Аккордион

document.querySelectorAll('.accordion__container').forEach(function (element) {
  element.querySelector('.accordion__panel').addEventListener('click', function () {
    element.closest('.accordion__container').classList.toggle('accordion__container-js');
    element.querySelector('.accordion__item').classList.toggle('accordion__item-js');
    element.querySelector('.acordion-title').classList.toggle('item-title--js');
    element.querySelector('.accordion__btn').classList.toggle('slider-btn--js');
  });
});

//Слайдер hero

const swiper = new Swiper('.swiper-hero', {
  direction: 'horizontal',
  loop: true,
  effect: "fade",

  autoplay: {
    delay: 3000,
  },
});

//Слайдер галереи

const swiper1 = new Swiper('.swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

//Слайдер news

const swiper2 = new Swiper('.swiper-3', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.news__btn-right',
    prevEl: '.news__btn-left',
    clickable: true,
  },

  pagination: {
    el: '.pagination',
    type: 'bullets',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

//Слайдер партнеры

const swiper3 = new Swiper('.swiper-2', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.slider__btn-right',
    prevEl: '.slider__btn-left',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33.97,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

//Маска

let selector = document.querySelector('input[type="tel"]');
let im = new Inputmask("+ 7 (999) 999-99-99");

im.mask(selector);

//Валидатор

const validate = new window.JustValidate('.form__input');
const validation = new JustValidate('.form__input', {
  errorFieldCssClass: 'input-box',
  errorFieldStyle: {
    border: '1px solid #D11616',
  },


})

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы&nbsp;не&nbsp;ввели имя',
      color: '#D11616',
    },


    {
      rule: 'customRegexp',
      value: /[а-яА-Яa-zA-Z]+/,
      errorMessage: 'Неверный&nbsp;формат',
    },

  ])

  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Вы&nbsp;не&nbsp;ввели телефон',
    },

  ])


//меню для таблетки

document.querySelectorAll('.header__container').forEach(function (element) {
  element.querySelector('.burger').addEventListener('click', function () {
    element.closest('.header__container').classList.toggle('open');
  });

  element.querySelectorAll('.nav__box').forEach(function (e) {
    e.closest('.nav__box').addEventListener('click', function () {
      element.closest('.header__container').classList.remove('open');
    });
  });

  element.querySelector('.user').addEventListener('click', function () {
    element.closest('.header__container').classList.remove('open');
  });
});

//popup

document.querySelectorAll('.swiper__box-item').forEach(function(element) {
  element.addEventListener('click', function() {
    document.querySelector('.popup').classList.remove('js--off');
    document.querySelector('.popup').classList.add('popup--js');
  });

  document.querySelector('.popup__close').addEventListener('click', function() {
    document.querySelector('.popup').classList.remove('popup--js');
    document.querySelector('.popup').classList.add('js--off');
  });
});






