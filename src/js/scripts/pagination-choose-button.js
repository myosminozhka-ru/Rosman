const toggleBtn = document.querySelector('.js-alphabet-toggle-btn');
const alphabetBlocks = document.querySelectorAll('.js-alphabet');
const dropdownAuthorList = document.querySelectorAll('.dd-author-list')


toggleBtn.addEventListener('click', () => {
  if (alphabetBlocks) {
    alphabetBlocks.forEach((block) => {
      block.classList.toggle('hidden');
    });
    toggleBtn.innerHTML = toggleBtn.innerHTML === 'А-Я' ? 'A-Z' : 'А-Я'

    if (dropdownAuthorList) {
      dropdownAuthorList.forEach(list => {
        list.classList.toggle("hidden")
      })
    }
  }

});


