document.addEventListener('DOMContentLoaded', function () {
  const brandDropdowns = document.querySelectorAll(
    '.js-brand-description-dropdown'
  );

  if (brandDropdowns.length) {
    for (let i = 0; i < brandDropdowns.length; i++) {
      brandDropdowns[i].addEventListener('click', function (e) {
        const checkboxes = brandDropdowns[i].getElementsByTagName('input');
        let checkedRows = 0;
        const dropdownCounter = brandDropdowns[i].querySelector(
          '.js-brand-dropdown-counter'
        );

        for (let j = 0; j < checkboxes.length; j++) {
          if (checkboxes[j].checked) {
            checkedRows++;
          }
        }

        if (checkedRows) {
          dropdownCounter.textContent = `(${checkedRows})`;
        }
      });
    }
  }
});
