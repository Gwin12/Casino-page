
    /*$(document).ready(function() {
  $('.custom-carousel').owlCarousel({
    items: 2,
    nav: true,
    stagePadding: 100,
    loop: true,
    margin: 15,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      600: {
        items: 2
      }
    },
    touchDrag: true,
    mouseDrag: true,
    autoplay: false, // Enable autoplay
    autoplayTimeout: 4000, // Set the autoplay timeout (3 seconds)
  });
});*/


$(document).ready(function() {
  $('.custom-carousel').owlCarousel({
    items: 2,
    nav: true,
    stagePadding: 7.5,
    loop: true,
    margin: 15, // Add a gap between slides
    responsive: {
      0: { items: 1 },
      600: { items: 2 }
    },
    touchDrag: true,
    mouseDrag: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 4000, // Set the autoplay timeout (3 seconds)
  });
});


$(document).ready(function() {
  $('.custom-carousel-sports').owlCarousel({
    items: 2,
    nav: true,
    stagePadding: 7.5,
    loop: true,
    margin: 15, // Add a gap between slides
    responsive: {
      0: { items: 1 },
      600: { items: 2 }
    },
    touchDrag: true,
    mouseDrag: true,
    autoplay: false, // Enable autoplay
    autoplayTimeout: 4000, // Set the autoplay timeout (3 seconds)
  });
});

$(document).ready(function() {
  $('.custom-carousel-tweet').owlCarousel({
    items: 3,
    nav: true,
    stagePadding: 7.5,
    loop: true,
    margin: 15, // Add a gap between slides
    responsive: {
      0: { items: 1 },
      600: { items: 3 }
    },
    touchDrag: true,
    mouseDrag: true,
    autoplay: false, // Enable autoplay
    autoplayTimeout: 4000, // Set the autoplay timeout (3 seconds)
  });
});

$(document).ready(function() {
  $('.custom-carousel-team').owlCarousel({
    items: 3,
    nav: false,
    stagePadding: 7.5,
    loop: true,
    margin: 15, // Add a gap between slides
    responsive: {
      0: { items: 4 },
      600: { items: 10 }
    },
    touchDrag: true,
    mouseDrag: true,
    autoplay: false, // Enable autoplay
    autoplayTimeout: 4000, // Set the autoplay timeout (3 seconds)
  });
});
  
$(document).ready(function() {
  $('.custom-carousel-2').owlCarousel({
    items: 2,
    nav: true,
    stagePadding: 7.5,
    loop: true,
    margin: 15, // Add a gap between slides
    responsive: {
      0: { items: 1 },
      600: { items: 2 }
    },
    touchDrag: true,
    mouseDrag: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 4000, // Set the autoplay timeout (3 seconds)
  });
});

$(document).ready(function() {
  $('.custom-carousel-3').owlCarousel({
    items: 2,
    nav: true,
    stagePadding: 7.5,
    loop: true,
    margin: 15, // Add a gap between slides
    responsive: {
      0: { items: 1 },
      600: { items: 2 }
    },
    touchDrag: true,
    mouseDrag: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 4000, // Set the autoplay timeout (3 seconds)
  });
});
  

/*$(document).ready(function() {
  $('.custom-carousel-1').owlCarousel({
    items: 2,
    nav: true,
    stagePadding: 100,
    loop: true,
    margin: 15,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      600: {
        items: 2
      }
    },
    touchDrag: true,
    mouseDrag: true,
    autoplay: false, // Enable autoplay
    autoplayTimeout: 4000, // Set the autoplay timeout (3 seconds)
  });
});*/

  


  $(document).ready(function() {
  // Add this for the trending games carousel
  var trendingCarousel = $('.trending-carousel').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    margin: 16, // Set the gap between boxes to 16px
    autoplay: false, // Add this for auto-slide
    autoplayTimeout: 4000, // 3 seconds interval for auto-slide
    responsive: {
      0: {
        items: 2, // Show 1 box on mobile devices
        nav: false, // hide navigation buttons on mobile
      },
      600: {
        items: 3, // Show 2 boxes on devices with a width of 600px or more
        nav: false, // show navigation buttons on larger screens
      },
      992: {
        items: 4, // Show 4 boxes on devices with a width of 992px or more
        nav: false, // show navigation buttons on larger screens
      },
      1200: {
        items: 5, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
      1600: {
        items: 6, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
    },
  });

  // Custom navigation buttons for trending carousel
  $('.trending-nav1 .owl-prev').on('click', function() {
    trendingCarousel.trigger('prev.owl.carousel');
  });

  $('.trending-nav1 .owl-next').on('click', function() {
    trendingCarousel.trigger('next.owl.carousel');
  });
});

