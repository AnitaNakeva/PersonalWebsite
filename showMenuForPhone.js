const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

function toggleMenu() {
  navbar.classList.toggle('open');
  hamburgerMenu.classList.toggle('hidden');
}

hamburgerMenu.addEventListener('click', toggleMenu);

// Close navbar when a link is clicked
const navbarLinks = document.querySelectorAll('.navbar-link');
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
    hamburgerMenu.classList.remove('hidden');
  });
});

// Close navbar when clicking outside of it
document.addEventListener('click', (event) => {
  // Check if the click is outside the navbar and the hamburger menu
  if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    if (navbar.classList.contains('open')) {
      navbar.classList.remove('open');
      hamburgerMenu.classList.remove('hidden');
    }
  }
});