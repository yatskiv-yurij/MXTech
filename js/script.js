$(function(){
    $('.join__work').on('click', function (){
        $('.join__description').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.menu__btn').on('click', function (){
        $('.menu').toggleClass('active');
        $('.menu__btn').toggleClass('active');
        $('body').toggleClass('active');
    });
  
    $('.menu__link').on('click', function (){
      if($("body").hasClass( "active" )){
        $('body').toggleClass('active');
        $('.menu').toggleClass('active');
        $('.menu__btn').toggleClass('active');
      }
    });
});