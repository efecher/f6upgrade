import $ = require('jquery');


// Module for functions to initialize slide shows
export module SlickSlider {
  export function initGenericSlideshow() {
    (<any>$('.slider')).slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      draggable: false,
      fade: false,
      infinite: true
    });
  }

  export function initGatewaySlideshow() {
    if($('.single-item .slide').length > 1) {
      (<any>$('.single-item')).slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        draggable: false,
        fade: true,
        infinite: true
      });
    }
  }
}