    const horizontalSections = gsap.utils.toArray('section.horizontal');

    horizontalSections.forEach(function (sec, i) {  
      const thisPinWrap = sec.querySelector('.pin-wrap');
      const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

      const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

      gsap.fromTo(thisAnimWrap, { 
        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
      }, { 
        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
        ease: "none",
        scrollTrigger: {
          trigger: sec,    
          start: "top top",
          end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
          pin: thisPinWrap,
          invalidateOnRefresh: true,
          scrub: true,
        }
      });
    });
 