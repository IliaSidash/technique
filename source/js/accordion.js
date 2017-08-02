$(function () {

    $('.product-right__accord:first').show();

    $('.product-right__item').on('click', function(){
        var info = $(this).next();

        $('.product-right__accord:visible').not(info).slideUp(400);
        info.slideDown(400);
    });


    var prices = ['125.000 Р.', '150.000 Р.', '200.000 Р.'];
    $('.product-right-char input').on('click', function (e) {
        var i = $(this).attr('data-pos');
        $('.product-right__price').text(prices[i])

    })

});
