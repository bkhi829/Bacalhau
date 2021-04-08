import { gsap } from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const tabContainerAnimation = (ref) => gsap.fromTo(ref.current,{opacity:0},{opacity:1,duration:.8,delay:.2});

export const infoAnimation = (ref) => {
  const timeline = gsap.timeline();
  timeline.to(ref.current,{display:'block',duration:0})
          .to(window,{duration: 1,scrollTo:ref.current})
          .fromTo(ref.current,{opacity:0},{opacity:1,duration:.8},"<.5");
  
}