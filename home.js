$(document).ready( function() {
  $('.navigation_link').click(function() {
    var box = $('.detailBox#' + linkId);
    $('.detailBox').not(box).fadeOut("fast",function(){
      box.fadeIn('fast');
    });
  });
  $('a.navigation_link#about').mouseover(function() {
    $('a.navigation_link#about').css({'background':'#FFC0FF'});
  });
  $('a.navigation_link#about').mouseleave(function() {
    $('a.navigation_link#about').css({'background':'none'});
  });
  $('a.navigation_link#contact').mouseover(function() {
    $('a.navigation_link#contact').css({'background':'#FFC0FF'});
  });
  $('a.navigation_link#contact').mouseleave(function() {
    $('a.navigation_link#contact').css({'background':'none'});
  });
  $('h1').mouseover(function() {
    $('h1').css({'background':'#FFC0FF'});
  });
  $('h1').mouseleave(function () {
    $('h1').css({'background':'none'});
  });
});