(function ($) {
    "use strict";
    $(document).ready(function () {
        /**************************************************
            *** JS TABLE ***
            ****************
            
            01. COUNTER UP JS
            02. STICKY HEADER JS
            03. MAIN SLIDER JS
            04. AOS ANIMATION JS
            05. MODAL VIDEO JS
            06. MOBILE MENU JS
            07. PRELOADER JS
            08. BTM TO TOP JS
            09. VANILLA TILT JS
            10. PARALLAX JS
            11. CLIENT SLIDER JS
         */

        /************************************************
            01. COUNTER UP JS
         *************************************************/
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });


        /************************************************
            02. STICKY JS
         *************************************************/
        $(window).scroll(function () {
            var sticky = $('.headp-header-area-start'),
                scroll = $(window).scrollTop();
            if (scroll < 200) sticky.removeClass('sticky');
            else sticky.addClass('sticky').animate({
                scrollTop: 0
            }, 1000);
        });

        /************************************************
            03. MAIN SLIDER JS
        *************************************************/
        $('.headp-hero-image-area-start, .headp-product-slider').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4500,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });


        /************************************************
            04. AOS ANIMATION JS
        *************************************************/
        AOS.init();


        /************************************************
            05. MODAL VIDEO JS
        *************************************************/
        $(".js-modal-btn").modalVideo();


        /************************************************
            06. MOBILE MENU JS
        *************************************************/
        $('.drawer').drawer();


        /************************************************
            07. PRELOADER JS
        *************************************************/
        setTimeout(function () {
            $('.preloader').fadeOut();
        }, 30);


        /************************************************
            08. BTM TO TOP JS
        *************************************************/
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                $('.btm-to-top').show();
            } else {
                $('.btm-to-top').hide();
            }
        });



        /************************************************
            09. VANILLA TILT JS
        *************************************************/
        VanillaTilt.init(document.querySelectorAll(".mouse-move"), {
            max: 25,
            speed: 400
        });

        /************************************************
            10. PARALLAX JS
        *************************************************/
        $('.headp-newslater-area-start').parallax({
            imageSrc: 'assets/images/newslater-bg.png'
        });


        /************************************************
            11. CLIENT SLIDER JS
        *************************************************/
        $('.headp-client-slider').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4500,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });




    });
}(jQuery));
