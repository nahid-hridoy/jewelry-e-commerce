(function($) {
    "use strict";

    jQuery(document).ready(function($) {




        /*owl carousel active*/
        $(".category-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoPlay: true,
            lazyLoad: true,
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true
            // navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
        });

        $(".brand-slider").owlCarousel({
            items: 6,
            loop: true,
            autoPlay: false,
            lazyLoad: true,
            dots: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true
            // navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
        });



    });


    jQuery(window).load(function() {


    });


}(jQuery));