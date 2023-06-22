//libraries like jquery etc

// карточкам будет дан специальный класс - js_traceable_item,
// а элементам js-bg-changeable, которые будут менять фон,- js-hovered,
// событие будет генерироваться на заход в целом на карточку - mouseenter/mouseleave

// по поводу изменения картинки при нажатии на сердечко
// своя функция тут будет

const addToFavBtns = document.getElementsByClassName(
  "item_card_add_to_favourite"
);
for (let i = 0; i < addToFavBtns.length; i++) {
  addToFavBtns[i].addEventListener("click", function () {
    const button = this;
    button.classList.toggle("js_pressed");
  });
}

// функция для изменения фона рандомно для блока новостей и наград,

const traceableItems = document.getElementsByClassName("js_traceable_item");
for (let i = 0; i < traceableItems.length; i++) {
  traceableItems[i].addEventListener("mouseenter", function (event) {
    const colors = [
        // остались цвета, гармонирующие с попапом
      "#FFF145", // +
      "#FF8500", // +
      "#35CC66", // +
      "#4498FC", // +
      "#FF0053", // +
    ];
    function getRandomColor(colorArray) {
      if (colorArray.length === 0) {
        return "#ffffff";
      }
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      return colorArray[randomIndex];
    }
    this.style.backgroundColor = getRandomColor(colors);
  });
}

for (let i = 0; i < traceableItems.length; i++) {
  traceableItems[i].addEventListener("mouseleave", function (event) {
    this.style.backgroundColor = "white";
  });
}


// bordered_tags_item-smalled добавляем к bordered_tags_item,
// если ширина карточки 160рх,



window.addEventListener("resize", function () {
  const parentElements = document.querySelectorAll('.js_item_card');
  parentElements.forEach((parentElement) => {
    const parentWidth = parentElement.offsetWidth;
    const borderedItems = parentElement.querySelectorAll('.bordered_tags_item');
    if (borderedItems) {
      borderedItems.forEach((item) => {
        if (parentWidth <= 160) {
          item.classList.add('bordered_tags_item-smalled');
        } else {
          item.classList.remove('bordered_tags_item-smalled');
        }
      });
    }
  });
});

const popup = function Popup(el, triggerButton) {
  this.el = el;
  this.triggerButton = triggerButton;
  this.open = false;

  this.closeButton = this.el.querySelector(".ui-popup-close-button");

  this.toggleActiveClass = () => {
    this.el.classList.toggle("--active");
  };

  this.clickOutside = (e) => {
    if (e.target === this.el) {
      this.open = false;
      this.toggleActiveClass();
    }
  };

  this.triggerButton.addEventListener("click", () => {
    this.open = true;
    this.el.classList.add("--active");
  });

  this.closeButton.addEventListener("click", () => {
    this.open = false;
    this.el.classList.remove("--active");
  });
  document.addEventListener("click", this.clickOutside);
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && this.open) {
      this.open = false;
      this.el.classList.remove("--active");
    }
  });
};

const jsContactUsRuPopupButton = document.querySelector(
  ".js_contact_us_ru_popup_button"
);
const jsPopupContactUsRuModal = document.querySelector(
  ".js_popup_contact_us_ru_modal"
);
const jsContactUsEngPopupButton = document.querySelector(
  ".js_contact_us_eng_popup_button"
);
const jsPopupContactUsEngModal = document.querySelector(
  ".js_popup_contact_us_eng_modal"
);
const jsBlockchainRuPopupButton = document.querySelector(
  ".js_blockchain_ru_popup_button"
);
const jsPopupBlockchainRuModal = document.querySelector(
  ".js_popup_blockchain_ru_modal"
);
const jsBlockchainEngPopupButton = document.querySelector(
  ".js_blockchain_eng_popup_button"
);
const jsPopupBlockchainEngModal = document.querySelector(
  ".js_popup_blockchain_eng_modal"
);
const jsPopupBrandDescriptionButton = document.querySelector(
  ".js_popup_brand_description_button"
);
const jsPopupBrandDescriptionModal = document.querySelector(
  ".js_popup_brand_description_modal"
);
const jsPopupSurveyButton = document.querySelector(".js_popup_survey_button");
const jsPopupSurveyModal = document.querySelector(".js_popup_survey_modal");
const jsPopupCollaborationButton = document.querySelector(
  ".js_popup_collaboration_button"
);
const jsPopupCollaborationModal = document.querySelector(
  ".js_popup_collaboration_modal"
);
const jsPopupBrandChooseButton = document.querySelector(
  ".js_popup_brand_choose_button"
);
const jsPopupBrandChooseModal = document.querySelector(
  ".js_popup_brand_choose_modal"
);

