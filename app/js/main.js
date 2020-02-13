$(function () {


  const ul = document.querySelector('ul.categories__list');
  ul.addEventListener('click', evt => {
    const ulSibling = evt.target.nextElementSibling;
    slideToggle.slideToggle(ulSibling, 500);
  });


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
    arrows: true
  });

});