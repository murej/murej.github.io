'use strict';

$(document).ready(function() {

  var blink;

  // $('h1').hover(
  //   function() {
  //     var h1 = $(this);
  //     blink = setInterval(function() {
  //       h1.children('span').toggleClass('highlight');
  //     }, 200);
  //   },
  //   function() {
  //     var h1 = $(this);
  //     h1.children('span').removeClass('highlight');
  //     clearInterval(blink);
  //   }
  // );

  $('h1').hover(
    function() {
      $(this).children('span').addClass('highlight');
    },
    function() {
      $(this).children('span').removeClass('highlight');
    }
  );

  // $('h1 span').click(function() {
  //   $(this).toggleClass("highlight");
  // })
});
