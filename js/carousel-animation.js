const $ = selector => document.querySelector(selector);

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

let currentIndex = 2;

function next() {
  const hideEl = $(".hide");
  if (hideEl) hideEl.remove();

  const prevEl = $(".prev");
  if (prevEl) {
    prevEl.classList.add("hide");
    prevEl.classList.remove("prev");
  }

  const actEl = $(".act");
  if (actEl) {
    actEl.classList.add("prev");
    actEl.classList.remove("act");
  }

  const nextEl = $(".next");
  if (nextEl) {
    nextEl.classList.add("act");
    nextEl.classList.remove("next");
  }

  const newNextEl = $(".new-next");
  if (newNextEl) newNextEl.classList.remove("new-next");

  currentIndex = (currentIndex + 1) % imagePaths.length;
  const newNextItem = document.createElement("li");
  const img = document.createElement("img");
  img.src = imagePaths[currentIndex];
  img.alt = `Certificate ${currentIndex + 1}`;
  newNextItem.appendChild(img);
  $(".list").appendChild(newNextItem);
  newNextItem.classList.add("next", "new-next");
}

function prev() {
  const newNextEl = $(".new-next");
  if (newNextEl) newNextEl.remove();

  const nextEl = $(".next");
  if (nextEl) nextEl.classList.add("new-next");

  const actEl = $(".act");
  if (actEl) {
    actEl.classList.add("next");
    actEl.classList.remove("act");
  }

  const prevEl = $(".prev");
  if (prevEl) {
    prevEl.classList.add("act");
    prevEl.classList.remove("prev");
  }

  const hideEl = $(".hide");
  if (hideEl) {
    hideEl.classList.add("prev");
    hideEl.classList.remove("hide");
  }

  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  const newPrevItem = document.createElement("li");
  const img = document.createElement("img");
  img.src = imagePaths[currentIndex];
  img.alt = `Certificate ${currentIndex + 1}`;
  newPrevItem.appendChild(img);
  $(".list").insertBefore(newPrevItem, $(".list").firstChild);
  newPrevItem.classList.add("hide");
}

document.querySelector(".list").addEventListener("click", event => {
  if (event.target.closest("li").classList.contains("next")) {
    next();
  } else if (event.target.closest("li").classList.contains("prev")) {
    prev();
  }
});