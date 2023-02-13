let items = document.querySelectorAll(".carousel__item");
let currentItem = 0;
let isEnabled = true;

document.querySelector(".carousel__control--left").addEventListener('click', showLeftItems);

document.querySelector(".carousel__control--right").addEventListener('click', showRightItems);

function changeCurrentItem(n) {
  currentItem = Math.round(Math.random() * (items.length - 1));
  if (n === currentItem) changeCurrentItem(n);
}

function hideItem (direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove("carousel__item--active", direction);
  })
}

function showItem (direction) {
  items[currentItem].classList.add("carousel__item--next", direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove("carousel__item--next", direction);
    this.classList.add("carousel__item--active");
    isEnabled = true;
  })
}

function showLeftItems() {
  if (!isEnabled) return ;
  hideItem('to-right');
  changeCurrentItem(currentItem);
  showItem('from-left');
}

function showRightItems() {
  if (!isEnabled) return ;
  hideItem('to-left');
  changeCurrentItem(currentItem);
  showItem('from-right');
}