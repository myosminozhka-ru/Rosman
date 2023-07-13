//libraries like jquery etc


// карточкам будет дан специальный класс - js_traceable_item,
// а элементам js-bg-changeable, которые будут менять фон,- js-hovered,
// событие будет генерироваться на заход в целом на карточку - mouseenter/mouseleave

// по поводу изменения картинки при нажатии на сердечко
// своя функция тут будет

const addToFavBtns = document.getElementsByClassName(
  'item_card_add_to_favourite'
);
for (let i = 0; i < addToFavBtns.length; i++) {
  addToFavBtns[i].addEventListener('click', function () {
    const button = this;
    button.classList.toggle('js_pressed');
  });
}

// функция для изменения фона рандомно для блока новостей и наград,

const traceableItems = document.getElementsByClassName('js_traceable_item');
for (let i = 0; i < traceableItems.length; i++) {
  traceableItems[i].addEventListener('mouseenter', function (event) {
    const colors = [
      // остались цвета, гармонирующие с попапом
      '#FFF145', // +
      '#FF8500', // +
      '#35CC66', // +
      '#4498FC', // +
      '#FF0053', // +
    ];

    function getRandomColor(colorArray) {
      if (colorArray.length === 0) {
        return '#ffffff';
      }
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      return colorArray[randomIndex];
    }

    this.style.backgroundColor = getRandomColor(colors);
  });
}

for (let i = 0; i < traceableItems.length; i++) {
  traceableItems[i].addEventListener('mouseleave', function (event) {
    if (this.classList.contains('bgc-bgc')) {
      this.style.backgroundColor = '#F5F5F5';
    } else {
      this.style.backgroundColor = 'white';
    }
  });
}

// bordered_tags_item-smalled добавляем к bordered_tags_item,
// если ширина карточки 160рх,

window.addEventListener('resize', function () {
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

const swiperDetailedPage = new Swiper('.swiper-detailed-page', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    0: {
      slidesPerView: 1.25,
      spaceBetween: 8,
    },
  },
});

const swiperDetailedPageVideo = new Swiper('.swiper-detailed-page-video', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.2,
    },
  },
});

const swiperImidzhPageEmps = new Swiper('.swiper-imidzh-page', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.25,
      spaceBetween: 24,
    },
  },
});
const swiperCatalogProjects = new Swiper('.swiper-catalog-projects', {
  // Optional parameters
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
  },
});

/** Helper function to generate a Google Maps directions URL */
function generateDirectionsURL(origin, destination) {
  const googleMapsUrlBase = 'https://www.google.com/maps/dir/?';
  const searchParams = new URLSearchParams('api=1');
  searchParams.append('origin', origin);
  const destinationParam = [];
  // Add title to destinationParam except in cases where Quick Builder set
  // the title to the first line of the address
  if (destination.title !== destination.address1) {
    destinationParam.push(destination.title);
  }
  destinationParam.push(destination.address1, destination.address2);
  searchParams.append('destination', destinationParam.join(','));
  return googleMapsUrlBase + searchParams.toString();
}

/**
 * Defines an instance of the Locator+ solution, to be instantiated
 * when the Maps library is loaded.
 */
