$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$(document).ready(function() {
      var window_size = $(window).width();
        if(window_size >= 960) {
            $('#fullpage').fullpage({
        menu: '#menu',
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


// accordion

if ($('.accordion-block')) {
    (function($) {
      var allPanels = $('.accordion-block__text').hide();
      var allTitles = $('.accordion-block__title');

      $('.accordion-block__title').click(function() {
        $this = $(this);
        $target =  $this.parent().find('.accordion-block__text');

        $this.addClass('active');

        if(!$target.hasClass('active')){
           allPanels.removeClass('active').slideUp();
           $target.addClass('active').slideDown();

           allTitles.removeClass('active');
           $this.addClass('active');
        }

        return false;
      });

    })(jQuery);
  }



// Popup
  $('#open_popup').click(function(e) {
    e.preventDefault();
    $('.popup--success').removeClass('popup--success');
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay').show();
  })
  $('.popup .close, .overlay').click(function() {
      $('.overlay, .popup').hide();
  })

  // success popup
  $('#submit').on('click',function(e){
    e.preventDefault();
    $('.popup').addClass('popup--success');
  });

  $('.normal-btn').on('click',function(e){
    e.preventDefault();
    $(this).removeClass('btn-show');
    $('.success-btn').addClass('btn-show');
  });

// owl-carousel
  $(".owl-carousel").owlCarousel({
    singleItem: true,
    autoPlay: 4000,
    autoplayHoverPause:false,
    transitionStyle : "fade"
  });

// fancybox
 $(".fancybox").fancybox({
    closeBtn    : false,
    helpers   : {
      title : { type : 'inside' },
        }
  });


// lightSlider
    $('#product-slider').lightSlider({
      gallery: true,
      item: 1,
      vertical: true,
      verticalHeight: 600,
      vThumbWidth: 100,
      thumbItem: 4,
      thumbMargin: 10,
      slideMargin: 10,
      galleryMargin: 5,
      controls: false,
      responsive : [
            {
                breakpoint:1200,
                settings: {
                    verticalHeight: 600,
                  }
            },
            {
                breakpoint:992,
                settings: {
                    verticalHeight: 450,
                    vThumbWidth: 80,
                  }
            },
            {
                breakpoint:760,
                settings: {
                    verticalHeight: 350,
                    vThumbWidth: 70,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    verticalHeight: 300,
                    vThumbWidth: 70,
                  }
            }
        ]
    });

$(".fancy-gallery").fancybox({
    closeBtn    : true,
    opacity: true,
    helpers   : {
      title : { type : 'inside' },
        }
  });


});