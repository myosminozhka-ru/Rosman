let largeImg = document.querySelector('.largeImg');
let thumbs = document.querySelectorAll('.thumbs img');

thumbs.forEach(function (thumb) {
  thumb.addEventListener('click', function (event) {
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
    if (cardTextToHide) {
      cardTextToHide.classList.toggle("js-card-fp-hidden-item")
    }
    if (cartToTrans) {
      cartToTrans.classList.toggle("card-fp-transparent-text")
    }
  }
}

// для таба надо добавлять класс active-js, чтобы он подчеркивался
const navButtons = document.querySelector(".navigation");

if (navButtons) {
  const descriptionComponent = document.querySelector(".card-fp-description");
  const characteristicsComponent = document.querySelector(".card-fp-characteristics");
  const instructionComponent = document.querySelector(".card-fp-instruction");

  navButtons.addEventListener("click", (event) => {
    event.preventDefault()
    const currentChosen = navButtons.querySelector(".active-js");
    const target = event.target.closest(".card-fullpage-tab");

    if (!target || target === currentChosen) return;

    if (currentChosen) {
      currentChosen.classList.remove("active-js");
    }
    target.classList.add("active-js");

    // Скрыть все компоненты
    descriptionComponent.classList.add("hidden");
    characteristicsComponent.classList.add("hidden");
    instructionComponent.classList.add("hidden");

    // Показать выбранный компонент
    if (target.classList.contains("card-fp-tab-desc")) {
      descriptionComponent.classList.remove("hidden");
    } else if (target.classList.contains("card-fp-tab-char")) {
      characteristicsComponent.classList.remove("hidden");
    } else if (target.classList.contains("card-fp-tab-instr")) {
      instructionComponent.classList.remove("hidden");
    }
  });
}


// для описания будет такая кнопка - js-mdb-desc
// а для текста описания будет card-fp-desc-hidden-block
// <div class="card-fullpage-desc-block card-fp-desc-hidden-block"></div>
let jsMdbDescButton = document.querySelector(".js-mdb-desc-button");
let jsDescriptionWrapper = document.querySelector(".js-card-fullpage-desc-description");
let jsItemsToHideDesc = document.querySelectorAll(".js-item-to-hide-desc");

if (jsMdbDescButton) {

  jsMdbDescButton.onclick = function (event) {
    jsItemsToHideDesc.forEach((item) => {
      item.classList.toggle("js-card-fp-hidden-item");
    });
    const isExpanded = jsMdbDescButton.innerText.includes("Свернуть описание");

    if (isExpanded) {
      jsDescriptionWrapper.classList.remove("gapped");
      jsMdbDescButton.innerHTML = "Развернуть описание<span></span>";
    } else {
      jsDescriptionWrapper.classList.add("gapped");
      jsMdbDescButton.innerHTML = "Свернуть описание<span></span>";
    }

    if (isExpanded) {
      jsMdbDescButton.scrollIntoView({behavior: 'smooth', block: 'end'});
    }

  };
}

let jsMdbAuthorButton = document.querySelector(".js-mdb-author-button")
if (jsMdbAuthorButton) {
  jsMdbAuthorButton.onclick = function (event) {
    let prevElemSib = jsMdbAuthorButton.previousElementSibling;
    prevElemSib.classList.toggle("hidden");
    const isExpanded = jsMdbAuthorButton.innerText.includes("Свернуть описание");

    if (isExpanded) {
      jsMdbAuthorButton.innerHTML = "Развернуть описание<span></span>";
    } else {
      jsMdbAuthorButton.innerHTML = "Свернуть описание<span></span>";
    }
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

// еще один слайдер
const imageContainer = document.querySelector('.card-fullpage-image-container');
const dots = document.querySelectorAll('.card-fullpage-dot');

let currentImageIndex = 0;

function setActiveImage(index) {
  imageContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentImageIndex = index;
    setActiveImage(currentImageIndex);
  });
});


// для описания книги, чтобы там было многоточие
const jsBookToggleButton = document.querySelector(".js-book-toggle-button");
const jsBookTextContainer = document.querySelector(".js-book-text-container");
if (jsBookToggleButton && jsBookTextContainer) {
  jsBookToggleButton.addEventListener('click', function () {
    jsBookTextContainer.classList.toggle('h-full');
  });
}