function LocatorPlus(configuration) {
  const locator = this;

  locator.locations = configuration.locations || [];
  locator.capabilities = configuration.capabilities || {};

  const mapEl = document.getElementById('gmp-map');
  const panelEl = document.getElementById('locations-panel');
  locator.panelListEl = document.getElementById('locations-panel-list');
  const sectionNameEl = document.getElementById(
    'location-results-section-name'
  );
  const resultsContainerEl = document.getElementById('location-results-list');

  const itemsTemplate = Handlebars.compile(
    document.getElementById('locator-result-items-tmpl').innerHTML
  );

  locator.searchLocation = null;
  locator.searchLocationMarker = null;
  locator.selectedLocationIdx = null;
  locator.userCountry = null;

  // Initialize the map -------------------------------------------------------
  locator.map = new google.maps.Map(mapEl, configuration.mapOptions);

  // Store selection.
  const selectResultItem = function (locationIdx, panToMarker, scrollToResult) {
    locator.selectedLocationIdx = locationIdx;
    for (let locationElem of resultsContainerEl.children) {
      locationElem.classList.remove('selected');
      if (getResultIndex(locationElem) === locator.selectedLocationIdx) {
        locationElem.classList.add('selected');
        if (scrollToResult) {
          panelEl.scrollTop = locationElem.offsetTop;
        }
      }
    }
    if (panToMarker && locationIdx != null) {
      locator.map.panTo(locator.locations[locationIdx].coords);
    }
  };

  // Create a marker for each location.
  const markers = locator.locations.map(function (location, index) {
    const marker = new google.maps.Marker({
      position: location.coords,
      map: locator.map,
      title: location.title,
    });
    marker.addListener('click', function () {
      selectResultItem(index, false, true);
    });
    return marker;
  });

  // Fit map to marker bounds.
  locator.updateBounds = function () {
    const bounds = new google.maps.LatLngBounds();
    if (locator.searchLocationMarker) {
      bounds.extend(locator.searchLocationMarker.getPosition());
    }
    for (let i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }
    locator.map.fitBounds(bounds);
  };
  if (locator.locations.length) {
    locator.updateBounds();
  }

  // Get the distance of a store location to the user's location,
  // used in sorting the list.
  const getLocationDistance = function (location) {
    if (!locator.searchLocation) return null;

    // Fall back to straight-line distance.
    return google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(location.coords),
      locator.searchLocation.location
    );
  };

  // Render the results list --------------------------------------------------
  const getResultIndex = function (elem) {
    return parseInt(elem.getAttribute('data-location-index'));
  };

  locator.renderResultsList = function () {
    let locations = locator.locations.slice();
    for (let i = 0; i < locations.length; i++) {
      locations[i].index = i;
    }
    if (locator.searchLocation) {
      sectionNameEl.textContent =
        'Nearest locations (' + locations.length + ')';
      locations.sort(function (a, b) {
        return getLocationDistance(a) - getLocationDistance(b);
      });
    } else {
      sectionNameEl.textContent = `All locations (${locations.length})`;
    }
    const resultItemContext = { locations: locations };
    resultsContainerEl.innerHTML = itemsTemplate(resultItemContext);
    for (let item of resultsContainerEl.children) {
      const resultIndex = getResultIndex(item);
      if (resultIndex === locator.selectedLocationIdx) {
        item.classList.add('selected');
      }

      const resultSelectionHandler = function () {
        if (resultIndex !== locator.selectedLocationIdx) {
          selectResultItem(resultIndex, true, false);
        }
      };

      // Clicking anywhere on the item selects this location.
      // Additionally, create a button element to make this behavior
      // accessible under tab navigation.
      item.addEventListener('click', resultSelectionHandler);
      item
        .querySelector('.select-location')
        .addEventListener('click', function (e) {
          resultSelectionHandler();
          e.stopPropagation();
        });

      // Clicking the directions button will open Google Maps directions in a
      // new tab
      const origin =
        locator.searchLocation != null ? locator.searchLocation.location : '';
      const destination = locator.locations[resultIndex];
      const googleMapsUrl = generateDirectionsURL(origin, destination);
      item
        .querySelector('.directions-button')
        .setAttribute('href', googleMapsUrl);
    }
  };

  // Optional capability initialization --------------------------------------
  initializeSearchInput(locator);

  // Initial render of results -----------------------------------------------
  locator.renderResultsList();
}

/** When the search input capability is enabled, initialize it. */
function initializeSearchInput(locator) {
  const geocodeCache = new Map();
  const geocoder = new google.maps.Geocoder();

  const searchInputEl = document.getElementById('location-search-input');
  const searchButtonEl = document.getElementById('location-search-button');

  const updateSearchLocation = function (address, location) {
    if (locator.searchLocationMarker) {
      locator.searchLocationMarker.setMap(null);
    }
    if (!location) {
      locator.searchLocation = null;
      return;
    }
    locator.searchLocation = { address: address, location: location };
    locator.searchLocationMarker = new google.maps.Marker({
      position: location,
      map: locator.map,
      title: 'My location',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: '#3367D6',
        fillOpacity: 0.5,
        strokeOpacity: 0,
      },
    });

    // Update the locator's idea of the user's country, used for units. Use
    // `formatted_address` instead of the more structured `address_components`
    // to avoid an additional billed call.
    const addressParts = address.split(' ');
    locator.userCountry = addressParts[addressParts.length - 1];

    // Update map bounds to include the new location marker.
    locator.updateBounds();

    // Update the result list so we can sort it by proximity.
    locator.renderResultsList();
  };

  const geocodeSearch = function (query) {
    if (!query) {
      return;
    }

    const handleResult = function (geocodeResult) {
      searchInputEl.value = geocodeResult.formatted_address;
      updateSearchLocation(
        geocodeResult.formatted_address,
        geocodeResult.geometry.location
      );
    };

    if (geocodeCache.has(query)) {
      handleResult(geocodeCache.get(query));
      return;
    }
    const request = { address: query, bounds: locator.map.getBounds() };
    geocoder.geocode(request, function (results, status) {
      if (status === 'OK') {
        if (results.length > 0) {
          const result = results[0];
          geocodeCache.set(query, result);
          handleResult(result);
        }
      }
    });
  };

  // Set up geocoding on the search input.
  searchButtonEl.addEventListener('click', function () {
    geocodeSearch(searchInputEl.value.trim());
  });

  // Add in an event listener for the Enter key.
  searchInputEl.addEventListener('keypress', function (evt) {
    if (evt.key === 'Enter') {
      geocodeSearch(searchInputEl.value);
    }
  });
}

