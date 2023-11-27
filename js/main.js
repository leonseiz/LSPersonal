/*-----------------------------------------------------------------------------------

    Theme Name: Aricon - Business and Corporate Template
    Description: Business and Corporate HTML Template
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Tabs
        07. Resize function
        08. FullScreenHeight function
        09. Copy to clipboard
        10. ScreenFixedHeight function
        11. FullScreenHeight and screenHeight with resize function
        12. Sliders
        13. Tabs
        14. CountUp
        15. Countdown
        16. Isotop
        
        
    ---------------------------------- */    

(function($) {

    "use strict";

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
            } else $("header").removeClass("fixedHeader").addClass("scrollHeader");
        });

        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        /*------------------------------------
            06. Tabs
        --------------------------------------*/

        $('.tabs_animate').tabslet({
            mouseevent: 'click',
            attribute: 'href',
            animation: true
        });

        /*------------------------------------
            07. Resize function
        --------------------------------------*/

        $(window).resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            08. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $(window).height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            09. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };

        $('.source-modal').magnificPopup({
                type: 'inline',
                mainClass: 'mfp-fade',
                removalDelay: 160
        });


        /*------------------------------------
            10. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $(window).height() - $headerHeight;
            element.css('height', $screenheight);
        }

        // tooltips
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })

        /*------------------------------------
            11. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();
        
    // === when document ready === //
    $(document).ready(function() {

        /*------------------------------------
            12. Sliders
        --------------------------------------*/

        // Sliderfade
        $('.slider-fade .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin: 0,
            autoplay:true,
            smartSpeed:500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        // Testmonial carousel1
        $('.testmonial-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 800,            
            nav: true,
            dots: false,
            center:true,
            margin: 0,
            navText: ["<span>&#10229;</span>", "<span>&#10230;</span>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        // latest-project carousel
        $('.latest-project').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 800,            
            nav: true,
            dots: false,
            center: false,
            margin: 30,
            navText: ["<span>&#10229;</span>", "<span>&#10230;</span>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                }
            }
        });
       
        // header-slider
        $('.header-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsiveClass: true,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1,
                    dots: false
                   
                },
                992: {
                    items: 3,
                    margin: 30
                    
                }
            }
        });

        // images carousel
        $('.image-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            dots: false,
            nav: false,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 1,
                    margin: 0
                },
                992: {
                    items: 1,
                    margin: 0
                }
            }
        });

        /*------------------------------------
            13. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        // Child Tab
        if ($(".childverticaltab").length !== 0) {
            $('.childverticaltab').easyResponsiveTabs({
                type: 'vertical',
                width: 'auto',
                fit: true,
                tabidentify: 'ver_1', // The tab groups identifier
                activetab_bg: '#fff', // background color for active tabs in this group
                inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
                active_border_color: '#c1c1c1', // border color for active tabs heads in this group
                active_content_border_color: '#c1c1c1' // border color for active tabs contect in this group so that it matches the tab head border
            });
        }

        //Vertical Tab
        if ($(".verticaltab").length !== 0) {
            $('.verticaltab').easyResponsiveTabs({
                type: 'vertical', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                closed: 'accordion', // Start closed if in accordion view
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo2');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }
        
        /*------------------------------------
            14. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            15. Countdown
        --------------------------------------*/

        if ($(".countdown").length !== 0) {
            var tpj = jQuery;
            var countdown;
            tpj(document).ready(function() {
                if (tpj(".countdown").countdown == undefined) {
                    revslider_showDoubleJqueryError(".countdown");
                } else {
                    countdown = tpj(".countdown").show().countdown({
                        date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
                        format: "on"
                    });
                }
            });
        }

    });

    // === when window loading === //
    $(window).on("load", function() {

        /*------------------------------------
            16. Isotop
        --------------------------------------*/

        // isotope with magnificPopup
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        var $gallery = $('.gallery').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({
                filter: filterValue
            });
        });

        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        // stellar
        $(window).stellar();

    });

})(jQuery);
