function banerSlider() {
  $(".baner__carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'slick-dots top-dots'
  });
};

function productsSlider() {
  $('.products__carousel').slick({
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    accessibility: true,
    prevArrow: '.products__slick-prev',
    nextArrow: '.products__slick-prev',
  })
}

function partnersSlider() {
  $('.partners__carousel').slick({
    dots: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    accessibility: true,
    prevArrow: '.partners__slick-prev',
    nextArrow: '.partners__slick-next',
  })
}


$(document).ready(function () {
  banerSlider();
  productsSlider();
  partnersSlider();
});