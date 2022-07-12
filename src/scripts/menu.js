const openButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.fullscreen-menu__close');
const fullMenu = document.querySelector('.fullscreen-menu');


$('.menu__item').click(e => {
  fullMenu.style.left = '150vw'
})

openButton.addEventListener('click', function(e) {
  e.preventDefault
  fullMenu.style.left = '0vw';
});

closeButton.addEventListener('click', function(e) {
  e.preventDefault
  fullMenu.style.left = '150vw'
});



