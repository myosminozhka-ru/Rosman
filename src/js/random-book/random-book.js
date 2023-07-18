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
