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
      box.fadeIn('fast');
    });
  });
});