
window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded swiper");
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
    autoHeight:true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {// настройки для разных разрешений
        900: {
            slidesPerView: 5,
            spaceBetween: 30,

        },
    }
});
const swiperImage = new Swiper('.swiper-image', {
    // Optional parameters
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    autoHeight:true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {// настройки для разных разрешений
        900: {
            slidesPerView: 5,
            spaceBetween: 30,

        },
    }
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
    breakpoints: {// настройки для разных разрешений
        900: {
            slidesPerView: 1,
            spaceBetween: 60,
        },
    }
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