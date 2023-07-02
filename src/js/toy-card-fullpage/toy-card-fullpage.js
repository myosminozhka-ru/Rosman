let largeImg = document.querySelector('.largeImg');
let thumbs = document.querySelectorAll('.thumbs img');

thumbs.forEach(function (thumb) {
  thumb.addEventListener('click', function (event) {
    const currentChosen = document.querySelector('.thumbs .js-thumb-chosen');
    event.preventDefault();
    largeImg.src = thumb.getAttribute('src');
    if (currentChosen) {
      currentChosen.classList.remove('js-thumb-chosen');
    }
    thumb.classList.add('js-thumb-chosen');
  });
});

// нужна функция, которая будет отслеживать нажатие на js-mdb,
// после этого card-fp-hide либо добавляется, либо убирается класс card-fp-hidden-item,
// а у card-fp-trans появляется или удаляется card-fp-transparent-text,

let jsMdb = document.querySelector('.js-mdb');
let cardTextToHide = document.querySelector('.card-fp-hide');
let cartToTrans = document.querySelector('.card-fp-trans');

if (jsMdb) {
  jsMdb.onclick = function (event) {
    if (cardTextToHide) {
      cardTextToHide.classList.toggle('js-card-fp-hidden-item');
    }
    if (cartToTrans) {
      cartToTrans.classList.toggle('card-fp-transparent-text');
    }
  };
}

// для таба надо добавлять класс active-js, чтобы он подчеркивался
const navButtons = document.querySelector('.navigation');

if (navButtons) {
  const descriptionComponent = document.querySelector('.card-fp-description');
  const characteristicsComponent = document.querySelector(
    '.card-fp-characteristics'
  );
  const instructionComponent = document.querySelector('.card-fp-instruction');

  navButtons.addEventListener('click', (event) => {
    event.preventDefault();
    const currentChosen = navButtons.querySelector('.active-js');
    const target = event.target.closest('.card-fullpage-tab');

    if (!target || target === currentChosen) return;

    if (currentChosen) {
      currentChosen.classList.remove('active-js');
    }
    target.classList.add('active-js');

    // Скрыть все компоненты
    descriptionComponent.classList.add('hidden');
    characteristicsComponent.classList.add('hidden');
    instructionComponent.classList.add('hidden');

    // Показать выбранный компонент
    if (target.classList.contains('card-fp-tab-desc')) {
      descriptionComponent.classList.remove('hidden');
    } else if (target.classList.contains('card-fp-tab-char')) {
      characteristicsComponent.classList.remove('hidden');
    } else if (target.classList.contains('card-fp-tab-instr')) {
      instructionComponent.classList.remove('hidden');
    }
  });
}

// для описания будет такая кнопка - js-mdb-desc
// а для текста описания будет card-fp-desc-hidden-block
// <div class="card-fullpage-desc-block card-fp-desc-hidden-block"></div>
let jsMdbDescButton = document.querySelector('.js-mdb-desc-button');
let jsDescriptionWrapper = document.querySelector(
  '.js-card-fullpage-desc-description'
);
let jsItemsToHideDesc = document.querySelectorAll('.js-item-to-hide-desc');

if (jsMdbDescButton) {
  jsMdbDescButton.onclick = function (event) {
    jsItemsToHideDesc.forEach((item) => {
      item.classList.toggle('js-card-fp-hidden-item');
    });
    const isExpanded = jsMdbDescButton.innerText.includes('Свернуть описание');

    if (isExpanded) {
      jsDescriptionWrapper.classList.remove('gapped');
      jsMdbDescButton.innerHTML = 'Развернуть описание<span></span>';
    } else {
      jsDescriptionWrapper.classList.add('gapped');
      jsMdbDescButton.innerHTML = 'Свернуть описание<span></span>';
    }

    if (isExpanded) {
      jsMdbDescButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };
}

let jsMdbAuthorButton = document.querySelector('.js-mdb-author-button');
if (jsMdbAuthorButton) {
  jsMdbAuthorButton.onclick = function (event) {
    let prevElemSib = jsMdbAuthorButton.previousElementSibling;
    prevElemSib.classList.toggle('hidden');
    const isExpanded =
      jsMdbAuthorButton.innerText.includes('Свернуть описание');

    if (isExpanded) {
      jsMdbAuthorButton.innerHTML = 'Развернуть описание<span></span>';
    } else {
      jsMdbAuthorButton.innerHTML = 'Свернуть описание<span></span>';
    }
  };
}

// убрать текст у видео при полной ширине экрана
// const videoItems = document.querySelectorAll('.card_video_item');
//
// // Перебираем каждый элемент
// if (videoItems) {
//   videoItems.forEach((item) => {
//     if (item.classList.contains('full-width')) {
//       const titleElement = item.querySelector('.card_video_title');
//       titleElement.style.display = 'none';
//     }
//   });
// }

// еще один слайдер
const imageContainer = document.querySelector('.card-fullpage-image-container');
const dots = document.querySelectorAll('.card-fullpage-dot');

let currentImageIndex = 0;

function setActiveImage(index) {
  imageContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentImageIndex = index;
    setActiveImage(currentImageIndex);
  });
});

