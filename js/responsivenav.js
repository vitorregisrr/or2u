(function () {
    'use strict';

    $('#nav-toggler').click(function () {
        const isExpanded = $(this).attr('aria-expanded') === 'false' ? false : true;

        $('#mobile-nav').toggleClass('active');

        $(this).attr('aria-expanded', !isExpanded);
    });
    
})();