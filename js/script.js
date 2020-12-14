var MapPopup = document.querySelector('.modal-map');
var FeedbackPopup = document.querySelector('.modal-feedback');
var BascketPopup = document.querySelector('.modal-bascket');

var BuyButton = document.querySelector('.product-button-buy');
var FeedbackButton = document.querySelector('.about-us-button-wide');
var MapButton = document.querySelector('.about-us__link');
var ModalClose = document.querySelector('.modal-close');

FeedbackButton.addEventListener('click', function (e){
  e.preventDefault();
  FeedbackPopup.classList.add('modal-active');
});

BuyButton.addEventListener('click', function (e){
  e.preventDefault();
  BascketPopup.classList.add('modal-active');
});

MapButton.addEventListener('click', function (e){
  e.preventDefault();
  MapPopup.classList.add('modal-active');
});

ModalClose.addEventListener('click', function (e){
  e.preventDefault();
  FeedbackPopup.classList.remove('modal-active');
  MapPopup.classList.remove('modal-active');
  BascketPopup.classList.remove('modal-active');
});
