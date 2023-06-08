const buttonsPag = document.querySelector(".nav-btns");

buttonsPag.addEventListener("click", (event) => {
  const currentChosen = buttonsPag.querySelector(".js-chosen-nav-btn");
  const target = event.target.closest(".js-rm-pag-nav-page-btn");

  if (!target || target === currentChosen) return;

  if (currentChosen) {
    currentChosen.classList.remove("js-chosen-nav-btn");
  }

  target.classList.add("js-chosen-nav-btn");
  return target.innerText;
});