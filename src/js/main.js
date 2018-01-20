$(document).ready(function() {

  // Gatilhos do Materialize
  $(".open-side-nav").sideNav({
    menuWidth: 280
  })

  // Barra de pesquisa no menu superior
  $('.search-bar .search-btn').click(function() {
    $('.search-bar').addClass('active')
  })

  $(document).click(function (event) {
    if($(event.target).closest('.search-bar').length == 0){
      $('.search-bar').removeClass('active').children('input').val('')
    }
  })



});
