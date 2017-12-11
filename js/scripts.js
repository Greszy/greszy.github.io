$(function() {

"use strict";

var wheight = $(window).height(); // get the full height of the window. 

$('.fullheight').css('height, wheight');

//replace IMG inside carousels with background images

$('featured .carousel-item img').each(function(){
	var imgSrc = $(this).attr('src');
	$(this).parent().css({'background-image': 'url(' +imgSrc+')'});
	$(this).remove();
});

$(window).resize(function() {
	wheight = $(window).height(); //get the height of the window
	$('.fullheight').css('height', wheight); //set to window height
});

});

var lastScrollTop = 0;
var navbar = $('.MagicNav');
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       navbar.addClass('navbar-scroll-custom');
   } else {
      navbar.removeClass('navbar-scroll-custom');
   }
   lastScrollTop = st;
});