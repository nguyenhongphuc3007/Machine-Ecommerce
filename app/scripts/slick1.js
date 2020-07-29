$(document).ready(function () {
  $(".row-banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    dotsClass: "original-dots",
    dots: true,
  });
});

$(document).ready(function () {
  $(".new-product").slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    initialSlide: 0,
    prevArrow: $(".new-header__navigation--prev"),
    nextArrow: $(".new-header__navigation--next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".row-hl").slick({
    rows: 2,
    slidesPerRow: 3,
    infinite: true,
    initialSlide: 0,
    prevArrow: $(".highlights__header__navigation--prev"),
    nextArrow: $(".highlights__header__navigation--next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          rows: 2,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          rows: 2,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          rows: 2,
          slidesPerRow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".recent-product").slick({
    rows: 2,
    slidesPerRow: 2,
    infinite: true,
    initialSlide: 0,
    prevArrow: $(".recent-header__navigation--prev"),
    nextArrow: $(".recent-header__navigation--next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".brand__content").slick({
    slidesToScroll: 1,
    slidesToShow: 5,
    infinite: true,
    initialSlide: 0,
    prevArrow:
      '<span class="prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
    nextArrow:
      '<span class="next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".best-seller__product2").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    initialSlide: 0,
    prevArrow: $(".best-seller-header__navigation--prev"),
    nextArrow: $(".best-seller-header__navigation--next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".best-seller__product1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".best-seller__product2",
    infinite: true,
    initialSlide: 0,
    prevArrow: $(".best-seller-header__navigation--prev"),
    nextArrow: $(".best-seller-header__navigation--next"),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
