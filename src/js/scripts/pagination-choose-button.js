

const toggleAutorLangBtn = document.querySelector('.js-alphabet-toggle-btn');
const alphabetBlocks = document.querySelectorAll('.js-alphabet');
const dropdownAuthorList = document.querySelectorAll('.dd-author-list');

function containsEnglishLetter(list) {
  for (let i = 0; i < list.length; i++) {
    const char = list[i];
    const unicode = char.charCodeAt(0);
    
    if ((unicode >= 65 && unicode <= 90) || (unicode >= 97 && unicode <= 122)) {
      return true; 
    }
  }
  
  return false; 
}


if (toggleAutorLangBtn) {
  const alphabetListKeys = document.querySelectorAll('.js-autor-filter-lang-key')

  const autorFilterButtons = document.querySelectorAll('.js-autor-filter-button')

  for(let i = 0; i < autorFilterButtons.length; i++) {
    autorFilterButtons[i].addEventListener('click', function(e) {
      for(let j = 0; j < alphabetListKeys.length; j++) {
        if(e.target.textContent === alphabetListKeys[j].textContent) {
          const parentElement = alphabetListKeys[j].closest('.js-autor-filter-list')
          parentElement.style.display = 'block'
        } else {
          const parentElement = alphabetListKeys[j].closest('.js-autor-filter-list')
          parentElement.style.display = 'none'
        }
      }
    })
  }

  const alphabetToggler = function() {
    if(toggleAutorLangBtn.textContent.toLowerCase().split('').includes('z')) {
      for(let i = 0; i < alphabetListKeys.length; i++) {
        if(containsEnglishLetter(alphabetListKeys[i].textContent)) {
          const parentElement = alphabetListKeys[i].closest(".js-autor-filter-list")
          parentElement.style.display = 'none'
        } else {
          const parentElement = alphabetListKeys[i].closest(".js-autor-filter-list")
          parentElement.style.display = 'block'
        }
      }
    } else {
      for(let i = 0; i < alphabetListKeys.length; i++) {
        if(!containsEnglishLetter(alphabetListKeys[i].textContent)) {
          const parentElement = alphabetListKeys[i].closest(".js-autor-filter-list")
          parentElement.style.display = 'none'
        } else {
          const parentElement = alphabetListKeys[i].closest(".js-autor-filter-list")
          parentElement.style.display = 'block'
        }
      }
    }
  }
 
  toggleAutorLangBtn.addEventListener('click', () => {
    if (alphabetBlocks) {
      alphabetBlocks.forEach((block) => {
        block.classList.toggle('hidden');
      });

      toggleAutorLangBtn.innerHTML = toggleAutorLangBtn.innerHTML === '<span>А</span><span class="px-6">-</span><span>Я</span>' ? '<span>A</span><span class="px-6">-</span><span>Z</span>' : '<span>А</span><span class="px-6">-</span><span>Я</span>';

      if (dropdownAuthorList) {
        dropdownAuthorList.forEach((list) => {
          list.classList.toggle('hidden');
        });
      }

    }

    setTimeout(() => {
      alphabetToggler()
    },0)

  });

  alphabetToggler()
}




const authorsData = {
  А: [
    'А-Кун Дидье (1 книга)',
    'Ааронович Бен (1 книга)',
    'А-Кун Дидье (1 книга)',
    'Ааронович Бен (1 книга)',
    'А-Кун Дидье (1 книга)',
    'Ааронович Бен (1 книга)',
  ],
  Б: ['Б-Кун Дидье (1 книга)', 'Баронович Бен (1 книга)'],
  В: ['В-Кун Дидье (1 книга)', 'Варонович Бен (1 книга)'],
  Г: ['Г-Кун Дидье (1 книга)', 'Гаронович Бен (1 книга)'],
  Д: ['А-Кун Дидье (1 книга)', 'Ааронович Бен (1 книга)'],
  Е: ['Б-Кун Дидье (1 книга)', 'Баронович Бен (1 книга)'],
  Ж: ['В-Кун Дидье (1 книга)', 'Варонович Бен (1 книга)'],
  З: ['Г-Кун Дидье (1 книга)', 'Гаронович Бен (1 книга)'],
  И: ['А-Кун Дидье (1 книга)', 'Ааронович Бен (1 книга)'],
  К: ['Б-Кун Дидье (1 книга)', 'Баронович Бен (1 книга)'],
  Л: ['В-Кун Дидье (1 книга)', 'Варонович Бен (1 книга)'],
  М: ['Г-Кун Дидье (1 книга)', 'Гаронович Бен (1 книга)'],
  Н: ['А-Кун Дидье (1 книга)', 'Ааронович Бен (1 книга)'],
  О: ['Б-Кун Дидье (1 книга)', 'Баронович Бен (1 книга)'],
  П: ['В-Кун Дидье (1 книга)', 'Варонович Бен (1 книга)'],
  Р: ['Г-Кун Дидье (1 книга)', 'Гаронович Бен (1 книга)'],
  С: ['А-Кун Дидье (1 книга)', 'Ааронович Бен (1 книга)'],
  Т: ['Б-Кун Дидье (1 книга)', 'Баронович Бен (1 книга)'],
  У: ['В-Кун Дидье (1 книга)', 'Варонович Бен (1 книга)'],
  Ф: ['Г-Кун Дидье (1 книга)', 'Гаронович Бен (1 книга)'],
  Х: ['А-Кун Дидье (1 книга)', 'Ааронович Бен (1 книга)'],
  Ц: ['Б-Кун Дидье (1 книга)', 'Баронович Бен (1 книга)'],
  Ч: ['В-Кун Дидье (1 книга)', 'Варонович Бен (1 книга)'],
  Ш: ['Г-Кун Дидье (1 книга)', 'Гаронович Бен (1 книга)'],
  Щ: ['А-Кун Дидье (1 книга)', 'Ааронович Бен (1 книга)'],
  Ы: ['Б-Кун Дидье (1 книга)', 'Баронович Бен (1 книга)'],
  Э: ['В-Кун Дидье (1 книга)', 'Варонович Бен (1 книга)'],
  Ю: ['Г-Кун Дидье (1 книга)', 'Гаронович Бен (1 книга)'],
  Я: ['Г-Кун Дидье (1 книга)', 'Гаронович Бен (1 книга)'],
};

