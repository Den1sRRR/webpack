import '../scss/style.scss'
import '../blocks/aside-menu/aside-menu'
import '../blocks/brands/brands'
import '../blocks/repair/repair'
import '../blocks/price/price'
import '../blocks/aside-call/aside-call'
import '../blocks/aside-status/aside-status'

console.log('Works!')






// function menuOpen() {
// 	const buttonBurgerMenu = document.querySelector('.header_navigation__burger');
// 	const overlay = document.querySelector('.overlay');
// 	const body = document.querySelector('body');
// 	const blockSidebar = document.querySelector('.aside-menu');

// 	function toggleClass() {
// 		buttonBurgerMenu.classList.toggle('burger-menu--active');
// 		overlay.classList.toggle('overlay--active');
// 		blockSidebar.classList.toggle('sidebar--active');
// 		body.classList.toggle('no-scroll');
// 	}

// 	function removeClass() {
// 		buttonBurgerMenu.classList.remove('burger-menu--active');
// 		overlay.classList.remove('overlay--active');
// 		blockSidebar.classList.remove('sidebar--active');
// 		body.classList.remove('no-scroll');
// 	}

// 	buttonBurgerMenu.addEventListener('click', toggleClass);
// 	overlay.addEventListener('click', removeClass);
// }

// function modal() {
// 	const buttonCallHeader = document.querySelector('#call-header');
// 	const buttonCallSidebar = document.querySelector('#call-sidebar');
// 	const buttonChatHeader = document.querySelector('#chat-header');
// 	const buttonChatSidebar = document.querySelector('#chat-sidebar');

// 	const modalCall = document.querySelector('.modal-call');
// 	const modalFeedback = document.querySelector('.modal-feedback');
// 	const overlay = document.querySelector('.overlay');
// 	const body = document.querySelector('body');
// 	const modalCallClose = document.querySelector('.modal-call__close');
// 	const modalFeedbackClose = document.querySelector('.modal-feedback__close');
// 	const sidebar = document.querySelector('.sidebar');

// 	function toggleClassCall() {
// 		modalCall.classList.toggle('modal-call--active');
// 		overlay.classList.toggle('overlay--active');
// 		body.classList.toggle('no-scroll');
// 	}

// 	function toggleClassChat() {
// 		modalFeedback.classList.toggle('modal-feedback--active');
// 		overlay.classList.toggle('overlay--active');
// 		body.classList.toggle('no-scroll');
// 	}

// 	function removeClass() {
// 		const burgerMenu = document.querySelector('.burger-menu');
// 		modalCall.classList.remove('modal-call--active');
// 		modalFeedback.classList.remove('modal-feedback--active');
// 		overlay.classList.remove('overlay--active');
// 		body.classList.remove('no-scroll');
// 		burgerMenu.classList.remove('burger-menu--active');
// 		sidebar.classList.remove('sidebar--active');
// 	}

// 	buttonCallSidebar.addEventListener('click', function () {
// 		if (window.scrollY > 0) {
// 			window.scrollTo(0, 0);
// 		}
// 		const burgerMenu = document.querySelector('.burger-menu');
// 		sidebar.classList.remove('sidebar--active');
// 		burgerMenu.classList.remove('burger-menu--active');
// 		modalCall.classList.add('modal-call--active');
// 		body.classList.add('no-scroll');
// 	});

// 	buttonChatSidebar.addEventListener('click', function () {
// 		if (window.scrollY > 0) {
// 			window.scrollTo(0, 0);
// 		}
// 		const burgerMenu = document.querySelector('.burger-menu');
// 		sidebar.classList.remove('sidebar--active');
// 		burgerMenu.classList.remove('burger-menu--active');
// 		modalFeedback.classList.add('modal-feedback--active');
// 		body.classList.add('no-scroll');
// 	});


// 	buttonChatHeader.addEventListener('click', toggleClassChat);
// 	buttonCallHeader.addEventListener('click', toggleClassCall);
// 	overlay.addEventListener('click', removeClass);
// 	modalCallClose.addEventListener('click', removeClass);
// 	modalFeedbackClose.addEventListener('click', removeClass);

// 	if (document.documentElement.clientWidth >= 1440) {
// 		buttonCallSidebar.addEventListener('click', function () {
// 			overlay.classList.add('overlay--active');
// 		});
// 		buttonChatSidebar.addEventListener('click', function () {
// 			overlay.classList.add('overlay--active');
// 		});
// 	}

// 	document.addEventListener('keydown', function (event) {
// 		if (event.code == 'Escape') {
// 			removeClass();
// 		}
// 	});
