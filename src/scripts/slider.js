const slider = $('.offers').bxSlider({
  pager: false,
  controls: false,
});

$('.offers-slider__arrow--direction--prev').click(e => {
slider.goToPrevSlide();
});

$('.offers-slider__arrow--direction--next').click(e => {
  slider.goToNextSlide();
})