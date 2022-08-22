$(function(){
    $(".baner__carousel").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dotsClass: 'slick-dots top-dots'
    });
  });

  $(function(){
    $('.slider-mid').slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,
        arrows: true,
        accessibility: true
    })
})