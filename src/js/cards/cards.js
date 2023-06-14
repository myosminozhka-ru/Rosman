// карточкам будет дан специальный класс - js_traceable_item,
// а элементам js-bg-changeable, которые будут менять фон,- js-hovered,
// событие будет генерироваться на заход в целом на карточку - mouseenter/mouseleave

// по поводу изменения картинки при нажатии на сердечко
// своя функция тут будет

const addToFavBtns = document.getElementsByClassName(
  "item_card_add_to_favourite"
);
for (let i = 0; i < addToFavBtns.length; i++) {
  addToFavBtns[i].addEventListener("click", function () {
    const button = this;
    button.classList.toggle("js_pressed");
  });
}

// функция для изменения фона рандомно для блока новостей и наград,

const traceableItems = document.getElementsByClassName("js_traceable_item");
for (let i = 0; i < traceableItems.length; i++) {
  traceableItems[i].addEventListener("mouseenter", function (event) {
    const colors = [
        // остались цвета, гармонирующие с попапом
      "#FFF145", // +
      "#FF8500", // +
      "#35CC66", // +
      "#4498FC", // +
      "#FF0053", // +
    ];
    function getRandomColor(colorArray) {
      if (colorArray.length === 0) {
        return "#ffffff";
      }
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      return colorArray[randomIndex];
    }
    this.style.backgroundColor = getRandomColor(colors);
  });
}

for (let i = 0; i < traceableItems.length; i++) {
  traceableItems[i].addEventListener("mouseleave", function (event) {
    this.style.backgroundColor = "white";
  });
}


