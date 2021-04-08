import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const sloganAnimation = (ref) => {
  const timeline = gsap.timeline({
    delay:.5,
    scrollTrigger:{
      trigger: "div.slogan",
      end: "top center",
      toggleActions: "play reset play none"
    }
  });
  ref.forEach(ele=>{
    timeline
    .fromTo(ele,
      {x:-100,opacity:0},
      {x:0,opacity:1,duration:1},
      "<.3");
  })
}

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