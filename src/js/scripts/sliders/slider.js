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
          '	&nbsp; &nbsp;' +
          '<span class="text-slider-fraction body-m"> из </span> ' +
          '	&nbsp; &nbsp;' +
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

  const swiper = new Swiper('.persons-slider', {
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
  const swiperBook = new Swiper('.swiper-book', {
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      320: {
        slidesPerView: 2.1,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 4.2,
        spaceBetween: 60,
      },
    },
  });

  const swiperOneBook = new Swiper('.swiper-one-book', {
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      320: {
        slidesPerView: 0.9,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
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

  const runStroke = new Swiper('.running-stroke', {
    loop: false,
    autoplay: {
      delay: 10,
      disableOnInteraction: false,
    },
    speed: 3000,
    slidesPerView: 6,
  });

  const runStrokeReverse = new Swiper('.swiper-container-reverse', {
    loop: false,
    autoplay: {
      delay: 10,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    speed: 3000,
    slidesPerView: 6,
  });

  const runStrokeSwiperContainers = document.querySelectorAll('.swiper-container')
  const runStrokeSwiperContainersReverse = document.querySelectorAll('.swiper-container-reverse')

  const holdParntersSliderAnimation = function(el) {
    el.autoplay.stop()
  }

  const playPartnerSliderAnimation = function(el) {
    el.autoplay.start()
  }
  
  for(let i = 0; i < runStrokeSwiperContainers.length; i++) {
    runStrokeSwiperContainers[i].addEventListener('mouseenter', function(e) {
      holdParntersSliderAnimation(runStroke[i])
    })
  
    runStrokeSwiperContainers[i].addEventListener('mouseleave', function() {
      playPartnerSliderAnimation(runStroke[i])
      runStrokeSwiperContainers[i].removeEventListener('mouseenter', holdParntersSliderAnimation)
    })
  }

  for(let i = 0; i < runStrokeSwiperContainersReverse.length; i++) {
    runStrokeSwiperContainersReverse[i].addEventListener('mouseenter', function(e) {
      holdParntersSliderAnimation(runStrokeReverse[i])
    })
  
    runStrokeSwiperContainersReverse[i].addEventListener('mouseleave', function() {
      playPartnerSliderAnimation(runStrokeReverse[i])
      runStrokeSwiperContainersReverse[i].removeEventListener('mouseenter', playPartnerSliderAnimation)
    })
  } 

});

// слайдер для истории слона, слайдер, но не свипер,
function scrollContent(direction) {
  let container = document.getElementById('elephant-container');
  let content = document.getElementById('elephant-slider');

  if (direction === 'left') {
    container.scrollLeft -= 400; // Измените значение 100 на желаемое расстояние для перемещения влево
  } else if (direction === 'right') {
    container.scrollLeft += 400; // Измените значение 100 на желаемое расстояние для перемещения вправо
  }
}

// открытие блоков, когда прокручено до середины экрана
function addActiveClassToAutoOpenElements() {
  const autoOpenElements = document.querySelectorAll('.auto-open');

  if (autoOpenElements.length > 0) {
    autoOpenElements.forEach((element) => {
      element.classList.add('active-js');
    });
  }
}

function handleScroll() {
  const elephantHistory = document.querySelector('.elephant-history');

  if (elephantHistory) {
    const {top, bottom} = elephantHistory.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (top < windowHeight / 4 && bottom > windowHeight) {
      addActiveClassToAutoOpenElements();

      window.removeEventListener('scroll', handleScroll);
    }
  }
}

window.addEventListener('scroll', handleScroll);
