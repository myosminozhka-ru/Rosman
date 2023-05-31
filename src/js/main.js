window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
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