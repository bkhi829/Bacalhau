import { gsap } from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const infoOutAnimation = ()=> {
    gsap.to('.InfoContainer',{opacity:0,display:'none',duration:0});
}

export const tabContainerInAnimation = (ref) => {
  infoOutAnimation();
  return new Promise(resolve=>resolve(gsap.fromTo(ref.current,{opacity:0},{opacity:1,duration:.3})));
}

export const tabContainerOutAnimation = (ref) => {
  infoOutAnimation();
  return new Promise(resolve=>resolve(gsap.fromTo(ref.current,{opacity:1},{opacity:0,duration:.3})));
}

export const infoAnimation = (ref) => {
  const timeline = gsap.timeline();
  timeline.to(ref.current,{display:'block',duration:0})
          .to(window,{duration: 1,scrollTo:ref.current})
          .fromTo(ref.current,{opacity:0},{opacity:1,duration:.8},"<.5");
  
}