
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
    slidesPerView: 5,
    spaceBetween: 30,
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
    slidesPerView: 4,
    spaceBetween: 30,
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
    slidesPerView: 1,
    spaceBetween: 30,
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
        disableOnInteraction: true, // Включаем автоматическую прокрутку при взаимодействии пользователя
    },
   speed: 6000,
    slidesPerView: 6,
});
const runStrokeReverse = new Swiper('.swiper-container-reverse', {
    loop: false,
    autoplay: {
        delay: 20,
        disableOnInteraction: true, // Включаем автоматическую прокрутку при взаимодействии пользователя
        reverseDirection: true, // Прокрутка в обратном направлении
    },
    speed: 6000,
    slidesPerView: 6,
});
runStroke.on('touchStart', function() {
    runStroke.params.speed = 200; // Изменение скорости прокрутки при взаимодействии
});

// Обработчик события, когда пользователь перестает взаимодействовать
runStroke.on('touchEnd', function() {
    runStroke.autoplay.delay = 20;
    runStroke.autoplay.start();
    runStroke.params.speed = 7000; // Возврат к начальной скорости прокрутки
    console.log('end')
    runStroke.autoplay.start();
});