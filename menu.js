// $( document ).ready(function() {
//     $('#menu_on').click(function(){ // Al hacer click...
//     $('#nav_list-mobile').toggleClass('visible_menu'); // Añadimos o eliminamos la clase 'visible_menu' al body
//     })
// });

const menu = document.querySelector('#nav_list-mobile')
const burgerButton = document.querySelector('#menu_on')
const iconMenu = document.querySelector(".icon_menu_mobile")

burgerButton.addEventListener('click', function() {
	menu.classList.toggle('visible_menu')
	iconMenu.classList.toggle('dark')
})
