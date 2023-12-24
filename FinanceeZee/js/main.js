//  header and footer
fetch('../partial/headerfile.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerfile').innerHTML = data;
    })
    .catch(error => {
        console.error('There was an error fetching headerfile.html', error);
    });

// Light Box with Gallery
$(document).ready(function() {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});

// Typing animation js
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 15px solid #212529; padding-right: 15px;}";
    document.body.appendChild(css);
};

// toggle btn
$("#toggle").click(function() {
    $(this).toggleClass("on");
    $("nav").slideToggle();
});

// sticy nav
$(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');

    }
});

// Toggle dropdown on click for mobile
$('.dropnav > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});


// Hide and Show Password
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.querySelector('input[name="Password"]');
    const toggleButton = document.querySelector('.eyes');

    toggleButton.addEventListener('click', function() {
        const passwordFieldType = passwordInput.getAttribute('type');
        if (passwordFieldType === 'password') {
            passwordInput.setAttribute('type', 'text');
            toggleButton.innerHTML = '<span><i class="fas fa-eye"></i></span>';
        } else {
            passwordInput.setAttribute('type', 'password');
            toggleButton.innerHTML = '<span><i class="fas fa-eye-slash"></i></span>';
        }
    });
});



// 1 Carousel slider
$('#walkthrough-slider, .artistry-slider, .blog_section').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

// 4 Carousel slider
$('#testimonials, .blog_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

// 3 Carousel slider
$('#consultancy-slider,#trainingsec').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
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
});


/*--view button and less button--*/
const content = document.querySelector('.view-button-section');
const showMoreBtn = document.querySelector('.view-button');

showMoreBtn.addEventListener('click', function() {

    content.classList.toggle('expanded');
    showMoreBtn.innerText = content.classList.contains('expanded') ? 'Show Less' : 'Show More';
});