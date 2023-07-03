window.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded swiper');
});

const swiper = new Swiper('.swiper', {
  loop: false,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 5,
  spaceBetween: 30,
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
