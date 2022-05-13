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
            allPage();
        } else {


        }
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
                    end: "+=5000",
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
                    toggleClass: { targets: sct, className: "active" },
                    // markers: true
                    });
                    
                });

            });



        } else {


        }
    },
};
