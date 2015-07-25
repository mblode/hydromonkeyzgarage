//= require jquery
//= require bootstrap-sprockets
//= require '_flickity.js'

'use strict';

$(document).ready(function() {

  $('.gallery').flickity({
    accessibility: true,
    autoPlay: 3000,
    cellAlign: 'center',
    cellSelector: undefined,
    contain: false,
    draggable: true,
    freeScroll: false,
    friction: 0.2,
    initialIndex: 0,
    imagesLoaded: true,
    percentPosition: true,
    prevNextButtons: true,
    pageDots: true,
    resize: true,
    rightToLeft: false,
    setGallerySize: true,
    watchCSS: false,
    wrapAround: true
  });
});
