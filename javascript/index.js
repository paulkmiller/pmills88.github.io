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
});

$(document).ready(function() {
  $(".mouse-icon").on("click", function() {  
    $(".mouse-icon:before").append("<style>mouse-icon:before{content:'SO LAZY';}</style>");
  }); 
});	