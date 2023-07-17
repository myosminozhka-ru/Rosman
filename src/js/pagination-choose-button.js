const buttonsPag = document.querySelector('.nav-btns');
const nextButton = document.querySelector('.js-rm-pag-nav-page-more-bnt');
const prevButton = document.querySelector('.js-rm-pag-nav-page-back-bnt');
const moreButton = document.querySelector('.js-rm-pag-more-btn')

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

if (moreButton) {
  moreButton.addEventListener('click', (event) => {
    console.log("pizda")
    const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
    if (currentChosen) {
      currentChosen.classList.remove('js-chosen-nav-btn');
    }
    if (currentChosen.nextElementSibling) {
      currentChosen.nextElementSibling.classList.add('js-chosen-nav-btn');
    }
  });
}
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