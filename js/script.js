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


// map
  var points = [
    {lat: 59.959088, lng: 30.313942},
    {lat: 56.501613, lng: 84.990466}
  ];

  var images = [
    'img/map-icon.png',
  ];

  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA-Y3BlWXDFiDvHrjhVJNl1BfSyHkkYAEw&callback=initMap',
      dataType: 'jsonp',
    jsonp: 'callback',
    success: mapInit
  });

  function mapInit() {
    var mapS = new google.maps.Map($('#map-spb').get(0), {
      center: {lat: 59.959088, lng: 30.313942},
      zoom: 17,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: false, // убираем скролл колесом
    });

      var mapT = new google.maps.Map($('#map-tomsk').get(0), {
      center: {lat: 56.501613, lng: 84.990466},
      zoom: 17,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: false, // убираем скролл колесом
    });

    var markers = [];

    points.forEach(function (position, i) {
      markers.push(new google.maps.Marker({
        position: position,
        map: mapS,
        icon: images[0]
      }));
    });

    points.forEach(function (position, i) {
      markers.push(new google.maps.Marker({
        position: position,
        map: mapT,
        icon: images[0]
      }));
    });
  }

// accordion
  $('.accordion-block__item').on('click', function(){
    console.log('123')
    $('.accordion-block__item--active').removeClass('accordion-block__item--active');
    $(this).addClass('accordion-block__item--active');
  });

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
    autoPlay: 5000,
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
      verticalHeight: 474,
      vThumbWidth: 75,
      thumbItem: 4,
      thumbMargin: 10,
      slideMargin: 10,
      galleryMargin: 5,
      controls: false,
      responsive : [
            {
                breakpoint:1100,
                settings: {
                    verticalHeight: 474,
                  }
            },
            {
                breakpoint:980,
                settings: {
                    verticalHeight: 450,
                  }
            },
            {
                breakpoint:760,
                settings: {
                    verticalHeight: 350,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    verticalHeight: 300,
                  }
            }
        ]
    });

$(".fancy-gallery").fancybox({
    closeBtn    : true,
    helpers   : {
      title : { type : 'inside' },
        }
  });


});