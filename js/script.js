$(document).ready(function() {
      var window_size = $(window).width();
        if(window_size >= 992) {
            $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        // lockAnchors: false,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage']
    });

  $(document).on('click', '#moveSectionDown', function(){
    $.fn.fullpage.moveSectionDown();
  });
        };

// mobile-menu
  // $('#toggler').on('click', function(e){
  //     e.preventDefault();
  //     $(this).toggleClass('main-nav__toggler--close');
  //     $('.mobile-nav').toggleClass('mobile-nav--visible');
  // });
// gallery
  $('.preview').on('click', function(){
    var imgSRC = $(this).attr('src');
    $('#largeImg').attr('src', imgSRC);
  });

});