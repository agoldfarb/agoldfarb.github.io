$(document).ready( function() {
  //  listen for clicks on .navbar_link
  $('.navigation_link').click(function() {
    //  grab ID value of the clicked element
    var linkId = $(this).attr('id');
    // select corresponding box
    var box = $('.detailBox#' + linkId);

    //  hide all other boxes...
    $('.detailBox').not(box).fadeOut("fast",function(){
      //...and then show this one after
      box.fadeIn('slow', 'linear');
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
  $('.detailBox#contact').mouseover(function() {
    $('.detailBox#contact').css({'text-dec':'#FFC0FF'});
  });
  $('.detailBox#contact').mouseleave(function () {
    $('.detailBox#contact').css({'background':'none'});
  });

});