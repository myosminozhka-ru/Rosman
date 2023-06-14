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
// после этого card-fp-hide либо добавляется, либо убирается класс card-fp-hidden-item,
// а у card-fp-trans появляется или удаляется card-fp-transparent-text,

let jsMdb = document.querySelector(".js-mdb")
let cardTextToHide = document.querySelector(".card-fp-hide")
let cartToTrans = document.querySelector(".card-fp-trans")

if (jsMdb) {
    jsMdb.onclick = function (event) {
        cardTextToHide.classList.toggle("js-card-fp-hidden-item")
        cartToTrans.classList.toggle("card-fp-transparent-text")
    }
}

// для таба надо добавлять класс active-js, чтобы он подчеркивался
const navButtons = document.querySelector(".navigation");

if (navButtons) {
    navButtons.addEventListener("click", (event) => {
        const currentChosen = navButtons.querySelector(".active-js");
        const target = event.target.closest(".card-fullpage-tab");

        if (!target || target === currentChosen) return;

        if (currentChosen) {
            currentChosen.classList.remove("active-js");
        }
        target.classList.add("active-js");
    });
}

// для описания будет такая кнопка - js-mdb-desc
// а для текста описания будет card-fp-desc-hidden-block
// <div class="card-fullpage-desc-block card-fp-desc-hidden-block"></div>
let jsMdbDesc = document.querySelector(".js-mdb-desc");
let jsDescriptionWrapper = document.querySelector(".js-card-fullpage-desc-description");
let jsItemsToHideDesc = document.querySelectorAll(".js-item-to-hide-desc");
console.log(jsItemsToHideDesc);
if (jsMdbDesc) {
    jsMdbDesc.onclick = function (event) {
        jsItemsToHideDesc.forEach( item => {
            item.classList.toggle("js-card-fp-hidden-item")

        });
        jsMdbDesc.innerHTML = jsMdbDesc.innerText ===
        "Свернуть описание<span></span>" ? "Развернуть описание<span></span>" :
            "Свернуть описание<span></span>";

        jsDescriptionWrapper.classList.toggle("gapped");
    }
}

// убрать текст у видео при полной ширине экрана
const videoItems = document.querySelectorAll('.card_video_item');

// Перебираем каждый элемент
videoItems.forEach((item) => {
    if (item.classList.contains('full-width')) {
        const titleElement = item.querySelector('.card_video_title');
        titleElement.style.display = 'none';
    }
});