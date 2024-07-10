$(function() {

    $('.bars').on('click', function(){
        $('header').toggleClass('open');
    });

    $('#mask').on('click', function() {
        $('header').toggleClass('open');
    });
    
    $('.navi a').on('click', function() {
        $('header').toggleClass('open');
    });

    $('a[href^="#"]').click(function() {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let posi = target.offset().top;

        $("html, body").animate({scrollTop: posi}, 800);
        return false;
    });

    $('.show-more, .modal-mask').on('click', function() {
        $('.modal').toggleClass('modal-open');
    });

    $('.question').on('click', function(){
        $('.answer').slideUp(500);

        var findElm = $(this).next('.answer');
        
        if ($(this).hasClass('close')) {
            $(this).removeClass('close');
        } else {
            $('.close').removeClass('close');
            $(this).addClass('close');
            $(findElm).slideDown(500);
        }
    });

    $('#to-top').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#to-top').fadeIn(500);
        } else {
            $('#to-top').fadeOut(500);
        }

        $('.flow-item').each(function() {
            var scroll = $(window).scrollTop();
            var target = $(this).offset().top;
            var winHeight = $(window).height();

            if (scroll > target - winHeight + 200) {
                $(this).addClass('flow-fade');
            }
        });
        
        $('.how-to-text ul li').each(function() {
            var scroll = $(window).scrollTop();
            var target = $(this).offset().top;
            var winHeight = $(window).height();

            if (scroll > target - winHeight + 200) {
                $(this).addClass('flow-fade2');
            }
        });

        $('.voice > .fukidashi').each(function() {
            var scroll = $(window).scrollTop();
            var target = $(this).offset().top;
            var winHeight = $(window).height();

            if (scroll > target - winHeight + 200) {
                $(this).addClass('popup');
                $(this).find('.marker').addClass('on');
            }
        });

        });
        
});