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
