$('.arrow-down').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: ($('#case').first().offset().top)
    },1000);
});