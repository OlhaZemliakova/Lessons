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
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    accessibility: true,
    prevArrow: '.products__slick-next',
    nextArrow: '.products__slick-next',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
    ]
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

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true
        }
      },
    ]
  })
}


$(document).ready(function () {
  banerSlider();
  productsSlider();
  partnersSlider();
});