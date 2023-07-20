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
  // var updateWindowSize = (function () {
  //   console.log(window.innerHeight);
  //   var minAllowedWindowHeight = 700;
  //   var largerDivHeight = 900;
  //
  //   // actual updateWindowSize function
  //   return function () {
  //     var winHeight = window.innerHeight;
  //     var newHeight =
  //       winHeight < minAllowedWindowHeight
  //         ? largerDivHeight
  //         : winHeight - '350';
  //     document.querySelector('.filters-block').style.height = newHeight + 'px';
  //   };
  // })();
  // // call the method one time
  // updateWindowSize();
  // // subscribe the method to future resize events
  //
  // addEventListener('resize', (event) => {
  //   updateWindowSize();
  // });

  // variables

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
  const labelMore = document.getElementsByClassName('show-more-label');

  for (let i = 0; i < labelMore.length; i++) {
    labelMore[i].addEventListener('click', function () {
      const content = document.querySelectorAll('.sort-label');
      for (let j = 0; j < content.length; j++) {
        if (content[j].classList.contains('!hidden')) {
          content[j].classList.remove('!hidden');
        }
      }
    });
  }
  const filterMore = document.getElementsByClassName('show-more-filter');

  for (let i = 0; i < filterMore.length; i++) {
    filterMore[i].addEventListener('click', function () {
      const content = document.querySelectorAll('.filter-label');
      for (let j = 0; j < content.length; j++) {
        if (content[j].classList.contains('!hidden')) {
          content[j].classList.remove('!hidden');
        }
      }
    });
  }
  // const cardMore = document.getElementsByClassName('js-rm-pag-more-btn');

  // for (let i = 0; i < cardMore.length; i++) {
  //   cardMore[i].addEventListener('click', function () {
  //     const content = document.querySelectorAll('.toy_card');
  //     for (let j = 0; j < content.length; j++) {
  //       if (content[j].classList.contains('!hidden')) {
  //         content[j].classList.remove('!hidden');
  //       }
  //     }
  //   });
  // }
   const navbar = document.querySelector('.navigation');
  const contentNavBarUl = document.querySelector('.nav-list');
  if (navbar) {
    contentNavBarUl.addEventListener('click', function (event) {
      const contentNavBar =
        document.getElementsByClassName('navigation-content');

      const activeP = document.querySelector('p.active-js');
      const p = contentNavBarUl.getElementsByTagName('p');
      if (activeP != null) {

          for (let i = 0; i < p.length; i++) {
            if (p[i].classList.contains('active-js')) {
              p[i].classList.remove('active-js');
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
  const closeNew = document.querySelectorAll('.close-button-new');
  if (closeNew) {
    for (let y = 0; y < closeNew.length; y++) {
      closeNew[y].addEventListener('click', function (event) {
        const block = document.querySelector('.more-down-button.active-js');
        const text = document.querySelector('.sort-text');
        text.innerHTML = closeNew[y].querySelector('p').innerText;
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
    }
  }

  // const activeErase = document.querySelector('.active-js_erase');
  // if (activeErase) {
  //   activeErase.addEventListener('click', function (event) {
  //     const filter = document.querySelectorAll('.popup_all_filters_filter');
  //     for (let i = 0; i < filter.length; i++) {
  //       filter[i].remove();
  //     }
  //   });
  // }
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

  if (movingBlock && movingBlockShadow) {
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
  const yellowMovingBlock2 = document.getElementById('yellow-moving-block2');
  if (yellowMovingBlock2) {
    document.addEventListener('mousemove', function (event) {
      const windowWidth = window.innerWidth;
      const blockWidth = yellowMovingBlock2.offsetWidth;

      // Вычисляем позицию блока на основе позиции мыши и ширины окна
      let blockX = event.clientX - blockWidth / 2;

      // Вычисляем наклон блока в зависимости от позиции мыши
      let tilt = (blockX / windowWidth) * 6;

      // Применяем наклон к блоку с помощью свойства transform
      yellowMovingBlock2.style.transform = `rotate(${tilt}deg)`;
    });
  }

  let isMoving2 = false;
  document.addEventListener('mousemove', function (event) {
    let parent2 = document.getElementById('parent2');
    if (parent2) {
      let follower2 = document.getElementById('follower2');
      let parentRect = parent2.getBoundingClientRect();
      let x = event.clientX - parentRect.left;
      let newX = x - follower2.offsetWidth; // Вычисляем новое положение в противоположной стороне
      newX = Math.max(
        0,
        Math.min(newX, parentRect.width - follower2.offsetWidth)
      );

      if (!isMoving2) {
        isMoving2 = true;
        follower2.style.transform = 'translateX(' + newX + 'px)'; // Используем translateX для перемещения блока

        setTimeout(function () {
          isMoving2 = false;
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
  const allFilters = document.querySelector('#js_popup_all_filters_modal');

  const filterCheckedInputsCounter = function () {
    const counter = 0;
  };

  let smallFilterCounter = 0;
  let extendedFilterCounter = 0;

  const setFiltersCheckedCounts = function (filterEl, filterSize) {
    let checkedInputsCount = 0;
    const allInputs = filterEl.getElementsByTagName('input');

    for (let i = 0; i < allInputs.length; i++) {
      if (allInputs[i].checked) {
        checkedInputsCount++;
      }
    }

    if (filterSize === 'small') {
      smallFilterCounter = checkedInputsCount;
    } else {
      extendedFilterCounter = checkedInputsCount;
    }

    let moreCheckedInputsNumber =
      smallFilterCounter > extendedFilterCounter
        ? smallFilterCounter
        : extendedFilterCounter;

    const filterChild = filterOpen.querySelector('.counter');
    if (!moreCheckedInputsNumber) {
      if (filterChild) {
        filterOpen.removeChild(filterChild);
      }
    } else {
      if (filterChild) {
        filterChild.textContent = moreCheckedInputsNumber;
      } else {
        const counter = document.createElement('div');
        counter.textContent = moreCheckedInputsNumber;
        counter.classList.add('counter');
        filterOpen.appendChild(counter);
      }
    }
  };

  if (filterOpen) {
    if (filter) {
      filter.addEventListener('click', function () {
        setFiltersCheckedCounts(filter, 'small');
      });
    }

    if (filter2) {
      filter2.addEventListener('click', function () {
        setFiltersCheckedCounts(filter2, 'small');
      });
    }

    allFilters.addEventListener('click', function () {
      setFiltersCheckedCounts(allFilters);
    });
  }

  if (filterOpen !== null) {
    filterOpen.addEventListener('click', function () {
      if (filter !== null) {
        document.body.style.overflow = 'hidden';
        filter.classList.add('open-filter');
      } else if (filter2 !== null) {
        document.body.style.overflow = 'hidden';
        filter2.classList.add('open-filter');
      }
    });
  }
  if (filterClose !== null) {
    filterClose.addEventListener('click', function () {
      if (filter !== null) {
        document.body.style.overflow = 'auto';
        filter.classList.remove('open-filter');
      } else if (filter2 !== null) {
        document.body.style.overflow = 'auto';
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
  let logo = document.querySelector('.mobile-logo');
  input.value = '';
  let headerbtn = document.querySelectorAll('.header-btn');
  if (headerNav.classList.contains('hide')) {
    headerNav.classList.remove('hide');
    logo.classList.remove('hide');
    for (let i = 0; i < headerbtn.length; i++) {
      headerbtn[i].classList.remove('hide-mobile');
      headerbtn[i].classList.remove('hide-icon');
      headerbtn[i].classList.remove('hide');
    }
  } else {
    headerNav.classList.add('hide');
    logo.classList.add('hide');
    for (let i = 0; i < headerbtn.length; i++) {
      headerbtn[i].classList.add('hide-mobile');
      headerbtn[i].classList.add('hide-icon');
      headerbtn[i].classList.add('hide');
    }
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

  const headerSearch = document.getElementById('search-header');
    const searchResult = document.getElementById('search-result-header');
  if (headerSearch && headerSearch.value) {
    searchResult.classList.remove('hidden')
  } else {
    searchResult.classList.add('hidden')
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
  const contentNavBar =
      document.getElementsByClassName('navigation-content');
  const contentNavBarUl = document.querySelector('.nav-list');
  const activeP = document.querySelector('p.active-js');
  const p = contentNavBarUl.getElementsByTagName('p');
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

class Slider {
  constructor(rangeElement, valueElement, options) {
    this.rangeElement = rangeElement;
    this.valueElement = valueElement;
    this.options = options;

    // Attach a listener to "change" event
    this.rangeElement.addEventListener('input', this.updateSlider.bind(this));
  }

  // Initialize the slider
  init() {
    this.rangeElement.setAttribute('min', options.min);
    this.rangeElement.setAttribute('max', options.max);
    this.rangeElement.value = options.cur;

    this.updateSlider();
  }

  // Format the money
  asMoney(value) {
    return (
      '$' +
      parseFloat(value).toLocaleString('en-US', { maximumFractionDigits: 2 })
    );
  }

  generateBackground(rangeElement) {
    if (this.rangeElement.value === this.options.min) {
      return;
    }

    let percentage =
      ((this.rangeElement.value - this.options.min) /
        (this.options.max - this.options.min)) *
      100;
    return (
      'background: linear-gradient(to right, #000000, #000000 ' +
      percentage +
      '%, #D9D9D9 ' +
      percentage +
      '%, #D9D9D9 100%)'
    );
  }

  updateSlider(newValue) {
    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value);
    this.rangeElement.style = this.generateBackground(this.rangeElement.value);
  }
}

let rangeElement = document.querySelector('.range [type="range"]');
let valueElement = document.querySelector('.range .range__value span');

let options = {
  min: 2000,
  max: 75000,
  cur: 37500,
};

if (rangeElement) {
  let slider = new Slider(rangeElement, valueElement, options);

  slider.init();
}

function showBlock(elementId) {
  const blocks = document.querySelectorAll('.show');

  var block = document.getElementById(elementId);
  if (block.classList.contains('show')) {
    block.classList.remove('show');
  } else {
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].classList.contains('show')) {
        blocks[i].classList.remove('show');
      }
    }
    block.classList.add('show');
  }
}

function closeFilter() {
  const filterOpen = document.getElementById('open-filter');
  const filterClose = document.getElementById('close-filter');
  const filter = document.getElementById('filter');
  const filter2 = document.getElementById('filter-2');
  if (filterOpen !== null) {
    if (filter !== null) {
      document.body.style.overflow = 'hidden';
      filter.classList.add('open-filter');
    } else if (filter2 !== null) {
      document.body.style.overflow = 'hidden';
      filter2.classList.add('open-filter');
    }
  }
  if (filterClose !== null) {
    if (filter !== null) {
      document.body.style.overflow = 'auto';
      filter.classList.remove('open-filter');
    } else if (filter2 !== null) {
      document.body.style.overflow = 'auto';
      filter2.classList.remove('open-filter');
    }
  }
}

const inputSearch = document.querySelectorAll('.searchInput');
const blockSearch = document.querySelectorAll('.searchBlock');

if (inputSearch.length && blockSearch.length) {
  for (let i = 0; i < inputSearch.length; i++) {
    inputSearch[i].addEventListener('input', function (event) {
      let filter = inputSearch[i].value.toLowerCase();
      const label = blockSearch[i].querySelectorAll('.sort-label');

      for (let j = 0; j < label.length; j++) {
        if (!filter) {
          if (label[j].classList.contains('!hidden')) {
            label[j].classList.remove('!hidden');
          }
        } else {
          let content = label[j].dataset.name.toLowerCase();
          if (content.includes(filter)) {
            if (label[j].classList.contains('!hidden'))
              label[j].classList.remove('!hidden');
          } else {
            label[j].classList.add('!hidden');
          }
        }
      }
    });
  }
}

const allButtons = document.querySelectorAll('.js-cl-btn');

if (allButtons) {
  allButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const siblingElement = button.previousElementSibling;
      siblingElement.classList.toggle('max-h-[13rem]');

      if (button.innerText === 'Свернуть') {
        if (
          button.classList.contains('js-cl-pok') &&
          button.classList.contains('js-cl-pos')
        ) {
          button.innerText = 'Показать ещё';
        } else if (button.classList.contains('js-cl-pok')) {
          button.innerText = 'Показать ещё';
        } else if (button.classList.contains('js-cl-pos')) {
          button.innerText = 'Посмотреть все';
        }
      } else {
        button.innerText = 'Свернуть';
      }
    });
  });
}

// js-cl-pok Показать ещё
// js-cl-pos Посмотреть все
const allButtonsTwo = document.querySelectorAll('.js-cl-btn-2');

if (allButtonsTwo) {
  allButtonsTwo.forEach((button) => {
    button.addEventListener('click', function () {
      const siblingElement = button.previousElementSibling;
      siblingElement.classList.toggle('max-h-[43rem]');

      if (button.innerText === 'Свернуть') {
        if (
            button.classList.contains('js-cl-pok') &&
            button.classList.contains('js-cl-pos')
        ) {
          button.innerText = 'Показать все результаты';
        } else if (button.classList.contains('js-cl-pok')) {
          button.innerText = 'Показать все результаты';
        } else if (button.classList.contains('js-cl-pos')) {
          button.innerText = 'Посмотреть все';
        }
      } else {
        button.innerText = 'Свернуть';
      }
    });
  });
}

const headerSearch = document.getElementById('search-header');
headerSearch.addEventListener('input', function () {
  const searchResult = document.getElementById('search-result-header');
  if (headerSearch && headerSearch.value) {
    searchResult.classList.remove('hidden')
  } else {
    searchResult.classList.add('hidden')
  }

});
const buttonsPag = document.querySelector('.nav-btns');
const nextButton = document.querySelector('.js-rm-pag-nav-page-more-bnt');
const prevButton = document.querySelector('.js-rm-pag-nav-page-back-bnt');
const moreButton = document.querySelector('.js-rm-pag-more-btn');

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
// if (nextButton) {
//   nextButton.addEventListener('click', (event) => {
//     const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
//     if (currentChosen) {
//       currentChosen.classList.remove('js-chosen-nav-btn');
//     }
//     if (currentChosen.nextElementSibling) {
//       currentChosen.nextElementSibling.classList.add('js-chosen-nav-btn');
//     }
//   });
// }

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

// if (moreButton) {
//   moreButton.addEventListener('click', (event) => {
//     const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
//     if (currentChosen) {
//       currentChosen.classList.remove('js-chosen-nav-btn');
//     }
//     if (currentChosen.nextElementSibling) {
//       currentChosen.nextElementSibling.classList.add('js-chosen-nav-btn');
//     }
//   });
// }
// if (nextButton) {
//   nextButton.addEventListener('click', (event) => {
//     const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
//     if (currentChosen) {
//       currentChosen.classList.remove('js-chosen-nav-btn');
//     }
//
//     if (currentChosen.nextElementSibling) {
//       currentChosen.nextElementSibling.classList.add('js-chosen-nav-btn');
//     } else {
//       // Создаем новую кнопку с числом следующей страницы
//       const nextPageNumber = parseInt(currentChosen.innerText, 10) + 1;
//       const newButton = document.createElement('button');
//       newButton.classList.add('pagination-nav-page-button', 'js-rm-pag-nav-page-btn', 'js-chosen-nav-btn');
//       newButton.innerText = nextPageNumber;
//       buttonsPag.appendChild(newButton);
//     }
//   });
// }



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

// карточкам будет дан специальный класс - js_traceable_item,
// а элементам js-bg-changeable, которые будут менять фон,- js-hovered,
// событие будет генерироваться на заход в целом на карточку - mouseenter/mouseleave

// по поводу изменения картинки при нажатии на сердечко
// своя функция тут будет

// const addToFavBtns = document.getElementsByClassName(
//   'item_card_add_to_favourite'
// );
// for (let i = 0; i < addToFavBtns.length; i++) {
//   addToFavBtns[i].addEventListener('click', function () {
//     const button = this;
//     button.classList.toggle('js_pressed');
//   });
// }

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

// код для того, чтобы при тыке на картинку открывалась большая картинка
// const popupTriggers = document.querySelectorAll('.popup-trigger');
// const allImagePopups = document.querySelectorAll('.image-popup');
//
// if (popupTriggers) {
//   popupTriggers.forEach((trigger) => {
//     trigger.addEventListener('click', () => {
//       const imageUrl = trigger.getAttribute('data-popup-image');
//       trigger.nextElementSibling.firstElementChild.firstElementChild.setAttribute(
//         'src',
//         imageUrl
//       );
//       trigger.nextElementSibling.classList.add('js-active-popup');
//     });
//   });
// }
//
// if (allImagePopups) {
//   allImagePopups.forEach((imagePopup) => {
//     const closeButton = imagePopup.querySelector('.close-button');
//
//     if (closeButton) {
//       closeButton.addEventListener('click', () => {
//         imagePopup.classList.remove('js-active-popup');
//       });
//     }
//
//     imagePopup.addEventListener('click', (event) => {
//       if (event.target === imagePopup) {
//         imagePopup.classList.remove('js-active-popup');
//       }
//     });
//   });
// }

// вот этот скрипт ещё может пригодиться
// document.addEventListener('DOMContentLoaded', function () {
//   'use strict';
//
//   const popupTriggers = document.querySelectorAll('.popup-trigger');
//   const imagePopup = document.querySelector('.image-popup');
//   const popupImage = document.querySelector('#popupImage');
//   const closeButton = document.querySelector('.close-button');
//
//   window.addEventListener('click', function (event) {
//     if (imagePopup.classList.contains('js-active-popup')) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'visible';
//     }
//   });
//
//   if (popupTriggers) {
//     popupTriggers.forEach(function (trigger) {
//       trigger.addEventListener('click', function () {
//         const imageUrl = trigger.getAttribute('data-popup-image');
//         popupImage.setAttribute('src', imageUrl);
//         imagePopup.classList.add('js-active-popup');
//       });
//     });
//   }
//
//   if (closeButton) {
//     closeButton.addEventListener('click', function () {
//       imagePopup.classList.remove('js-active-popup');
//     });
//   }
//
//   if (imagePopup) {
//     imagePopup.addEventListener('click', function (event) {
//       if (event.target === imagePopup) {
//         imagePopup.classList.remove('js-active-popup');
//       }
//     });
//   }
// });

// External JS file like jquery etc which you do not wish to inlcuded in minification

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

const randomBookButton = document.querySelector('.js-randomize-book');
if (randomBookButton) {
  randomBookButton.addEventListener('click', function (event) {
    // тут собираем активные чекбоксы
    const selectedGenres = Array.from(
      document.querySelectorAll('#genres input:checked')
    ).map((input) => input.id);
    const selectedAges = Array.from(
      document.querySelectorAll('#ages input:checked')
    ).map((input) => input.id);

    // тут объект на отправку на бэк
    const requestData = {
      genres: selectedGenres,
      ages: selectedAges,
    };

    // тут имитация отправки запроса на бэк
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    // тут отдельно все чекбоксы
    const checkboxElements = document.querySelectorAll(
      '.js-footer-heading-policy-agreement.cb-f-rb.checkbox_main input:checked'
    );

    // находим кнопки
    const activeDropDownsButtons = document.querySelectorAll(
      '.more-down-button.active-js'
    );
    const activeDropDownsContent = document.querySelectorAll(
      '.more-down-content.active-js'
    );
    // тут классы кнопок,меняем стили
    activeDropDownsButtons.forEach(function (activeDDB) {
      activeDDB.classList.toggle('active-js');
    });
    activeDropDownsContent.forEach(function (activeDDC) {
      activeDDC.classList.toggle('active-js');
    });
    // убираем галки
    checkboxElements.forEach(function (checkbox) {
      checkbox.checked = false;
    });
    // меняем название кнопки
    randomBookButton.innerText = 'Подобрать ещё раз';
    // пока оставлю так по стилям,
    const literallyBook = document.querySelector('.random-book-card');
    literallyBook.classList.remove('hidden');
  });
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
  const swiperBook = new Swiper('.swiper-book', {
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
      320: {
        slidesPerView: 2.1,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 4.2,
        spaceBetween: 60,
      },
    },
  });

  const swiperOneBook = new Swiper('.swiper-one-book', {
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
      320: {
        slidesPerView: 0.9,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
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

// слайдер для страницы с вакансиями,

// let largeImg = document.querySelector('.largeImg');
// let thumbs = document.querySelectorAll('.thumbs img');
//
// thumbs.forEach(function (thumb) {
//   thumb.addEventListener('click', function (event) {
//     const currentChosen = document.querySelector('.thumbs .js-thumb-chosen');
//     event.preventDefault();
//     largeImg.src = thumb.getAttribute('src');
//     if (currentChosen) {
//       currentChosen.classList.remove('js-thumb-chosen');
//     }
//     thumb.classList.add('js-thumb-chosen');
//   });
// });

// нужна функция, которая будет отслеживать нажатие на js-mdb,
// после этого card-fp-hide либо добавляется, либо убирается класс card-fp-hidden-item,
// а у card-fp-trans появляется или удаляется card-fp-transparent-text,

let jsMdb = document.querySelector('.js-mdb');
let cardTextToHide = document.querySelector('.card-fp-hide');
let cartToTrans = document.querySelector('.card-fp-trans');
let isExpandedToys = false;

if (jsMdb) {
  jsMdb.onclick = function (event) {
    if (cardTextToHide) {
      cardTextToHide.classList.toggle('js-card-fp-hidden-item');
    }
    if (cartToTrans) {
      cartToTrans.classList.toggle('card-fp-transparent-text');
    }
    isExpandedToys = !isExpandedToys; // Изменяем состояние isExpanded при каждом клике

    if (isExpandedToys) {
      jsMdb.innerHTML = 'Свернуть описание<span></span>';
      jsMdb.classList.add('active-js');
    } else {
      jsMdb.innerHTML = 'Подробное описание, характеристика<span></span>';
      jsMdb.classList.remove('active-js');
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
      jsMdbDescButton.classList.remove('active-js');
    } else {
      jsDescriptionWrapper.classList.add('gapped');
      jsMdbDescButton.innerHTML = 'Свернуть описание<span></span>';
      jsMdbDescButton.classList.add('active-js');
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
const jsBookToggleButton = document.querySelector('.js-book-toggle-button');
const jsBookTextContainer = document.querySelector('.card-fp-desc-text-top');
let isExpandedDesc = false;
if (jsBookToggleButton && jsBookTextContainer) {
  jsBookToggleButton.addEventListener('click', function () {
    jsBookTextContainer.classList.toggle('line-clamp-none');
    isExpandedDesc = !isExpandedDesc; // Изменяем состояние isExpanded при каждом клике

    if (isExpandedDesc) {
      jsBookToggleButton.innerHTML = 'Свернуть описание<span></span>';
      jsBookToggleButton.classList.add('active-js');
    } else {
      jsBookToggleButton.innerHTML =
        'Подробное описание, характеристика<span></span>';
      jsBookToggleButton.classList.remove('active-js');
    }
  });
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
      spaceBetween: 25,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});

const swiperImageGallery = new Swiper('.swiper-image-gallery', {
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
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 2.3,
      spaceBetween: 16,
    },
  },
});

// Инициализация превью слайдера картинок товара
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container-3', {
  direction: 'vertical',
  slidesPerView: 5,
  spaceBetween: 5,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  clickable: true,
  freeMode: true,
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container-4', {
  // ищем слайдер превью по селектору
  // задаем параметры
  on: {
    slideChange: function () {
      // console.log(sliderThumbs.activeIndex);
      const firstChosen = document.querySelector('.first-chosen');
      if (firstChosen.classList.contains('p-4')) {
        firstChosen.classList.remove('js-thumb-chosen');
        firstChosen.classList.remove('p-4');
      }
      const activeSlideIndex = sliderImages.activeIndex; // Индекс активного слайда в основном слайдере
      const thumbItems = document.querySelectorAll(
        '.slider__thumbs .swiper-slide'
      ); // Элементы миниатюр
      thumbItems.forEach((item, index) => {
        if (index === activeSlideIndex) {
          item.classList.add('js-thumb-chosen');
          item.classList.add('p-4');
        } else {
          item.classList.remove('js-thumb-chosen');
          item.classList.remove('p-4');
        }
      });
    },
  },
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 14, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: {
    // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev', // кнопка Prev
  },
  pagination: {
    //pagination(dots)
    el: '.swiper-pagination',
  },
  clickable: true,
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
      mousewheel: false,
      pagination: false,
    },
    768: {
      // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
      pagination: false,
      mousewheel: true,
    },
  },
});

const sliderImagesMob = new Swiper('.swiper-container-5', {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 14, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  // navigation: {
  //   // задаем кнопки навигации
  //   nextEl: '.slider__next', // кнопка Next
  //   prevEl: '.slider__prev', // кнопка Prev
  // },
  pagination: {
    //pagination(dots)
    el: '.swiper-pagination',
  },
  clickable: true,
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
      mousewheel: false,
      pagination: {
        el: '.swiper-pagination-2',
      },
      slidesPerView: 1,
    },
    768: {
      // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
      pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
      },
      mousewheel: true,
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
  window.addEventListener('load', function () {
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

// код для навешивания синего бордера на элемент
// function chooseSwiperItem() {
//   const slideVisibleElements = document.querySelectorAll(
//     '.swiper-slide-visible'
//   );
//
//   slideVisibleElements.forEach(function (slideElement) {
//     const imageElement = slideElement.querySelector(
//       '.slider__image, .slider__image-book'
//     );
//     if (imageElement) {
//       slideElement.addEventListener('click', function () {
//         slideVisibleElements.forEach(function (el) {
//           el.querySelector(
//             '.slider__image, .slider__image-book'
//           ).classList.remove('js-thumb-chosen');
//           el.querySelector(
//             '.slider__image, .slider__image-book'
//           ).classList.remove('p-4');
//         });
//
//         // Toggle classes on clicked element
//         imageElement.classList.toggle('js-thumb-chosen');
//         imageElement.classList.toggle('p-4');
//       });
//     }
//   });
// }

// функция для выставления высоты колонки слайдеров
function updateSliderColHeight() {
  const sliderImages = document.querySelector('.slider__images');
  const sliderCol = document.querySelector('.slider__col');
  if (sliderImages && sliderCol) {
    const sliderImagesHeight = sliderImages.offsetHeight;
    sliderCol.style.maxHeight = `${sliderImagesHeight}px`;
  }
}

window.onload = function () {
  updateSliderColHeight();
  // chooseSwiperItem();
};

window.onresize = function () {
  updateSliderColHeight();
  // chooseSwiperItem();
};

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
