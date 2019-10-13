(function () {
    'use strict';

    // Home Carousel //
    const depoimentosCarousel = $("#depoimentos-carousel");
    depoimentosCarousel.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        center: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='fa fa-caret-left'>", "<i class='fa fa-caret-right'>"
        ],
        slideBy: "page",
        startPosition: 0,
        navContainer: '#depoimentos-carousel-nav'
    });

    window.dispatchEvent(new Event('resize'));
})();