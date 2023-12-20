// Sticy nav bar 
if ($(window).scrollTop() >= 300) {
    $('header').addClass('fixed-header');
} else {
    $('header').removeClass('fixed-header');

};

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

// Scroll Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll_To_Top').fadeIn();
    } else {
        $('.scroll_To_Top').fadeOut();
    }

    // Sticy nav bar 
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');

    };

});
$('.scroll_To_Top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 10);
    return false;
});

// Slider 
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    slidesPerView: 1,
    freeMode: true,
    freeModeSticky: true
});

// Product Slider Water Marks
setTimeout(function() {
    $('.warter-mark').addClass('loaded')
}, 500);

const circElements = document.querySelectorAll('.circ');
circElements.forEach(element => {
    const circleType = new CircleType(element);
    circleType.radius(2);
});

// Main Slider
$(document).ready(function() {
    var owl = $('.griddivsec').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        onInitialized: updateBackground,
        onTranslated: updateBackground,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Function to update background image
    function updateBackground(event) {
        var activeItem = $(event.target).find('.owl-item.active .item');
        var imgSrc = activeItem.find('img').attr('src');
        $('.griddivsec').css('background-image', 'url(' + imgSrc + ')');
    };

    // Handle hover events on carousel items
    $('.item').hover(function() {
        var imgSrc = $(this).find('img').attr('src');
        $('.griddivsec').css('background-image', 'url(' + imgSrc + ')');
    }, function() {
        updateBackground({
            target: owl
        });
    });
});