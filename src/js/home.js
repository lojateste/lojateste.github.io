$(document).ready(function() {

  responsiveCarousel = {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    600: {
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
    // nav: true,
    responsive: responsiveCarousel
  })

});
