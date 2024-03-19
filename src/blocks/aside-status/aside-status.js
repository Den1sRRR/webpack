const callButton = document.querySelectorAll('.aside-footer__button--chat');
const asideMenu = document.querySelector('.aside-status');
const closeCall = document.querySelector('.aside-status__close-button');
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');
const overlay_status = document.querySelector(".overlay_status")

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-status');
  // mainContent.classList.add('status-blur');
  overlay_status.style.display = overlay_status.classList.contains('hidden') ? 'none' : 'block';
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-status');
  // mainContent.classList.remove('status-blur');
  overlay_status.style.display = overlay_status.classList.contains('overlay_status') ? 'none' : 'block';
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};

overlay_status.addEventListener('click', function(){
  overlay_status.style.display = 'none'
  asideMenu.classList.remove('hide-status');
})

