$(function() {
    $("[href^='#']").on("click", function( e ) {  
        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top-$('.header').height()
        }, 600); 
        e.preventDefault();
    });    
});
