// popups

var buyButtons = document.querySelectorAll('.product-button-buy');
var mapLink = document.querySelector('.about-us__link');

var basketPopup = document.querySelector('.modal-basket');
var mapPopup = document.querySelector('.modal-map');


var closePopupButtons = document.querySelectorAll('.modal-close');
var continueButton = document.querySelector('.modal-bascket-button-continue');


mapLink && mapLink.addEventListener('click', function (e) {
  e.preventDefault();
  mapPopup.classList.add('modal-show');
});

continueButton.addEventListener('click', function (e) {
  e.preventDefault();
  basketPopup.classList.remove('modal-show');
});

for (var i = 0; i < closePopupButtons.length; i++) {
  closePopupButtons[i].addEventListener('click', function () {
    document.querySelector('.modal-show').classList.remove('modal-show');
  });
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27 && document.querySelector('.modal-show')) {
    e.preventDefault();
    document.querySelector('.modal-show').classList.remove('modal-show');
  }
});

var feedbackButton = document.querySelector('.button-feedback');
var feedbackPopup = document.querySelector('.modal-feedback');

feedbackButton && feedbackButton.addEventListener('click', function (e) {
  e.preventDefault();
  feedbackPopup.classList.add('modal-show');
