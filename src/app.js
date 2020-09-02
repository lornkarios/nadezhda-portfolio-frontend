window.$ = window.jQuery = require('jquery')
require('@fancyapps/fancybox');
$(window).on('load', function () {
        $('.loaderArea').delay(1000).fadeOut('slow');
});