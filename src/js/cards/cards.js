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
console.log(traceableItems);
for (let i = 0; i < traceableItems.length; i++) {
  traceableItems[i].addEventListener("mouseenter", function (event) {
    const colors = [
      "#06083D",
      "#311166",
      "#1F1871",
      "#1F1871",
      "#0070EA",
      "#4498FC",
      "#4B65CD",
      "#808080",
      "#AF74E9",
      "#33C15B",
      "#FFF145",
      "#D9D9D9",
      "#F5F5F5",
      // "#ffffff",
      "#E3E3E2",
      "#FF0053",
      "#FF8500",
      "#F46300",
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
