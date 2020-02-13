$(function () { 


  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.weekly__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.followers__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000    
  });

  $('.categories').on('click', function(){
    $('.categories__list').slideToggle();
  });

});