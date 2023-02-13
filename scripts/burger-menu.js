let hamburger = document.querySelector(".hamburger");
let pageHeader = document.querySelector(".page-header");

function toggleBurgerMenu() {
  let logo = pageHeader.querySelector(".logo img");
  let overlay = document.querySelector(".overlay");


  pageHeader.classList.toggle("page-header--burger-menu");
  overlay.classList.toggle("overlay--show");

  logo.src = logo.currentSrc.includes("burger-menu") ? "assets/icons/logo.png" : "assets/icons/logo-burger-menu.png";
}

function handleClick(event) {
  if (pageHeader.classList.contains("page-header--burger-menu") && !pageHeader.contains(event.target))
  toggleBurgerMenu();
}

hamburger.addEventListener('click', toggleBurgerMenu)
document.addEventListener('click', handleClick);
