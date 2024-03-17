const callButton = document.querySelectorAll('.aside-footer__button--chat');
const asideMenu = document.querySelector('.aside-status');
const closeCall = document.querySelector('.aside-status__close-button');
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-status');
  mainContent.classList.add('status-blur');
  overlay.style.display = overlay.classList.contains('hidden') ? 'none' : 'block';
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-status');
  mainContent.classList.remove('status-blur');
  overlay.style.display = overlay.classList.contains('overlay') ? 'none' : 'block';
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};

overlay.addEventListener('click', function(){
  overlay.style.display = 'none'
  asideMenu.classList.remove('hide-status');
})

