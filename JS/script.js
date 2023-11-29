'use strict';

/** Navbar  */
const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelector('[data-nav-link]');
const menuToggleBtn = document.querySelector('[data-nav-toggle-btn]')

//Mostrar menu  
menuToggleBtn.addEventListener('click',function () {
    navbar.classList.toggle('active');
    this.classList.toggle('active');
})


//Activar la class active a cada link para asi mostrar su color
for (let i = 0; i < navbarLinks.length; i++ ){
    navbarLinks[i].addEventListener('click',function () {
        navbar.classList.toggle('active');
        menuToggleBtn.classList.toggle('active');
    })
}

// //Header sticky

// const header = document.querySelector('[data-header]');

// window.addEventListener('scroll',function (){
//     if(window.scrollY >= 100){
//         header.classList.add('active');
//     } else {header.classList.remove('active');}
// })


const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});