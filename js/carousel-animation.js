const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const imagePaths = [
  "images/c1.png",
  "images/c2.png",
  "images/c3.png",
  "images/c4.png",
  "images/c5.png",
  "images/c6.png",
  "images/c7.png",
  "images/c8.png"
];

let currentIndex = 2; // Централният (активен) елемент.

// Обновява класовете на елементите според currentIndex
function updateClasses() {
  const items = $$(".list li");
  const totalItems = items.length;

  items.forEach((item, index) => {
    const position = (index - currentIndex + totalItems) % totalItems;

    // Премахваме всички класове първо
    item.className = "";

    // Задаваме правилния клас според позицията
    if (position === 0) {
      item.classList.add("prev");
      item.style.transform = "translateX(-100%) scale(0.85)"; // Излиза наляво
      item.style.opacity = "0.5";
      item.style.zIndex = "1";
    } else if (position === 1) {
      item.classList.add("act");
      item.style.transform = "translateX(0) scale(1)"; // Централен
      item.style.opacity = "1";
      item.style.zIndex = "3";
    } else if (position === 2) {
      item.classList.add("next");
      item.style.transform = "translateX(100%) scale(0.85)"; // Влиза отдясно
      item.style.opacity = "0.5";
      item.style.zIndex = "2";
    } else {
      item.classList.add("hide");
      item.style.transform = "translateX(200%) scale(0.8)"; // Скрито надясно
      item.style.opacity = "0";
      item.style.zIndex = "0";
    }
  });
}

// Придвижва слайдера напред
function next() {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  updateClasses();
}

// Придвижва слайдера назад
function prev() {
  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  updateClasses();
}

// Създава елементите на слайдера веднъж
function initializeSlider() {
  const list = $(".list");

  imagePaths.forEach((path, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = path;
    img.alt = `Certificate ${index + 1}`;
    li.appendChild(img);
    list.appendChild(li);
  });

  updateClasses();
}

// Добавя слушатели за взаимодействие
function addEventListeners() {
  const list = $(".list");

  list.addEventListener("click", event => {
    const target = event.target.closest("li");
    if (target && target.classList.contains("next")) {
      next();
    } else if (target && target.classList.contains("prev")) {
      prev();
    }
  });
}

// Инициализация на слайдера при зареждане на страницата
initializeSlider();
addEventListeners();
