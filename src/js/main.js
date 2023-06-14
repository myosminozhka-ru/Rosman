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
    if (content.classList.contains("active-js")) {
      content.classList.remove("active-js");
    } else {
      // content.style.display = "block";
      content.classList.add("active-js");
    }
  });
}

document.addEventListener("click", function(event) {
  const block = document.querySelector(".more-down-button.out.active-js");
  const targetElement = event.target;
  if (block != null) {
    if (!block.contains(targetElement) && !targetElement.parentNode.classList.contains('more-down-content')) {
    for (let i = 0; i < moreButtons.length; i++) {
      if ( moreButtons[i].classList.contains("active-js") ) {
        moreButtons[i].nextElementSibling.classList.remove("active-js")
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

const movingBlock = document.getElementById("moving-block");

document.addEventListener("mousemove", function(event) {
  const windowWidth = window.innerWidth;
  const blockWidth = movingBlock.offsetWidth;

  // Вычисляем позицию блока на основе позиции мыши и ширины окна
  let blockX = event.clientX - blockWidth / 2;

  // Вычисляем наклон блока в зависимости от позиции мыши
  let tilt = ((blockX / windowWidth)) * 6;

  // Применяем наклон к блоку с помощью свойства transform
   movingBlock.style.transform = `rotate(${tilt}deg)`;

   // добавляем тень блоку в зависимости от расположения мышки
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let boxRect = movingBlock.getBoundingClientRect();
  let boxCenterX = boxRect.left + boxRect.width / 2;
  let boxCenterY = boxRect.top + boxRect.height / 10;
  let offsetX = -(mouseX - boxCenterX) * 0.1;
  let offsetY = -(mouseY - boxCenterY) * 0.1;
  movingBlock.style.boxShadow = offsetX + 'px ' + offsetY + 'px 10px 5px rgba(0, 0, 0, 0.2)';
})

function toggleSearch() {
  let headerNav = document.querySelector('.header-nav')
  let searchInput = document.querySelector('.search-input')
  if (headerNav.classList.contains("hide")) {
    headerNav.classList.remove("hide");
  } else {
    headerNav.classList.add("hide");
  }
  if (searchInput.classList.contains("hide")) {
    searchInput.classList.remove("hide");
  } else {
    searchInput.classList.add("hide");
  }

}
function changeLang(lang) {
  let eng = document.querySelector('.eng-lang')
  let rus = document.querySelector('.rus-lang')
  if (lang ===  'eng') {
    rus.classList.remove("active-js");
    eng.classList.add("active-js");
  } else {
    rus.classList.add("active-js");
    eng.classList.remove("active-js");
  }
}
const yellowMovingBlock = document.getElementById("yellow-moving-block");

document.addEventListener("mousemove", function(event) {
  const windowWidth = window.innerWidth;
  const blockWidth = yellowMovingBlock.offsetWidth;

  // Вычисляем позицию блока на основе позиции мыши и ширины окна
  let blockX = event.clientX - blockWidth / 2;

  // Вычисляем наклон блока в зависимости от позиции мыши
  let tilt = -((blockX / windowWidth)) * 6;

  // Применяем наклон к блоку с помощью свойства transform
  yellowMovingBlock.style.transform = `rotate(${tilt}deg)`;

})
var isMoving = false;

document.addEventListener("mousemove", function(event) {

  var follower = document.getElementById("follower");
  var parent = document.getElementById("parent");
  var parentRect = parent.getBoundingClientRect();
  var x = event.clientX - parentRect.left;
  var newX = parentRect.width - x - follower.offsetWidth; // Вычисляем новое положение в противоположной стороне
  newX = Math.max(0, Math.min(newX, parentRect.width - follower.offsetWidth));


  if (!isMoving) {
    isMoving = true;
    follower.style.transform = "translateX(" + newX + "px)"; // Используем translateX для перемещения блока


    setTimeout(function() {
      isMoving = false;
    }, 500); // Задержка в 200 миллисекунд
  }
  if (isMoving) {}
});
function scrollContent(direction) {
  var container = document.getElementById('elephant-container');
  var content = document.getElementById('elephant-slider');

  if (direction === 'left') {
    container.scrollLeft -= 400; // Измените значение 100 на желаемое расстояние для перемещения влево
  } else if (direction === 'right') {
    container.scrollLeft += 400; // Измените значение 100 на желаемое расстояние для перемещения вправо
  }
}
const elephantDownButtons = document.getElementsByClassName("elephant-more-down-button");
const elephantUpButtons = document.getElementsByClassName("elephant-more-up-button");

for (let i = 0; i < elephantDownButtons.length; i++) {
  elephantDownButtons[i].addEventListener("click", function() {
    const content = this.nextElementSibling;
    if (this.classList.contains("active-js")) {
      this.classList.remove("active-js")
    } else {
      this.classList.add("active-js");
    }
    if (content.classList.contains("active-js")) {
      content.classList.remove("active-js");
    } else {
      // content.style.display = "block";
      content.classList.add("active-js");
    }
  });
}

for (let i = 0; i < elephantUpButtons.length; i++) {
  elephantUpButtons[i].addEventListener("click", function() {
    const content = this.previousElementSibling;
    if (this.classList.contains("active-js")) {
      this.classList.remove("active-js")
    } else {
      this.classList.add("active-js");
    }
    if (content.classList.contains("active-js")) {
      content.classList.remove("active-js");
    } else {
      // content.style.display = "block";
      content.classList.add("active-js");
    }
  });
}
