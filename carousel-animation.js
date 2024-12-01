const $ = selector => document.querySelector(selector);

// Image paths for the slider
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
  if ($(".hide")) {
    $(".hide").remove();
  }

  if ($(".prev")) {
    $(".prev").classList.add("hide");
    $(".prev").classList.remove("prev");
  }

  $(".act").classList.add("prev");
  $(".act").classList.remove("act");

  $(".next").classList.add("act");
  $(".next").classList.remove("next");

  $(".new-next").classList.remove("new-next");

  currentIndex = (currentIndex + 1) % imagePaths.length;
  const addedEl = document.createElement("li");
  const img = document.createElement("img");
  img.src = imagePaths[currentIndex];
  img.alt = `Certificate ${currentIndex + 1}`;
  addedEl.appendChild(img);
  $(".list").appendChild(addedEl);
  addedEl.classList.add("next", "new-next");
}

function prev() {
  $(".new-next").remove();

  $(".next").classList.add("new-next");

  $(".act").classList.add("next");
  $(".act").classList.remove("act");

  $(".prev").classList.add("act");
  $(".prev").classList.remove("prev");

  $(".hide").classList.add("prev");
  $(".hide").classList.remove("hide");

  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  const addedEl = document.createElement("li");
  const img = document.createElement("img");
  img.src = imagePaths[currentIndex];
  img.alt = `Certificate ${currentIndex + 1}`;
  addedEl.appendChild(img);
  $(".list").insertBefore(addedEl, $(".list").firstChild);
  addedEl.classList.add("hide");
}

const slider = $(".list"),
  swipe = new Hammer($(".swipe"));

slider.onclick = event => {
  if (event.target.closest("li").classList.contains("next")) {
    next();
  } else if (event.target.closest("li").classList.contains("prev")) {
    prev();
  }
};

swipe.on("swipeleft", () => {
  next();
});

swipe.on("swiperight", () => {
  prev();
});
