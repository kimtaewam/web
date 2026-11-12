document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  //1.
  gsap.to(".box_to", {
    x: 200,
    duration: 4,
    ease: "power1.out",
  });

  gsap.from(".box_from", {
    x: -200,
    opacity: 0.1,
    duration: 2,
  });

  gsap.fromTo(
    ".box_from_to",
    {
      scale: 0,
    },
    {
      scale: 1.5,
      rotate: 360,
      duration: 2,
    },
  );

  //2.
  document.getElementById("btn_run").addEventListener("click", () => {
    gsap.to(".dot", {
      x: 400,
      duration: 3,
      delay: 1,
      repeat: -1,
      yoyo: true,
      ease: "expoScale(0.5,7,none)",
    });
  });

  //3.
  gsap.from(".chips li", {
    x: 50,
    opacity: 0,
    duration: 0.4,
    stagger: 1,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".chips",
      strat: "top 70%",
      toggleActions: "play none none reverse",
      toggleActions: "restart none none none",
    },
  });


  //4.
  const timeline_crad = gsap.timeline({
    scrollTrigger:{
      trigger:'.scene',
      markers : true,
      start : 'top 30%',
      end : 'bottom 70%',
      toggleActions:"play none none reverse",
    }
  })

}); //end
