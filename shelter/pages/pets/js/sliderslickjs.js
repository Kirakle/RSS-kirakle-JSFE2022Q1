$(document).ready(function(){
   $('.our-friends-main').slick({
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 600,
    arrows: true,
    infinite: false,
    appendArrows: $('.our-friends-button-switchs'),
    appendDots: $('.our-friends-button-switchs'),
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
   $(".our-friends-main").on('afterChange', function(event, slick, currentSlide){
    $("#cp").text(currentSlide + 1);
 });
 });