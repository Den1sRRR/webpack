(()=>{var e={740:()=>{const e=document.querySelectorAll(".round_button--call"),t=document.querySelector(".aside-call"),n=document.querySelector(".aside-call__close-button"),o=(document.querySelector("main"),document.querySelector("body"),document.querySelector(".overlay_aside"));n.addEventListener("click",(function(){t.classList.remove("hide-call"),o.style.display=o.classList.contains("overlay_aside")?"none":"block"}));for(let n=0;n<e.length;n++)e[n].addEventListener("click",(function(){t.classList.add("hide-call"),o.style.display=o.classList.contains("hidden")?"none":"block"}));o.addEventListener("click",(function(){o.style.display="none",t.classList.remove("hide-call")}))},610:()=>{const e=document.querySelector(".header_navigation__burger"),t=document.querySelector(".aside-menu"),n=document.querySelector(".aside-menu__button--close"),o=(document.querySelector("main"),document.querySelector("body"),document.querySelector(".overlay"));document.addEventListener("keydown",(function(e){"Escape"===e.key&&(o.style.display="none")})),e.addEventListener("click",(function(){t.classList.add("hide-aside"),o.style.display=o.classList.contains("hidden")?"none":"block"})),n.addEventListener("click",(function(){t.classList.remove("hide-aside"),o.style.display=o.classList.contains("overlay")?"none":"block"})),o.addEventListener("click",(function(){o.style.display="none",t.classList.remove("hide-aside")}))},68:()=>{const e=document.querySelectorAll(".round_button--chat"),t=document.querySelector(".aside-status"),n=document.querySelector(".aside-status__close-button"),o=(document.querySelector("main"),document.querySelector("body"),document.querySelector(".overlay_status"));n.addEventListener("click",(function(){t.classList.remove("hide-status"),o.style.display=o.classList.contains("overlay_status")?"none":"block"}));for(let n=0;n<e.length;n++)e[n].addEventListener("click",(function(){t.classList.add("hide-status"),o.style.display=o.classList.contains("hidden")?"none":"block"}));o.addEventListener("click",(function(){o.style.display="none",t.classList.remove("hide-status")}))},474:()=>{new Swiper(".swiper--brands",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},centeredSlides:!0,slidesPerView:1.1,breakpoints:{320:{slidesPerView:1.5},480:{slidesPerView:2},640:{slidesPerView:3}}});const e=document.querySelector(".slider-menu__links"),t=document.querySelector(".show-more__wrapper"),n=document.querySelector(".slider-menu__show-more"),o=document.querySelector(".slider-menu__more-icon");t.addEventListener("click",(function(){e.classList.toggle("hide-menu"),"Показать все"==n.textContent?(n.textContent="Скрыть",o.style.transform="rotate(180deg)"):(n.textContent="Показать все",o.style.transform="rotate(0deg)")}))},428:()=>{new Swiper(".swiper-price",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},centeredSlides:!0,slidesPerView:1.1,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1.5},640:{slidesPerView:2}}}),document.querySelectorAll(".slider-price__wrapper").forEach((function(e){e.addEventListener("click",(function(){window.location.href="#"}))})),document.querySelectorAll(".slider-price__order").forEach((function(e){e.addEventListener("click",(function(){window.location.href="#"}))}))},808:()=>{new Swiper(".swiper-repair",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},centeredSlides:!0,slidesPerView:1.1,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1.5},640:{slidesPerView:2}}});const e=document.querySelector(".repair-list"),t=document.querySelector(".show-more__repair"),n=document.querySelector(".repair__show-more"),o=document.querySelector(".repair__more-icon");t.addEventListener("click",(function(){e.classList.toggle("hide-menu"),"Показать все"==n.textContent?(n.textContent="Скрыть",o.style.transform="rotate(180deg)"):(n.textContent="Показать все",o.style.transform="rotate(0deg)")}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(610),n(474),n(808),n(428),n(740),n(68),console.log("Works!")})()})();
//# sourceMappingURL=bundle.js.map