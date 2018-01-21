$(document).ready(function() {

  responsiveCarousel = {
    0: {
      items: 1
    },
    450: {
      items: 2
    },
    601: {
      items: 3
    },
    1200: {
      items: 4
    }

  }

  // Gatihlos do Owl carousel
  $('.owl-carousel.featured-items').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    // nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: responsiveCarousel
  })

  $('.owl-carousel.best-sellers').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 6000,
    // nav: true,
    responsive: responsiveCarousel
  })

});
