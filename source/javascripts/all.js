//= require jquery
//= require bootstrap-sprockets
//= require '_flickity.js'

'use strict';

$(document).ready(function() {

  $('.gallery').flickity({
    accessibility: true,
    autoPlay: true,
    cellAlign: 'center',
    cellSelector: undefined,
    contain: false,
    draggable: true,
    freeScroll: false,
    friction: 0.2,
    initialIndex: 0,
    imagesLoaded: true,
    prevNextButtons: true,
    pageDots: true,
    resize: true,
    setGallerySize: true,
    watchCSS: false,
    wrapAround: true
  });

});
