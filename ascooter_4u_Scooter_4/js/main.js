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
/*-- Product Details pages --*/
var App = (function() {
    //=== Use Strict ===//
    'use strict';

    //=== Private Variables ===//
    var gallery = $('#js-gallery');

    //=== Gallery Object ===//
    var Gallery = {
        zoom: function(imgContainer, img) {
            var containerHeight = imgContainer.outerHeight(),
                src = img.attr('src');

            if (src.indexOf('/products/normal/') != -1) {
                // Set height of container
                imgContainer.css("height", containerHeight);

                // Switch hero image src with large version
                img.attr('src', src.replace('/products/normal/', '/products/zoom/'));

                // Add zoomed class to gallery container
                gallery.addClass('is-zoomed');

                // Enable image to be draggable
                img.draggable({
                    drag: function(event, ui) {
                        ui.position.left = Math.min(100, ui.position.left);
                        ui.position.top = Math.min(100, ui.position.top);
                    }
                });
            } else {
                // Ensure height of container fits image
                imgContainer.css("height", "auto");

                // Switch hero image src with normal version
                img.attr('src', src.replace('/products/zoom/', '/products/normal/'));

                // Remove zoomed class to gallery container
                gallery.removeClass('is-zoomed');
            }
        },
        switch: function(trigger, imgContainer) {
            var src = trigger.attr('href'),
                thumbs = trigger.siblings(),
                img = trigger.parent().prev().children();

            // Add active class to thumb
            trigger.addClass('is-active');

            // Remove active class from thumbs
            thumbs.each(function() {
                if ($(this).hasClass('is-active')) {
                    $(this).removeClass('is-active');
                }
            });

            // Reset container if in zoom state
            if (gallery.hasClass('is-zoomed')) {
                gallery.removeClass('is-zoomed');
                imgContainer.css("height", "auto");
            }
            img.attr('src', src);
        }
    };

    function init() {

        // Listen for clicks on anchors within gallery
        gallery.delegate('a', 'click', function(event) {
            var trigger = $(this);
            var triggerData = trigger.data("gallery");

            if (triggerData === 'zoom') {
                var imgContainer = trigger.parent(),
                    img = trigger.siblings();
                Gallery.zoom(imgContainer, img);
            } else if (triggerData === 'thumb') {
                var imgContainer = trigger.parent().siblings();
                Gallery.switch(trigger, imgContainer);
            } else {
                return;
            }
            event.preventDefault();
        });
    }
    return {
        init: init
    };

})();
App.init();