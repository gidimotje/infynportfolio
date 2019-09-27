$('.arrow-down').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: ($('#case').first().offset().top)
    },1000);
});

var originalImgSrc = $('.img-feature').attr('src');

$('.shh-f-1').hover(function(){
  var image = $('.img-feature');
  image.attr('src', 'assets/images/shh-feature-2.png');
});

$('.shh-f-1').mouseout(function(){
  var image = $('.img-feature');
  image.attr('src', originalImgSrc);
});
