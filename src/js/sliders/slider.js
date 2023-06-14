
window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded swiper");
});

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
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
    loop: true,
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
    loop: true,
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
