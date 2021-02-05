$(document).ready(function () {
  $(".button-collapse").sideNav();
  $('.tooltipped').tooltip({
    delay: 50
  });

  $(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false,
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
  });

  //$("body").velocity("transition.fadeIn");
  /* First Page */
  $("#page-1 #intro-hero").add("#free").add("#page-1 h3.h2").css("visibility", "visible").velocity("transition.slideUpBig");
  // if ($('#page-1').hasClass('active')) {
  //   $('#page-1 #intro-hero').addClass('animated slideInDown');
  // }

  /* Second Page */
  // if ($('#page-2').hasClass('active')) {
  //   $('#page-2 h1').addClass('animated slideInDown');
  // }

  /* Third Page */
  $(function () {
    $(".typed").typed({
      strings: ["Jobs.^750", "Workers.^750", "Clients.^750"],
      typeSpeed: 130,
      loop: true
    });
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  });

  /*if($("#page-5").hasClass('active')) {
    $('.card-panel').addClass('slideInUp');
  }else {
    $('.card-panel').removeClass('slideInUp');
  }*/
});