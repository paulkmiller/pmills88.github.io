$(function() {
	// menu nav movement
  $("[href^='#']").on("click", function(e) {  

	  var target = $(this).attr('href');
	  var scrollTop = $(target).offset().top-$('.header').height()-$('.header').outerHeight();

	  if (target == '#top'){
	     scrollTop = 0;}
	  $("body, html").animate({
	          scrollTop: scrollTop
	      }, 800);
	  e.preventDefault();
  });

  // hidden mousey message
});