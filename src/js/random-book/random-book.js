const randomBookButton = document.querySelector('.js-randomize-book');
if (randomBookButton) {
  randomBookButton.addEventListener('click', function (event) {
    const activeDropDownsButtons = document.querySelectorAll(
      '.more-down-button.active-js'
    );
    const activeDropDownsContent = document.querySelectorAll(
      '.more-down-content.active-js'
    );

    const checkboxElements = document.querySelectorAll(
      '.js-footer-heading-policy-agreement.checkbox_main input:checked'
    );

    activeDropDownsButtons.forEach(function (activeDDB) {
      activeDDB.classList.toggle('active-js');
    });
    activeDropDownsContent.forEach(function (activeDDC) {
      activeDDC.classList.toggle('active-js');
    });
    checkboxElements.forEach(function (checkbox) {
      checkbox.checked = false;
    });

    randomBookButton.innerText = 'Подобрать ещё раз';
  });
}
