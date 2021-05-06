import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const likeCountAnimation = (ref) => {
  gsap.fromTo(
    ref,
    {opacity:0},
    {opacity:1,
      duration:.8,
      delay:.2,
      scrollTrigger:{
        trigger:ref,
        toggleActions: "play none none reset"
      }
    });
}