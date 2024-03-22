const callButton = document.querySelectorAll('.round_button--call');
const asideMenu = document.querySelector('.aside-call');
const closeCall = document.querySelector('.aside-call__close-button');
const mainContent = document.querySelector('main');
const bodyContent = document.querySelector('body');
const overlay_aside = document.querySelector(".overlay_aside")

const listener = function(button) {
 button.addEventListener('click', function(){
  asideMenu.classList.add('hide-call');
  // mainContent.classList.add('call-blur');
  overlay_aside.style.display = overlay_aside.classList.contains('hidden') ? 'none' : 'block';
 });
}

closeCall.addEventListener('click', function(){
  asideMenu.classList.remove('hide-call');
  // mainContent.classList.remove('call-blur');
  overlay_aside.style.display = overlay_aside.classList.contains('overlay_aside') ? 'none' : 'block';
});

for(let i = 0; i < callButton.length; i++) {
  listener(callButton[i]);
};

overlay_aside.addEventListener('click', function(){
    overlay_aside.style.display = 'none'
    asideMenu.classList.remove('hide-call');
    // mainContent.classList.remove('call-blur');
})
