$(document).ready(function(){
 
    $('#icon').click(function(){
        $('nav ul').toggleClass('show');
    });

    $('nav ul li a').click(function(){
        $('nav ul').removeClass('show');

        var sectionID = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionID).offset().top
        }, 'slow');
        
        return false; 
    });
});
