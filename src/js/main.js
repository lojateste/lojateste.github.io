$(document).ready(function() {

  // Gatilhos do Materialize
  $(".open-side-nav").sideNav({
    menuWidth: 280
  })

  // Barra de Pesquisas
  $('.search-bar input').on('input', function(){
    if($('.search-bar input').val().length){
      $('.search-bar .search-list').addClass('active')
    }else{
      $('.search-bar .search-list').removeClass('active')
    }
  })

});
