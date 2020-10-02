$( document ).ready(function() {
    $('#menu_on').click(function(){ // Al hacer click...
    $('#nav_list-mobile').toggleClass('visible_menu'); // Añadimos o eliminamos la clase 'visible_menu' al body
    })
});

$(document).ready(function() {
    $('#menu_on').click(function() {
        $('.icon_menu_mobile').toggleClass('dark');
    })
});