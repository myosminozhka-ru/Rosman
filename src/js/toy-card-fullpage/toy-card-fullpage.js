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

jsMdb.onclick = function (event) {
    cardTextToHide.classList.toggle("card-fp-hidden-text")
    cartToTrans.classList.toggle("card-fp-transparent-text")
}

// для таба надо добавлять класс active-js, чтобы он подчеркивался
const navButtons = document.querySelector(".navigation");

navButtons.addEventListener("click", (event) => {
    const currentChosen = navButtons.querySelector(".active-js");
    const target = event.target.closest(".card-fullpage-tab");

    if (!target || target === currentChosen) return;

    if (currentChosen) {
        currentChosen.classList.remove("active-js");
    }
    target.classList.add("active-js");
});

//