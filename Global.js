
    
// ------------------ gsap ------------------ //
gsap.registerPlugin(ScrollTrigger);



  // ------------------ Stagger ------------------ //

  document.querySelectorAll("[animation=fade-stagger]").forEach(function(fadeSplitElem) {
    gsap.from(fadeSplitElem.querySelectorAll("[animation=fade-item]"), {
      scrollTrigger: {
        trigger: fadeSplitElem,
        start: "top bottom-=200",
        markers: false,
      },
      y: "20rem",
      opacity: 0,
      ease: "power1.out", // Changed 'smooth' to 'power1.out' for a valid easing function
      duration: 0.6,
      stagger: {
        each: 0.1,
      },
    });
  });

  // ------------------ Fade Animation ------------------ //

  $("[animation='fade']").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this)[0], // jQuery object to DOM element
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
    tl.from($(this)[0], { // jQuery object to DOM element
      y: "20rem",
      opacity: 0,
      duration: 1,
      ease: "power1.out", // Changed 'smooth' to 'power1.out' for a valid easing function
    });
  });