const jsPopupBrandChooseListButton = document.querySelector(
  ".js_popup_brand_choose_list_button"
);
const jsPopupBrandChooseListModal = document.querySelector(
  ".js_popup_brand_choose_list_modal"
);

const jsPopupAllFiltersButton = document.querySelector(
  ".js_popup_all_filters_button"
);
const jsPopupAllFiltersModal = document.querySelector(
  ".js_popup_all_filters_modal"
);

const jsPopupBrandFiltersButton = document.querySelector(
  ".js_popup_brand_filters_modal"
);
const jsPopupBrandFiltersModal = document.querySelector(
  ".js_popup_brand_filters_button"
);

const popups = [
  [jsPopupContactUsRuModal, jsContactUsRuPopupButton],
  [jsPopupContactUsEngModal, jsContactUsEngPopupButton],
  [jsPopupBlockchainRuModal, jsBlockchainRuPopupButton],
  [jsPopupBlockchainEngModal, jsBlockchainEngPopupButton],
  [jsPopupBrandDescriptionModal, jsPopupBrandDescriptionButton],
  [jsPopupSurveyModal, jsPopupSurveyButton],
  [jsPopupCollaborationModal, jsPopupCollaborationButton],
  [jsPopupBrandChooseModal, jsPopupBrandChooseButton],
  [jsPopupBrandChooseListModal, jsPopupBrandChooseListButton],
  [jsPopupAllFiltersModal, jsPopupAllFiltersButton],
  [jsPopupBrandFiltersButton, jsPopupBrandFiltersModal],
];

for (let i = 0; i < popups.length; i++) {
  if (popups[i][0] && popups[i][1]) {
    new popup(popups[i][0], popups[i][1]);
  }
}

// функция для добавления класса через положение тогглера в true,
// повесить слушатель событий,
const dropdownTogglers = document.getElementsByClassName("dropdown_checkbox");

for (let i = 0; i < dropdownTogglers.length; i++) {
  dropdownTogglers[i].addEventListener("click", function () {
    const content = this.parentNode.parentNode.nextElementSibling;
    if (this.classList.contains("active-js")) {
      this.classList.remove("active-js");
    } else {
      this.classList.add("active-js");
    }
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      content.classList.add("active-js");
    }
  });
}

// функция для маски телефона
let phoneNumber = document.querySelector('#phone');

if (phoneNumber) {
  phoneNumber.onclick = function () {
    phoneNumber.value = "+";
  }
  var old = 0;
  phoneNumber.onkeydown = function () {
    var curLen = phoneNumber.value.length;
    if (curLen < old) {
      old--;
      return;
    }
    if (curLen === 2)
      phoneNumber.value = phoneNumber.value + "-";
    if (curLen === 6)
      phoneNumber.value = phoneNumber.value + "-";
    if (curLen === 10)
      phoneNumber.value = phoneNumber.value + "-";
    if (curLen === 13)
      phoneNumber.value = phoneNumber.value + "-";
    if (curLen > 15)
      phoneNumber.value = phoneNumber.value.substring(0, phoneNumber.value.length - 1);
    old++;
  }
}

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

window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded Scripts");
});
// дропдаун добавление класса active-js с отслеживанием клика вне блока
const moreButtons = document.getElementsByClassName("more-down-button");

for (let i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener("click", function() {
        const content = this.nextElementSibling;
        if (this.classList.contains("active-js")) {
            this.classList.remove("active-js")
        } else {
            this.classList.add("active-js");
        }
        if (content.classList.contains("active-js")) {
            content.classList.remove("active-js");
        } else {
            // content.style.display = "block";
            content.classList.add("active-js");
        }
    });
}
const navbar = document.querySelector('.navigation')
if (navbar) {
    navbar.addEventListener("click", function(event) {
        const contentNavBar = document.getElementsByClassName("navigation-content");
        const contentNavBarUl = document.querySelector(".nav-list");
        const activeP = document.querySelector("p.active-js");
        const p = contentNavBarUl.getElementsByTagName('p')
        if (activeP != null) {
            if (!activeP.contains(event.target)) {
                for (let i = 0; i < p.length; i++) {
                    if (p[i].classList.contains("active-js")) {
                        p[i].classList.remove("active-js")
                    }
                }
            }

        }
        for (let i = 0; i < contentNavBar.length; i++) {
            if (contentNavBar[i].id === event.target.classList.value) {
                contentNavBar[i].classList.add('active-js')
                contentNavBar[i].classList.remove('hide')
            } else {
                contentNavBar[i].classList.remove('active-js')
                contentNavBar[i].classList.add('hide')

            }
        }
        event.target.classList.add('active-js')
    });

}

