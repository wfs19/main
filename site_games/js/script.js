$(function () {

    $('.links')
        .hide()
        .delay('250')
        .fadeIn('slow');

    $('#logo').hide().delay('100').fadeIn('slow');


    $('.imgbanner,.texto')
        .hide()
        .delay('250')
        .fadeIn('slow');

    $('.tipos').click(function () {
        $('#logo').hide().delay('100').fadeIn('slow');
        $('.links').css('background-image', 'none');
        $('.links ul').css('display', 'block');
        $('.sessao1').css('display', 'none');
        $('.sessao0').css('display', 'block');
        $('.sessao1').css('display', 'none');
        $('.sessao2').css('display', 'none');
        $('.sessao3').css('display', 'none');
        $('.sessao4').css('display', 'none');
        $('.sessao5').css('display', 'none');
        $('.imgbanner2,.texto,.links')
            .hide()
            .delay('250')
            .fadeIn('slow');

    });



    $('.mmo').click(function () {
        $('.sessao0').css('display', 'none');
        $('.sessao1').css('display', 'none');
        $('.sessao2').css('display', 'block');
        $('.sessao3').css('display', 'none');
        $('.sessao4').css('display', 'none');
        $('.sessao5').css('display', 'none');
        $('.imgmmo,.texto')
            .hide()
            .delay('250')
            .fadeIn('slow');

    });

    $('.moba').click(function () {
        $('.sessao0').css('display', 'none');
        $('.sessao1').css('display', 'none');
        $('.sessao2').css('display', 'none');
        $('.sessao3').css('display', 'block');
        $('.sessao4').css('display', 'none');
        $('.sessao5').css('display', 'none');
        $('.imgmoba,.texto')
            .hide()
            .delay('250')
            .fadeIn('slow');
    });

    $('.fps').click(function () {
        $('.sessao0').css('display', 'none');
        $('.sessao1').css('display', 'none');
        $('.sessao2').css('display', 'none');
        $('.sessao3').css('display', 'none');
        $('.sessao4').css('display', 'block');
        $('.sessao5').css('display', 'none');
        $('.imgfps,.texto')
            .hide()
            .delay('250')
            .fadeIn('slow');
    });

    $('.has').click(function () {
        $('.sessao0').css('display', 'none');
        $('.sessao1').css('display', 'none');
        $('.sessao2').css('display', 'none');
        $('.sessao3').css('display', 'none');
        $('.sessao4').css('display', 'none');
        $('.sessao5').css('display', 'block');
        $('.imghas,.texto')
            .hide()
            .delay('250')
            .fadeIn('slow');
    });


})