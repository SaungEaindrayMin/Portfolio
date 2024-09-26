gsap.from(".clip-top, .clip-bottom", 2, {
  delay: 1,
  height: "50vh",
  ease: "power4.inOut",
});

gsap.to(".marquee", 3.5, {
  top: "50%",
  delay: 0.75,
  ease: "power4.inOut",
});

gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, {
  left: "100%",
  delay: 1,
  ease: "power3.inOut",
});

gsap.from(".clip-center .marquee", 5, {
  left: "-50%",
  delay: 1,
  ease: "power3.inOut",
});

gsap.to(".clip-top", 2, {
  delay: 6,
  clipPath: "inset(0 0 100% 0)",
  ease: "power4.inOut",
});

gsap.to(".clip-bottom", 2, {
  delay: 6,
  clipPath: "inset(100% 0 0 0)",
  ease: "power4.inOut",
});

gsap.to(
  ".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span",
  1,
  {
    opacity: 0,
    delay: 6,
    ease: "power2.inOut",
  }
);

gsap.fromTo('.left',{
  opacity:0,
  skewY:20,
  scale:0.2
},{
  opacity:1,
  skewY:0,
  scale:1,
  duration:1,
  delay:0.5,
  scrollTrigger:'.left'
})

gsap.utils.toArray('.right').forEach(right => {
  gsap.fromTo(right,{
      opacity:0,
      x:150,
      skewX:30,
  },{
      opacity:1,
      x:0,
      duration:1,
      delay:.4,
      skewX:0,
      scrollTrigger:right
  })
})

gsap.utils.toArray('#skills').forEach(skill => {
  gsap.fromTo(skill,{
      opacity:0,
      y:200,
      skewY:0,
  },{
      opacity:1,
      y:0,
      duration:1,
      delay:.4,
      skewY:0,
      scrollTrigger:skill
  })
})

gsap.utils.toArray('.info').forEach(info => {
  gsap.fromTo(info,{
      opacity:0,
      y:200,
      skewY:0,
  },{
      opacity:1,
      y:0,
      duration:1,
      delay:.4,
      skewY:0,
      scrollTrigger:info
  })
})

gsap.utils.toArray('.aboutme').forEach(me => {
  gsap.fromTo(me,{
      opacity:0,
      y:200,
      skewY:0,
  },{
      opacity:1,
      y:0,
      duration:1,
      delay:.4,
      skewY:0,
      scrollTrigger:me
  })
})

gsap.utils.toArray('.education').forEach(edu => {
  gsap.fromTo(edu,{
      opacity:0,
      y:200,
      skewY:0,
  },{
      opacity:1,
      y:0,
      duration:1,
      delay:.4,
      skewY:0,
      scrollTrigger:edu
  })
})
