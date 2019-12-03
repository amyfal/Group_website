$("#map").click (function(event){
  $("iframe").toggle();

}) ;


$("#1").click(function() {
    $('html,body').animate({
        scrollTop: $(".ice-cream-info").offset().top},
        'slow');
});


$("#2").click(function() {
    $('html,body').animate({
        scrollTop: $(".cake-info").offset().top},
        'slow');
});



$("#3").click(function() {
    $('html,body').animate({
        scrollTop: $(".cookies-info").offset().top},
        'slow');
});
