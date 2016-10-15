$(document).ready(function() {
      var window_size = $(window).width();
        if(window_size >= 960) {
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


  $('#toggler').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('mobile-menu--close');
      $('#main-nav').toggleClass('mobile-nav--active');
      $('#studio-nav').removeClass('mobile-nav--active');
      $('#collection-nav').removeClass('mobile-nav--active');
  });

  $('#studio-nav-link').on('click', function(e){
    e.preventDefault();
    $('#studio-nav').addClass('mobile-nav--active');
  });

  $('#collection-nav-link').on('click', function(e){
    e.preventDefault();
    $('#collection-nav').addClass('mobile-nav--active');
  });

  $('.mobile-nav__back-link').on('click', function(e){
    e.preventDefault();
    $('.mobile-nav--active').removeClass('mobile-nav--active');
    $('#main-nav').addClass('mobile-nav--active');
  });

// gallery
  $('.preview').on('click', function(){
    var imgSRC = $(this).attr('src');
    $('#largeImg').attr('src', imgSRC);
  });

});