let App = {
    windowW: $(window).width(),
    initHelpers: function ($helpers) {
        let me = this;
        $(document).ready(function () {
            me.initHelper('common');
            if ($helpers != undefined) {
                if ($helpers instanceof Array) {
                    for (let $index in $helpers) {
                        me.initHelper($helpers[$index]);
                    }
                } else {
                    me.initHelper($helpers);
                }
            } else {

            }
        });

    },
    initHelper: function ($helper) {
        let me = this;
        //console.log($helper);
        if ($helper.length > 0) {
            console.log('init <' + $helper + '> function window width = ' + me.windowW);
            App[$helper]();
        }

    },

    common: function () {


        let me = this;

        $('.tal-header .menuBtn').click(function () {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
                $('.tal-wrapper').removeClass('active').delay(300)
            }
            else {
                $(this).parent().addClass('active').delay(300);
                $('.tal-wrapper').addClass('active')
            }
        });

        $('.tal-header .nav-link').click(function () {
            $('.menuGroup').removeClass('active');
            $('.tal-wrapper').removeClass('active')
        });
        if (me.windowW > 800) {
            const windowWidth = () => {
                let wW = document.documentElement.clientWidth - 20;
                $('.top-border-radius').css('width', wW - 10);
                $('.bottom-round').css('width', wW - 10);
            };
            window.addEventListener('resize', windowWidth);
            windowWidth();
            allPage();

            document.querySelectorAll('.parallax').forEach(function (prl) {
                // Now do something with my button
                gsap.to(prl, {
                    y: "-8vw",
                    ease: "none",
                    scrollTrigger: {
                        trigger: prl,
                        // start: "top bottom", // the default values
                        // end: "bottom top",
                        scrub: true
                    },
                });
            });

            // gsap.registerPlugin(ScrollTrigger);

            // apply parallax effect to any element with a data-speed attribute

        } else {

            document.querySelectorAll('.parallax').forEach(function (prl) {
                // Now do something with my button
                gsap.to(prl, {
                    y: "-18vw",
                    ease: "none",
                    scrollTrigger: {
                        trigger: prl,
                        // start: "top bottom", // the default values
                        // end: "bottom top",
                        scrub: true
                    },
                });
            });
        }

        let animfade = gsap.utils.toArray(".animFadeUp"), scrollTween;

        animfade.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top bottom",
                end: "+=200%",
                onEnter: () => panel.classList.add("animated"),
                // toggleClass: {targets: panel, className: "animated"},
            });
        });


    },
    home: function () {


        let me = this;


        if (me.windowW > 800) {
            // ScrollTrigger horizontal scroll
            // ================================
            const horizontalSections = gsap.utils.toArray('div.horizontal');

            horizontalSections.forEach(function (sec, i) {
                var thisPinWrap = sec.querySelector('.pin-wrap');
                var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
                var sections = gsap.utils.toArray(".horizontal-item");
                var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);
                var scrollTween = gsap.fromTo(thisAnimWrap, {
                    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0
                }, {
                    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue(),
                    ease: "none", // <-- IMPORTANT!
                    scrollTrigger: {
                        trigger: sec,
                        //scroller: document.querySelector('#scroll-container'), // neccessary setting for smooth-scrollbar on body
                        pinType: 'transform', // neccessary setting for smooth-scrollbar on body
                        start: "top top",
                        end: "+=3500",
                        pin: thisPinWrap,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                        scrub: true,
                        // markers: true,
                    }
                });

                // Add class to active item
                // =========================
                sections.forEach((sct, i) => {
                    ScrollTrigger.create({
                        trigger: sct,
                        containerAnimation: scrollTween,
                        start: thisAnimWrap.classList.contains('to-right') ? "100% 50%" : "0% 50%",
                        end: thisAnimWrap.classList.contains('to-right') ? "0% 50%" : "100% 50%",
                        toggleClass: {targets: sct, className: "animated"},
                        // markers: true
                    });

                });

            });


        } else {


        }
    },
    careerList: function () {


        let me = this;


        if (me.windowW > 800) {
            let trfContent = document.querySelector('.tal-career__list');
            let trfCover = document.querySelector('.tal-career__cover  .titleBox');
            let trfSapo = document.querySelector('.tal-career__cover  .sapo');
            let trfHeight = window.innerHeight - 60;
            console.log('transform offset' + trfHeight);
            gsap.to(trfContent, {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfContent,
                    start: 0, // the default values
                    end: trfHeight,
                    scrub: true
                },
            });
            gsap.to(trfCover, {
                scale: 0.7,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfCover / 2,
                    start: 0, // the default values
                    end: trfHeight,
                    scrub: true
                },
            });
            gsap.to(trfSapo, {
                scale: 0.7,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfCover / 2,
                    start: 0, // the default values
                    end: trfHeight,
                    scrub: true
                },
            });
        } else {


        }
    },
    career: function () {


        let me = this;


        if (me.windowW > 800) {
            let trfContent = document.querySelector('.tal-career__detail-content');
            let trfCover = document.querySelector('.tal-career__detail-cover .titleBox');
            let trfHeight = (window.innerHeight / 2.27);
            console.log('transform offset' + trfHeight);
            gsap.to(trfContent, {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfContent,
                    start: 0, // the default values
                    end: trfHeight / 2,
                    scrub: true
                },
            });
            gsap.to(trfCover, {
                scale: 0.7,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfCover / 2,
                    start: 0, // the default values
                    end: trfHeight,
                    scrub: true
                },
            });
        } else {


        }
    },
    about: function () {


        let me = this;


        if (me.windowW > 800) {
            let trfContent = document.querySelector('.tal-abus__content');
            let trfCover = document.querySelector('.tal-abus__cover  .info-cover');
            let trfHeight = window.innerHeight;
            console.log('transform offset' + trfHeight);
            gsap.to(trfContent, {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfContent,
                    start: 0, // the default values
                    end: trfHeight / 2,
                    scrub: true,
                    marker: true
                },
            });
            gsap.to(trfCover, {
                scale: 0.7,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfCover / 2,
                    start: 0, // the default values
                    end: trfHeight,
                    scrub: true
                },
            });
        } else {


        }
    },
    workdetail: function () {


        let me = this;


        if (me.windowW > 800) {
            let swiperRc = new Swiper('.swiper-recent-work', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                navigation: {
                    nextEl: ".tal-worksdetail__recent .swiper-button-next",
                    prevEl: ".tal-worksdetail__recent .swiper-button-prev",
                },

            });

            let trfContent = document.querySelector('.detail-content');
            let trfHeight = (window.innerHeight / 2.27);
            console.log('transform offset' + trfHeight);
            gsap.to(trfContent, {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfContent,
                    start: 0, // the default values
                    end: trfHeight * 2,
                    scrub: true
                },
            });

        } else {
            let swiperRc = new Swiper('.swiper-recent-work', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                freeMode: true,

            });

            let trfContent = document.querySelector('.detail-content');
            let trfHeight = (window.innerWidth);
            console.log('transform offset' + trfHeight);
            gsap.to(trfContent, {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trfContent,
                    start: 0, // the default values
                    end: trfHeight * 2,
                    scrub: true
                },
            });


        }
    },
};
