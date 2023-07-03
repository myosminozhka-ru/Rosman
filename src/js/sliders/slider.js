window.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded swiper');
});

const rem = (16 / 100) * 65.2;

new Swiper('.js-toys-articles', {
  loop: false,
  navigation: {
    nextEl: '.toys-articles-swiper-button-next',
    prevEl: '.toys-articles-swiper-button-prev',
  },

  slidesPerView: 1.2,
  autoHeight: true,
  spaceBetween: rem * 1.6,
  breakpoints: {
    639: {
      slidesPerView: 2,
    },
    868: {
      slidesPerView: 3,
    },
  },
});

new Swiper('.js-toys-brands', {
  loop: false,
  navigation: {
    nextEl: '.toys-brands-swiper-button-next',
    prevEl: '.toys-brands-swiper-button-prev',
  },

  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: rem * 1.6,
  breakpoints: {
    639: {
      slidesPerView: 2,
    },
    868: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.js-toys-event-tape', {
  loop: false,
  navigation: {
    nextEl: '.toys-event-tape-swiper-button-next',
    prevEl: '.toys-event-tape-swiper-button-prev',
  },

  slidesPerView: 2,
  autoHeight: true,
  spaceBetween: rem * 1.6,
  breakpoints: {
    // 639: {
    //   slidesPerView: 3,
    // },
    868: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.js-toys-bestsellers', {
  loop: false,
  navigation: {
    nextEl: '.bestsellers-swiper-button-next',
    prevEl: '.bestsellers-swiper-button-prev',
  },
  pagination: {
    el: '.bestsellers-swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="text-slider-fraction body-m ' +
        currentClass +
        '"></span>' +
        ' ' +
        '	&nbsp;' +
        '<span class="text-slider-fraction body-m"> из </span> ' +
        '	&nbsp;' +
        '<span class="text-slider-fraction body-m ' +
        totalClass +
        '"></span>'
      );
    },
  },
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: rem * 2.4 * 2,
  breakpoints: {
    900: {
      spaceBetween: rem * 1.2 * 2,
    },
  },
});

new Swiper('.js-toys-banner', {
  loop: false,
  navigation: {
    nextEl: '.toys-swiper-button-next',
    prevEl: '.toys-swiper-button-prev',
  },
  pagination: {
    el: '.toys-swiper-pagination',
  },
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: rem * 2.4 * 2,
  breakpoints: {
    900: {
      spaceBetween: rem * 1.2 * 2,
    },
  },
});

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 'auto',
  spaceBetween: 8,
  breakpoints: {
    // настройки для разных разрешений
    900: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
const swiperImage = new Swiper('.swiper-image', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 'auto',
  spaceBetween: 8,
  breakpoints: {
    // настройки для разных разрешений
    900: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
// init Swiper:
const swiperText = new Swiper('.swiper-text', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 0.9,
  spaceBetween: 10,
  breakpoints: {
    // настройки для разных разрешений
    900: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
  },
});
// const swiperElephant = new Swiper('.elephant-swiper', {
//     // Optional parameters
//     loop: true,
//     // Navigation arrows
//     navigation: {
//         nextEl: '.button-next',
//         prevEl: '.button-prev',
//     },
// });
const runStroke = new Swiper('.swiper-container', {
  loop: false,
  autoplay: {
    delay: 20,
    disableOnInteraction: false, // Включаем автоматическую прокрутку при взаимодействии пользователя
  },
  speed: 6000,
  slidesPerView: 6,
});
const runStrokeReverse = new Swiper('.swiper-container-reverse', {
  loop: false,
  autoplay: {
    delay: 20,
    disableOnInteraction: false, // Включаем автоматическую прокрутку при взаимодействии пользователя
    reverseDirection: true, // Прокрутка в обратном направлении
  },
  speed: 6000,
  slidesPerView: 6,
});
