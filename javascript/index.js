
$(function() {
  $("[href^='#']").on("click", function( e ) {  
    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top-$('.header').height()-$('.header').outerHeight()
    }, 800); 
    e.preventDefault();
  });    
});


// x - a - b
// set z = a + b
// x - z