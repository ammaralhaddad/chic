
if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() {	
        $(this).toggleClass('active');
        $('.nav-area .nav').slideToggle(200);
    });
}

$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            var width = $(window).width();
            if(width < 991) {
                $('.menu-trigger').removeClass('active');
                $('.nav-area .nav').slideUp(200);	
            }				
            $('html,body').animate({
                scrollTop: (target.offset().top) - 80
            }, 700);
            return false;
        }
    }
});
