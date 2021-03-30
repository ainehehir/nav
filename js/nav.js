const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

// when the toggle button is clicked add the show-links class
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
