$(document).ready(function() {

  // Gatihlos do Owl carousel
  $('.owl-carousel.featured-items').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
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
  })

});
