function openReviewPopup(event) {
  let review = event.target.closest(".review");

  review.classList.add("review--popup");
  overlay.classList.add("overlay--show");
  reviews.removeEventListener('click', openReviewPopup);
}

function closeReviewPopup(event) {
  let popup = reviews.querySelector(".review--popup");
  if (!popup) return ;

  if (!popup.contains(event.target)) {
    overlay.classList.remove("overlay--show");
    reviews.querySelector(".review--popup").classList.remove("review--popup");
    reviews.addEventListener('click', openReviewPopup);
    return ;
  }
}

let reviews = document.querySelector(".reviews__list");
let overlay = document.querySelector(".overlay");

reviews.addEventListener('click', openReviewPopup);
document.addEventListener('click', closeReviewPopup);