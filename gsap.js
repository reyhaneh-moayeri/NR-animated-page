gsap.from(".navbar > div", {
  y: 60,
  opacity: 0,
  delay: 1,
  ease: Power3.easeInOut,
});
gsap.from(".centerbar-item", {
  stagger: 0.5,
  x: -60,
  opacity: 0,
  delay: 1.1,
  ease: Power3.easeInOut,
});

gsap.from(".img ", {
  stagger: 0.5,
  x: -60,
  opacity: 0,
  delay: 1.2,
  ease: Power3.easeInOut,
});

gsap.from(".bottombar-item", {
  y: 60,
  opacity: 0,
  delay: 1.3,
  ease: Power3.easeInOut,
});

gsap.from(".header-container > div", {
  stagger: 0.2,
  y: 500,
  opacity: 0,
  ease: Elastic.easeOut.config(2, 0.4),
  delay: 2,
  duration: 2.5,
});
