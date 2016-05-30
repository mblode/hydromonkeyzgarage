//= require jquery
//= require bootstrap-sprockets
//= require '_flickity.js'

'use strict';

$(document).ready(function() {

  $('.gallery').flickity({
    imagesLoaded: true,
    wrapAround: true
  });

});
