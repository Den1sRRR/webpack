const callButton = document.querySelectorAll('.aside-footer__button--call');
const asideMenu = document.querySelector('.aside-call');
const closeCall = document.querySelector('.aside-call__close-button');
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-call');
  mainContent.classList.add('call-blur');
  overlay.style.display = overlay.classList.contains('hidden') ? 'none' : 'block';
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-call');
  mainContent.classList.remove('call-blur');
  overlay.style.display = overlay.classList.contains('overlay') ? 'none' : 'block';
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};

overlay.addEventListener('click', function(){
    overlay.style.display = 'none'
    asideMenu.classList.remove('hide-call');
    mainContent.classList.remove('call-blur');
})
