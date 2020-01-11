
$(function(){

  // about　slider-slick
    $('#about__slide').slick({
      autoplay: false,
      dots:true,
      speed: 700,
      arrows: true,
      infinite: true,
      initialSlide: 0,
      fade:true,
    });


    // #のついたaタグへスムーズスクロール

  $('a[href^="#"]').click(function(){
    var time = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });


  // ハンバーガーメニュー
  $('.btn__trigger').on('click',function(){
      $('.btn__trigger').toggleClass('close');
      $('.gnav').fadeToggle(300);
      $('body').toggleClass('noscroll');
    });

    if( $(window).width() <= 768 ){
    $('.gnav__menu__item>a').on('click',function(){
      $('.gnav').fadeOut(300);
      $('.btn__trigger').removeClass('close');
      $('body').removeClass('noscroll');
    });
    }



// menu タブの切り替え

      $('.materials-btn > button').click(function(){
        $('.materials-btn > button,.menu__about__material').removeClass('active');
        var tabClass = $(this).attr('class');
        $(this).addClass('active');
        $('.menu__about__material').each(function(){
          if($(this).attr('class').indexOf(tabClass) != -1){
            $(this).addClass('active').fadeIn();
          }else{
            $(this).hide();
          }
        });
    });


    
  });