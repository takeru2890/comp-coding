// ==================
// トップへ戻るボタン
// ==================
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 80px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 80) {
          pagetop.fadeIn(300);
     } else {
          pagetop.fadeOut(300);
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

// ==================
// スワイパー
// ==================
var swiper = new Swiper('.swiper-container', {
   speed: 3000,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   loop: true,
   autoplay: {
       delay: 1000,
       disableOnInteraction: false,
     },
 });

// ==================
// アニメーション
// ==================
 new WOW().init();
