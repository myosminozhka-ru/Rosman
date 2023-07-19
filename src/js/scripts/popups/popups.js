const popupMethods = ['close', 'open'];

window.popup = function (popupName, method) {
  if (!popupMethods.includes(method)) {
    console.error('не корректный метод попапа' + ' - ' + `${method}`);
    return;
  }

  const popup = document.getElementById(popupName);
  if (!popup) {
    console.error('не корректное имя попапа' + ' - ' + `${popupName}`);
    return;
  }

  if (method === popupMethods[0]) {
    popup.classList.remove('--active');
  } else {
    popup.classList.add('--active');
  }
};

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('--active');
  }

  if (e.target.classList.contains('ui-popup-close-button')) {
    e.target.closest('.modal').classList.remove('--active');
  }

  if (e.target.classList.contains('ui-popup-close')) {
    e.target.closest('.modal').classList.remove('--active');
  }
});

document
  .getElementById('js-all-brand')
  ?.addEventListener('click', function (e) {
    window.popup('js_popup_brand_choose_list_modal', 'open');
  });

document
  .querySelector('.js_popup_all_filters_button')
  ?.addEventListener('click', function () {
    window.popup('js_popup_all_filters_modal', 'open');
  });

// функция для добавления класса через положение тогглера в true,
// повесить слушатель событий,
const dropdownTogglers = document.getElementsByClassName('dropdown_checkbox');

for (let i = 0; i < dropdownTogglers.length; i++) {
  dropdownTogglers[i].addEventListener('click', function () {
    const content = this.parentNode.parentNode.nextElementSibling;
    if (this.classList.contains('active-js')) {
      this.classList.remove('active-js');
    } else {
      this.classList.add('active-js');
    }
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
      content.classList.add('active-js');
    }
  });
}

// функция для маски телефона
let phoneNumber = document.querySelector('#phone');

if (phoneNumber) {
  phoneNumber.onclick = function () {
    phoneNumber.value = '+';
  };
  var old = 0;
  phoneNumber.onkeydown = function () {
    var curLen = phoneNumber.value.length;
    if (curLen < old) {
      old--;
      return;
    }
    if (curLen === 2) phoneNumber.value = phoneNumber.value + '-';
    if (curLen === 6) phoneNumber.value = phoneNumber.value + '-';
    if (curLen === 10) phoneNumber.value = phoneNumber.value + '-';
    if (curLen === 13) phoneNumber.value = phoneNumber.value + '-';
    if (curLen > 15)
      phoneNumber.value = phoneNumber.value.substring(
        0,
        phoneNumber.value.length - 1
      );
    old++;
  };
}

const brandPopupCheckboxes = document.querySelectorAll('.checkbox_overlay');

if (brandPopupCheckboxes) {
  for (let i = 0; i < brandPopupCheckboxes.length; i++) {
    brandPopupCheckboxes[i].addEventListener('click', function (event) {
      const checkboxPpb = this.nextElementSibling;
      if (this.checked) {
        checkboxPpb.style.display = 'block';
      } else {
        checkboxPpb.style.display = '';
      }
    });
  }
}

// код с фильтрацией и сортировкой
const allFiltersPopup = document.querySelector('.pup_brand_input');
if (allFiltersPopup) {
  allFiltersPopup.addEventListener('input', function (event) {
    let searchValue = allFiltersPopup.value.toLowerCase().trim();
    searchValue = searchValue.replace(/\W/g, '');
    const imageContainers = document.querySelectorAll('.image_container');

    imageContainers.forEach((container) => {
      const brandName = container.dataset.brandName.toLowerCase();
      if (brandName.includes(searchValue)) {
        container.classList.remove('!hidden');
      } else {
        container.classList.add('!hidden');
      }
    });

    if (searchValue.length < 3) {
      imageContainers.forEach((container) => {
        container.classList.remove('!hidden');
      });
    }
  });
}

const radioButtons = document.querySelectorAll('[name="sort-by"]');
if (radioButtons) {
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', function (event) {
      const sortBy = event.target.value;
      const imageContainers = document.querySelectorAll('.image_container');
      const containerArray = Array.from(imageContainers);
      const button = document.querySelector('.more-down-button.with-padds');

      switch (sortBy) {
        case 'date':
          containerArray.sort((a, b) => {
            return a.dataset.brandCreationDate - b.dataset.brandCreationDate;
          });
          button.innerHTML = 'Сначала новые<span></span>';
          break;
        case 'date_reverse':
          containerArray.sort((a, b) => {
            return b.dataset.brandCreationDate - a.dataset.brandCreationDate;
          });
          button.innerHTML = 'Сначала старые<span></span>';
          break;
        case 'name':
          containerArray.sort((a, b) => {
            const nameA = a.dataset.brandName.toLowerCase();
            const nameB = b.dataset.brandName.toLowerCase();
            return nameA.localeCompare(nameB);
          });
          button.innerHTML = 'А-Я<span></span>';
          break;
        case 'name_reverse':
          containerArray.sort((a, b) => {
            const nameA = a.dataset.brandName.toLowerCase();
            const nameB = b.dataset.brandName.toLowerCase();
            return nameB.localeCompare(nameA);
          });
          button.innerHTML = 'Я-А<span></span>';
          break;
      }

      const containerParent = document.querySelector(
        '.popup_brand_choose_brands'
      );
      containerArray.forEach((container) => {
        containerParent.appendChild(container);
      });
    });
  });
}

function parseDate(dateString) {
  const parts = dateString.split('.');
  return new Date(parts[2], parts[1] - 1, parts[0]);
}
