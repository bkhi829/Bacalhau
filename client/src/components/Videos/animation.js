import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollAnimation = async (ref,pos) => {
  await gsap.to(ref.current,{scrollTo:{x:pos}});
}

export const btnAnimation = (ref,show)=> {
  const tl = gsap.timeline();
  if(show){
    tl.to(ref.current,{visibility:'visible',duration:0})
    .to(ref.current,{opacity:1,duration:.5});
  } else {
    tl.to(ref.current,{opacity:0,duration:.5})
    .to(ref.current,{visibility:'hidden',duration:0},"<.5");
  }
}