// для описания книги, чтобы там было многоточие
const jsBookToggleButton = document.querySelector('.js-book-toggle-button');
const jsBookTextContainer = document.querySelector('.card-fp-desc-text-top');
if (jsBookToggleButton && jsBookTextContainer) {
  jsBookToggleButton.addEventListener('click', function () {
    jsBookTextContainer.classList.toggle('line-clamp-none');
  });
}

// swiper fullpage
const swiperImage2 = new Swiper('.swiper-image-2', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 4,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});

// Инициализация превью слайдера картинок товара
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container-3', {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 5, // показывать по 3 превью
  spaceBetween: 6, // расстояние между слайдами
  navigation: {
    // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev', // кнопка Prev
  },
  clickable: true,
  freeMode: true, // при перетаскивании превью ведет себя как при скролле
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
    },
    768: {
      // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
    },
    1300: {
      spaceBetween: 9.5,
    },
    1000: {
      spaceBetween: 7.5,
    },
  },
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container-4', {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 14, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: {
    // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev', // кнопка Prev
  },
  pagination: {
    //pagination(dots)
    el: '.swiper-pagination',
  },
  clickable: true,
  grabCursor: true, // менять иконку курсора
  thumbs: {
    // указываем на превью слайдер
    swiper: sliderThumbs, // указываем имя превью слайдера
  },
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
      mousewheel: false,
      pagination: false,
    },
    768: {
      // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
      pagination: false,
      mousewheel: true,
    },
  },
});

const sliderImagesMob = new Swiper('.swiper-container-5', {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 14, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: {
    // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev', // кнопка Prev
  },
  pagination: {
    //pagination(dots)
    el: '.swiper-pagination',
  },
  clickable: true,
  grabCursor: true, // менять иконку курсора
  thumbs: {
    // указываем на превью слайдер
    swiper: sliderThumbs, // указываем имя превью слайдера
  },
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
      mousewheel: false,
      pagination: {
        el: '.swiper-pagination-2',
      },
      slidesPerView: 1,
    },
    768: {
      // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
      pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
      },
      mousewheel: true,
    },
  },
});

// слайдер - смотреть фрагмент книги
const swiperBookFragment = new Swiper('.swiper-book-fragment', {
  loop: false,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: 16,
});

const sliderMain = document.querySelector('.slider-main');
const sliderPages = document.querySelectorAll('.slider-page');

if (sliderPages && sliderMain) {
  sliderPages.forEach(function (sliderPage) {
    sliderPage.textContent = sliderMain.value;
  });
  const max = sliderMain.max;
  const step = 100 / (max - 1);
  window.addEventListener('load', function () {
    const sliderValue = sliderMain.value;
    sliderPages.forEach(function (sliderPage) {
      sliderPage.textContent = sliderValue;
    });

    const slideNumber = parseInt(sliderMain.value) - 1;
    const percentage = (slideNumber * step).toFixed(2);
    const color = `linear-gradient(90deg, black ${percentage}%, #E3E3E2 ${percentage}%)`;
    sliderMain.style.background = color;
  });

  sliderMain.addEventListener('input', function () {
    const currentValue = parseInt(this.value);
    if (currentValue > swiperBookFragment.slides.length) {
      this.value = swiperBookFragment.slides.length;
    }
    const sliderValue = sliderMain.value;
    sliderPages.forEach(function (sliderPage) {
      sliderPage.textContent = sliderValue;
    });

    const slideNumber = parseInt(this.value) - 1;
    if (slideNumber <= swiperBookFragment.slides.length) {
      swiperBookFragment.slideTo(slideNumber);
    }

    const percentage = (slideNumber * step).toFixed(2);
    const color = `linear-gradient(90deg, black ${percentage}%, #E3E3E2 ${percentage}%)`;
    sliderMain.style.background = color;
  });
}

// тут кнопки для переключения слайдов,
// события перестают генерироваться, если значение инпута больше количества слайдов
const nextButtonFragment = document.querySelector('.bg-next-arrow');
const prevButtonFragment = document.querySelector('.bg-prev-arrow');
if (nextButtonFragment) {
  nextButtonFragment.onclick = function () {
    const nextValue = parseInt(sliderMain.value) + 1;
    if (nextValue <= swiperBookFragment.slides.length) {
      sliderMain.value = nextValue;
      const event = new Event('input');
      sliderMain.dispatchEvent(event);
      swiperBookFragment.update(); // Обновить количество слайдов в swiperBookFragment
    }
  };
}

if (prevButtonFragment) {
  prevButtonFragment.onclick = function () {
    const prevValue = parseInt(sliderMain.value) - 1;
    if (prevValue >= 1) {
      sliderMain.value = prevValue;
      const event = new Event('input');
      sliderMain.dispatchEvent(event);
      swiperBookFragment.update(); // Обновить количество слайдов в swiperBookFragment
    }
  };
}
