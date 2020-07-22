$(document).ready(function(){
    $(".menu__right--toggle").click(function(){
      $(".menu__bar").toggle();
    });
  });
$(document).ready(function () {
  $('.default_option').click(function() { 
    $('.select_ul').toggleClass("active");
    $('.default_option').toggleClass("active");
  });
  $('.select_ul li').click(function () { 
    var current = $(this).html();
    $('.default_option li').html(current);
    $('.select_ul').removeClass("active");
    $('.default_option').removeClass("active");
  });
  
});

// $(document).ready(function () {
//   $('.mega').hover(function () {
//       // over
//       $('.menu__drop').addClass('drop-hovered');
      
//     }, function () {
//       // out
//       $('.menu__drop').removeClass('drop-hovered');
//     }
//   );
// });
  