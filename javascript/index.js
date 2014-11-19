$(function() {
    $("[href^='#']").on("click", function( e ) {  
        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset("70px").top 
        }, 600); 
        e.preventDefault();
    });    
});
