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
// class Number {
//   constructor(rangeElement, valueElement, options) {
//     this.rangeElement = rangeElement;
//     this.valueElement = valueElement;
//     this.options = options;
//
//     // Attach a listener to "change" event
//     this.rangeElement.addEventListener('input', this.updateSlider.bind(this));
//   }
//
//   // Initialize the slider
//   init() {
//     this.rangeElement.setAttribute('min', options.min);
//     this.rangeElement.setAttribute('max', options.max);
//     this.rangeElement.value = options.cur;
//
//     this.updateSlider();
//   }
//
//   // Format the money
//   asMoney(value) {
//     return (
//       '$' +
//       parseFloat(value).toLocaleString('en-US', { maximumFractionDigits: 2 })
//     );
//   }
//
//   generateBackground(rangeElement) {
//     if (this.rangeElement.value === this.options.min) {
//       return;
//     }
//
//     let percentage =
//       ((this.rangeElement.value - this.options.min) /
//         (this.options.max - this.options.min)) *
//       100;
//     return (
//       'background: linear-gradient(to right, #000000, #000000 ' +
//       percentage +
//       '%, #D9D9D9 ' +
//       percentage +
//       '%, #D9D9D9 100%)'
//     );
//   }
//
//   updateSlider(newValue) {
//     this.valueElement.innerHTML = this.asMoney(this.rangeElement.value);
//     this.rangeElement.style = this.generateBackground(this.rangeElement.value);
//   }
// }
//
// let rangeElement = document.querySelector('.range [type="range"]');
// let valueElement = document.querySelector('.range .range__value span');
//
// let options = {
//   min: 2000,
//   max: 75000,
//   cur: 37500,
// };
//
// if (rangeElement) {
//   let number = new Slider(rangeElement, valueElement, options);
//
//   number.init();
// }
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
document.addEventListener('click', function (event) {
  const block = document.querySelector('.content-block');
  const blocks = document.querySelectorAll('.show');
  const targetElement = event.target;
  for (let i = 0; i < toolbar.length; i++) {
    console.log(targetElement);
    console.log(toolbar);
    if (block != null) {
      if (
        !block.contains(targetElement) &&
        !targetElement.classList.contains('toolbar-button')
      ) {
        for (let i = 0; i < blocks.length; i++) {
          if (blocks[i].classList.contains('show')) {
            blocks[i].classList.remove('show');
          }
        }
      }
    }
  }
});
