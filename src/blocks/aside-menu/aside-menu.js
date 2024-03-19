const burger = document.querySelector('.header_navigation__burger');
const aside = document.querySelector('.aside-menu');
const closeButton = document.querySelector('.aside-menu__button--close');
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');
const overlay = document.querySelector('.overlay');



document.addEventListener('keydown', function(event){
  if (event.key === 'Escape'){
    overlay.style.display = 'none';
  }
})

burger.addEventListener('click', function (){
  aside.classList.add('hide-aside');
  overlay.style.display = overlay.classList.contains('hidden') ? 'none' : 'block';
  
});



closeButton.addEventListener('click', function (){
  aside.classList.remove('hide-aside');
  overlay.style.display = overlay.classList.contains('overlay') ? 'none' : 'block';

});

overlay.addEventListener('click', function(){
  overlay.style.display = 'none'
  aside.classList.remove('hide-aside');
})



