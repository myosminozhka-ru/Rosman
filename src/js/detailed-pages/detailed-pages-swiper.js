const swiperDetailedPage = new Swiper('.swiper-detailed-page', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    0: {
      slidesPerView: 1.25,
      spaceBetween: 8,
    },
  },
});

const swiperDetailedPageVideo = new Swiper('.swiper-detailed-page-video', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.2,
    },
  },
});

const swiperImidzhPageEmps = new Swiper('.swiper-imidzh-page', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.25,
      spaceBetween: 24,
    },
  },
});

const swiperAllVac = new Swiper('.swiper-image-gallery-allvac', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 8,
  breakpoints: {
    950: {
      slidesPerView: 4,
    },
    500: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1.75,
      spaceBetween: 16,
    },
  },
});

const swiperCatalogProjects = new Swiper('.swiper-catalog-projects', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
  },
});
