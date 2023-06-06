//libraries like jquery etc
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
let testInput = document.querySelector(".test");
console.log(testInput.checked)
let downContent = testInput.parentNode.parentNode.nextElementSibling;
if (!testInput.checked === true) {
  console.log("rwer")
  downContent.classList.add("active-js");
}

console.log(testInput, "1");
console.log(testInput.parentNode, "2");
console.log(testInput.parentNode.parentNode, "3");
console.log(testInput.parentNode.parentNode.nextElementSibling, "4");


window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});
// дропдаун добавление класса active-js с отслеживанием клика вне блока
const moreButtons = document.getElementsByClassName("more-down-button");
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD

=======
>>>>>>> main
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