function closeBar() {
    for (let i = 0; i < p.length; i++) {
        if (p[i].classList.contains("active-js")) {
            p[i].classList.remove("active-js")
        }
    }
    for (let i = 0; i < contentNavBar.length; i++) {
        contentNavBar[i].classList.remove('active-js')
        contentNavBar[i].classList.add('hide')
    }
}

document.addEventListener("click", function(event) {
    const block = document.querySelector(".more-down-button.out.active-js");
    const targetElement = event.target;
    if (block != null) {
        if (!block.contains(targetElement) && !targetElement.parentNode.classList.contains('more-down-content')) {
            for (let i = 0; i < moreButtons.length; i++) {
                if (moreButtons[i].classList.contains("active-js")) {
                    moreButtons[i].nextElementSibling.classList.remove("active-js")
                    moreButtons[i].classList.remove("active-js")
                }
            }
        }
    }
});

const buttons = document.getElementsByClassName("collapse-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const content = this.nextElementSibling;
        if (content.classList.contains("active")) {
            content.classList.remove("active");
        } else {
            // Закрытие других активных контентов
            const activeContent = document.querySelector(".collapse-content.active");

            if (activeContent) {
                activeContent.classList.remove("active");
            }
            content.classList.add("active");
        }
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            const activeBtn = document.querySelector(".collapse-button.active");
            if (activeBtn) {
                activeBtn.classList.remove("active");
            }
            this.classList.add("active")
        }
    });
}

const movingBlock = document.getElementById("moving-block");
if (movingBlock) {
    document.addEventListener("mousemove", function(event) {
        const windowWidth = window.innerWidth;
        const blockWidth = movingBlock.offsetWidth;

        // Вычисляем позицию блока на основе позиции мыши и ширины окна
        let blockX = event.clientX - blockWidth / 2;

        // Вычисляем наклон блока в зависимости от позиции мыши
        let tilt = ((blockX / windowWidth)) * 2;

        // Применяем наклон к блоку с помощью свойства transform
        movingBlock.style.transform = `rotate(${tilt}deg)`;

        // добавляем тень блоку в зависимости от расположения мышки
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let boxRect = movingBlock.getBoundingClientRect();
        let boxCenterX = boxRect.left + boxRect.width / 2;
        let boxCenterY = boxRect.top + boxRect.height / 10;
        let offsetX = -(mouseX - boxCenterX) * 0.1;
        let offsetY = -(mouseY - boxCenterY) * 0.1;
        movingBlock.style.boxShadow = offsetX + 'px ' + offsetY + 'px 10px 5px rgba(0, 0, 0, 0.2)';
    })
}


function toggleSearch() {
    let headerNav = document.querySelector('.header-nav')
    let searchInput = document.querySelector('.search-input')
    let headerbtn = document.querySelector('.header-btn')
    if (headerNav.classList.contains("hide")) {
        headerNav.classList.remove("hide");
        headerbtn.classList.remove("hide-mobile");
    } else {
        headerNav.classList.add("hide");
        headerbtn.classList.add("hide-mobile");
    }
    if (searchInput.classList.contains("hide")) {
        searchInput.classList.remove("hide");
    } else {
        searchInput.classList.add("hide");
    }

}

function changeLang(lang) {
    let eng = document.querySelector('.eng-lang')
    let rus = document.querySelector('.rus-lang')
    if (lang === 'eng') {
        rus.classList.remove("active-js");
        eng.classList.add("active-js");
    } else {
        rus.classList.add("active-js");
        eng.classList.remove("active-js");
    }
}

const yellowMovingBlock = document.getElementById("yellow-moving-block");
if (yellowMovingBlock) {
    document.addEventListener("mousemove", function(event) {
        const windowWidth = window.innerWidth;
        const blockWidth = yellowMovingBlock.offsetWidth;

        // Вычисляем позицию блока на основе позиции мыши и ширины окна
        let blockX = event.clientX - blockWidth / 2;

        // Вычисляем наклон блока в зависимости от позиции мыши
        let tilt = -((blockX / windowWidth)) * 6;

        // Применяем наклон к блоку с помощью свойства transform
        yellowMovingBlock.style.transform = `rotate(${tilt}deg)`;

    })
}