$(document).ready(function() {
  // Add this for the trending games carousel
  var trendingCarousel1 = $('.trending-carousel1').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    margin: 16, // Set the gap between boxes to 16px
    autoplay: false, // Add this for auto-slide
    autoplayTimeout: 4000, // 3 seconds interval for auto-slide
    responsive: {
      0: {
        items: 2, // Show 1 box on mobile devices
        nav: false, // hide navigation buttons on mobile
      },
      600: {
        items: 3, // Show 2 boxes on devices with a width of 600px or more
        nav: false, // show navigation buttons on larger screens
      },
      992: {
        items: 4, // Show 4 boxes on devices with a width of 992px or more
        nav: false, // show navigation buttons on larger screens
      },
      1200: {
        items: 5, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
      1600: {
        items: 6, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
    },
  });

  // Custom navigation buttons for trending carousel
  $('.trending-nav2 .owl-prev').on('click', function() {
    trendingCarousel1.trigger('prev.owl.carousel');
  });

  $('.trending-nav2 .owl-next').on('click', function() {
    trendingCarousel1.trigger('next.owl.carousel');
  });
});


 $(document).ready(function() {
  // Add this for the trending games carousel
  var trendingCarousel2 = $('.trending-carousel2').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    margin: 16, // Set the gap between boxes to 16px
    autoplay: false, // Add this for auto-slide
    autoplayTimeout: 4000, // 3 seconds interval for auto-slide
    responsive: {
      0: {
        items: 2, // Show 1 box on mobile devices
        nav: false, // hide navigation buttons on mobile
      },
      600: {
        items: 3, // Show 2 boxes on devices with a width of 600px or more
        nav: false, // show navigation buttons on larger screens
      },
      992: {
        items: 4, // Show 4 boxes on devices with a width of 992px or more
        nav: false, // show navigation buttons on larger screens
      },
      1200: {
        items: 5, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
      1600: {
        items: 6, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
    },
  });

  // Custom navigation buttons for trending carousel
  $('.trending-nav3 .owl-prev').on('click', function() {
    trendingCarousel2.trigger('prev.owl.carousel');
  });

  $('.trending-nav3 .owl-next').on('click', function() {
    trendingCarousel2.trigger('next.owl.carousel');
  });
});



$(document).ready(function() {
  // Add this for the trending games carousel
  var trendingCarousel2 = $('.trending-carousel3').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    margin: 16, // Set the gap between boxes to 16px
    autoplay: false, // Add this for auto-slide
    autoplayTimeout: 4000, // 3 seconds interval for auto-slide
    responsive: {
      0: {
        items: 2, // Show 1 box on mobile devices
        nav: false, // hide navigation buttons on mobile
      },
      600: {
        items: 3, // Show 2 boxes on devices with a width of 600px or more
        nav: false, // show navigation buttons on larger screens
      },
      992: {
        items: 4, // Show 4 boxes on devices with a width of 992px or more
        nav: false, // show navigation buttons on larger screens
      },
      1200: {
        items: 5, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
      1600: {
        items: 6, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
    },
  });

  // Custom navigation buttons for trending carousel
  $('.trending-nav4 .owl-prev').on('click', function() {
    trendingCarousel2.trigger('prev.owl.carousel');
  });

  $('.trending-nav4 .owl-next').on('click', function() {
    trendingCarousel2.trigger('next.owl.carousel');
  });
});


$(document).ready(function() {
  // Add this for the trending games carousel
  var trendingCarousel2 = $('.trending-carousel4').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    margin: 16, // Set the gap between boxes to 16px
    autoplay: false, // Add this for auto-slide
    autoplayTimeout: 4000, // 3 seconds interval for auto-slide
    responsive: {
      0: {
        items: 2, // Show 1 box on mobile devices
        nav: false, // hide navigation buttons on mobile
      },
      600: {
        items: 3, // Show 2 boxes on devices with a width of 600px or more
        nav: false, // show navigation buttons on larger screens
      },
      992: {
        items: 4, // Show 4 boxes on devices with a width of 992px or more
        nav: false, // show navigation buttons on larger screens
      },
      1200: {
        items: 5, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
      1600: {
        items: 6, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
    },
  });

  // Custom navigation buttons for trending carousel
  $('.trending-nav5 .owl-prev').on('click', function() {
    trendingCarousel2.trigger('prev.owl.carousel');
  });

  $('.trending-nav5 .owl-next').on('click', function() {
    trendingCarousel2.trigger('next.owl.carousel');
  });
});


