$(document).ready(function(){
   $('.swiper-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
   });
 });
