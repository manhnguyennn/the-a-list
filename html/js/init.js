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


        const windowWidth = () => {
            let wW = document.documentElement.clientWidth - 20;
            $('.top-border-radius').css('width', wW);
            $('.bottom-round').css('width', wW);
        };
        window.addEventListener('resize', windowWidth);
        windowWidth();

        if (me.windowW > 800) {

        } else {


        }
    },
    home: function () {


        let me = this;


        if (me.windowW > 800) {



            // Your code

            gsap.registerPlugin(ScrollTrigger);

            const pageContainer = document.querySelector(".tal-container");

            /* SMOOTH SCROLL */
            const scroller = new LocomotiveScroll({
                el: pageContainer,
                smooth: true
            });

            scroller.on("scroll", ScrollTrigger.update);

            ScrollTrigger.scrollerProxy(pageContainer, {
                scrollTop(value) {
                    return arguments.length
                        ? scroller.scrollTo(value, 0, 0)
                        : scroller.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        left: 0,
                        top: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: pageContainer.style.transform ? "transform" : "fixed"
            });

            ////////////////////////////////////
            ////////////////////////////////////

            let pinBoxes = document.querySelectorAll(".pin-wrap > *");
            let pinWrap = document.querySelector(".pin-wrap");
            let pinWrapWidth = pinWrap.offsetWidth;
            console.log('pin width: ' + pinWrapWidth);
            let horizontalScrollLength = pinWrapWidth - window.innerWidth;
            console.log('horizontalScrollLength: ' + horizontalScrollLength);
            // Pinning and horizontal scrolling

            gsap.to(".pin-wrap", {
                scrollTrigger: {
                    scroller: pageContainer, //locomotive-scroll
                    scrub: true,
                    trigger: "#sectionPin",
                    pin: true,
                    anticipatePin: 1,
                    start: "top top",
                    end: pinWrapWidth

                },
                x: () => -horizontalScrollLength,
                ease: "none"
            });

            ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

            ScrollTrigger.refresh();


        } else {


        }
    },
};
