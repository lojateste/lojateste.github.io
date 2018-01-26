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
  $('.owl-carousel.banner-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3500,
    responsive: {0:{items: 1}}
  })

  $('.owl-carousel.featured-items').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: responsiveCarousel
  })

  $('.owl-carousel.best-sellers').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: responsiveCarousel
  })

});
