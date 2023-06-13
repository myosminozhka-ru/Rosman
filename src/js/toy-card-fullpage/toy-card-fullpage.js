let largeImg = document.querySelector('.largeImg');
let thumbs = document.querySelectorAll('.thumbs img');

thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function(event) {
        const currentChosen = document.querySelector(".thumbs .js-thumb-chosen");
        event.preventDefault();
        largeImg.src = thumb.getAttribute('src');
        if (currentChosen) {
            currentChosen.classList.remove("js-thumb-chosen");
        }
        thumb.classList.add("js-thumb-chosen")
    });
});

// нужна функция, которая будет отслеживать нажатие на js-mdb,
// после этого card-fp-hide либо добавляется, либо убирается класс card-fp-hidden-text,
// а у card-fp-trans появляется или удаляется card-fp-transparent-text,

let jsMdb = document.querySelector(".js-mdb")
let cardTextToHide = document.querySelector(".card-fp-hide")
let cartToTrans = document.querySelector(".card-fp-trans")