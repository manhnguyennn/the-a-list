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

  bodyScrollBar.addListener(({ offset }) => {  
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
      //scroller: document.querySelector("#scroll-container"),  //document.body, // neccessary setting for smooth-scrollbar on body
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