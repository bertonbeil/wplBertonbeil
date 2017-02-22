// nav scroll
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});
