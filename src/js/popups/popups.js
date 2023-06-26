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

const jsPopupWishlistFiltersButton = document.querySelector(
  ".js_popup_wishlist_filters_modal"
);
const jsPopupWishlistFiltersModal = document.querySelector(
  ".js_popup_wishlist_filters_button"
);

const jsPopupWishlistSortButton = document.querySelector(
  ".js_popup_wishlist_sort_modal"
);
const jsPopupWishlistSortModal = document.querySelector(
  ".js_popup_wishlist_sort_button"
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
  [jsPopupWishlistFiltersButton, jsPopupWishlistFiltersModal],
  [jsPopupWishlistSortButton, jsPopupWishlistSortModal],
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

const brandPopupCheckboxes = document.querySelectorAll(".checkbox_overlay")

if (brandPopupCheckboxes) {
  for (let i = 0; i < brandPopupCheckboxes.length; i++) {
    brandPopupCheckboxes[i].addEventListener("click", function (event) {
      const checkboxPpb = this.nextElementSibling;
      if (this.checked) {
        checkboxPpb.style.display = "block"
      } else {
        checkboxPpb.style.display = ""
      }
    })
  }
}