$(document).ready(function() {
  // Add this for the trending games carousel
  var trendingCarousel2 = $('.trending-carousel5').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    margin: 16, // Set the gap between boxes to 16px
    autoplay: true, // Add this for auto-slide
    autoplayTimeout: 4000, // 4 seconds interval for auto-slide
    responsive: {
      0: {
        items: 2, // Show 1 box on mobile devices
        nav: false, // hide navigation buttons on mobile
      },
      600: {
        items: 3, // Show 2 boxes on devices with a width of 600px or more
        nav: false, // show navigation buttons on larger screens
      },
      992: {
        items: 4, // Show 4 boxes on devices with a width of 992px or more
        nav: false, // show navigation buttons on larger screens
      },
      1200: {
        items: 5, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
      1600: {
        items: 6, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
    },
  });

  // Custom navigation buttons for trending carousel
  $('.trending-nav6 .owl-prev').on('click', function() {
    trendingCarousel2.trigger('prev.owl.carousel');
  });

  $('.trending-nav6 .owl-next').on('click', function() {
    trendingCarousel2.trigger('next.owl.carousel');
  });
});


/*$(document).ready(function() {
  var trendingCarousel2 = $('.trending-carousel5').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    margin: 16, // Set the gap between boxes to 16px
    autoplay: true, // Add this for auto-slide
    autoplayTimeout: 500, // 1 second interval for auto-slide
    autoplaySpeed: 500, // same as autoplayTimeout for continuous scrolling illusion
    responsive: {
      0: {
        items: 2, // Show 1 box on mobile devices
        nav: false, // hide navigation buttons on mobile
      },
      600: {
        items: 3, // Show 2 boxes on devices with a width of 600px or more
        nav: false, // show navigation buttons on larger screens
      },
      992: {
        items: 4, // Show 4 boxes on devices with a width of 992px or more
        nav: false, // show navigation buttons on larger screens
      },
      1200: {
        items: 5, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
      1600: {
        items: 6, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
    },
  });

  // Custom navigation buttons for trending carousel
  $('.trending-nav6 .owl-prev').on('click', function() {
    trendingCarousel2.trigger('prev.owl.carousel');
  });

  $('.trending-nav6 .owl-next').on('click', function() {
    trendingCarousel2.trigger('next.owl.carousel');
  });
});*/


$(document).ready(function() {
  // Add this for the trending games carousel
  var trendingCarousel2 = $('.profileStateC').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    smartSpeed: 1000,
    fluidSpeed: true,
    touchDrag: true, // Initially disable touchDrag
    mouseDrag: true, // Initially disable mouseDrag
    margin: 16, // Set the gap between boxes to 16px
    autoplay: false, // Add this for auto-slide
    autoplayTimeout: 4000, // 4 seconds interval for auto-slide
    responsive: {
      0: {
        items: 1, // Show 1 box on mobile devices
        nav: false, // hide navigation buttons on mobile
        touchDrag: true, // Enable touchDrag for mobile
        mouseDrag: true, // Initially disable mouseDrag
      },
      600: {
        items: 3, // Show 2 boxes on devices with a width of 600px or more
        nav: false, // show navigation buttons on larger screens
      },
      992: {
        items: 3, // Show 4 boxes on devices with a width of 992px or more
        nav: false, // show navigation buttons on larger screens
      },
      1200: {
        items: 3, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
      1600: {
        items: 3, // Show 5 boxes on devices with a width of 1200px or more
        nav: false, // show navigation buttons on larger screens
      },
    },
  });

  // Custom navigation buttons for trending carousel
  $('.profileStateNave .owl-prev').on('click', function() {
    trendingCarousel2.trigger('prev.owl.carousel');
  });

  $('.profileStateNave .owl-next').on('click', function() {
    trendingCarousel2.trigger('next.owl.carousel');
  });
});



$(document).ready(function() {
    // initially hide all sections
    $('.content-section').css('display', 'none');
    // show the initial section
    $('#bets-history-section').css('display', '');
    // highlight the initial menu
    $('#bets-history').addClass('active');

    // handle click events
    $('.menu-option').click(function() {
        // remove active class from all menu options
        $('.menu-option').removeClass('active');
        // add active class to clicked menu option
        $(this).addClass('active');
        // hide all sections
        $('.content-section').css('display', 'none');
        // show the section corresponding to clicked menu option
        $('#' + $(this).attr('id') + '-section').css('display', '');
    });
});


