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
console.log(traceableItems);
for (let i = 0; i < traceableItems.length; i++) {
  traceableItems[i].addEventListener("mouseenter", function (event) {
    const colors = [
      "#06083D",
      "#311166",
      "#1F1871",
      "#1F1871",
      "#0070EA",
      "#4498FC",
      "#4B65CD",
      "#808080",
      "#AF74E9",
      "#33C15B",
      "#FFF145",
      "#D9D9D9",
      "#F5F5F5",
      // "#ffffff",
      "#E3E3E2",
      "#FF0053",
      "#FF8500",
      "#F46300",
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

console.log("privet");
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
const jsPopupAllFiltersButton = document.querySelector(
  ".js_popup_all_filters_button"
);
const jsPopupAllFiltersModal = document.querySelector(
  ".js_popup_all_filters_modal"
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
  [jsPopupAllFiltersModal, jsPopupAllFiltersButton],
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
    console.log(this);
    console.log(content);
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
let inp = document.querySelector('#phone');

inp.onclick = function() {
  inp.value = "+";
}

var old = 0;

inp.onkeydown = function() {
  var curLen = inp.value.length;

  if (curLen < old){
    old--;
    return;
  }

  if (curLen == 2)
    inp.value = inp.value + "-";

  if (curLen == 6)
    inp.value = inp.value + "-";

  if (curLen == 10)
    inp.value = inp.value + "-";

  if (curLen == 13)
    inp.value = inp.value + "-";

  if (curLen > 15)
    inp.value = inp.value.substring(0, inp.value.length - 1);

  old++;
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
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      content.classList.add("active-js");
    }
  });
}

document.addEventListener("click", function(event) {
  const block = document.querySelector(".more-down-button.out.active-js");
  const targetElement = event.target;
  if (block != null) {
    if (!block.contains(targetElement)) {
    for (let i = 0; i < moreButtons.length; i++) {
      if ( moreButtons[i].classList.contains("active-js")) {
        moreButtons[i].nextElementSibling.style.display = "none";
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
    if ( this.classList.contains("active")) {
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