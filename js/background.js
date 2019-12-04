$(document).ready(function(){

  $("#1").click(function() {
      $('html,body').animate({
          scrollTop: $(".ice-cream-info").offset().top - 60},
          'slow');
  });


  $("#2").click(function() {
      $('html,body').animate({
          scrollTop: $(".cake-info").offset().top - 60},
          'slow');
  });



  $("#3").click(function() {
      $('html,body').animate({
          scrollTop: $(".cookies-info").offset().top - 60},
          'slow');
  });

});
