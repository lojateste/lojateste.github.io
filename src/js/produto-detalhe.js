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
  $('.materialboxed').materialbox()

  $('select').material_select()


  $('.product-details .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsive: {0:{items:1}}
  })

  $('.owl-carousel.featured-items').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    // nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: responsiveCarousel
  })


});
