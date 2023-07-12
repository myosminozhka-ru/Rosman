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

// код для того, чтобы при тыке на картинку открывалась большая картинка
// const popup2 = document.getElementById('imagePopup');
const popupImage = document.getElementById('popupImage');
const popupTriggers = document.querySelectorAll('.popup-trigger');
// const galleryItem = document.querySelector('.card_photogallery_item');
const allImagePopups = document.querySelectorAll('.image-popup');

if (popupTriggers) {
  popupTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const imageUrl = trigger.getAttribute('data-popup-image');
      trigger.nextElementSibling.firstElementChild.firstElementChild.setAttribute(
        'src',
        imageUrl
      );
      // popupImage.setAttribute('src', imageUrl);
      trigger.nextElementSibling.classList.add('js-active-popup');
    });
  });
}

// if (popup2) {
//   popup2.addEventListener('click', (event) => {
//     if (event.target === popup2) {
//       popup2.classList.remove('js-active-popup');
//     }
//   });
// }

if (allImagePopups) {
  allImagePopups.forEach((imagePopup) => {
    console.log(imagePopup);
    imagePopup.addEventListener('click', (event) => {
      if (event.target === imagePopup) {
        event.target.classList.remove('js-active-popup');
      }
    });
  });
}
