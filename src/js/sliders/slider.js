window.addEventListener('DOMContentLoaded', () => {
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

  const swiper = new Swiper('.swiper', {
    loop: false,
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

  const personsSLider = new Swiper('.persons-slider', {
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 1.2,
    spaceBetween: 24,
    // breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //   },
    //   480: {
    //     slidesPerView: 3,
    //   },
    //   640: {
    //     slidesPerView: 4,
    //   },
    // },
  });

  const swiperImage = new Swiper('.swiper-image', {
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      900: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  const swiperText = new Swiper('.swiper-text', {
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 0.9,
    spaceBetween: 10,
    breakpoints: {
      900: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
    },
  });

  const runStroke = new Swiper('.swiper-container', {
    loop: false,
    autoplay: {
      delay: 20,
      disableOnInteraction: false,
    },
    speed: 6000,
    slidesPerView: 6,
  });

  const runStrokeReverse = new Swiper('.swiper-container-reverse', {
    loop: false,
    autoplay: {
      delay: 20,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    speed: 6000,
    slidesPerView: 6,
  });
});

// слайдер для страницы с вакансиями,
