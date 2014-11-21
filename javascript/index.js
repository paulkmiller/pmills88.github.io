$(document).ready(function(){

$(function() {
  $("[href^='#']").on("click", function( e ) {  

	  var target = $(this).attr('href');
	  var scrollTop = $( target ).offset().top-$('.header').height()-$('.header').outerHeight();

	  if ( target == '#home'){
	     scrollTop = 0;}
	  $("body, html").animate({
	          scrollTop: scrollTop
	      }, 800);

	  e.preventDefault();
  });
});

// ScrollMagic Code
$(function($) {
var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

// build scenes
new ScrollScene({triggerElement: "#parallax"})
		.setTween(TweenMax.from("#parallax > div", 1, {top: "-80%", ease: Linear.easeNone}))
		.addTo(controller)
	});

});