const popup = function Popup(el, triggerButton) {
  this.el = el;
  this.triggerButton = triggerButton;
  this.open = false;

  this.closeButton = this.el.querySelector('.ui-popup-close-button');

  this.toggleActiveClass = () => {
    this.el.classList.toggle('--active');
  };

  this.clickOutside = (e) => {
    if (e.target === this.el) {
      this.open = false;
      this.toggleActiveClass();
    }
  };

  this.triggerButton.addEventListener('click', () => {
    this.open = true;
    this.el.classList.add('--active');
  });

  this.closeButton.addEventListener('click', () => {
    this.open = false;
    this.el.classList.remove('--active');
  });
  document.addEventListener('click', this.clickOutside);
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && this.open) {
      this.open = false;
      this.el.classList.remove('--active');
    }
  });
};

const jsContactUsRuPopupButton = document.querySelector(
  '.js_contact_us_ru_popup_button'
);
const jsPopupContactUsRuModal = document.querySelector(
  '.js_popup_contact_us_ru_modal'
);
const jsContactUsEngPopupButton = document.querySelector(
  '.js_contact_us_eng_popup_button'
);
const jsPopupContactUsEngModal = document.querySelector(
  '.js_popup_contact_us_eng_modal'
);
const jsBlockchainRuPopupButton = document.querySelector(
  '.js_blockchain_ru_popup_button'
);
const jsPopupBlockchainRuModal = document.querySelector(
  '.js_popup_blockchain_ru_modal'
);
const jsBlockchainEngPopupButton = document.querySelector(
  '.js_blockchain_eng_popup_button'
);
const jsPopupBlockchainEngModal = document.querySelector(
  '.js_popup_blockchain_eng_modal'
);
const jsPopupBrandDescriptionButton = document.querySelector(
  '.js_popup_brand_description_button'
);
const jsPopupBrandDescriptionModal = document.querySelector(
  '.js_popup_brand_description_modal'
);
const jsPopupSurveyButton = document.querySelector('.js_popup_survey_button');
const jsPopupSurveyModal = document.querySelector('.js_popup_survey_modal');
const jsPopupCollaborationButton = document.querySelector(
  '.js_popup_collaboration_button'
);
const jsPopupCollaborationModal = document.querySelector(
  '.js_popup_collaboration_modal'
);
const jsPopupBrandChooseButton = document.querySelector(
  '.js_popup_brand_choose_button'
);
const jsPopupBrandChooseModal = document.querySelector(
  '.js_popup_brand_choose_modal'
);

const jsPopupBrandChooseListButton = document.querySelector(
  '.js_popup_brand_choose_list_button'
);
const jsPopupBrandChooseListModal = document.querySelector(
  '.js_popup_brand_choose_list_modal'
);

const jsPopupAllFiltersButton = document.querySelector(
  '.js_popup_all_filters_button'
);
const jsPopupAllFiltersModal = document.querySelector(
  '.js_popup_all_filters_modal'
);

const jsPopupBrandFiltersButton = document.querySelector(
  '.js_popup_brand_filters_modal'
);
const jsPopupBrandFiltersModal = document.querySelector(
  '.js_popup_brand_filters_button'
);

const jsPopupWishlistFiltersButton = document.querySelector(
  '.js_popup_wishlist_filters_modal'
);
const jsPopupWishlistFiltersModal = document.querySelector(
  '.js_popup_wishlist_filters_button'
);

