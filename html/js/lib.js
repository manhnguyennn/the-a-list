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




}