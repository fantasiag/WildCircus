$(document).ready(function() {
    $('.a-scroll').on('click', function() {
        var page = $(this).attr('href');
        var speed = 900;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });
});