let isMoving = false;

document.addEventListener("mousemove", function(event) {
    let parent = document.getElementById("parent");
    if (parent) {
        let follower = document.getElementById("follower");
        let parentRect = parent.getBoundingClientRect();
        let x = event.clientX - parentRect.left;
        let newX = parentRect.width - x - follower.offsetWidth; // Вычисляем новое положение в противоположной стороне
        newX = Math.max(0, Math.min(newX, parentRect.width - follower.offsetWidth));


        if (!isMoving) {
            isMoving = true;
            follower.style.transform = "translateX(" + newX + "px)"; // Используем translateX для перемещения блока


            setTimeout(function() {
                isMoving = false;
            }, 500); // Задержка в 200 миллисекунд
        }
    }

});

function scrollContent(direction) {
    let container = document.getElementById('elephant-container');
    let content = document.getElementById('elephant-slider');

    if (direction === 'left') {
        container.scrollLeft -= 400; // Измените значение 100 на желаемое расстояние для перемещения влево
    } else if (direction === 'right') {
        container.scrollLeft += 400; // Измените значение 100 на желаемое расстояние для перемещения вправо
    }
}

const elephantDownButtons = document.getElementsByClassName("elephant-more-down-button");
const elephantUpButtons = document.getElementsByClassName("elephant-more-up-button");

for (let i = 0; i < elephantDownButtons.length; i++) {
    elephantDownButtons[i].addEventListener("click", function() {
        const content = this.nextElementSibling;
        if (this.classList.contains("active-js")) {
            this.classList.remove("active-js")
        } else {
            this.classList.add("active-js");
        }
        if (content.classList.contains("active-js")) {
            content.classList.remove("active-js");
        } else {
            // content.style.display = "block";
            content.classList.add("active-js");
        }
    });
}

const filterOpen = document.getElementById('open-filter')
const filterClose = document.getElementById('close-filter')
const filter = document.getElementById('filter')
if (filterOpen !== null) {
    filterOpen.addEventListener("click", function() {
        filter.classList.add('open-filter')
    });
}
if (filterClose !== null) {
    filterClose.addEventListener("click", function() {
        filter.classList.remove('open-filter')
    });
}

for (let i = 0; i < elephantUpButtons.length; i++) {
    elephantUpButtons[i].addEventListener("click", function() {
        const content = this.previousElementSibling;
        if (this.classList.contains("active-js")) {
            this.classList.remove("active-js")
        } else {
            this.classList.add("active-js");
        }
        if (content.classList.contains("active-js")) {
            content.classList.remove("active-js");
        } else {
            // content.style.display = "block";
            content.classList.add("active-js");
        }
    });
}
const buttonsPag = document.querySelector(".nav-btns");
const nextButton = document.querySelector(".js-rm-pag-nav-page-more-bnt")
const prevButton = document.querySelector(".js-rm-pag-nav-page-back-bnt")


if (buttonsPag) {
  buttonsPag.addEventListener("click", (event) => {
    const currentChosen = buttonsPag.querySelector(".js-chosen-nav-btn");
    const target = event.target.closest(".js-rm-pag-nav-page-btn");

    if (!target || target === currentChosen) return;

    if (currentChosen) {
      currentChosen.classList.remove("js-chosen-nav-btn");
    }
    target.classList.add("js-chosen-nav-btn");
    return target.innerText;
  });
}
// добавил для переключения страницы вперёд и назад
if (nextButton) {
  nextButton.addEventListener("click", (event) => {
      const currentChosen = buttonsPag.querySelector(".js-chosen-nav-btn");
      if (currentChosen) {
        currentChosen.classList.remove("js-chosen-nav-btn");
      }
      if (currentChosen.nextElementSibling) {
        currentChosen.nextElementSibling.classList.add("js-chosen-nav-btn")

      }
    }
  )
}

if (prevButton) {
  prevButton.addEventListener("click", (event) => {
      const currentChosen = buttonsPag.querySelector(".js-chosen-nav-btn");
      if (currentChosen) {
        currentChosen.classList.remove("js-chosen-nav-btn");
      }
      if (currentChosen.previousElementSibling) {
        currentChosen.previousElementSibling.classList.add("js-chosen-nav-btn")

      }
    }
  )
}