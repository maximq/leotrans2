$(function(){
  $('.order').hover(
    function(){
      $('body').animate({backgroundColor: '#fff'}, 400);
      $('.order').animate({'backgroundColor': 'black'}, 400);
      $('p').animate({'color': 'black'}, 400);
      $('h1').animate({'color': 'white'}, 400);
      $('h3').animate({'color': 'white'}, 400);
      $('.corp').animate({'backgroundColor': 'black'}, 400);
      $('.header').animate({'backgroundColor': 'black'}, 400);
      $('.menu__btn').animate({'backgroundColor': 'black'}, 400);
      $('.menu__btn > span').animate({'backgroundColor': 'white'}, 400);
      $('.menu__btn > span::before').animate({'backgroundColor': 'white'}, 400);
      $('.menu__btn > span::after').animate({'backgroundColor': 'white'}, 400);
      // $('#cir').animate({'fill': 'black'}, 400);
      $('#cir').attr('fill', 'black');
      // $('#cir').animate($(this).attr('fill', 'black'), 400);
      $('.arrow').animate({'backgroundColor': 'white'}, 400);
      $('.arrow').addClass('white');
      $('.content').animate({'backgroundColor': 'black'}, 400);
      $('.about').animate({'backgroundColor': 'white'}, 400);
      $('.header_post').animate({'backgroundColor': 'black'}, 400);
      $('.vk a').animate({'backgroundColor': '#000', 'color': '#fff'}, 400)

    },
    function() {
      $('body').animate({backgroundColor: 'black'}, 400);
      $('.order').animate({'backgroundColor': 'white'}, 400);
      $('p').animate({'color': 'white'}, 400);
      $('h1').animate({'color': 'black'}, 400);
      $('h3').animate({'color': 'black'}, 400);
      $('.corp').animate({'backgroundColor': 'white'}, 400);
      $('.header').animate({'backgroundColor': 'white'}, 400);
      $('.menu__btn').animate({'backgroundColor': 'white'}, 400);
      $('.menu__btn > span').animate({'backgroundColor': 'black'}, 400);
      $('.menu__btn > span::before').animate({'backgroundColor': 'black'}, 400);
      $('.menu__btn > span::after').animate({'backgroundColor': 'black'}, 400);
      $('#cir').attr('fill', 'white');
      // $('#cir').animate($(this).attr('fill', 'white'), 400);
      $('.arrow').animate({'backgroundColor': 'black'}, 400);
      $('.arrow').removeClass('white');
      $('.content').animate({'backgroundColor': 'white'}, 400);
      $('.about').animate({'backgroundColor': 'black'}, 400);
      $('.header_post').animate({'backgroundColor': 'white'}, 400);
      $('.vk a').animate({'backgroundColor': '#fff', 'color': '#000'}, 400)
    }
  )
});
$(function(){
  $('.order').click(function () {
    $('.order_box').css('visibility', 'visible');
  });
  $('#close_order').click(function () {
    $('.order_box').css('visibility', 'hidden');
  });
});
