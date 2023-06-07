//libraries like jquery etc
window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});
// дропдаун добавление класса active-js с отслеживанием клика вне блока
const moreButtons = document.getElementsByClassName("more-down-button");
for (let i = 0; i < moreButtons.length; i++) {
  moreButtons[i].addEventListener("click", function() {
    const content = this.nextElementSibling;
    if (this.classList.contains("active-js")) {
      this.classList.remove("active-js")
    } else {
      this.classList.add("active-js");
    }
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      content.classList.add("active-js");
    }
  });
}

document.addEventListener("click", function(event) {
  const block = document.querySelector(".more-down-button.out.active-js");
  const targetElement = event.target;
  if (block != null) {
    if (!block.contains(targetElement)) {
    for (let i = 0; i < moreButtons.length; i++) {
      if ( moreButtons[i].classList.contains("active-js")) {
        moreButtons[i].nextElementSibling.style.display = "none";
        moreButtons[i].classList.remove("active-js")
       }
      }
    }
  }
});
const buttons = document.getElementsByClassName("collapse-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const content = this.nextElementSibling;
    if (content.classList.contains("active")) {
      content.classList.remove("active");
    } else {
      // Закрытие других активных контентов
      const activeContent = document.querySelector(".collapse-content.active");

      if (activeContent) {
        activeContent.classList.remove("active");
      }
      content.classList.add("active");
    }
    if ( this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      const activeBtn = document.querySelector(".collapse-button.active");
      if (activeBtn) {
        activeBtn.classList.remove("active");
      }
      this.classList.add("active")
    }
  });
}