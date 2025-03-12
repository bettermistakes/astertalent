// --------------- Slider Script ---------------
function slider1() {
    let splides = $('.splide');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 2,
        perMove: 2,
        focus: '0',
        type: 'slider',
        gap: '72rem',
        arrows: 'slider',
        pagination: 'false',
        speed: 500,
        dragAngleThreshold: 30,
        autoWidth: false,
        rewind: false,
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false,
        breakpoints: {
          991: { perPage: 1, perMove: 1 },
          767: { perPage: 1, perMove: 1 },
          479: { perPage: 1, perMove: 1 },
        },
      }).mount();
    }
  }
  slider1();
  // --------------- End of Slider Script ---------------
  
  // --------------- Banner Scrolling Script ---------------
  const scrollSpeed = 50;
  
  function startScrolling(element, direction) {
    const scrollWidth = element.offsetWidth;
    let startTime = null;
  
    function animate(time) {
      if (!startTime) startTime = time;
      const timeElapsed = time - startTime;
  
      // Calculate scroll position based on direction
      const scrollPosition = (timeElapsed * scrollSpeed / 1000) % scrollWidth;
      const translateValue = direction === 'left' ? -scrollPosition : scrollPosition;
  
      element.style.transform = `translateX(${translateValue}px)`;
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".is--scrolling").forEach(element => {
      startScrolling(element, 'left');
    });
  
    document.querySelectorAll(".is--scrolling-reverse").forEach(element => {
      startScrolling(element, 'right');
    });
  });
  // --------------- End of Banner Scrolling Script ---------------
  
  // --------------- Wave and Hero Animation Script ---------------
  document.addEventListener("DOMContentLoaded", () => {
    const waveParent = document.querySelector(".home--wave-parent");
    const heroLotie = document.querySelector(".hero--lotie");
  
    // Delay to allow animation
    setTimeout(() => {
      if (waveParent) {
        waveParent.classList.remove("is--initial");
      }
      if (heroLotie) {
        heroLotie.classList.remove("is-initale");
      }
    }, 200); // Adjust delay if necessary
  });
  // --------------- End of Wave and Hero Animation Script ---------------
  
  // --------------- Fade Stagger Left Animation Script ---------------
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[animation='fade-stagger-left']").forEach(function (fadeStaggerElem) {
      gsap.to(fadeStaggerElem.querySelectorAll("[animation='fade-item-left']"), {
        scrollTrigger: {
          trigger: fadeStaggerElem, // Trigger container
          start: "top bottom-=0", // Trigger before element enters view
          end: "top center", // End animation when element reaches center
          once: true, // Animate once
          markers: false, // Debug markers off
        },
        "--motion-translateX": "0%", // Final position
        opacity: 1, // Full visibility
        duration: 0.3, // Animation duration
        ease: "easeOutQuad", // Smooth easing
        stagger: {
          each: 0.15, // Fluid delay between items
        },
      });
    });
  });
  // --------------- End of Fade Stagger Left Animation Script ---------------
  
  // --------------- Fade Flash Animation Script ---------------
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[animation='fade-flash']").forEach(function (fadeFlashElem) {
      gsap.fromTo(
        fadeFlashElem.querySelectorAll("[animation='fade-flash-item']"),
        {
          opacity: 0, // Initial opacity (invisible)
        },
        {
          opacity: 1, // Final opacity (visible)
          duration: 0.2, // Longer duration for smoother effect
          ease: "power1.inOut", // Smooth transition
          stagger: {
            each: 0.1, // Progressive delay between items
          },
          scrollTrigger: {
            trigger: fadeFlashElem, // Trigger based on container
            start: "top bottom-=50", // Slightly before visibility
            markers: false, // Debug markers off
          },
        }
      );
    });
  });
  // --------------- End of Fade Flash Animation Script ---------------
  