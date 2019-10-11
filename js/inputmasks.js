(function () {
    'use strict';

    $('.form-labeled input, .form-labeled textarea').change( function(e){
        if($(this).val() !== ''){
            $(this).parent().find('label').addClass('active');
        }else{
            $(this).parent().find('label').removeClass('active');
        }
    });

    $('.mask-phone').mask('(00) 0000-0000');
    $('.mask-cellphone').mask('(00) 00000-0000');

})();