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


window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27 && document.querySelector('.modal-active')) {
    e.preventDefault();
    document.querySelector('.modal-active').classList.remove('modal-active');
  }
});

//services-slider

var serviceSlides = document.querySelectorAll('.servises-slide');
var serviceTabs = document.querySelectorAll('.servises-slider-button');

if (serviceSlides.length) {
  for (var i = 0; i < serviceTabs.length; i++) {
    serviceTabs[i].addEventListener('click', function (e) {
      document.querySelector('.slide-active').classList.remove('slide-active');
      document.querySelector('.servises-slider-button-active').classList.remove('servises-slider-button-active');

      serviceSlides[e.target.dataset.slide].classList.add('slide-active');
      serviceTabs[e.target.dataset.slide].classList.add('servises-slider-button-active');
    })
  }
}
