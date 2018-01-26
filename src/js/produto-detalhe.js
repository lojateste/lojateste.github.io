$(document).ready(function() {

  // Gatilho do JQuery mask
  $('#user-cep').mask('00000-000')


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
  
  $('.modal').modal()

  $('select').material_select()

  $('.collapsible').collapsible()


  $('.product-details .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    responsive: {
      0: {
        items: 1
      }
    }
  })

  $('.owl-carousel.featured-items').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    // nav: true,
    // navText: [
    //   '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    //   '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    // ],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: responsiveCarousel
  })


});
