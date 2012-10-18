var Carousel = require('carousel')
  , inherit = require('inherit')
  , classes = require('classes');

module.exports = CarouselSlide;
inherit(CarouselSlide, Carousel);

  console.log('slider!!');
function CarouselSlide(el, opts) {
  if (!(this instanceof CarouselSlide)) return new CarouselSlide(el, opts);
  Carousel.call(this, el, opts);

  console.log('slider!!');
  this.forEach(function (item) {
    setTimeout(function () {
      console.log(item);
      classes(item).add('carousel-slide');
    }, 0);
  })
}
