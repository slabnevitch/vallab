// Import vendor jQuery plugin example (not module)
// import $ from '~/app/libs/jquery/jquery.min.js';
import $ from 'jquery'
window.jQuery = $;
window.$ = $;
// console.log($)

// import Swiper, { Navigation, Mousewheel } from 'swiper';
// Swiper.use([Navigation, Mousewheel]);

//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
require ('~/app/libs-vanilla/service-functions/ibg-class.js');

//- remove-class--------------------------
// import {removeClass} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- siblings--------------------------
// import {siblings} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeIn--------------------------
// import {fadeIn} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeOut--------------------------
// import {fadeOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- dropdown-toggle on touch devices--------------------------
//- require('./vendor/libs-vanilla/service-functions/dropdown-toggle.js')

//- isMobile--------------------------
// import {isMobile} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- scrollDisable(надежное отключение скролла на ios--------------------------
// import scrollDisabler from '~/app/libs-vanilla/service-functions/scrollDisable.js'

//- scrollWidth(фикс прыгания стр-цы. при открытии модалки--------------------------
// require ('~/app/libs-vanilla/service-functions/scrollWidth.js');

//- All in one file--------------------------
// require('~/app/libs-vanilla/service-functions/all-functions.js')


//- WITH JQUERY===================================

//- jquery-UI--------------------------Не проверено!
// require('~/app/libs/jquery-ui/jquery-ui.min.js')
	
//- dl-menu--------------------------
// const dlmenu = require('~/app/libs/dlmenu/js/jquery.dlmenu.js')
// папку dl-menu/fonts копировать в главную fonts и переименовать в "dl-menu-font"

//- magnific-popup--------------------------
// const magnificPopup = require('~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js')
	
//- slick--------------------------
// require('~/app/libs/slick/slick.min.js')
	
//- slick-master (без лишних контейнеров)--------------------------
// require('~/app/libs/slick-master/slick.js')
		
//- superfish--------------------------Не проверено!
// require('~/app/libs/superfish/dist/js/hoverIntent.js')
// require('~/app/libs/superfish/dist/js/superfish.min.js')

//- end WITH JQUERY===================================


//- VANILLA JS===================================
//- dynamic-adaptive--------------------------
// require('~/app/libs-vanilla/dynamic-adaptive/da(es6).js')
	
//- slideout--------------------------
// var Slideout = require('~/app/libs-vanilla/slideout/slideout.js')

//- multilevel-panel--------------------------Не проверено!
// require('~/app/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- multilevel-dropdown-menu--------------------------
// require('~/app/libs-vanilla/multilevel-dropdown/multidropdown.js')
		
//- lazysizes--------------------------
// require('~/app/libs-vanilla/lazysizes/lazysizes.min.js')
	
//- accordion--------------------------
// require('~/app/libs-vanilla/accordion/vanilla-accordion.js')
	
//- tabs--------------------------
// require('~/app/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
// require('~/app/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
// var MicroModal = require('~/app/libs-vanilla/micromodal/micromodal.js')
	
//- swiper--------------------------
// const Swiper = require('~/app/libs-vanilla/swiper/swiper-bundle.min.js')

//- tiny-slider--------------------------
// import {tns} from '~/app/libs-vanilla/tiny-slider/dist/tiny-slider-skot.js';

//- wNumb--------------------------
// var wNumb = require('~/app/libs-vanilla/wnumb/wNumb.js')

// - noUiSlider--------------------------
// var noUiSlider = require('~/app/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
// require('~/app/libs-vanilla/imask/imask.js')

//- FormHandler--------------------------
//- html разыметка должна быть как в доке https://ivangrimes.github.io/formhandler.js/, обязателько должен присутствовать <div class="formhandler__notices"></div>!
//- кастомные стили для инпута и ошибок здесь _misc/formHandler-custom
// var FormHandler = require('~/app/libs-vanilla/formhandler.js-1.1.2/dist/js/FormHandler.js')

//- ratings--------------------------
// require('~/app/libs-vanilla/rating/ratings.js')

//- scroll-to-sects--------------------------
// import {ScrollToSects} from '~/app/libs-vanilla/scroll-to-sects/scrolltosect.js';

//- tippy--------------------------
//- https://atomiks.github.io/tippyjs/
//- base using:  html: <button data-tippy-content="Tooltip">Text</button>; js: tippy('[data-tippy-content]');
// import tippy from 'tippy.js';

//- sticky-sidebar -------------------------- Не проверено!
//- https://abouolia.github.io/sticky-sidebar/#usage
// require('./vendor/libs-vanilla/sticky-sidebar/dist/resizeSensor.js')
// require('./vendor/libs-vanilla/sticky-sidebar/dist/sticky-sidebar.min.js')

//- simplebar--------------------------
//- USE: new SimpleBar(document.querySelector('mySelector'), { autoHide: false });
// var SimpleBar = require('~/app/libs-vanilla/simplebar/simplebar.min.js')
	
//- fstdropdown (кастомный селект), исп-е.: <select data-searchdisable="true" class="fstdropdown-select">
// require('~/app/libs-vanilla/fstdropdown/fstdropdown.min.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// var baguetteBox = require('~/app/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
// require('./vendor/libs-vanilla/counter/counter.js')
	
//- end VANILLA JS===================================

jQuery(document).ready(function() {
	console.log('jQuery document ready');

});

// console.log(magnificPopup)

document.addEventListener('DOMContentLoaded', () => {

}); //DOMContentLoaded