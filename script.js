// Select the SVG path
const path = document.querySelector("svg path");

// Dynamically calculate the path length
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

// Animate the line
gsap.to(path, {
    strokeDashoffset: 0, // Reveal the path
    duration: 1.5, // Animation duration
    ease: "power2.out", // Smooth easing
});