let currentPage = 1;
const itemsPerPage = 6;
const maxPages = Math.ceil(Object.keys(authorsData).length / itemsPerPage);
const prevButtonPag = document.querySelector('.js-rm-pag-nav-page-back-bnt');

function generateAuthorElement(author) {
  const listItem = document.createElement('li');
  const authorLink = document.createElement('a');
  authorLink.href = '#';
  authorLink.textContent = author;
  authorLink.classList.add('text-l', 'text-text');

  listItem.appendChild(authorLink);
  return listItem;
}

function showAuthorsByPage(page) {
  const container = document.getElementById('authorsContainer');
  if (container) {
    container.innerHTML = '';
  }

  const letters = Object.keys(authorsData).slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  letters.forEach((letter) => {
    const authorsList = authorsData[letter];
    if (authorsList) {
      const letterBlock = document.createElement('div');
      letterBlock.classList.add('text-5xl', 'md:text-2xl');
      letterBlock.textContent = letter;

      const authorsListElem = document.createElement('ul');
      authorsListElem.classList.add(
        'grid',
        'mt-32',
        'list-none',
        'grid-cols-3',
        'gap-x-17',
        'gap-y-12',
        'md:grid-cols-none'
      );

      authorsList.forEach((author) => {
        const listItem = generateAuthorElement(author);
        authorsListElem.appendChild(listItem);
      });

      letterBlock.appendChild(authorsListElem);
      if (container) {
        container.appendChild(letterBlock);
      }
    }
  });
}

showAuthorsByPage(currentPage);

const loadNextBtns = document.querySelectorAll('.loadNextBtn');

function handleNextButtonClick() {
  const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
  if (currentChosen) {
    currentChosen.classList.remove('js-chosen-nav-btn');
  }

  if (currentChosen.nextElementSibling) {
    currentChosen.nextElementSibling.classList.add('js-chosen-nav-btn');
  } else {
    const nextPageNumber = parseInt(currentChosen.innerText, 10) + 1;
    const newButton = document.createElement('button');
    newButton.classList.add(
      'pagination-nav-page-button',
      'js-rm-pag-nav-page-btn',
      'js-chosen-nav-btn'
    );
    newButton.innerText = nextPageNumber;
    buttonsPag.appendChild(newButton);
  }
}

if (loadNextBtns) {
  loadNextBtns.forEach((loadNextBtn) => {
    loadNextBtn.addEventListener('click', () => {
      if (currentPage < Math.ceil(Object.keys(authorsData).length / 6)) {
        currentPage++;
        showAuthorsByPage(currentPage);
      }

      if (currentPage > 1) {
        prevButtonPag.classList.remove('!hidden');
      }
      if (currentPage === maxPages) {
        loadNextBtns.forEach((btn) => {
          btn.classList.add('!hidden');
        });
      }
      handleNextButtonClick();
    });
  });
}

function handlePrevButtonClick() {
  const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
  if (currentChosen) {
    currentChosen.classList.remove('js-chosen-nav-btn');
  }
  if (currentChosen.previousElementSibling) {
    currentChosen.previousElementSibling.classList.add('js-chosen-nav-btn');
  }
}

const loadPrevBtn = document.getElementById('loadPrevBtn');
if (loadPrevBtn) {
  loadPrevBtn.addEventListener('click', () => {
    currentPage--;
    showAuthorsByPage(currentPage);

    if (currentPage === 1) {
      prevButtonPag.classList.add('!hidden');
    }
    if (currentPage < maxPages) {
      loadNextBtns.forEach((btn) => {
        btn.classList.remove('!hidden');
      });
    }
    handlePrevButtonClick();
  });
}

const buttonsPag = document.querySelector('.nav-btns');

if (buttonsPag) {
  buttonsPag.addEventListener('click', (event) => {
    const currentChosen = buttonsPag.querySelector('.js-chosen-nav-btn');
    const target = event.target.closest('.js-rm-pag-nav-page-btn');

    if (!target || target === currentChosen) return;

    if (currentChosen) {
      currentChosen.classList.remove('js-chosen-nav-btn');
    }
    target.classList.add('js-chosen-nav-btn');
    currentPage = target.innerText.trim();
    if (currentPage < maxPages) {
      loadNextBtns.forEach((btn) => {
        btn.classList.remove('!hidden');
      });
    }
    if (currentPage == 1) {
      loadPrevBtn.classList.add('!hidden');
    }

    if (currentPage == maxPages) {
      loadNextBtns.forEach((btn) => {
        btn.classList.add('!hidden');
      });
      loadPrevBtn.classList.remove('!hidden');
    }
    showAuthorsByPage(currentPage);
  });
}
