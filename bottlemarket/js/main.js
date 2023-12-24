/*--slidertop--*/
$('.slidertop, .ricecream_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dot: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1
})

/*--banner slider--*/
$('.bannerslider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dot: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
})



/*--tab--*/

$(document).ready(function() {
    $('.taclarsec').click(function() {
        $(".shomabodi").removeClass('active');
        $(".shomabodi[data-id='" + $(this).attr('data-id') + "']").addClass("active");
        $(".taclarsec").removeClass('active');
        $(this).parent().find(".taclarsec").addClass('active');
    });
});


$('.testimonial').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dot: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})