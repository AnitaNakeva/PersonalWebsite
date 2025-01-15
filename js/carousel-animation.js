const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

let currentIndex = 2;
const totalItems = $$(".list li").length;

function updateClasses() {
  const items = $$(".list li");

  items.forEach((item, index) => {
    const position = (index - currentIndex + totalItems) % totalItems;

    item.className = "";

    if (position === 0) {
      item.classList.add("prev");
    } else if (position === 1) {
      item.classList.add("act");
    } else if (position === 2) {
      item.classList.add("next");
    } else if (position < totalItems / 2) {
      item.classList.add("hide");
    } else {
      item.classList.add("new-next");
    }
  });
}

function next() {
  currentIndex = (currentIndex + 1) % totalItems; // modular substraction to make it start from the beginning if it reaches the end
  updateClasses();
}

function prev() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // modular substraction to make it start from the beginning if it reaches the end
  updateClasses();
}

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

function initializeCarousel() {
  updateClasses();
  addEventListeners();
}

document.addEventListener("DOMContentLoaded", initializeCarousel);