const jsPopupWishlistSortButton = document.querySelector(
  '.js_popup_wishlist_sort_modal'
);
const jsPopupWishlistSortModal = document.querySelector(
  '.js_popup_wishlist_sort_button'
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

window.addEventListener('DOMContentLoaded', () => {
  const rem = (16 / 100) * 65.2;

  new Swiper('.js-toys-articles', {
    loop: false,
    navigation: {
      nextEl: '.toys-articles-swiper-button-next',
      prevEl: '.toys-articles-swiper-button-prev',
    },

    slidesPerView: 1.2,
    autoHeight: true,
    spaceBetween: rem * 1.6,
    breakpoints: {
      639: {
        slidesPerView: 2,
      },
      868: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper('.js-toys-brands', {
    loop: false,
    navigation: {
      nextEl: '.toys-brands-swiper-button-next',
      prevEl: '.toys-brands-swiper-button-prev',
    },

    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: rem * 1.6,
    breakpoints: {
      639: {
        slidesPerView: 2,
      },
      868: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  new Swiper('.js-toys-event-tape', {
    loop: false,
    navigation: {
      nextEl: '.toys-event-tape-swiper-button-next',
      prevEl: '.toys-event-tape-swiper-button-prev',
    },

    slidesPerView: 2,
    autoHeight: true,
    spaceBetween: rem * 1.6,
    breakpoints: {
      // 639: {
      //   slidesPerView: 3,
      // },
      868: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  new Swiper('.js-toys-bestsellers', {
    loop: false,
    navigation: {
      nextEl: '.bestsellers-swiper-button-next',
      prevEl: '.bestsellers-swiper-button-prev',
    },
    pagination: {
      el: '.bestsellers-swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="text-slider-fraction body-m ' +
          currentClass +
          '"></span>' +
          ' ' +
          '	&nbsp;' +
          '<span class="text-slider-fraction body-m"> из </span> ' +
          '	&nbsp;' +
          '<span class="text-slider-fraction body-m ' +
          totalClass +
          '"></span>'
        );
      },
    },
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: rem * 2.4 * 2,
    breakpoints: {
      900: {
        spaceBetween: rem * 1.2 * 2,
      },
    },
  });

  new Swiper('.js-toys-banner', {
    loop: false,
    navigation: {
      nextEl: '.toys-swiper-button-next',
      prevEl: '.toys-swiper-button-prev',
    },
    pagination: {
      el: '.toys-swiper-pagination',
    },
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: rem * 2.4 * 2,
    breakpoints: {
      900: {
        spaceBetween: rem * 1.2 * 2,
      },
    },
  });

  const swiper = new Swiper('.swiper', {
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      // настройки для разных разрешений
      900: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  const personsSLider = new Swiper('.persons-slider', {
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 1.2,
    spaceBetween: 24,
    // breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //   },
    //   480: {
    //     slidesPerView: 3,
    //   },
    //   640: {
    //     slidesPerView: 4,
    //   },
    // },
  });

  const swiperImage = new Swiper('.swiper-image', {
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      900: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  const swiperText = new Swiper('.swiper-text', {
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoHeight: true,
    slidesPerView: 0.9,
    spaceBetween: 10,
    breakpoints: {
      900: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
    },
  });

  const runStroke = new Swiper('.swiper-container', {
    loop: false,
    autoplay: {
      delay: 20,
      disableOnInteraction: false,
    },
    speed: 6000,
    slidesPerView: 6,
  });

  const runStrokeReverse = new Swiper('.swiper-container-reverse', {
    loop: false,
    autoplay: {
      delay: 20,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    speed: 6000,
    slidesPerView: 6,
  });
});

// скрипт для слежения за вводом в поля инпутов
const inputFields = document.querySelectorAll('.js-traceable-item-vacancy');
const remainingItemsContainer = document.querySelector('.js-remaining-items');
const remainingItems = document.querySelectorAll('.js-remaining-item');
let remainToFill = document.querySelector('.vac-0');

inputFields.forEach((input) => {
  input.addEventListener('input', function () {
    const inputClass = input.classList[1];
    const correspondingSpan = document.querySelector(
      `.js-remaining-item.${inputClass}`
    );

    if (input.value.trim() !== '') {
      correspondingSpan.style.display = 'none';
    } else {
      correspondingSpan.style.display = 'inline';
    }
    let allFieldsFilled = true;

    inputFields.forEach(function (field) {
      if (field.value.trim() === '') {
        allFieldsFilled = false;
      }
    });

    if (allFieldsFilled) {
      remainingItemsContainer.style.display = 'none';
    } else {
      remainingItemsContainer.style.display = 'block';
    }
  });
});

// добавляем класс сокрытия для ширины меньше 600 пикселей

function toggleVisibility() {
  const blocks = document.querySelectorAll('.js-vac-item');
  const screenWidth = window.innerWidth;

  blocks.forEach((block) => {
    if (screenWidth <= 500) {
      block.classList.add('js-card-fp-hidden-item');
    } else {
      block.classList.remove('js-card-fp-hidden-item');
    }
  });
}

window.addEventListener('resize', function handleResize() {
  toggleVisibility();
});

window.addEventListener('load', function () {
  toggleVisibility();
});

let largeImg = document.querySelector('.largeImg');
let thumbs = document.querySelectorAll('.thumbs img');

thumbs.forEach(function (thumb) {
  thumb.addEventListener('click', function (event) {
    const currentChosen = document.querySelector('.thumbs .js-thumb-chosen');
    event.preventDefault();
    largeImg.src = thumb.getAttribute('src');
    if (currentChosen) {
      currentChosen.classList.remove('js-thumb-chosen');
    }
    thumb.classList.add('js-thumb-chosen');
  });
});

// нужна функция, которая будет отслеживать нажатие на js-mdb,
// после этого card-fp-hide либо добавляется, либо убирается класс card-fp-hidden-item,
// а у card-fp-trans появляется или удаляется card-fp-transparent-text,

let jsMdb = document.querySelector('.js-mdb');
let cardTextToHide = document.querySelector('.card-fp-hide');
let cartToTrans = document.querySelector('.card-fp-trans');

if (jsMdb) {
  jsMdb.onclick = function (event) {
    if (cardTextToHide) {
      cardTextToHide.classList.toggle('js-card-fp-hidden-item');
    }
    if (cartToTrans) {
      cartToTrans.classList.toggle('card-fp-transparent-text');
    }
  };
}

// для таба надо добавлять класс active-js, чтобы он подчеркивался
const navButtons = document.querySelector('.navigation');

if (navButtons) {
  const descriptionComponent = document.querySelector('.card-fp-description');
  const characteristicsComponent = document.querySelector(
    '.card-fp-characteristics'
  );
  const instructionComponent = document.querySelector('.card-fp-instruction');

  navButtons.addEventListener('click', (event) => {
    event.preventDefault();
    const currentChosen = navButtons.querySelector('.active-js');
    const target = event.target.closest('.card-fullpage-tab');

    if (!target || target === currentChosen) return;

    if (currentChosen) {
      currentChosen.classList.remove('active-js');
    }
    target.classList.add('active-js');

    // Скрыть все компоненты
    descriptionComponent.classList.add('hidden');
    characteristicsComponent.classList.add('hidden');
    instructionComponent.classList.add('hidden');

    // Показать выбранный компонент
    if (target.classList.contains('card-fp-tab-desc')) {
      descriptionComponent.classList.remove('hidden');
    } else if (target.classList.contains('card-fp-tab-char')) {
      characteristicsComponent.classList.remove('hidden');
    } else if (target.classList.contains('card-fp-tab-instr')) {
      instructionComponent.classList.remove('hidden');
    }
  });
}

// для описания будет такая кнопка - js-mdb-desc
// а для текста описания будет card-fp-desc-hidden-block
// <div class="card-fullpage-desc-block card-fp-desc-hidden-block"></div>
let jsMdbDescButton = document.querySelector('.js-mdb-desc-button');
let jsDescriptionWrapper = document.querySelector(
  '.js-card-fullpage-desc-description'
);
let jsItemsToHideDesc = document.querySelectorAll('.js-item-to-hide-desc');

if (jsMdbDescButton) {
  jsMdbDescButton.onclick = function (event) {
    jsItemsToHideDesc.forEach((item) => {
      item.classList.toggle('js-card-fp-hidden-item');
    });
    const isExpanded = jsMdbDescButton.innerText.includes('Свернуть описание');

    if (isExpanded) {
      jsDescriptionWrapper.classList.remove('gapped');
      jsMdbDescButton.innerHTML = 'Развернуть описание<span></span>';
    } else {
      jsDescriptionWrapper.classList.add('gapped');
      jsMdbDescButton.innerHTML = 'Свернуть описание<span></span>';
    }

    if (isExpanded) {
      jsMdbDescButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };
}

let jsMdbAuthorButton = document.querySelector('.js-mdb-author-button');
if (jsMdbAuthorButton) {
  jsMdbAuthorButton.onclick = function (event) {
    let prevElemSib = jsMdbAuthorButton.previousElementSibling;
    prevElemSib.classList.toggle('hidden');
    const isExpanded =
      jsMdbAuthorButton.innerText.includes('Свернуть описание');

    if (isExpanded) {
      jsMdbAuthorButton.innerHTML = 'Развернуть описание<span></span>';
    } else {
      jsMdbAuthorButton.innerHTML = 'Свернуть описание<span></span>';
    }
  };
}

// убрать текст у видео при полной ширине экрана
// const videoItems = document.querySelectorAll('.card_video_item');
//
// // Перебираем каждый элемент
// if (videoItems) {
//   videoItems.forEach((item) => {
//     if (item.classList.contains('full-width')) {
//       const titleElement = item.querySelector('.card_video_title');
//       titleElement.style.display = 'none';
//     }
//   });
// }

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
const jsBookToggleButton = document.querySelectorAll('.js-book-toggle-button');
const jsBookTextContainer = document.querySelectorAll('.card-fp-desc-text-top');
if (jsBookToggleButton && jsBookTextContainer) {
  for (let i = 0; i < jsBookTextContainer.length; i++) {
    jsBookToggleButton[i].addEventListener('click', function () {
      jsBookTextContainer[i].classList.toggle('line-clamp-none');
    });
  }
}

// swiper fullpage
const swiperImage2 = new Swiper('.swiper-image-2', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  slidesPerView: 4,
  spaceBetween: 16,
  breakpoints: {
    950: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});

// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container-3', {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 5, // показывать по 3 превью
  spaceBetween: 14, // расстояние между слайдами
  navigation: {
    // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev', // кнопка Prev
  },
  freeMode: true, // при перетаскивании превью ведет себя как при скролле
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
    },
    768: {
      // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
    },
  },
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container-3', {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 14, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: {
    // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev', // кнопка Prev
  },
  grabCursor: true, // менять иконку курсора
  thumbs: {
    // указываем на превью слайдер
    swiper: sliderThumbs, // указываем имя превью слайдера
  },
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
    },
    768: {
      // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
    },
  },
});

// слайдер - смотреть фрагмент книги
const swiperBookFragment = new Swiper('.swiper-book-fragment', {
  loop: false,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoHeight: true,
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: 16,
});

const sliderMain = document.querySelector('.slider-main');
const sliderPages = document.querySelectorAll('.slider-page');

if (sliderPages && sliderMain) {
  sliderPages.forEach(function (sliderPage) {
    sliderPage.textContent = sliderMain.value;
  });
  const max = sliderMain.max;
  const step = 100 / (max - 1);
  window.addEventListener('mousemove', function () {
    const sliderValue = sliderMain.value;
    sliderPages.forEach(function (sliderPage) {
      sliderPage.textContent = sliderValue;
    });

    const slideNumber = parseInt(sliderMain.value) - 1;
    const percentage = (slideNumber * step).toFixed(2);
    const color = `linear-gradient(90deg, black ${percentage}%, #E3E3E2 ${percentage}%)`;
    sliderMain.style.background = color;
  });

  sliderMain.addEventListener('input', function () {
    const currentValue = parseInt(this.value);
    if (currentValue > swiperBookFragment.slides.length) {
      this.value = swiperBookFragment.slides.length;
    }
    const sliderValue = sliderMain.value;
    sliderPages.forEach(function (sliderPage) {
      sliderPage.textContent = sliderValue;
    });

    const slideNumber = parseInt(this.value) - 1;
    if (slideNumber <= swiperBookFragment.slides.length) {
      swiperBookFragment.slideTo(slideNumber);
    }

    const percentage = (slideNumber * step).toFixed(2);
    const color = `linear-gradient(90deg, black ${percentage}%, #E3E3E2 ${percentage}%)`;
    sliderMain.style.background = color;
  });
}

// тут кнопки для переключения слайдов,
// события перестают генерироваться, если значение инпута больше количества слайдов
const nextButtonFragment = document.querySelector('.bg-next-arrow');
const prevButtonFragment = document.querySelector('.bg-prev-arrow');
if (nextButtonFragment) {
  nextButtonFragment.onclick = function () {
    const nextValue = parseInt(sliderMain.value) + 1;
    if (nextValue <= swiperBookFragment.slides.length) {
      sliderMain.value = nextValue;
      const event = new Event('input');
      sliderMain.dispatchEvent(event);
      swiperBookFragment.update(); // Обновить количество слайдов в swiperBookFragment
    }
  };
}

if (prevButtonFragment) {
  prevButtonFragment.onclick = function () {
    const prevValue = parseInt(sliderMain.value) - 1;
    if (prevValue >= 1) {
      sliderMain.value = prevValue;
      const event = new Event('input');
      sliderMain.dispatchEvent(event);
      swiperBookFragment.update(); // Обновить количество слайдов в swiperBookFragment
    }
  };
}

function toggleClassOnResize() {
  const element = document.querySelector('.js-traceable-planet');
  if (!element) {
    return;
  }

  let currentClass = 'z-0';

  function updateClass() {
    currentClass = currentClass === 'z-0' ? 'z-1' : 'z-0';
    element.classList.remove('z-0', 'z-1');
    element.classList.add(currentClass);
  }

  window.addEventListener('resize', updateClass);
}

toggleClassOnResize();

window.addEventListener('DOMContentLoaded', () => {
  // дропдаун добавление класса active-js с отслеживанием клика вне блока
  const moreButtons = document.getElementsByClassName('more-down-button');

  for (let i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener('click', function () {
      const content = this.nextElementSibling;
      if (this.classList.contains('active-js')) {
        this.classList.remove('active-js');
      } else {
        this.classList.add('active-js');
      }
      if (content.classList.contains('active-js')) {
        content.classList.remove('active-js');
      } else {
        // content.style.display = "block";
        content.classList.add('active-js');
      }
    });
  }
  const navbar = document.querySelector('.navigation');
  if (navbar) {
    navbar.addEventListener('click', function (event) {
      const contentNavBar =
        document.getElementsByClassName('navigation-content');
      const contentNavBarUl = document.querySelector('.nav-list');
      const activeP = document.querySelector('p.active-js');
      const p = contentNavBarUl.getElementsByTagName('p');
      if (activeP != null) {
        if (!activeP.contains(event.target)) {
          for (let i = 0; i < p.length; i++) {
            if (p[i].classList.contains('active-js')) {
              p[i].classList.remove('active-js');
            }
          }
        }
      }
      for (let i = 0; i < contentNavBar.length; i++) {
        if (contentNavBar[i].id === event.target.classList.value) {
          contentNavBar[i].classList.add('active-js');
          contentNavBar[i].classList.remove('hide');
        } else {
          contentNavBar[i].classList.remove('active-js');
          contentNavBar[i].classList.add('hide');
        }
      }
      event.target.classList.add('active-js');
    });
  }

  document.addEventListener('click', function (event) {
    const block = document.querySelector('.more-down-button.out.active-js');
    const targetElement = event.target;
    if (block != null) {
      if (
        !block.contains(targetElement) &&
        !targetElement.parentNode.classList.contains('more-down-content')
      ) {
        for (let i = 0; i < moreButtons.length; i++) {
          if (moreButtons[i].classList.contains('active-js')) {
            moreButtons[i].nextElementSibling.classList.remove('active-js');
            moreButtons[i].classList.remove('active-js');
          }
        }
      }
    }
  });

  const buttons = document.getElementsByClassName('collapse-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      const content = this.nextElementSibling;
      if (content.classList.contains('active')) {
        content.classList.remove('active');
      } else {
        // Закрытие других активных контентов
        const activeContent = document.querySelector(
          '.collapse-content.active'
        );

        if (activeContent) {
          activeContent.classList.remove('active');
        }
        content.classList.add('active');
      }
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        const activeBtn = document.querySelector('.collapse-button.active');
        if (activeBtn) {
          activeBtn.classList.remove('active');
        }
        this.classList.add('active');
      }
    });
  }

  const movingBlock = document.getElementById('moving-block');
  const movingBlockShadow = document.getElementById('moving-bock-shadow');

  if (movingBlock) {
    document.addEventListener('mousemove', function (event) {
      const windowWidth = window.innerWidth;
      const blockWidth = movingBlock.offsetWidth;

      // Вычисляем позицию блока на основе позиции мыши и ширины окна
      let blockX = event.clientX - blockWidth / 2;

      // Вычисляем наклон блока в зависимости от позиции мыши
      let tilt = (blockX / windowWidth) * 2;

      // Применяем наклон к блоку с помощью свойства transform
      movingBlock.style.transform = `rotate(${tilt}deg)`;

      const computedFontSize = window.getComputedStyle(
        document.documentElement
      ).fontSize;

      const computedFontSizeNumber = computedFontSize.slice(
        0,
        computedFontSize.length - 2
      );

      const avaliableCursorArea = {
        width: windowWidth / computedFontSizeNumber,
        height: 20,
        heightCompensator: 10,
      };

      const cursorPosition = {
        x: event.clientX / computedFontSizeNumber,
        y: event.clientY / computedFontSizeNumber,
      };

      if (
        cursorPosition.y <
        avaliableCursorArea.height + avaliableCursorArea.heightCompensator
      ) {
        const cursorPositionInTheAreaInPercent = {
          x: cursorPosition.x / (avaliableCursorArea.width / 100),
          y:
            (cursorPosition.y + avaliableCursorArea.heightCompensator) /
              (avaliableCursorArea.height / 100) -
            100,
        };

        const averageCoordinates = {
          left: Math.abs(cursorPositionInTheAreaInPercent.x - 100) - 100,
          right: cursorPositionInTheAreaInPercent.x - 100,
          top: Math.abs(cursorPositionInTheAreaInPercent.y - 100),
        };

        const getAveragePercentage = (arr) => {
          return arr.reduce((a, b) => a + b, 0) / arr.length;
        };

        const shadowFractionToShift = 0.8;

        movingBlockShadow.setAttribute(
          'd',
          `M 0 ${
            (shadowFractionToShift / 100) *
            getAveragePercentage([
              averageCoordinates.left,
              averageCoordinates.top,
            ])
          } L 100 ${
            (shadowFractionToShift / 100) *
            getAveragePercentage([
              averageCoordinates.right,
              averageCoordinates.top,
            ])
          } L 100 100 L 0 100`
        );
      }
    });
  }

  const yellowMovingBlock = document.getElementById('yellow-moving-block');
  if (yellowMovingBlock) {
    document.addEventListener('mousemove', function (event) {
      const windowWidth = window.innerWidth;
      const blockWidth = yellowMovingBlock.offsetWidth;

      // Вычисляем позицию блока на основе позиции мыши и ширины окна
      let blockX = event.clientX - blockWidth / 2;

      // Вычисляем наклон блока в зависимости от позиции мыши
      let tilt = (blockX / windowWidth) * 6;

      // Применяем наклон к блоку с помощью свойства transform
      yellowMovingBlock.style.transform = `rotate(${tilt}deg)`;
    });
  }

  let isMoving = false;

  document.addEventListener('mousemove', function (event) {
    let parent = document.getElementById('parent');
    if (parent) {
      let follower = document.getElementById('follower');
      let parentRect = parent.getBoundingClientRect();
      let x = event.clientX - parentRect.left;
      let newX = x - follower.offsetWidth; // Вычисляем новое положение в противоположной стороне
      newX = Math.max(
        0,
        Math.min(newX, parentRect.width - follower.offsetWidth)
      );

      if (!isMoving) {
        isMoving = true;
        follower.style.transform = 'translateX(' + newX + 'px)'; // Используем translateX для перемещения блока

        setTimeout(function () {
          isMoving = false;
        }, 500); // Задержка в 200 миллисекунд
      }
    }
  });

  const elephantDownButtons = document.getElementsByClassName(
    'elephant-more-down-button'
  );
  const elephantUpButtons = document.getElementsByClassName(
    'elephant-more-up-button'
  );

  for (let i = 0; i < elephantDownButtons.length; i++) {
    elephantDownButtons[i].addEventListener('click', function () {
      const content = this.nextElementSibling;
      if (this.classList.contains('active-js')) {
        this.classList.remove('active-js');
      } else {
        this.classList.add('active-js');
      }
      if (content.classList.contains('active-js')) {
        content.classList.remove('active-js');
      } else {
        // content.style.display = "block";
        content.classList.add('active-js');
      }
    });
  }
  ////////////////////////////////
  // второй вариант истории Росмэна со слоном

  const yearTexts = document.querySelectorAll('.year-text');
  yearTexts.forEach(function (yearText) {
    yearText.addEventListener('click', function () {
      const dataInfo = this.getAttribute('data-info');
      const infoBlock = document.getElementById(dataInfo);
      if (infoBlock) {
        infoBlock.classList.toggle('active-js');
      }
    });
  });

  ///////////////////////////

  const filterOpen = document.getElementById('open-filter');
  const filterClose = document.getElementById('close-filter');
  const filter = document.getElementById('filter');
  const filter2 = document.getElementById('filter-2');
  if (filterOpen !== null) {
    filterOpen.addEventListener('click', function () {
      if (filter !== null) {
        filter.classList.add('open-filter');
      } else if (filter2 !== null) {
        filter2.classList.add('open-filter');
      }
    });
  }
  if (filterClose !== null) {
    filterClose.addEventListener('click', function () {
      if (filter !== null) {
        filter.classList.remove('open-filter');
      } else if (filter2 !== null) {
        filter2.classList.remove('open-filter');
      }
    });
  }

  for (let i = 0; i < elephantUpButtons.length; i++) {
    elephantUpButtons[i].addEventListener('click', function () {
      const content = this.previousElementSibling;
      if (this.classList.contains('active-js')) {
        this.classList.remove('active-js');
      } else {
        this.classList.add('active-js');
      }
      if (content.classList.contains('active-js')) {
        content.classList.remove('active-js');
      } else {
        // content.style.display = "block";
        content.classList.add('active-js');
      }
    });
  }
});
function toggleSearch() {
  let mobileMenu = document.getElementById('mobile-menu');
  let headerNav = document.querySelector('.header-nav');
  let searchInput = document.querySelector('.search-input');
  let input = document.querySelector('.search-input input');
  input.value = '';
  let headerbtn = document.querySelector('.header-btn');
  if (headerNav.classList.contains('hide')) {
    headerNav.classList.remove('hide');
    headerbtn.classList.remove('hide-mobile');
    headerbtn.classList.remove('hide-icon');
  } else {
    headerNav.classList.add('hide');
    headerbtn.classList.add('hide-mobile');
    headerbtn.classList.add('hide-icon');
  }
  if (searchInput.classList.contains('hide')) {
    searchInput.classList.remove('hide');
  } else {
    searchInput.classList.add('hide');
  }

  if (mobileMenu.classList.contains('hide')) {
    mobileMenu.classList.remove('hide');
  } else {
    mobileMenu.classList.add('hide');
  }
}

function changeLang(lang) {
  let eng = document.querySelectorAll('.eng-lang');
  let rus = document.querySelectorAll('.rus-lang');
  for (let i = 0; i < rus.length; i++) {
    if (lang === 'eng') {
      rus[i].classList.remove('active-js');
      eng[i].classList.add('active-js');
    } else {
      rus[i].classList.add('active-js');
      eng[i].classList.remove('active-js');
    }
  }
}

function closeBar() {
  for (let i = 0; i < p.length; i++) {
    if (p[i].classList.contains('active-js')) {
      p[i].classList.remove('active-js');
    }
  }
  for (let i = 0; i < contentNavBar.length; i++) {
    contentNavBar[i].classList.remove('active-js');
    contentNavBar[i].classList.add('hide');
  }
}

function scrollContent(direction) {
  let container = document.getElementById('elephant-container');
  let content = document.getElementById('elephant-slider');

  if (direction === 'left') {
    container.scrollLeft -= 400; // Измените значение 100 на желаемое расстояние для перемещения влево
  } else if (direction === 'right') {
    container.scrollLeft += 400; // Измените значение 100 на желаемое расстояние для перемещения вправо
  }
}

const buttonsPag = document.querySelector('.nav-btns');
const nextButton = document.querySelector('.js-rm-pag-nav-page-more-bnt');
const prevButton = document.querySelector('.js-rm-pag-nav-page-back-bnt');

if (buttonsPag) {
  buttonsPag.addEventListener('click', (event) => {
    const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
    const target = event.target.closest('.js-rm-pag-nav-page-btn');

    if (!target || target === currentChosen) return;

    if (currentChosen) {
      currentChosen.classList.remove('js-chosen-nav-btn');
    }
    target.classList.add('js-chosen-nav-btn');
    return target.innerText;
  });
}
// добавил для переключения страницы вперёд и назад
if (nextButton) {
  nextButton.addEventListener('click', (event) => {
    const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
    if (currentChosen) {
      currentChosen.classList.remove('js-chosen-nav-btn');
    }
    if (currentChosen.nextElementSibling) {
      currentChosen.nextElementSibling.classList.add('js-chosen-nav-btn');
    }
  });
}

if (prevButton) {
  prevButton.addEventListener('click', (event) => {
    const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
    if (currentChosen) {
      currentChosen.classList.remove('js-chosen-nav-btn');
    }
    if (currentChosen.previousElementSibling) {
      currentChosen.previousElementSibling.classList.add('js-chosen-nav-btn');
    }
  });
}

