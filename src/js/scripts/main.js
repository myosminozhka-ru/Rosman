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
      let clicked;
      if (event.target.classList.contains('nav-li')) {
        return;
      }
      if (event.target.classList.contains('nav-list')) {
        return;
      } else {
        clicked = event.target;
      }
      if (activeP != null) {
        for (let i = 0; i < p.length; i++) {
          if (p[i].classList.contains('active-js')) {
            p[i].classList.remove('active-js');
          }
        }
      }
      for (let i = 0; i < contentNavBar.length; i++) {
        if (contentNavBar[i].id === clicked.classList.value) {
          contentNavBar[i].classList.add('active-js');
          contentNavBar[i].classList.remove('hide');
        } else {
          contentNavBar[i].classList.remove('active-js');
          contentNavBar[i].classList.add('hide');
        }
      }
      clicked.classList.add('active-js');
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

  const yellowMovingBlock = document.querySelectorAll('.yellow-moving-block');

  if (yellowMovingBlock.length) {
    for (let i = 0; i < yellowMovingBlock.length; i++) {
      document.addEventListener('mousemove', function (event) {
        const blockWidth = window.innerWidth;
        const oneDeg = blockWidth / 100;
        const tiltAngle = (event.clientX - oneDeg * 50) / oneDeg / 30;

        yellowMovingBlock[i].style.transform = `rotate(${tiltAngle}deg)`;

        const computedFontSize = window.getComputedStyle(
          document.documentElement
        ).fontSize;

        const computedFontSizeNumber = computedFontSize.slice(
          0,
          computedFontSize.length - 2
        );

        const movingBlockTopLine = yellowMovingBlock[i].querySelector(
          '.yellow-moving-block-top-line '
        );
        const movingBlockBottomLine = yellowMovingBlock[i].querySelector(
          '.yellow-moving-block-bottom-line'
        );

        const mousePos = {
          x: event.pageX,
          y: event.pageY,
        };

        const bodyRect = document.body.getBoundingClientRect();
        const elemRect = yellowMovingBlock[i].getBoundingClientRect();
        const movingBlockTopOffset = elemRect.top - bodyRect.top;
        const movingBLockBottomOffset = elemRect.bottom - bodyRect.top;

        const verticalLeg = Math.abs(
          blockWidth * Math.sin(Math.PI * (tiltAngle / 180))
        );
        const activationTopArea =
          verticalLeg + movingBlockTopOffset - mousePos.y;

        const activationHeight = 300;
        const shiftNumber = 3;

        const mouseTiltHorizontallyPercentage = event.clientX / oneDeg;

        if (activationTopArea > 0 && activationTopArea < activationHeight) {
          const shadowShiftPercentage =
            100 - (activationTopArea / activationHeight) * 100;
          const leftShiftPercentage =
            (100 - mouseTiltHorizontallyPercentage + shadowShiftPercentage) / 2;
          const rightShiftPercentage =
            (mouseTiltHorizontallyPercentage + shadowShiftPercentage) / 2;
          const leftShadowShiftNumber =
            (shiftNumber / 100) * leftShiftPercentage;
          const rightShadowShiftNumber =
            (shiftNumber / 100) * rightShiftPercentage;

          movingBlockTopLine.setAttribute('y1', `-${leftShadowShiftNumber}%`);
          movingBlockTopLine.setAttribute('y2', `-${rightShadowShiftNumber}%`);
        }

        const activationBottomArea = -movingBLockBottomOffset - -mousePos.y;

        if (
          activationBottomArea < activationHeight &&
          activationBottomArea > 0
        ) {
          const shadowShiftPercentage =
            100 - (activationBottomArea / activationHeight) * 100;
          const leftShiftPercentage =
            (100 - mouseTiltHorizontallyPercentage + shadowShiftPercentage) / 2;
          const rightShiftPercentage =
            (mouseTiltHorizontallyPercentage + shadowShiftPercentage) / 2;
          const leftShadowShiftNumber =
            (shiftNumber / 100) * leftShiftPercentage;
          const rightShadowShiftNumber =
            (shiftNumber / 100) * rightShiftPercentage;

          movingBlockBottomLine.setAttribute(
            'y1',
            `${100 + leftShadowShiftNumber}%`
          );
          movingBlockBottomLine.setAttribute(
            'y2',
            `${100 + rightShadowShiftNumber}%`
          );
        }
      });
    }
  }

  // boxshadow
  // box-shadow: inset 0px 1px 19px 4px #535353;

  let isMoving = false;

  document.addEventListener('mousemove', function (event) {
    let parent = document.querySelectorAll('.parent');
    let follower = document.querySelectorAll('.follower');
    if (parent.length && follower.length && follower.length === parent.length) {
      for (let i = 0; i < parent.length; i++) {
        let parentRect = parent[i].getBoundingClientRect();
        let x = event.clientX - parentRect.left;
        let newX = x - follower[i].offsetWidth; // Вычисляем новое положение в противоположной стороне

        newX = Math.max(
          0,
          Math.min(newX, parentRect.width - follower[i].offsetWidth)
        );

        if (!isMoving) {
          isMoving = true;
          follower[i].style.transform = 'translateX(' + newX + 'px)'; // Используем translateX для перемещения блока

          isMoving = false;
        }
      }
    }
  });
  // const yellowMovingBlock2 = document.getElementById('yellow-moving-block2');
  // if (yellowMovingBlock2) {
  //   document.addEventListener('mousemove', function (event) {
  //     const windowWidth = window.innerWidth;
  //     const blockWidth = yellowMovingBlock2.offsetWidth;

  //     // Вычисляем позицию блока на основе позиции мыши и ширины окна
  //     let blockX = event.clientX - blockWidth / 2;

  //     // Вычисляем наклон блока в зависимости от позиции мыши
  //     let tilt = (blockX / windowWidth) * 6;

  //     // Применяем наклон к блоку с помощью свойства transform
  //     yellowMovingBlock2.style.transform = `rotate(${tilt}deg)`;
  //   });
  // }

  // let isMoving2 = false;
  // document.addEventListener('mousemove', function (event) {
  //   let parent2 = document.getElementById('parent2');
  //   if (parent2) {
  //     let follower2 = document.getElementById('follower2');
  //     let parentRect = parent2.getBoundingClientRect();
  //     let x = event.clientX - parentRect.left;
  //     let newX = x - follower2.offsetWidth; // Вычисляем новое положение в противоположной стороне
  //     newX = Math.max(
  //       0,
  //       Math.min(newX, parentRect.width - follower2.offsetWidth)
  //     );

  //     if (!isMoving2) {
  //       isMoving2 = true;
  //       follower2.style.transform = 'translateX(' + newX + 'px)'; // Используем translateX для перемещения блока

  //       setTimeout(function () {
  //         isMoving2 = false;
  //       }, 500); // Задержка в 200 миллисекунд
  //     }
  //   }
  // });

  const elephantDownButtons = document.getElementsByClassName(
    'elephant-more-down-button'
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

  ////////////////////// для открытия нижних кнопок
  document.addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;

    const elementsUnderCursor = document.elementsFromPoint(x, y);

    for (const elementUnderCursor of elementsUnderCursor) {
      if (elementUnderCursor.classList.contains('elephant-more-up-button')) {
        const content = elementUnderCursor.previousElementSibling;
        if (elementUnderCursor.classList.contains('active-js')) {
          elementUnderCursor.classList.remove('active-js');
        } else {
          elementUnderCursor.classList.add('active-js');
        }
        if (content.classList.contains('active-js')) {
          content.classList.remove('active-js');
        } else {
          content.classList.add('active-js');
        }

        break;
      }
    }
  });

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
      searchResult.classList.remove('hidden');
    } else {
      searchResult.classList.add('hidden');
    }
  }

  const searchToggleButtons = document.querySelectorAll('.js-toggle-search');
  for (let i = 0; i < searchToggleButtons.length; i++) {
    searchToggleButtons[i].addEventListener('click', function () {
      toggleSearch();
    });
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
    const contentNavBar = document.getElementsByClassName('navigation-content');
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
      this.rangeElement.style = this.generateBackground(
        this.rangeElement.value
      );
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
  // const allButtonsTwo = document.querySelectorAll('.js-cl-btn-2');

  // if (allButtonsTwo) {
  //   allButtonsTwo.forEach((button) => {
  //     button.addEventListener('click', function () {
  //       const siblingElement = button.previousElementSibling;
  //       siblingElement.classList.toggle('max-h-[43rem]');

  //       if (button.innerText === 'Свернуть') {
  //         if (
  //           button.classList.contains('js-cl-pok') &&
  //           button.classList.contains('js-cl-pos')
  //         ) {
  //           button.innerText = 'Показать все результаты';
  //         } else if (button.classList.contains('js-cl-pok')) {
  //           button.innerText = 'Показать все результаты';
  //         } else if (button.classList.contains('js-cl-pos')) {
  //           button.innerText = 'Посмотреть все';
  //         }
  //       } else {
  //         button.innerText = 'Свернуть';
  //       }
  //     });
  //   });
  // }

  const headerSearch = document.getElementById('search-header');
  headerSearch.addEventListener('input', function () {
    const searchResult = document.getElementById('search-result-header');
    if (headerSearch && headerSearch.value) {
      searchResult.classList.remove('hidden');
    } else {
      searchResult.classList.add('hidden');
    }
  });
});
