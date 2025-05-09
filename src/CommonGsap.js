import gsap from "gsap";

export default function loadAnimations() {
  gsap.from(".swipe-in-l", {
    opacity: 0,
    x: 100,
    duration: 0.5,
    ease: "expo.out",
  });

  gsap.from(".swipe-in-r", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "expo.out",
  });

  gsap.from(".swipe-in-u", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: "expo.out",
  });

  gsap.to(".swipe-out-l", {
    opacity: 0,
    x: 100,
    duration: 0.5,
    ease: "expo.out",
  });

  gsap.to(".swipe-out-r", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: "expo.out",
  });

  gsap.to(".swipe-out-u", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: "expo.out",
  });
}
