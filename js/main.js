$(function() {

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
});