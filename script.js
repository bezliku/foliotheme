$(document).ready(function() {
  var stickyNavTop = $('.nav').offset().top;
  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop ) { 
       $('.nav').addClass('sticky');
    } else {
       $('.nav').removeClass('sticky');
     }
  };
  stickyNav();
  $(window).scroll(function() {
     stickyNav();
  });
  $('li a').on('click', function (e) {
   var targetSection = $(this).text(),
       targetOffset = $('#' + targetSection).offset().top - 90;
   $('html, body').animate({ scrollTop: targetOffset }, 1500);
  });
});