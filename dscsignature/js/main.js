// Mobile Click Drop Down
$('.dropnav > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});

// toggle 
$(".nav-toggle").click(function() {
    $(this).toggleClass("on");
    $("nav").slideToggle();
});

// Sticy nav bar 
if ($(window).scrollTop() >= 300) {
    $('header').addClass('fixed-header');
} else {
    $('header').removeClass('fixed-header');

};

// Scroll Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll_To_Top').fadeIn();
    } else {
        $('.scroll_To_Top').fadeOut();
    }
});
$('.scroll_To_Top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 10);
    return false;
});