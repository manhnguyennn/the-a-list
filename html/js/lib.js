function allPage() {
    console.log("allPage");
    // =======================
    // Begin Smooth Scrollbar
    // =======================

    if ($("body").hasClass("smooth-scroll")) {

        // Init Smooth Scrollbar
        // ======================
        var Scrollbar = window.Scrollbar;
        Scrollbar.init(document.querySelector("#scroll-container"), {
            damping: 0.05,
            renderByPixel: true,
            continuousScrolling: true,
            alwaysShowTracks: true
        });


        // 3rd party library setup
        // More info: https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()
        // ========================
        let scrollPositionX = 0,
            scrollPositionY = 0,
            bodyScrollBar = Scrollbar.init(document.getElementById("scroll-container"));

        bodyScrollBar.addListener(({offset}) => {
            scrollPositionX = offset.x;
            scrollPositionY = offset.y;
        });

        bodyScrollBar.setPosition(0, 0);
        bodyScrollBar.track.xAxis.element.remove();

        // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
        ScrollTrigger.scrollerProxy("body", {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });

        // when smooth scroller updates, tell ScrollTrigger to update() too. 
        bodyScrollBar.addListener(ScrollTrigger.update);
    }

    // =======================
    // End Smooth Scrollbar
    // =======================


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

}